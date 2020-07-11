import axios, { AxiosRequestConfig } from 'axios';
import { injectable } from 'inversify';

const API_URL = process.env.VUE_APP_API_BASE_URL;

@injectable()
abstract class AbstractApiClient {
  async sendGet<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const result = await axios.get<T>(API_URL + url, config);

    return result.data;
  }

  async sendPost<T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    const result = await axios.post(API_URL + url, data, config);

    return result.data;
  }

  async sendPut<T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    const result = await axios.put(API_URL + url, data, config);

    return result.data;
  }

  async sendDelete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const result = await axios.delete(API_URL + url, config);

    return result.data;
  }
}

export default AbstractApiClient;
