import { CommandProps, RestClient } from './RestClient';
import axios from 'axios';

const baseUrl = 'http://localhost:8000/'; //TODO move to .env

axios.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error.response.data);
});

export class AxiosRestClient implements RestClient {
    command<TRequest, TResponse>(props: CommandProps, request?: TRequest): Promise<TResponse> {
        return axios.request<TRequest, TResponse>({
            url: `${baseUrl}${props.url}`,
            method: props.method,
            data: request
        });
    }

    // create<TRequest, TResponse>(url: string, request?: TRequest, headers?: Record<string, string>): Promise<TResponse> {
    //     return Promise.resolve(undefined);
    // }
    //
    // delete(url: string): Promise<void> {
    //     return Promise.resolve(undefined);
    // }
    //
    // get<T>(url: string, requestParameters?: RequestParameters): Promise<T> {
    //     return Promise.resolve(undefined);
    // }
    //
    // update<TRequest, TResponse>(url: string, request: TRequest): Promise<TResponse> {
    //     return Promise.resolve(undefined);
    // }
    //
    // updatePartially<TRequest, TResponse>(url: string, request: TRequest): Promise<TResponse> {
    //     return Promise.resolve(undefined);
    // }

}