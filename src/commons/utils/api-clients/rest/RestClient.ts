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

export type RestCommandType = <TRequest, TResponse>(props: CommandProps, request?: TRequest) => Promise<TResponse>;
export type RestGetType = <T>(url: string, requestParameters?: RequestParameters) => Promise<T>;
export type RestCreateType = <TRequest, TResponse>(url: string, request?: TRequest, headers?: Record<string, string>) => Promise<TResponse>;

export interface RestClient {
    command: RestCommandType;
    get: RestGetType
    create: RestCreateType;

    // update<TRequest, TResponse>(url: string, request: TRequest): Promise<TResponse>;

    // updatePartially<TRequest, TResponse>(url: string, request: TRequest): Promise<TResponse>;

    // delete(url: string): Promise<void>;
}