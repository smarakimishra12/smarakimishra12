import { HttpClient } from '@angular/common/http';

export function extractData(res: HttpClient): any {
    const body = res;
    return body && body.get ? body.get : {};
}
export function handleError(error: any): Promise<any> {
    console.log(error);
    return Promise.reject(error);
}
