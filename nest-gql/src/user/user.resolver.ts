import { Query, Resolver } from "@nestjs/graphql";
import { User, CreateUserInput } from '../graphql';

@Resolver()
export class UserResolver {

    @Query(returns => String)
    async hello() {
        return "Hello, World"
    }

    @Query(returns => User)
    async createUser() {
        return 
    }
}