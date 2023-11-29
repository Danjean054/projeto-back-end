import { users, products } from "../database"

export type TUser = {

    id: string,
    name: string,
    email: string,
    password: string,
    createdAt: string
}

export type TProdutc = {

    id: string,
    name: string,
    price: number,
    description: string,
    imageUrl: string
}

console.log(users,products);
