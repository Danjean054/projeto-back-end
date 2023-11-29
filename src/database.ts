import { TProdutc, TUser } from "./types";

export const users: TUser[] = [{
    id: "u001",
    name: "Fulano",
    email: "fulano@email.com",
    password: "fulano123",
    createdAt: new Date().toISOString(),
},
{
    id: "u002",
    name: "Daniel",
    email: "Daniel@email.com",
    password: "Daniel123",
    createdAt: new Date().toISOString(),
}
]


export const products: TProdutc[] = [{
    id: "prod001",
    name: "Mouse gamer",
    price: 250,
    description: "Melhor mouse do mercado!",
    imageUrl: "https://picsum.photos/seed/Mouse%20gamer/400"
},
{
    id: "prod001",
    name: "Mouse gamer",
    price: 250,
    description: "Melhor mouse do mercado!",
    imageUrl: "https://picsum.photos/seed/Mouse%20gamer/400"
}

]


