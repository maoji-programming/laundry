const config = {
    url: '/users?page=1',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    baseURL: "https://reqres.in/api",

    timeout: 10000,

    responseType: 'json',
    responseEncoding: 'utf8',
}

export default config;