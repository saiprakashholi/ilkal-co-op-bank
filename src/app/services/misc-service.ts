import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class MiscService {
  constructor(private http: HttpClient) { }

  submitEnquiry(payload: any): Observable<any> {
    const body = {
      ...payload,
      formType: 'inquiry',
      _subject: 'Inquiry Form'
    };
    return this.http.post(environment.formspreeInquiryEndpoint, body, {
      headers: { Accept: 'application/json' }
    });
  }

  submitComplaint(payload: FormData) {
    payload.append('formType', 'complaint');
    payload.append('_subject', 'Lodge a Complaint');
    return this.http.post(environment.formspreeComplaintEndpoint, payload, {
      headers: { Accept: 'application/json' }
    });
  }

  submitCareer(payload: FormData) {
    payload.append('formType', 'career');
    payload.append('_subject', 'Career Form');
    // return this.http.post(environment.formspreeCareerEndpoint, payload, {
    //   headers: { Accept: 'application/json' }
    // });
  }

}
