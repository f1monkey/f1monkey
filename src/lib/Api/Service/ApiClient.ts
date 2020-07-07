import ApiClientInterface from '@/lib/Api/Service/ApiClientInterface';
import axios from 'axios';
import { injectable } from 'tsyringe';

const API_URL = process.env.VUE_APP_API_BASE_URL;

@injectable()
class ApiClient implements ApiClientInterface {
  async get<T>(url: string, params?: object): Promise<T> {
    const result = await axios.get<T>(API_URL + url, { params });

    return result.data;
  }

  async post<T>(url: string, data?: object): Promise<T> {
    const result = await axios.post(API_URL + url, data);

    return result.data;
  }

  async put<T>(url: string, data?: object): Promise<T> {
    const result = await axios.put(API_URL + url, data);

    return result.data;
  }

  async delete<T>(url: string, data?: object): Promise<T> {
    const result = await axios.delete(API_URL + url, data);

    return result.data;
  }
}

export default ApiClient;
