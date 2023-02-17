
document.getElementById("kitkat-buy-btn").addEventListener('click', function () {
  const quantity = getInputValue("kitkat-quantity");
  const kitKatCost = quantity * 200;
  quantity.value = '';
  
  setInnerText("chocolate", kitKatCost);
  total();
});


document.getElementById("rose-buy-btn").addEventListener('click', function () {
  const quantity = getInputValue("rose-quantity");
  const roseCost = quantity * 80;

  setInnerText('rose', roseCost);
  total();
});


document.getElementById("diary-buy-btn").addEventListener('click', function () {
  const quantity = getInputValue("diary-quantity");
  const diaryCost = quantity * 100;
  
  setInnerText('diary', diaryCost);
  total();
})




function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}


function getInputValue(id) {
  const value = document.getElementById(id).value;
  return parseInt(value);
}


function total() {
  const chocolate = document.getElementById('chocolate').innerText;
  const rose = document.getElementById('rose').innerText;
  const diary = document.getElementById('diary').innerText;
  const totalSum = parseInt(chocolate) + parseInt(rose) + parseInt(diary);
  
  setInnerText('total', totalSum);
}


document.getElementById('btn-promo').addEventListener('click', function () {
  const promoCode = getInputValue('promo-code');
  if (promoCode === 101) {
    const total = document.getElementById('total').innerText;
    const sum = parseInt(total) * 0.1;
    const totalCost = total - sum;
    setInnerText('all-total', totalCost);
  }
  else {
    alert('wrong promo code try again with valid code');
  }
});