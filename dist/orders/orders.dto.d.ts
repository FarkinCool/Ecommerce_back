import { Products } from "src/products/products.entity";
export declare class CreateOrderDto {
    userId: string;
    products: Partial<Products[]>;
    status: boolean;
}
