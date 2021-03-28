export interface IUseAppRequestProps {
    url: string,
    method?: 'POST' | 'GET' | 'PUT' | 'DELETE',
    data?: unknown,
    name?: string,
    deps?: unknown[]
}

export interface IUseAppRequestResponse<T = unknown> {
    refresh(): void;
    loading: boolean;
    responseCode: number;
    data: T
}
