const config = {
    url: 'getReceiptList',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    baseURL: "https://finalspaceapi.com/api/v0/character/?limit=2",

    timeout: 10000,

    responseType: 'json',
    responseEncoding: 'utf8',
}

export default config;