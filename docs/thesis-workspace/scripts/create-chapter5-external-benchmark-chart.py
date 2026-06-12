from __future__ import annotations

import csv
from pathlib import Path

import matplotlib.pyplot as plt


ROOT = Path(__file__).resolve().parents[3]
FIGURES_DIR = ROOT / "docs" / "thesis-workspace" / "assets" / "figures"
TABLES_DIR = ROOT / "docs" / "thesis-workspace" / "assets" / "tables" / "chapter-5-external-benchmarks"


MON_PANCZYK_DATA = {
    "Execution time (s)": {
        "Playwright": [2.51, 1.84, 10.75, 12.69, 10.23, 2.04, 6.23, 10.39, 3.76, 2.20],
        "Cypress": [3.49, 1.98, 9.66, 11.97, 10.24, 2.76, 6.13, 12.12, 3.90, 2.55],
        "Selenium": [2.76, 2.28, 9.41, 11.56, 9.73, 2.57, 5.04, 10.45, 4.09, 3.15],
    },
    "CPU usage (%)": {
        "Playwright": [15.66, 14.71, 14.38, 13.37, 18.39, 15.65, 23.11, 20.89, 20.66, 18.91],
        "Cypress": [18.92, 19.71, 15.32, 17.48, 16.33, 19.98, 26.95, 21.73, 26.16, 23.77],
        "Selenium": [22.59, 24.42, 15.43, 14.71, 14.01, 22.57, 21.86, 22.35, 17.49, 24.36],
    },
    "RAM usage (%)": {
        "Playwright": [28.88, 28.93, 28.57, 29.17, 29.62, 29.58, 28.55, 28.31, 28.16, 27.97],
        "Cypress": [33.01, 33.12, 33.19, 33.27, 33.41, 33.13, 33.76, 34.88, 33.91, 33.37],
        "Selenium": [26.55, 26.66, 27.27, 27.39, 27.36, 26.92, 29.71, 29.81, 29.72, 29.38],
    },
}

ALMABRUK_RELIABILITY_DATA = {
    "uptime": {
        "Selenium": 100.00,
        "Playwright": 99.72,
    },
    "rocof_hp": {
        "Selenium": 0.1208,
        "Playwright": 0.0272,
    },
    "rocof_dell": {
        "Selenium": 0.1336,
        "Playwright": 0.0279,
    },
}


COLORS = {
    "Playwright": "#2563EB",
    "Cypress": "#F97316",
    "Selenium": "#16A34A",
}


def mean(values: list[float]) -> float:
    return sum(values) / len(values)


def write_summary_csv(summary: dict[str, dict[str, float]]) -> None:
    TABLES_DIR.mkdir(parents=True, exist_ok=True)
    output = TABLES_DIR / "mon-panczyk-2025-summary-means.csv"
    with output.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.writer(handle)
        writer.writerow(["Metric", "Playwright", "Cypress", "Selenium", "Source"])
        for metric, values in summary.items():
            writer.writerow(
                [
                    metric,
                    f"{values['Playwright']:.2f}",
                    f"{values['Cypress']:.2f}",
                    f"{values['Selenium']:.2f}",
                    "Mon and Panczyk (2025), Tables 3-5",
                ]
            )


def write_reliability_csv() -> None:
    TABLES_DIR.mkdir(parents=True, exist_ok=True)
    output = TABLES_DIR / "almabruk-2025-reliability-summary.csv"
    with output.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.writer(handle)
        writer.writerow(["Metric", "Selenium", "Playwright", "Source", "Boundary"])
        writer.writerow(
            [
                "Website uptime (%)",
                f"{ALMABRUK_RELIABILITY_DATA['uptime']['Selenium']:.2f}",
                f"{ALMABRUK_RELIABILITY_DATA['uptime']['Playwright']:.2f}",
                "Almabruk et al. (2025), Table 1",
                "Original 24-hour uptime test used different hardware assignments.",
            ]
        )
        writer.writerow(
            [
                "ROCOF on HP / HDD (failures per second)",
                f"{ALMABRUK_RELIABILITY_DATA['rocof_hp']['Selenium']:.4f}",
                f"{ALMABRUK_RELIABILITY_DATA['rocof_hp']['Playwright']:.4f}",
                "Almabruk et al. (2025), Table 6",
                "Lower is better; both tools had one failure per 10-test sequence.",
            ]
        )
        writer.writerow(
            [
                "ROCOF on Dell / SSD (failures per second)",
                f"{ALMABRUK_RELIABILITY_DATA['rocof_dell']['Selenium']:.4f}",
                f"{ALMABRUK_RELIABILITY_DATA['rocof_dell']['Playwright']:.4f}",
                "Almabruk et al. (2025), Table 6",
                "Lower is better; both tools had one failure per 10-test sequence.",
            ]
        )


