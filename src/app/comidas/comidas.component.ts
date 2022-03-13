import { Component } from "@angular/core";

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html'

})
export class ComidasComponent {

comidas:string[] = [];

mostrar():void{

this.comidas = ["Paella", "Muños", "Cachopo", "Puerros", "Arroz con Huevo"];

}

borrar():void{


  this.comidas = [];

}



}
