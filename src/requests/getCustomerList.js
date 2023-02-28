const config = {
    url: '/users',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    baseURL: "https://api.github.com",

    timeout: 10000,

    responseType: 'json',
    responseEncoding: 'utf8',
}

export default config;