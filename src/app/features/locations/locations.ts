import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Branch {
  name?: string;
  address?: string;
  phone?: string;
  image?: string;
}

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locations.html',
  styleUrl: './locations.scss',
})
export class Locations {
  branches: Branch[] = [
    {
      name: 'Ilkal Branch (Head Office)',
      address: `Near Basavangudi Ilkal - 587125 
    Dist: Bagalakot, 
    Karnataka, India`,
      phone: '+91 8351295325',
      image: 'assets/branches/HeadOffice.jpg',
    },
    {
      name: 'SVM College Branch',
      address: 'Near Bus Stand, Ilkal',
      phone: '08352 245678',
      image: 'assets/branches/SVMCollegeBranch.jpg',
    },
    {
      name: 'APMC Yard Branch',
      address: 'Station Road, Ilkal. ',
      image: 'assets/branches/APMCYardBranch.jpg',
      phone: '08352 245678',
    },
    {
      name: 'Kushtagi Branch',
      address: '',
      image: 'assets/branches/KusthagiBranch.jpg',
      phone: '08350 220999',
    },
    {
      name: 'Gudur Branch',
      address: '',
      image: 'assets/branches/GudurSCBranch.jpg',
      phone: '08350 220999',
    },
  ];
}
