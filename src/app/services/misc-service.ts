import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MiscService {
  constructor(private http: HttpClient) { }

  submitEnquiry(payload: any): Observable<any> {
    // ✅ Dummy working API – replace later
    return this.http.post(
      'https://jsonplaceholder.typicode.com/posts',
      payload
    );
  }

  submitCareer(payload: FormData) {
    // Dummy API for now
    return this.http.post(
      'https://jsonplaceholder.typicode.com/posts',
      payload
    );
  }

}
