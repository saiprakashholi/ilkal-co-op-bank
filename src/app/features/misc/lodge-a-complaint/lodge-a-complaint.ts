import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';


interface ComplaintType {
  key: string;
}

@Component({
  selector: 'app-lodge-a-complaint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lodge-a-complaint.html',
  styleUrl: './lodge-a-complaint.scss',
})
export class LodgeAComplaint {
  constructor(public lang: LanguageService) { }

  complaintTypes = [
    { key: 'atm' },
    { key: 'upi' },
    { key: 'loan' },
    { key: 'deposit' },
    { key: 'other' },
  ];

  submitted = false;

  onSubmit(event: Event) {
    event.preventDefault();
    this.submitted = true;
  }

  resetForm() {
    this.submitted = false;
  }
}
