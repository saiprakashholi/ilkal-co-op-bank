import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../../services/language.service';
import { MiscService } from '../../../services/misc-service';
import { LoadingService } from '../../../core/loading/loading.service';


interface ComplaintType {
  key: string;
}

@Component({
  selector: 'app-lodge-a-complaint',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lodge-a-complaint.html',
  styleUrl: './lodge-a-complaint.scss',
})
export class LodgeAComplaint {
  constructor(
    public lang: LanguageService,
    private miscService: MiscService,
    private loadingService: LoadingService
  ) { }

  complaintTypes = [
    { key: 'atm' },
    { key: 'upi' },
    { key: 'loan' },
    { key: 'deposit' },
    { key: 'other' },
  ];

  submitted = false;
  loading = false;
  error = false;

  form = {
    name: '',
    email: '',
    phone: '',
    accountNo: '',
    type: '',
    rrn: '',
    message: '',
    attachment: null as File | null
  };

  onSubmit(event: Event) {
    event.preventDefault();
    this.loading = true;
    this.error = false;
    this.loadingService.show();

    const payload = new FormData();
    payload.append('name', this.form.name);
    payload.append('email', this.form.email);
    payload.append('phone', this.form.phone);
    payload.append('accountNo', this.form.accountNo);
    payload.append('type', this.form.type);
    payload.append('rrn', this.form.rrn);
    payload.append('message', this.form.message);

    this.miscService.submitComplaint(payload).subscribe({
      next: () => {
        this.loading = false;
        this.loadingService.hide();
        this.submitted = true;
        this.form = {
          name: '',
          email: '',
          phone: '',
          accountNo: '',
          type: '',
          rrn: '',
          message: '',
          attachment: null
        };
      },
      error: () => {
        this.loading = false;
        this.loadingService.hide();
        this.error = true;
      }
    });
  }

  resetForm() {
    this.submitted = false;
    this.error = false;
  }
}
