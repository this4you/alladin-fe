export declare type RequestParameters = Record<string, string | number | boolean | undefined | null | Array<string | number>>;

export interface CommandProps {
    url: string;
    method: HttpMethod;
}

export enum HttpMethod {
    GET = 'GET',
    PATCH = 'PATCH',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

export interface RestClient {
    command<TRequest, TResponse>(props: CommandProps, request?: TRequest): Promise<TResponse>;
    // get<T>(url: string, requestParameters?: RequestParameters): Promise<T>;

    // create<TRequest, TResponse>(url: string, request?: TRequest, headers?: Record<string, string>): Promise<TResponse>;

    // update<TRequest, TResponse>(url: string, request: TRequest): Promise<TResponse>;

    // updatePartially<TRequest, TResponse>(url: string, request: TRequest): Promise<TResponse>;

    // delete(url: string): Promise<void>;
}