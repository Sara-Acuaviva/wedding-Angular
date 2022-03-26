import { Component, OnInit } from '@angular/core';
import { questionsList } from './constants';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  Questions = questionsList; 
  constructor() { }

  ngOnInit(): void {
  }

}

