import Service from "./Service";

import axios from 'axios';

const config = { withCredentials: false };
const http = axios.create(config);

class Model extends Service {
    baseUrl() {
        return process.env.VUE_APP_API_URL;
    }

    makeRequest({ method, url, data, headers, query }) {
        return http({
            method,
            url,
            data,
            headers,
            params: query
        });
    }

    beforeRequest(request) {
        request.headers = {
            ...request.headers,
        };
        return request;
    }


    afterRequest({ data }) {
        return data;
    }

    failedRequest(error) {
        const { status } = error.response;

        // Error 401: Unauthorized
        if (status === 401) {
            console.log('#Error 401: Unauthorized');
        }

        // Error 403: Forbidden
        if (status === 403) {
            console.log('#Error 403: Forbidden');
        }

        // Error 404: Not found
        if (status === 404) {
            console.log('#Error 404: Not found');
        }

        // Error 419: Token mismatch
        if (status === 419) {
            console.log('#Error 419: Authentication Timeout');
        }

        // Error 422: Unprocessable entity
        if (status === 422) {
            console.log('#Error 419: Unprocessable entity');
        }

        // Error 500: Server error
        if (status >= 500) {
            console.log('#Error 500: Server error');
        }

        return Promise.reject(error);
    }
}

export default Model;