import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { MiscService } from '../../../services/misc-service';
import { FormsModule } from '@angular/forms';
import { LoadingService } from '../../../core/loading/loading.service';


@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './career.html',
  styleUrl: './career.scss',
})
export class Career {
  constructor(
    public lang: LanguageService,
    private miscService: MiscService,
    private loadingService: LoadingService
  ) { }


  loading = false;
  success = false;
  error = false;

  form = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    resume: null as File | null
  };

  submit() {
    this.loading = true;
    this.success = false;
    this.error = false;
    this.loadingService.show();

    const payload = new FormData();
    payload.append('name', this.form.name);
    payload.append('email', this.form.email);
    payload.append('phone', this.form.phone);
    payload.append('subject', this.form.subject);
    payload.append('message', this.form.message);

    // this.miscService.submitCareer(payload).subscribe({
    //   next: () => {
    //     this.loading = false;
    //     this.loadingService.hide();
    //     this.success = true;

    //     // reset form data
    //     this.form = {
    //       name: '',
    //       email: '',
    //       phone: '',
    //       subject: '',
    //       message: '',
    //       resume: null
    //     };
    //   },

    //   error: () => {
    //     this.loading = false;
    //     this.loadingService.hide();
    //     this.error = true;
    //   },
    // });
  }
}
