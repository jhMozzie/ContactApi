import { User } from "@models/User";
import { IUserRepository, IUserService} from "types/UsersTypes";

export class UserService implements IUserService {
    constructor(private repository: IUserRepository){}
    async createUser(user: User): Promise<User> {
        return this.repository.create(user)
    }
    async findUsers(): Promise<User[]> {
        return this.repository.find()
    }
    async findUserById(id: number): Promise<User | null> {
        return this.repository.findById(id)
    }
    async updateUser(id: number, data: Partial<User>): Promise<User> {
        return this.repository.update(id, data)
    }
    async deleteUser(id: number): Promise<void> {
        return this.repository.delete(id)
    }
   
}