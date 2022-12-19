import type { ResponseHeaders } from '@sveltejs/kit/types/';

export interface IResponseEndpointOutput<T> {
	status?: number;
	headers?: ResponseHeaders;
	body?: T;
}
