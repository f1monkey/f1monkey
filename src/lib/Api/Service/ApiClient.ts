import axios from 'axios';
// import store from '@/store';

const API_URL = process.env.VUE_APP_API_BASE_URL;

export async function getRequest<T>(url: string, params?: any): Promise<T> {
  // try {
  const result = await axios.get<T>(API_URL + url, { params });

  return result.data;
  // } catch (e) {
  // store.dispatch('error', { message: e.message });
  // throw e;
  // }
}

export async function postRequest<T>(url: string, data?: object): Promise<T> {
  // try {
  const result = await axios.post(API_URL + url, data);
  return result.data;
  // } catch (e) {
  // store.dispatch('error', { message: e.message });
  // throw e;
  // }
}

export async function deleteRequest<T>(url: string, data: any): Promise<T> {
  // try {
  const result = await axios.delete(API_URL + url, data);
  return result.data;
  // } catch (e) {
  // store.dispatch('error', { message: e.message });
  // throw e;
  // }
}
