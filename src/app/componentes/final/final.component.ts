import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {
  @ViewChild('pele') pele!:ElementRef<HTMLInputElement>;

  constructor() { 
   
  }

  ngOnInit(): void {
    
  }







}
