Angular componentinin elle oluşturup çalışma mantığını inceleyeceğiz. Angular CLI komutu ile component otomatik olusuyor. yapıyı gözlemlemek için manuel yapmakta faydalı olacaktır.

 ## Component Nedir?
 Single page web sayfalarında kullanılan web sayfasının anlamlı parçalarıdır. bu bloklarlar bir araya gelerek görüntüyü oluşturur.

componentler 3 parçadan oluşur:
-  view/template &rarr; html css ile olusan görsel
- metadata  &rarr; Metadata sınıf hakkında ek bilgiler sağlar.Angular bu bilgileri kullanarak işler. örneğin:@component 
- class  &rarr; typescript değişken ve metotolar icerir.

## Component oluşturalim 
**1.Compoenet dosyası oluşturulur**    
Klasörün altında .ts dosyası olusturulur. sSandar olarak component ismi eklenir.


**2.TypeScript sınıfı oluşturulur** 
``` 
export class ManuelTsFileComponent{
}
 ```
**3.Sınıf Component'e Dönüştürülür**

Sınıfı Anguların component olarak  yorumlayabilmesi için
Angular Component import edilmesi gerekir. Sonra da  meta data bilgisi eklenir.

````
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
````
- selector : Component imizi HTML içerisinde kullanmamızı sağlar.
- TemplateUrl:  Bir HTML dokümanını referans olarak vermemizi sağlar. HTML dosyasının bulunduğu yerin path ini yazmamız yeterlidir. Genelde component klasöründe bulunur.
- styleUrls: Component imizin css/less/sass dosyalarını string dizisi içerisinde tanımlamamızı sağlar.

**4.main.ts dosyasında değişiklik**

uygulama  main.ts dosyasından çalışmaya başlar. manuel.module ekranda ilk görümesi için main ts 'e modul tanınılır. Browserda görünmesi için bootstrapModule e parametre olarak bu modul verilir.
````
import { ManuelTsFileModule } from './app/app1_manuel/manuel.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule( ManuelTsFileModule )
  .catch(err => console.error(err));
````
> _**ng serve --open**_ komutu ile uygulama çalıstırlır.