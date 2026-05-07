import { APIResponse } from 'playwright';
import { BrowserManagement } from '../browser/browser-management';
import { expect } from 'playwright/test';
import Ajv from 'ajv';

interface ApiOptions {
  params?: Record<string, string | number | boolean>; 
  headers?: Record<string, string>; 
  data?: Record<string, any> | string; 
}

export class APIUtils {
  static async get(url: string, option?: ApiOptions): Promise<APIResponse> {
    const query = new URLSearchParams(option?.params as Record<string, string>).toString();
    const fullUrl = query ? `${url}?${query}` : url;

    return await BrowserManagement.getRequest().get(fullUrl, { headers: option?.headers });
  }

  static async post(url: string, option?: ApiOptions): Promise<APIResponse> {
    const query = new URLSearchParams(option?.params as Record<string, string>).toString();
    const fullUrl = query ? `${url}?${query}` : url;

    return await BrowserManagement.getRequest().post(fullUrl, { headers: option?.headers, data: option?.data });
  }

  static async delete(url: string, option?: ApiOptions): Promise<APIResponse> {
    const query = new URLSearchParams(option?.params as Record<string, string>).toString();
    const fullUrl = query ? `${url}?${query}` : url;

    return await BrowserManagement.getRequest().delete(fullUrl, { headers: option?.headers, data: option?.data });
  }

  static async put(url: string, option?: ApiOptions): Promise<APIResponse> {
    const query = new URLSearchParams(option?.params as Record<string, string>).toString();
    const fullUrl = query ? `${url}?${query}` : url;

    return await BrowserManagement.getRequest().put(fullUrl, { headers: option?.headers, data: option?.data });
  }

  static verifySecurityHeaders(headers: Record<string, string>) {
    expect('content-security-policy' in headers).toBeTruthy();
    expect('x-frame-options' in headers).toBeTruthy();
    expect('x-content-type-options' in headers).toBeTruthy();
    expect('strict-transport-security' in headers).toBeTruthy();
  }

  static verifyJsonSchema(jsonSchema: any, jsonObject: Record<string, any>) {
    const ajv = new Ajv();
    const validate = ajv.compile(jsonSchema);
    expect(validate(jsonObject)).toBeTruthy();
  }
}
