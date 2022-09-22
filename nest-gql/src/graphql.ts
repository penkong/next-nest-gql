
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateUserInput {
    email: string;
    password: string;
}

export class Auth {
    __typename?: 'Auth';
    id: string;
    email: string;
}

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract auth(id: string): Nullable<Auth> | Promise<Nullable<Auth>>;

    abstract users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;

    abstract createUser(createUserInput?: Nullable<CreateUserInput>): Nullable<User> | Promise<Nullable<User>>;

    abstract hello(): Nullable<string> | Promise<Nullable<string>>;
}

export class User {
    __typename?: 'User';
    user_id?: Nullable<string>;
    email: string;
    hashed_pass: string;
    created_at: string;
    updated_at?: Nullable<string>;
    deleted_at?: Nullable<string>;
    rv?: Nullable<number>;
}

type Nullable<T> = T | null;
