export default class requestModel {
  url: string;
  method?: string;
  headers?: any;
  body?: any;

  constructor(url: string, method?: string, headers?: any, body?: any) {
    this.url = url;
    this.method = method;
    this.headers = headers;
    this.body = body;
  }
}