def render_chart(summary: dict[str, dict[str, float]]) -> None:
    FIGURES_DIR.mkdir(parents=True, exist_ok=True)
    output = FIGURES_DIR / "external-tool-benchmark-summary-mon-panczyk-2025.png"

    metrics = list(summary.keys())
    tools = ["Playwright", "Cypress", "Selenium"]

    fig, axes = plt.subplots(1, 3, figsize=(13, 4.8), constrained_layout=True)
    fig.patch.set_facecolor("white")

    for axis, metric in zip(axes, metrics):
        values = [summary[metric][tool] for tool in tools]
        bars = axis.bar(tools, values, color=[COLORS[tool] for tool in tools], width=0.62)
        axis.set_title(metric, fontsize=12, pad=10)
        axis.grid(axis="y", color="#E5E7EB", linewidth=0.8)
        axis.set_axisbelow(True)
        axis.spines["top"].set_visible(False)
        axis.spines["right"].set_visible(False)
        axis.spines["left"].set_color("#CBD5E1")
        axis.spines["bottom"].set_color("#CBD5E1")
        axis.tick_params(axis="x", labelrotation=22)
        axis.tick_params(axis="both", labelsize=10)
        ymax = max(values) * 1.18
        axis.set_ylim(0, ymax)
        for bar, value in zip(bars, values):
            axis.text(
                bar.get_x() + bar.get_width() / 2,
                bar.get_height() + ymax * 0.025,
                f"{value:.2f}",
                ha="center",
                va="bottom",
                fontsize=9,
                color="#111827",
            )

    fig.suptitle(
        "External Benchmark Mean Results Across Ten Test Cases",
        fontsize=14,
        fontweight="bold",
        y=1.05,
    )
    fig.text(
        0.5,
        -0.02,
        "Source: Adapted from Moń and Pańczyk (2025), Tables 3–5. Lower values are better for all three metrics.",
        ha="center",
        fontsize=9,
        color="#374151",
        style="italic",
    )
    fig.savefig(output, dpi=220, bbox_inches="tight")
    print(output.relative_to(ROOT))


def render_reliability_chart() -> None:
    FIGURES_DIR.mkdir(parents=True, exist_ok=True)
    output = FIGURES_DIR / "external-reliability-benchmark-almabruk-2025.png"

    tools = ["Selenium", "Playwright"]
    fig, axes = plt.subplots(1, 2, figsize=(10.5, 4.8), constrained_layout=True)
    fig.patch.set_facecolor("white")

    uptime_values = [ALMABRUK_RELIABILITY_DATA["uptime"][tool] for tool in tools]
    axes[0].bar(tools, uptime_values, color=[COLORS[tool] for tool in tools], width=0.58)
    axes[0].set_title("24-hour website uptime (%)", fontsize=12, pad=10)
    axes[0].set_ylim(99.4, 100.08)
    axes[0].grid(axis="y", color="#E5E7EB", linewidth=0.8)
    axes[0].set_axisbelow(True)
    for i, value in enumerate(uptime_values):
        axes[0].text(i, value + 0.015, f"{value:.2f}", ha="center", va="bottom", fontsize=9)

    rocof_labels = ["HP / HDD", "Dell / SSD"]
    x_positions = range(len(rocof_labels))
    width = 0.34
    selenium_values = [
        ALMABRUK_RELIABILITY_DATA["rocof_hp"]["Selenium"],
        ALMABRUK_RELIABILITY_DATA["rocof_dell"]["Selenium"],
    ]
    playwright_values = [
        ALMABRUK_RELIABILITY_DATA["rocof_hp"]["Playwright"],
        ALMABRUK_RELIABILITY_DATA["rocof_dell"]["Playwright"],
    ]
    axes[1].bar([x - width / 2 for x in x_positions], selenium_values, width, label="Selenium", color=COLORS["Selenium"])
    axes[1].bar([x + width / 2 for x in x_positions], playwright_values, width, label="Playwright", color=COLORS["Playwright"])
    axes[1].set_title("ROCOF by hardware context", fontsize=12, pad=10)
    axes[1].set_xticks(list(x_positions), rocof_labels)
    axes[1].set_ylabel("Failures per second")
    axes[1].grid(axis="y", color="#E5E7EB", linewidth=0.8)
    axes[1].set_axisbelow(True)
    axes[1].legend(frameon=False, fontsize=9)
    ymax = max(selenium_values + playwright_values) * 1.22
    axes[1].set_ylim(0, ymax)
    for i, value in enumerate(selenium_values):
        axes[1].text(i - width / 2, value + ymax * 0.025, f"{value:.4f}", ha="center", va="bottom", fontsize=8)
    for i, value in enumerate(playwright_values):
        axes[1].text(i + width / 2, value + ymax * 0.025, f"{value:.4f}", ha="center", va="bottom", fontsize=8)

    for axis in axes:
        axis.spines["top"].set_visible(False)
        axis.spines["right"].set_visible(False)
        axis.spines["left"].set_color("#CBD5E1")
        axis.spines["bottom"].set_color("#CBD5E1")
        axis.tick_params(axis="both", labelsize=10)

    fig.suptitle("External Reliability Benchmark Context", fontsize=14, fontweight="bold", y=1.05)
    fig.text(
        0.5,
        -0.02,
        "Source: Adapted from Almabruk et al. (2025), Tables 1 and 6. Hardware assignments differ between tools; ROCOF lower is better.",
        ha="center",
        fontsize=9,
        color="#374151",
        style="italic",
    )
    fig.savefig(output, dpi=220, bbox_inches="tight")
    print(output.relative_to(ROOT))


def main() -> None:
    summary = {
        metric: {tool: mean(values) for tool, values in tool_values.items()}
        for metric, tool_values in MON_PANCZYK_DATA.items()
    }
    write_summary_csv(summary)
    write_reliability_csv()
    render_chart(summary)
    render_reliability_chart()


if __name__ == "__main__":
    main()
