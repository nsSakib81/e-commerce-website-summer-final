import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Roles } from "src/utility/common/user-roles.enum";


@Entity({name:'products'})
export class productEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productName: string;
    @Column({unique:true})
    productId: string;
    @Column()
    prize: string;

    @Column({type:'enum',enum:Roles,array:true,default:[Roles.USER]})
    roles:Roles[]
    
}
