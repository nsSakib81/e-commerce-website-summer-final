import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
//import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { productEntity } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(productEntity)
    private readonly productRepository: Repository<productEntity>,
  ) {}

  
  async createProduct(createProductDto: CreateProductDto): Promise<productEntity> {
    const product = new productEntity();
    product.productName = createProductDto.productName;
    product.productId = createProductDto.productId;
    product.prize = createProductDto.prize;
    return await this.productRepository.save(product);
  }
  
/*
  async createProduct(createProductDto: CreateProductDto) {
    const product = new productEntity();
    let products=this.productRepository.create(createProductDto)
    products= await this.productRepository.save(products)
    return products
  }
*/
  async findAllProducts(): Promise<productEntity[]> {
    return await this.productRepository.find();
  }

  
}
