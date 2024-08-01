import { Role } from "./user.roles";
export declare class CreateUserDto {
    name: string;
    email: string;
    password: string;
    confirmpassword: string;
    address: string;
    phone: number;
    country: string;
    city: string;
    status: boolean;
    rol: Role[];
}
