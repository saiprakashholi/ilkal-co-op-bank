import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  imports: [],
  templateUrl: './photo-list.html',
  styleUrl: './photo-list.scss',
})
export class PhotoListComponent {

  group: any;

  constructor(private route: ActivatedRoute) {
    this.group = history.state.group;
  }
}
