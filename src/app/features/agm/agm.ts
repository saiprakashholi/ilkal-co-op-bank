import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agm.html',
  styleUrl: './agm.scss',
})
export class Agm {
  reports = [
    { year: '2015-16', members: 20060, deposits: '19394.48', loans: '17559.30', profit: '426.01' },
    { year: '2018-19', members: 21490, deposits: '28636.22', loans: '21706.06', profit: '414.40' },
    { year: '2022-23', members: 22630, deposits: '39638.03', loans: '28267.64', profit: '528.23' },
    { year: '2024-25', members: 24301, deposits: '43101.47', loans: '30198.48', profit: '603.57' },
  ];
}
