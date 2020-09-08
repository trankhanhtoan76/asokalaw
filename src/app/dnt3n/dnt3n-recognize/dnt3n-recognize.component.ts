import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GlobalService} from "../../service/global.service";

@Component({
  selector: 'app-dnt3n-recognize',
  templateUrl: './dnt3n-recognize.component.html',
  styleUrls: [
    '../dnt3n.component.css',
    './dnt3n-recognize.component.css'
  ]
})
export class Dnt3nRecognizeComponent implements OnInit {
  @Output() changepackage = new EventEmitter;

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
  }

    submit() {

    }

}
