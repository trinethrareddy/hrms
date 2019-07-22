import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  @Input() departments: Array<string>;
  displayDepartments: Array<string>;
  constructor() { }

  ngOnInit() {
    this.displayDepartments = this.departments.slice(0, 5);
  }
  viewMore() {
    if (this.departments.length > this.displayDepartments.length) {
      this.displayDepartments = this.departments.slice(0, this.displayDepartments.length + 5);
    }
  }

}
