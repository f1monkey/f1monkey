interface ApiClientInterface {
  get<T>(url: string, params?: object): Promise<T>;

  post<T>(url: string, data?: object): Promise<T>;

  put<T>(url: string, data?: object): Promise<T>;

  delete<T>(url: string): Promise<T>;
}

export default ApiClientInterface;
