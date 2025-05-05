import DisplayFactory from './DisplayFactory';

export default class Calculator {
  constructor() {
    this.upperValue = DisplayFactory.getUpperValue()
    this.resultValue = DisplayFactory.getResultValue()
    this.reset = 0;
    this.rangeResult = [];
  }

  mappingBtn() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', this.pressBtn)
    })
  }

  pressBtn() {
    let input = this.textContent  

    let upperArray = DisplayFactory.getUpperValue().split(' ')

    DisplayFactory.btnAction(input, upperArray);

    console.log(upperArray)
    console.log(input)
    
  }

  clearAll() {
    DisplayFactory.resultDisplay.textContent = '0';
    DisplayFactory.upperDisplay.textContent = '0';
  }


  showDisplay() {
    console.log(this.upperValue)
    console.log(this.resultValue)
  }
}

