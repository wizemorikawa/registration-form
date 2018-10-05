import { HttpParams } from '@angular/common/http';
import { HttpParamsOptions } from '@angular/common/http/src/params';


export function getRequestParams(object: any): HttpParams {
    const paramsOptions = <HttpParamsOptions>{fromObject: object};
    const params = new HttpParams(paramsOptions);
    return params;
  }
