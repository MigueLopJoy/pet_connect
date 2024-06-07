import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  municipalities_postalCode_URL = '/assets/info/municipalities_postalCode.json';
  municipalities_provinces_URL = '/assets/info/municipalities_provinces.json';

  get(fileUrl: string): Observable<object> {
    return this.httpClient.get(fileUrl) as Observable<object>;
  }
}