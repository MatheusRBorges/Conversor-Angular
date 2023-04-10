import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  metro!: number;
  resultado!: number;
  selecionar = 'Selecione a Medida de Conversão';
  convert(){
    const numconvertido: number = parseInt(this.selecionar);

    if(numconvertido == 1){
      this.resultado = this.metro * 100;
    }
    else if(numconvertido == 2){
      this.resultado = this.metro / 1000;
    }
    else if(numconvertido == 3){
      this.resultado = this.metro * 1000;
    }
    else{
      alert("Preencha o Campo")
    }
  }
}

