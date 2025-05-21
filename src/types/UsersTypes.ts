import { User } from "@models/User";
import { Repository } from "./RepositoryTypes";

export interface IUserRepository extends Repository<User>{}

export interface IUserService{
    createUser(user: User): Promise<User>
    findUsers(): Promise<User[]>
    findUserById(id: number): Promise<User | null>
    updateUser(id: number, data: Partial<User>): Promise<User>
    deleteUser(id: number): Promise<void>
}