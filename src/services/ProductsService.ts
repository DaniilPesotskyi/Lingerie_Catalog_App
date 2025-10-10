import { BaseService } from './BaseService';
import type { IProductPreview, IProductExtended, IProductContent } from '@/types/product';

export class ProductsService extends BaseService {
  constructor() {
    super(import.meta.env.VITE_API_URL);
  }

  async getProducts(params: string): Promise<IProductPreview[]> {
    return this.get<IProductPreview[]>('/guest/products', params);
  }

  async getProductById(id: string): Promise<IProductExtended> {
    return this.get<IProductExtended>(`/guest/products/${id}`);
  }

  async getProductContent(id: string): Promise<IProductContent> {
    return this.get<IProductContent>(`/photos/${id}`);
  }
}

export const productsService = new ProductsService();
