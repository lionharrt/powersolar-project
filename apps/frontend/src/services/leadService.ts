import { apiClient } from './api';
import type { SolarQuoteFormData, ApiResponse, SolarLead } from '@powersolar/shared-types';

export const leadService = {
  async submitQuote(data: SolarQuoteFormData): Promise<ApiResponse<SolarLead>> {
    try {
      const response = await apiClient.post<SolarLead>('/leads', data);
      return {
        success: true,
        data: response.data,
        message: 'Quote request submitted successfully',
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to submit quote request',
      };
    }
  },

  async getCompanyInfo(): Promise<ApiResponse<any>> {
    try {
      const response = await apiClient.get('/company/info');
      return {
        success: true,
        data: response.data,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to fetch company info',
      };
    }
  },
};

