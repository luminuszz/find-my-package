import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { SetConnection } from './utils';

@SetConnection(AsyncStorage)
export class Connection<T = any, Insert = any> {
  constructor(
    protected readonly connection: typeof AsyncStorage,
    protected readonly entityName: string,
  ) {}

  protected async save(data: Insert): Promise<T> {
    const parseData = { id: uuid.v4(), ...data };

    const otherData = await this.get();

    const encode = JSON.stringify([...otherData, parseData]);

    await this.connection.setItem(this.entityName, encode);

    return parseData as unknown as T;
  }

  protected async get(): Promise<T[]> {
    const data = await this.connection.getItem(this.entityName);

    return JSON.parse(data);
  }
}
