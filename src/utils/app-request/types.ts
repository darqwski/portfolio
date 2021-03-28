export interface IAppRequest<T = unknown> {
    url: string,
    data: T,
    method?: 'POST' | 'GET' | 'PUT' | 'DELETE',
    headers?: {
        [key: string]: string
    }
}
