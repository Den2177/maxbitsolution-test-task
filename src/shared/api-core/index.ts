import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

export class ApiCore {
  api: AxiosInstance;

  constructor(apiInstance: AxiosInstance) {
    this.api = apiInstance;
  }

  /**
   * @param gate
   * @param params
   * @param config
   */
  async get<TParams, TReturnData>(gate: string, params: TParams = {} as TParams, config?: AxiosRequestConfig): Promise<AxiosResponse<TReturnData>> {
    return await this.api.get(gate, { params, ...config });
  }

  /**
     * @param gate
     * @param data
     * @param config
     */
  async post<TData, TReturnData>(gate: string, data?: TData, config?: AxiosRequestConfig): Promise<TReturnData> {
    return await this.api.post(gate, data, config);
  }

  /**
     * @param gate
     * @param data
     */
  async put<TData, TReturnData>(gate: string, data: TData): Promise<TReturnData> {
    return this.api.put(gate, data);
  }

  /**
     * @param gate
     * @param data
     */
  async patch<TData, TReturnData>(gate: string, data: TData): Promise<TReturnData> {
    return await this.api.patch(gate, data);
  }

  /**
     * @param gate
     * @param params
     */
  async delete<TParams, TReturnData>(gate: string, params: TParams): Promise<TReturnData> {
    return await this.api.delete(gate, { params });
  }
}