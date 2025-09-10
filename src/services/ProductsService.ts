import { BaseService } from './BaseService';

export class ProductsService extends BaseService {
  constructor() {
    super(import.meta.env.VITE_API_URL);
  }

  async getProducts(params: Record<string, string>) {
    return this.get('/guest/products', params);
  }

  async getProductById(id: string) {
    return this.get(`/guest/products/${id}`);
  }

  async getProductContent(id: string) {
    return this.get(`/photos/${id}`);
  }
}

export const productsService = new ProductsService();
