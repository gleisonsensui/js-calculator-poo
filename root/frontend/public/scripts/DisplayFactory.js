function displayFactory() {
  return {
    upperDisplay: document.querySelector('#upper-display'),
    resultDisplay: document.querySelector('#result-display'),
    getUpperValue() {
      return this.upperDisplay.textContent;
    },
    getResultValue() {
      return this.resultDisplay.textContent;
    },
    setUpperValue(value) {
      this.upperDisplay.textContent = value;
    },
    updateUpperValue(value) {
      let onlyNumber = /^\d+$/;

      let lastDigitDisplay =
        this.upperDisplay.textContent[this.upperDisplay.textContent.length - 1];
      console.log(lastDigitDisplay);

      if (this.getUpperValue() === '0') {
        this.upperDisplay.textContent = value;
      } else if (!onlyNumber.test(value)) {
        this.upperDisplay.textContent += ` ${value} `;
      } else {
        this.upperDisplay.textContent += value;
      }
    },
    updateResultValue(value) {
      this.resultDisplay.textContent = value;
    },
    clearAll() {
      this.resultDisplay.textContent = '0';
      this.upperDisplay.textContent = '0';
    },
    clearEntry() {
      this.resultDisplay.textContent = '0';
      this.upperDisplay.textContent = '0';
    },
    calcPorcento() {
      this.resultDisplay.textContent = '0';
      this.upperDisplay.textContent = '0';
    },
    calcTotal(arrayEntry) {
      if (arrayEntry[1] === '+') {
        let soma = Number(arrayEntry[0]) + Number(arrayEntry[2]);
        this.updateResultValue(soma);
        this.setUpperValue(soma);
      } else if (arrayEntry[1] === '-') {
        let subtrai = Number(arrayEntry[0]) - Number(arrayEntry[2]);
        this.updateResultValue(subtrai);
        this.setUpperValue(subtrai);
      } else if (arrayEntry[1] === '/') {
        let divide = Number(arrayEntry[0]) / Number(arrayEntry[2]);
        this.updateResultValue(divide);
        this.setUpperValue(divide);
      } else if (arrayEntry[1] === '*') {
        let multiplica = Number(arrayEntry[0]) * Number(arrayEntry[2]);
        this.updateResultValue(multiplica);
        this.setUpperValue(multiplica);
      }
    },
    btnAction(input, arrayEntry) {
      switch (input) {
        case 'AC':
          this.clearAll();
          break;

        case 'CE':
          this.clearEntry();
          break;

        case '%':
          this.calcPorcento();
          break;

        case '=':
          this.calcTotal(arrayEntry);
          break;

        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
          this.updateUpperValue(input);
          break;

        case '+':
        case '-':
        case '/':
        case '*':
          this.updateUpperValue(input);
          break;

        // case value:
        //   break;

        default:
          break;
      }
    },
    checkLastDigit(arrayEntry, value) {
      let lastDigitDisplay =
        this.upperDisplay.textContent[this.upperDisplay.textContent.length - 1];
      let onlyNumber = /^\d+$/;

      if (!onlyNumber.test(lastDigitDisplay)) {
        console.log('Não é numero');
        return false;
      } else {
        console.log('é NUMERO');
      }
    },
  };
}

export default displayFactory();
