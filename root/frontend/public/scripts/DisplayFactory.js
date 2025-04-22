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
    setResultValue(value) {
      this.resultDisplay.textContent = value;
    },
    updateUpperValue(value) {
      this.upperDisplay.textContent += value;
    },
    checkLastDigit(arr) {
      let upperArray = this.upperDisplay.textContent.split(' ');
      let lastDigitDisplay = this.upperDisplay.textContent[this.upperDisplay.textContent.length-1]

      let onlyNumber = /^\d+$/;
      if (!onlyNumber.test(lastDigitDisplay)) {
        return false
      } else {
        console.log('é numero')
      }
    },
  };
}

export default displayFactory();
