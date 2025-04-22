import displayFactory from './DisplayFactory';

export default class Calculator {
  constructor() {
    this.upperValue = displayFactory.getUpperValue()
    this.resultValue = displayFactory.getResultValue()
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
    displayFactory.checkLastDigit();
    displayFactory.updateUpperValue(input)
    console.log(input)
  }

  showDisplay() {
    console.log(this.upperValue)
    console.log(this.resultValue)
  }
}

