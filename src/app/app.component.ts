import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';

 @ViewChild('resultado') resultado!: ElementRef;

 constructor(
  private renderer: Renderer2
 ){}

  insert(tecla:any) : void{
    this.resultado.nativeElement.innerHTML+=tecla;
 }
 clear() : void{
  this.resultado.nativeElement.innerHTML = "";
}
back() : void{
  var guardador = this.resultado.nativeElement.innerHTML;
  this.resultado.nativeElement.innerHTML = guardador.substring(0, guardador.length -1);
}
calcular() : void{
  var calculo = this.resultado.nativeElement.innerHTML;
  if(calculo){
    this.resultado.nativeElement.innerHTML = eval(calculo);
  }else{
    this.resultado.nativeElement.innerHTML = "";
  }
}

}

//var numero = document.getElementById('resultado')!.innerHTML;
//document.getElementById('resultado')!.innerHTML = numero + num;
