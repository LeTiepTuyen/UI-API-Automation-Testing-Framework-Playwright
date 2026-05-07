import * as fs from 'fs';
import * as path from 'path';
import { USER_INFO_DATA_PATH } from '../constants/file-paths';
import { UserData } from '../data-object/user-data';

export class JsonHelper {
  static getUserInfo<T extends UserData & { accessToken?: string }>(key: string): T {
    const userInfoPath = path.resolve(__dirname, '..', USER_INFO_DATA_PATH);
    const data = JsonHelper.readJson<Record<string, T>>(userInfoPath);
    if (!data[key]) {
      throw new Error(`User key '${key}' not found in user-info.json`);
    }
    return data[key];
  }

  static readJson<T>(filePath: string): T {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data) as T;
  }
}
