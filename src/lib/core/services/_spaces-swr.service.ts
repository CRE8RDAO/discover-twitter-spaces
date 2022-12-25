import type { TwitterSpace } from '$models/classes/twitter-space.class';
import { APP_STORE, errorState, loadingState, upateSpaces } from '$stores/app-store';
import { api } from './_api.service';

export const spacesSWR = (url: string) => {
	loadingState();

	api<TwitterSpace[]>(url)
		.then((response) => {
			if (
				response.status &&
				response.status >= 200 &&
				response.status < 300 &&
				response.body &&
				response.body?.length > 0
			) {
				upateSpaces(response.body);
			} else if (response.status && response.status === 404) {
				errorState(new Error(`${url} returned empty response`));
			} else if (response.status && response.status >= 400) {
				errorState(new Error(`${url} returned status ${response.status}`));
			}
		})
		.catch((error: Error) => {
			errorState(error);
		});

	// list http response status codes and their meanings
	// 400 Bad Request
	// 401 Unauthorized
	// 402 Payment Required
	// 403 Forbidden
	// 404 Not Found
	// 405 Method Not Allowed
	// 406 Not Acceptable
	// 407 Proxy Authentication Required
	// 408 Request Timeout
	// 409 Conflict
	// 410 Gone
	// 411 Length Required
	// 412 Precondition Failed
	// 413 Request Entity Too Large
	// 414 Request-URI Too Long
	// 415 Unsupported Media Type
	// 416 Requested Range Not Satisfiable
	// 417 Expectation Failed
	// 418 I'm a teapot
	// 420 Enhance Your Calm
	// 422 Unprocessable Entity
	// 423 Locked
	// 424 Failed Dependency
	// 425 Unordered Collection
	// 426 Upgrade Required
	// 428 Precondition Required
	// 429 Too Many Requests
	// 431 Request Header Fields Too Large
	// 444 No Response
	// 449 Retry With
	// 450 Blocked by Windows Parental Controls
	// 451 Unavailable For Legal Reasons
	// 494 Request Header Too Large
	// 495 Cert Error
	// 496 No Cert
	// 497 HTTP to HTTPS
	// 499 Client Closed Request
	// 500 Internal Server Error

	return APP_STORE;
};
