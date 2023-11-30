import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { productEntity } from './entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('/addproduct')
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<productEntity> {

    return await this.productsService.createProduct(createProductDto);
  }

  @Get()
  async getAllProducts(): Promise<productEntity[]> {
    return await this.productsService.findAllProducts();
  }

  
}
