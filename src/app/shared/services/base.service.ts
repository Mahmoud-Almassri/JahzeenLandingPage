import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Actions, Controllers, httpFormDataOptions, httpOptions } from '../global-variables/api-config';
const apiPreLink = environment.apiPreLink;
@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) {

  }

  
 
  
  public getById(controllerName: string, id: number): Observable<any> {
    return this.http.get(apiPreLink + controllerName + Actions.GetById + '/' + id);
  }
  public getNews(controllerName: string): Observable<any> {
    return this.http.get(apiPreLink + controllerName + Actions.Get);
  }
 
  public postItem(controllerName: string, actionName: string, postObject: any): Observable<any> {
    return this.http.post(apiPreLink + controllerName + actionName, JSON.stringify(postObject), httpOptions);
  }
  public postFormData(controllerName: string, actionName: string, postObject: any): Observable<any> {
    return this.http.post(apiPreLink + controllerName + actionName, postObject, httpFormDataOptions);
  }
  public getAll(controllerName: string): Observable<any> {
    return this.http.get(apiPreLink + controllerName + Actions.GetAll, httpOptions);
  }
  
  public postItemImages(controllerName: string, actionName: string, itemId: number, itemImages: FormData): Observable<any> {

    return this.http.post(apiPreLink + controllerName + actionName + '/' + itemId, itemImages, { responseType: 'text' });
  }

  public getAppSettings(){
    return this.http.get(apiPreLink + 'AppSettings/GetAppSettings')
  }
  public GetProfile(controllerName: string): Observable<any> {
    return this.http.get(apiPreLink + controllerName + Actions.GetProfile , httpOptions);
  }
  public GetEmployeeAttachments(controllerName: string): Observable<any> {
    return this.http.get(apiPreLink + controllerName + Actions.getEmployeeAttachments , httpOptions);
  }
  public getExperience(controllerName: string, actionName, id: number): Observable<any> {
    return this.http.get(apiPreLink + controllerName + actionName + '/' + id);
  }
  public downloadFile(controllerName: string, actionName: string, filePath: string): Observable<any> {
    return this.http.get(apiPreLink + controllerName + actionName + '?filePath=' + filePath, {responseType: 'blob'} );
  }
}
