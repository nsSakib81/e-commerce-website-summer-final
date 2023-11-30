import { IsNotEmpty } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    productName: string;

    @IsNotEmpty()
    productId: string;

    @IsNotEmpty()
    prize: string;
}
