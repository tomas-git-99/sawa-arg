import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../funciones/servicio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  valor:boolean = true;
  @ViewChild('value')value!:ElementRef<HTMLInputElement>;
  @ViewChild('navbar')navbar!:ElementRef<HTMLInputElement>;

  constructor( private router:Router, private servicio:ServicioService) { 
 /*    this.servicio.loadScript("https://unpkg.com/flickity@2/dist/flickity.min.css") */
    this.servicio.loadScript("https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js")

  }
  
  ngOnInit(): void {
    
  }
  
  prueba(){
    this.valor = !this.valor; 
  }


  abrirNavbar(){
    this.navbar.nativeElement.style.right = "0"; 
    this.navbar.nativeElement.style.zIndex = "300"; 
  }

  volverMenu(){
    this.navbar.nativeElement.style.right = "-120px"; 
    this.navbar.nativeElement.style.zIndex = "0"; 
  }
}
