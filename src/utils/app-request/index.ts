import { ROUTER_APP_PREFIX } from '@/config/app-config';

/**
 * React Architecture
 * Every React App MUST HAVE proxy for fetching data from other sources or data
 * Just imagine situation when suddenly you need to add some custom authorization header to your app
 * This is just proposal of how this proxy should look like, for simple CRUD and some complicated request it is enough
 */

const appRequest = <T>({
	url = '/',
	data = undefined,
	method = 'GET',
	headers = {},
	...rest
}: {
	url: string,
	data?: unknown,
	method?: 'POST' | 'GET' | 'PUT' | 'DELETE',
	headers?: {
		[key: string]: string
	}
}): Promise<{ data: T, status: number }> => fetch(ROUTER_APP_PREFIX+url, {
	...rest,
	body: data && JSON.stringify(data),
	method: method,
	headers: {
		...(headers || {}),
	}
}).then( response => response.json().then(data => ({ data, status: response.status })));

export default appRequest;
