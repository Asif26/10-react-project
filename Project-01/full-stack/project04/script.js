//  function calculate(){
//     fetch('items.json')
//     .then(res=>res.json())
//     .then(data => document.body.innerHTML = data[0].text)
//  }

//  calculate()

const currencyOne = document.getElementById('base-currency');
const  amountOne = document.getElementById( 'base-amount')
const currencyTwo = document.getElementById('target-currency')
const amountTwo = document.getElementById('target-amount')
const rate = document.getElementById('xrate')
const flip = document.getElementById('flip')

// const data = [currencyOne,amountOne,currencyTwo,rate,flip];

// data.map(res=>console.log(res))
// Fetch Exchange RATE & uPDATE THE dOM

 function calculate(){
     const currencyOneCode = currencyOne.value;
     const currencyTwoCode = currencyTwo.value;


     fetch(`https://v6.exchangerate-api.com/v6/d2503ec4e5b5ca47d2e46fe1/pair/${currencyOneCode}/${currencyTwoCode}`)
     .then(res => res.json())
     .then(data => {const ConversionRate = data.conversion_rate;
        rate.innerText = `1${currencyOneCode}=${ConversionRate} ${currencyTwoCode}`;
        amountTwo.value = (amountOne.value * ConversionRate).toFixed(2);});

        

      //Get the coversion Rate

    //   fetch('https://v6.exchangerate-api.com/v6/d2503ec4e5b5ca47d2e46fe1/pair/AED/PKR')
    //   .then(res1=> res1.json()).then(data1 => console.log(data1))
      
      


    




 };

// Event listner
// recalculte exchange rate when currency one change
currencyOne.addEventListener('change', calculate);
// recalculte exchange rate when currency one amount change
amountOne.addEventListener('input', calculate);
// recalculte exchange rate when currency two change
currencyTwo.addEventListener('change', calculate);
// recalculte exchange rate when currency amount two change
amountTwo.addEventListener('input', calculate);

flip.addEventListener('click' ,()=>{
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp
    calculate()

})


calculate();


