import { Orders } from "src/orders/orders.entity";
import { Role } from "./user.roles";
export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: number;
    country: string;
    address: string;
    city: string;
    status: boolean;
    rol: Role[];
    orders: Orders[];
}
