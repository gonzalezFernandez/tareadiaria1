import { Component } from "@angular/core";

@Component({
  selector: 'app-meses',
  templateUrl: './meses.component.html'

})
export class MesesComponent {

meses:string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

borrar():void{

  this.meses.pop();

}

}
