import type { RestConfig } from "../@types/config";

const defaultConfig = {
    url: '',
    params: {
        method: 'GET'
    }
};

class Rest {
    constructor(private config: RestConfig) {}

    async fetcher () {
        try {
            const response = await fetch(this.config.url, this.config.params);
            return await response.json();
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }

    getConfig () {
        return this.config;
    }

    setUrl (url: string) {
        this.config.url = url;
    }

    getUrl () {
        return this.config.url;
    }

    setParam (param: string) {
        //
    }

    getData () {
        return this.fetcher();
    }
}

export const rest = new Rest(defaultConfig);
