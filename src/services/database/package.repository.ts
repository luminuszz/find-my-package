import { Entity, Keys, resolveInstance } from './utils';
import { Connection } from './index';

export type CreatePackageDTO = {
  name: string;
  code: string;
  departureData: String;
  status: string;
};

export type Package = {
  id: string;
  name: string;
  code: string;
  departureData: Date;
  status: string;
};

@Entity(Keys.packages)
export class PackageRepository extends Connection<Package, CreatePackageDTO> {
  async getPackages() {
    return this.get();
  }

  async savePackage(data: CreatePackageDTO) {
    console.log('dsa', this.entityName);

    const newPackage: CreatePackageDTO = {
      name: data.name,
      status: data.status,
      departureData: data.departureData,
      code: data.code,
    };

    const packages = await this.getPackages();

    return this.save(newPackage);
  }
}

export const packageRepository =
  resolveInstance<PackageRepository>(PackageRepository);
