import { Component, OnInit } from '@angular/core';


import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tres',
  templateUrl: './tres.component.html',
  styleUrls: ['./tres.component.css']
})
export class TresComponent implements OnInit {
  
  seleccionado:string = '';

  constructor(public translate: TranslateService) { 
    
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');

/*     translate.get('inicio').subscribe( result => {
      console.log(result.descripcion);
    }) */
    const browserLang:any = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'es');
  }

  ngOnInit(): void {
  }

  cambiar(event:any){

    let links = [
      {
        id:1,
        link:"https://firebasestorage.googleapis.com/v0/b/node-chat-destruccion.appspot.com/o/sawa-imagenes%2FNormas%20de%20calida%2FNotaImplementacion.png?alt=media&token=2d4fc426-2076-4637-84bd-47be761e8dbb"
  
    },
    {
      id:2,
      link:"https://firebasestorage.googleapis.com/v0/b/node-chat-destruccion.appspot.com/o/sawa-imagenes%2FNormas%20de%20calida%2FRegistroDeMarca1.jpg?alt=media&token=a07ce66f-cef4-4426-be80-895337d10d57"
    },
    {
      id:3,
      link:"https://firebasestorage.googleapis.com/v0/b/node-chat-destruccion.appspot.com/o/sawa-imagenes%2FNormas%20de%20calida%2FRegistroDeMarca2.jpg?alt=media&token=772aa660-f104-4123-a0c0-be8e36884ae4"
    },
    {
      id:4,
      link:"https://firebasestorage.googleapis.com/v0/b/node-chat-destruccion.appspot.com/o/sawa-imagenes%2FNormas%20de%20calida%2FProcediemientoDeSoldaduras1.jpg?alt=media&token=d23b497e-e6c5-4b00-80f1-e94cd3cdf882"
    },
    {
      id:5,
      link:"https://firebasestorage.googleapis.com/v0/b/node-chat-destruccion.appspot.com/o/sawa-imagenes%2FNormas%20de%20calida%2FProcediemientoDeSoldaduras2.jpg?alt=media&token=3f4808a2-1406-4529-8021-6273b8b2ad3c"
    }
  ]


    let link_id = links.find ( e => e.id == event.value ?? e);
    window.location.href = `${link_id!.link}`;
  }
}
