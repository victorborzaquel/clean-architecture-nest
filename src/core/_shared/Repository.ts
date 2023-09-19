export interface Repository<T> {
  save(entity: T): Promise<void>;
  find(id: string): Promise<T>;
  findAll(): Promise<T[]>;
  remove(id: string): Promise<void>;
}
