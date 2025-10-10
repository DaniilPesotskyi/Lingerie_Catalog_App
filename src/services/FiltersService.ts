import { BaseService } from './BaseService';
import type { IFilters } from '@/types/filters';

export class FiltersService extends BaseService {
  constructor() {
    super(import.meta.env.VITE_API_URL);
  }

  async getFilters(params?: string): Promise<IFilters> {
    return this.get<IFilters>('/filters', params);
  }
}

export const filtersService = new FiltersService();
