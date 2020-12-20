import axios, { AxiosInstance, AxiosError } from 'axios';
import { ApiResponseError } from 'src/common/error/api-response.error';
import { Throwable } from 'src/common/error/throwable';
import { stringifyParams } from 'src/common/url/qs-helper';

const BASE_URL = process.env.REACT_APP_API_URL || '/api';

class Api {
  private readonly instance: AxiosInstance;
  private readonly commonHeaders: {
    [key in string]: string;
  };
  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.commonHeaders = { 'Content-Type': 'application/json' };
  }

  async get<Response = unknown, Params = unknown>(url: string, params?: Params): Promise<Response | Throwable> {
    const response = await this.instance
      .get<Response>(`${url}?${stringifyParams(params)}`, {
        headers: this.commonHeaders,
        data: {},
      })
      .then(({ data }) => data)
      .catch(this.handleError);
    return this.validateAndReturnResponse<Response>(response);
  }

  async post<Response = unknown, Payload = unknown>(url: string, payload: Payload): Promise<Response | Throwable> {
    const response = await this.instance
      .post(url, payload, {
        headers: this.commonHeaders,
      })
      .then(({ data }) => data)
      .catch(this.handleError);
    return this.validateAndReturnResponse<Response>(response);
  }

  async put<Response = unknown, Payload = unknown>(url: string, payload: Payload): Promise<Response | Throwable> {
    const response = await this.instance
      .put(url, payload, {
        headers: this.commonHeaders,
      })
      .then(({ data }) => data)
      .catch(this.handleError);
    return this.validateAndReturnResponse<Response>(response);
  }

  async delete<Response = unknown, Payload = unknown>(url: string, data?: Payload): Promise<Response | Throwable> {
    const response = await this.instance
      .delete(url, {
        headers: this.commonHeaders,
        data,
      })
      .then(({ data }) => data)
      .catch(this.handleError);
    return this.validateAndReturnResponse<Response>(response);
  }

  private validateAndReturnResponse<Response>(responseData: Response | void): Response | Throwable<ApiResponseError> {
    if (!responseData) {
      throw new ApiResponseError();
    } else {
      return responseData;
    }
  }

  private handleError(error: AxiosError) {
    if (error.response) {
      // return { error: error.response.data };
      throw new ApiResponseError(error.response.data.error);
    } else if (error.request) {
      // return { error: error.request.responseText };
      throw new ApiResponseError(error.request.responseText);
    } else {
      // return { error: error.message };
      throw new ApiResponseError(error.message);
    }
  }
}

export default new Api();
