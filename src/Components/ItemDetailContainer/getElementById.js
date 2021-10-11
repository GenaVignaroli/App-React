import { productosDelServer } from "./ItemDetailContainer"

export const getElementById = (id) => productosDelServer.find(el => el.id === id);