// src/app/services/management.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, first, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

export interface Member { id:number; name:string; role:string; profileUrl?:string; image:string; description?:string; }
export interface ManagementData { title:string; aboutTitle:string; aboutText:string; members: Member[]; }

@Injectable({ providedIn: 'root' })
export class ManagementService {
  private directUrl = environment.managementJsonUrl;
  private driveApiUrl = environment.managementJsonDriveApiUrl; // optional (requires API key)

  private fallback: ManagementData = {
    title: 'Management Team',
    aboutTitle: 'About APEX Bank',
    aboutText: 'Fallback about text...',
    members: [
      { id: 1, name: 'Fallback Name', role: 'President', image: 'assets/images/prakash.jpg', profileUrl: '#', description: 'Fallback bio' }
    ]
  };

//   constructor(private http: HttpClient) {}
constructor() {}

//   load() {
//     // Try direct link first (fast). If it fails (CORS / parse), try Drive API url if provided.
//     if (!this.directUrl) {
//       return of(this.fallback);
//     }

//     return this.http.get<ManagementData>(this.directUrl, { observe: 'body' as const }).pipe(
//       first(),
//       catchError(err => {
//         console.error('[ManagementService] direct URL failed', err);
//         // If you configured a Drive API URL, try it next
//         if (this.driveApiUrl && this.driveApiUrl.includes('key=')) {
//           console.debug('[ManagementService] trying Drive API alt=media URL');
//           return this.http.get<ManagementData>(this.driveApiUrl).pipe(
//             first(),
//             catchError(err2 => {
//               console.error('[ManagementService] Drive API failed', err2);
//               return of(this.fallback);
//             })
//           );
//         }
//         // else fall back
//         return of(this.fallback);
//       })
//     );
//   }
}
