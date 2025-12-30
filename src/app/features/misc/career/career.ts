import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { MiscService } from '../../../services/misc-service';
import { FormsModule } from '@angular/forms';


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
    private miscService: MiscService
  ) { }


  loading = false;
  success = false;
  error = false;

  showFileInput = true;


  form = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    resume: null as File | null,
  };

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.form.resume = input.files[0];
    }
  }

  submit() {
    this.loading = true;
    this.success = false;
    this.error = false;

    const payload = new FormData();
    payload.append('name', this.form.name);
    payload.append('email', this.form.email);
    payload.append('phone', this.form.phone);
    payload.append('subject', this.form.subject);
    payload.append('message', this.form.message);
    if (this.form.resume) {
      payload.append('resume', this.form.resume);
    }

    this.miscService.submitCareer(payload).subscribe({
      next: () => {
        this.loading = false;
        this.success = true;

        // reset form data
        this.form = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          resume: null,
        };

        this.showFileInput = false;
        // 🔥 FORCE file input recreation
        setTimeout(() => {
          this.showFileInput = true;
        }, 1);
      },

      error: () => {
        this.loading = false;
        this.error = true;
      },
    });
  }
}
