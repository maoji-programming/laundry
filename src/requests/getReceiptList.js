const config = {
    url: 'getReceiptList',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    baseURL: "https://reqres.in/api/users?page=1",

    timeout: 10000,

    responseType: 'json',
    responseEncoding: 'utf8',
}

export default config;