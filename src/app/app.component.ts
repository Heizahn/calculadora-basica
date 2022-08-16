import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  screenCalc: string = '';

  obtenerValor = (paramt: string) => {
    this.screenCalc += paramt;
  };

  obtenerResultado = (paramt: string) => {
    let resultado: number = eval(paramt);
    this.screenCalc = resultado.toString();
  };

  reset = () => {
    this.screenCalc = '';
  };

  deleteNumber = (paramt: string) => {
    this.screenCalc = paramt.substring(0, paramt.length - 1);
  };
  themeOne = () => {
    let main = document.querySelector('main');
    main?.classList.remove('theme2');
    main?.classList.remove('theme3');
    let toggle = document.getElementById('circle');
    if (toggle) {
      toggle.style.left = '0%';
    }
  };
  themeTwo = () => {
    let main = document.querySelector('main');
    let toggle = document.getElementById('circle');
    main?.classList.add('theme2');
    main?.classList.remove('theme3');
    if (toggle) {
      toggle.style.left = '34%';
    }
  };

  themeThree = () => {
    let main: any = document.querySelector('main');
    main?.classList.add('theme3');
    main?.classList.remove('theme2');
    let toggle = document.getElementById('circle');
    if (toggle) {
      toggle.style.left = '70%';
    }
    console.log('Estoy trabajando en ello');
  };
}
