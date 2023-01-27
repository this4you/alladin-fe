import { CommandProps, HttpMethod, RequestParameters, RestClient } from './RestClient';
import axios from 'axios';
import { MobXAuthState } from 'commons/state/MobXAuthState';

export class AxiosRestClient implements RestClient {
    constructor(
        private authState: MobXAuthState
    ) {
    }

    command<TRequest, TResponse>(props: CommandProps, request?: TRequest): Promise<TResponse> {
        return this.getAxios().request<TRequest, TResponse>({
            url: props.url,
            method: props.method,
            data: request
        });
    }

    async get<T>(url: string, requestParameters?: RequestParameters): Promise<T> {
        return await this.getAxios().get<T>(url, {
            params: requestParameters
        }) as T;
    }

    create<TRequest, TResponse>(url: string, request?: TRequest, headers?: Record<string, string>): Promise<TResponse> {
        return this.getAxios().request<TRequest, TResponse>({
            url: url,
            method: HttpMethod.POST,
            headers: headers,
            data: request
        });
    }

    delete(url: string): Promise<void> {
        return this.getAxios().delete(url);
    }

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

    private getAxios() {
        const instance = axios.create({
            baseURL: 'http://localhost:8000/' //TODO move to .env,
        });

        instance.defaults.headers.common['authorization'] = `Bearer ${this.authState.token}`;

        //TODO Move to seperated functions
        instance.interceptors.response.use((response) => {
            return response.data;
        }, (error) => {
            return Promise.reject(error.response.data);
        });

        return instance;
    }

}