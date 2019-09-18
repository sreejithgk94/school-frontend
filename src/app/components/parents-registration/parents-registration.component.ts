import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-parents-registration',
  templateUrl: './parents-registration.component.html',
  styleUrls: ['./parents-registration.component.css']
})
export class ParentsRegistrationComponent implements OnInit {

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  constructor() { }

  ngOnInit() {
  }

}
