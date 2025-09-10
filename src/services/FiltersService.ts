import { BaseService } from './BaseService';

export class FiltersService extends BaseService {
  constructor() {
    super(import.meta.env.VITE_API_URL);
  }

  async getFilters(params?: Record<string, string>) {
    return this.get('/filters', params);
  }
}

export const filtersService = new FiltersService();
