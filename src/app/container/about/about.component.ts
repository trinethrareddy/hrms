import { Component, OnInit, Input } from '@angular/core';
import { WebConfig } from 'src/app/models';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() aboutText: string;
  constructor() { }

  ngOnInit() {
  }

}
