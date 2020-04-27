import { Component } from '@angular/core';

/**
 * @Component metadatasi ile sınıfın 
 * bir component olarak işlev görmesi sağlanır.
 */
@Component({
    selector: 'manuel-root',
    template: `
    <div style = "text-align:center">
    <h1>
       {{variable}}
    </h1>
 </div>
 <div>
    Angularda iki farklı şekilde template oluşturulur. 
    <p> <b>1- Inline template </b>→ template: html string yazılır.</p>
    <div style="background-color:lightblue ;border-style: dotted;  padding:10px ;width:400px">
       <b>
          @Component(&#123; <br>
          selector: 'app-root',<br>
          template: &#96; <br>
          <p> &#123; &#123; title &#125; &#125; </p>
          <p>template örneği</p>
          &#96;<br>
          styleUrls: ['app/app.component.css']
          &#125;)<br>
       </b>
    </div>
    <p> <b> 2- External Template </b>→ templateUrl: 'multi-line.html' html dosyasının  dizini verilir.</p>
    <div style="background-color:lightblue ;border-style: dotted;  padding:10px ;width:400px">
       <b>
          @Component(&#123; <br>
          selector: 'app-root',<br>
          template: './app.component.html'
       </b>
    </div>
 </div>
   `
})
export class ManuelTsFileComponent {
    variable: string = 'Manuel Component Oluşturuldu';
}