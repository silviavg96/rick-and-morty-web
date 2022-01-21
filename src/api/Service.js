import { URLJoin, flatten } from './utils';

class Service {
    /**
     * URLS
     */

    baseUrl () {
        return '/api';
    }

    buildUrl (request) {
        return '';
    }

    /**
     * Request
     */

    async request(request) {
        request = Object.assign({}, defaultRequest, request);
        request.url = URLJoin(flatten([this.baseUrl(), this.attachedUrls, request.url || this.buildUrl(request)]));
        request = this.beforeRequest(request);

        try {
            let response = await this.makeRequest(request);
            return this.afterRequest(response, request);
        } catch (error) {
            return this.failedRequest(error, request);
        }
    }

    makeRequest() {
        throw new Error('Please override the `makeRequest` method and choose your http dependency.')
    }

    /**
     * Request Hooks
     */

    beforeRequest(request) {
        return request;
    }

    afterRequest(response) {
        return response;
    }

    failedRequest(error) {
        throw error;
    }

    /**
     * Request Shortcuts
     */

    all(config = {}) {
        return this.request({ method: 'GET', action: 'all', ...config });
    }

    paginate(config = {}) {
        return this.request({ method: 'GET', action: 'paginate', ...config });
    }

    find(param, config = {}) {
        return this.request({ method: 'GET', action: 'find', param, ...config });
    }

    create(attributes, config = {}) {
        return this.request({ method: 'POST', action: 'create', data: attributes, ...config });
    }

    update(attributes, config = {}) {
        return this.request({ method: 'PATCH', action: 'update', param: this.primaryKey(attributes), data: attributes, ...config });
    }

    delete(attributes, config = {}) {
        return this.request({ method: 'DELETE', action: 'delete', param: this.primaryKey(attributes), ...config })
    }

    /**
     * Utils
     */

    primaryKey(attributes) {
        return attributes.id;
    }

    from(model, param) {
        this.attachedUrls = model.buildUrl({ param });
        return this;
    }
}

const defaultRequest = {
    action: 'custom',
    isStatic: false,
    method: 'GET',
    data: null,
    params: [],
};

export default Service;