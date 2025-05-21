import { AppDataSource } from "@config/database";
import { User } from "@models/User";
import { Repository } from "typeorm";
import { IUserRepository } from "types/UsersTypes";

export class UserRepository implements IUserRepository{
    private repository: Repository<User> = AppDataSource.getRepository(User)
    async create(data: User): Promise<User> {
        const user = this.repository.create(data)
        return this.repository.save(user)
    }
    async find(): Promise<User[]> {
        return this.repository.find()
    }
    async findById(id: number): Promise<User | null> {
       return this.repository.findOneBy({id})
    }
    async update(id: number, data: Partial<User>): Promise<User> {
        await this.repository.update(id, data)
        const updated = await this.repository.findOneBy({id})
        if (!updated) throw new Error("User not found")
        return updated
    }
    async delete(id: number): Promise<void> {
        await this.repository.delete(id)
    }
   
}