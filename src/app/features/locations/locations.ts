import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Branch {
  name?: string;
  address?: string;
  phone?: string;
  image?: string;
  location?: string;
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
      phone: '+91 95388 68030',
      image: 'assets/branches/HeadOffice.jpg',
      location: 'https://maps.app.goo.gl/rC4ukBmdHf5oecYk7'
    },
    {
      name: 'SVM College Branch',
      address: `1st cross,
      Behind Bus Stand, Ilkal`,
      phone: '+91 91412 77102',
      image: 'assets/branches/SVMCollegeBranch.jpg',
      location: 'https://maps.app.goo.gl/xNsRGjc13vZs3cxi6',
    },
    {
      name: 'APMC Yard Branch',
      address: 'APMC Yard, Ilkal. ',
      image: 'assets/branches/APMCYardBranch.jpg',
      phone: '+91 91415 58106',
      location: 'https://maps.app.goo.gl/NoZRR5ohdUrg13Vg6'
    },
    {
      name: 'Gudur Branch',
      address: `Near Bus Stand,
      Gudur S C`,
      image: 'assets/branches/GudurSCBranch.jpg',
      phone: '+91 91412 66103',
      location: 'https://maps.app.goo.gl/rci6Pp6hq5gw7rzf7',
    },
    {
      name: 'Kudala Sangam Branch',
      address: `Basaveshwara Circle,
      Kudala Sangam`,
      // image: 'assets/branches/KudalaSangamBranch.jpg',
      phone: '+91 91419 42104',
    },
    {
      name: 'Kushtagi Branch',
      address: `Maruthi circle, 
      Bus Stand road, Kushtagi`,
      image: 'assets/branches/KusthagiBranch.jpg',
      phone: '+91 91412 68105',
    },


  ];
}
