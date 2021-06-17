function main() {
  customNumber = document.getElementById('custom-number').value;
  customNumber = +customNumber;
  if (isNaN(customNumber)) {
    alert("Введите пожалуйста число!");
  } else {
    isEven();
    isPrime();
    function isEven() {
      if (customNumber % 2 === 0) {
        document.getElementById('is-even').innerHTML = 'Число является четным';
      } else {
        document.getElementById('is-even').innerHTML = 'Число является нечетным';
      }
    };
    function isPrime() {
      if(customNumber <= 1){
        document.getElementById('is-prime').innerHTML = 'Число не является простым';
      }
      else if ((customNumber % 2 === 0 && customNumber !== 2) || (customNumber % 3 === 0 && customNumber !== 3) || (customNumber % 5 === 0 && customNumber !== 5) || (customNumber % 7 === 0 && customNumber !== 7)){
        document.getElementById('is-prime').innerHTML = 'Число не является простым';
      } else {
        document.getElementById('is-prime').innerHTML = 'Число является простым';
      }
    };
  }

}