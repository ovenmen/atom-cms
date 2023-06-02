export interface Link {
    title: string
    href: string
}

export interface Config {
    siteName: string
    links?: Link[]
}

export interface RestConfig {
    url: string,
    params: {
        method: string
        body?: BodyInit | null | undefined
    }
}
