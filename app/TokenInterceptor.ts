import {HttpInterceptor,HttpRequest} from '@angular/common/http';
import {Observable} from  'rxjs';
export class TokenInterceptor implements HttpInterceptor {
  intercept(request:HttpRequest<any>, next:any):Observable<any>{
    request = request.clone({
      setHeaders: {
        Authorization: localStorage.TOKEN
      }
    });
  return next.handle(request);
  }
}
