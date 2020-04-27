# Note1
Angularda component nedir? Nasıl oluşturulur. 
Nasıl kullanılır. Bu başlıklara özetleyeceğim.
Angularda component terminal üzerinden **ng generate component <componentAdı>** 
üretilir.(Angular CLI kullanılarak.)

Fakat bu yazıda Angular componentinin manuel oluşturup çalışma mantığını inceleyeceğiz. Çalışma yapısını gözlemlemek için manuel yapmakta faydalı olacaktır.

 ## Component Nedir?
 Single page web sayfalarında kullanılan, web sayfasının anlamlı parçalarıdır. Componentler bir araya gelerek görüntüyü oluşturur.

Componentler 3 parçadan oluşur:
- **view/template** &rarr; html ve css dosyalarıyla oluşur. Componentin görselliğini yansıtır.
- **metadata**  &rarr; Angular içerisindeki bir class ın (sınıf) nasıl işletileceğini yani hangi tip bir bileşen olduğunu söylememize yarar. Metadata decorator eklenerek oluşturulur. Decorator javadaki anotasyon gibidir.
- **class**  &rarr; typescript dosyasıdır. view a veri sağlar. Sayfanın işlevselliğini sağlayan fonsiyonlar yazılır. Örneğin butonun eventi burda kodlanır.

![Alt text](/src/resource/component.PNG )

## Component Oluşturulması
Manuel olarak aşağıdaki aşağıdaki aşamalarla component dosyası oluşturulur.

**1.TypeScript dosyası oluşturulmalı**    
TypeScript (.ts) dosyası oluşturulur. Dosya içine bir sınıf yazılır.
Standartlar gereği dosya adına ve sınıf adına *component* eki eklenir.
- Dosya isimlendirmesi: adi.component.ts
- sınıf isimlendirmesi: class AdiComponent{}

``` 
export class ManuelTsFileComponent{
}
 ```
**3.Sınıf Component'e Dönüştürülmeli**

Sınıfın Angular tarafından component olarak yorumlanabilmesi için
decorator(metadata) bilgisi gerekli. @Component decorator eklendiğinde sınıf component olarak yorumlanır.
@Component eklendiğinde Angular core'daki Component autoimport olacaktır.
@Component oluşumunun tamamlanması için componentin özelikleri(belirteçleri) tanımlanmalır.
````
import { Component } from '@angular/';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
````
@Component decoratorunda bulunan önemli belirteçler:
- selector : Component imizi HTML içerisinde konumlandırmazı sağlar.
- TemplateUrl:  Bir HTML dokümanını referans olarak vermemizi sağlar.
selector tagının kullanıldığı konuma  HTML dosyasındaki görseli yerleştirir.
Referans verilen dosyasının path ini yazılmalıdır.
- styleUrls: Component imizin css/less/sass dosyalarını string dizisi içerisinde tanımlamamızı sağlar.
- providers: ilgili componentin kullanmak istediği service sınıflarının bir listesini tutar. 

> Manuel olarak yukarıdaki 3 adımın sonunda component dosyadı oluşturulur. componentin uygulama çalışdığında render olması için manuel module dosyası oluşturuldur. main.ts de değişiklik yapıldı.

> Angularda iki farklı şekilde template oluşturulur. <br>
   <b>1- Inline template</b> →***template*** belirteçi kullanılır. Html string yazılır. <br>
   <b>2- External Template</b> → ***templateUrl*** belirteçi kullanılır. Html in dizini verilir. <br>
   manuel.compoenent.ts 'de template kullanıldı.

**main.ts dosyasında değişiklik**

uygulama  main.ts dosyasından çalışmaya başlar. manuel.module ekranda ilk görümesi için main ts 'e modul tanınılır. Browserda görünmesi için bootstrapModule e parametre olarak bu modul verilir.
````
import { ManuelTsFileModule } from './app/app1_manuel/manuel.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule( ManuelTsFileModule )
  .catch(err => console.error(err));
````
> _**ng serve --open**_ ng serve komutu uygulamayı derler ve çalıştırır. --open komutu browserı açar