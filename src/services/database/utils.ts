// eslint-disable-next-line max-classes-per-file
import AsyncStorage from '@react-native-async-storage/async-storage';

// eslint-disable-next-line no-shadow
export enum Keys {
  packages = '@findMyPackage:packages',
}

export function SetConnection(connection: typeof AsyncStorage) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      connection = connection;
    };
  };
}

export function Entity(entityName: Keys) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      entityName = entityName;
    };
  };
}

export function resolveInstance<Instance>(Class: any): Instance {
  const instance = new Class();

  return instance;
}
