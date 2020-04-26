import { Component, OnInit } from '@angular/core';

@Component({
    selector:'manuel-root',
    template:`
   <div style = "text-align:center">
   <h1>
       {{variable}}
   </h1>
   </div>
   <p>
   Different ways to create Templates in Angular <br>
   1- Inline template ==> template: html string yazılır.<br>
   2- External Template ==> templateUrl: 'multi-line.html' <br>
   html dosyasının  dizini verilir.
   </p>
   `    
})
export class ManuelTsFileComponent  {
    variable:string='manuel component olusturuldu.';
}