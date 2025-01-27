# project on dom

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


## solution code
### project 1
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(buttons);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
  });
});

```


### project 2
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please provide a valid height.`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please provide a valid weight.`;
  } else {
    // Calculate BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Determine BMI category
    let message = '';
    if (bmi < 18.6) {
      message = 'You are underweight.';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message = 'You are in the normal weight range.';
    } else {
      message = 'You are overweight.';
    }

    // Show the result and message
    results.innerHTML = `<span>Your BMI is: ${bmi}</span><br><span>${message}</span>`;
  }
});

```

### project 3
```javascript
const clock = document.getElementById('clock');

setInterval(function(){
  const date = new Date();
// console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```