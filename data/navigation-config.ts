export interface Link {
    title: string
    href: string
}

export interface Config {
    siteName: string
    links?: Link[]
}

const defaultConfig: Config = {
    siteName: 'Atom CMS',
    links: [
        {
            title: 'Dashboard',
            href: '/'
        },
        {
            title: 'Articles',
            href: '/articles'
        }
    ]
};

class NavigationConfig {
    constructor(private config: Config) {}

    getConfig () {
        // connect DB and get link
        return this.config;
    }

    addLink () {
        // connect DB and add link
    }

    changeLink () {
        // connect DB and change link
    }

    removeLink () {
        // connect DB and remove link
    }
}

export const navigationConfig = new NavigationConfig(defaultConfig);
