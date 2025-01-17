import { SetMetadata } from "@nestjs/common";
import { Role } from "src/users/user.roles";


export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);