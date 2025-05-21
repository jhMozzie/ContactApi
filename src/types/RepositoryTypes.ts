export interface Repository<T = unknown>{
    create(data: T): Promise<T>;
    find(): Promise<T[]>;
    findById(id: number): Promise<T | null>;
    update(id: number, data: Partial<T>): Promise<T>; // Update only some campos
    delete(id: number): Promise<void>; // Delete by ID
}