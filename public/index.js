/* eslint-disable no-undef */

const button = document.querySelector('button');
const total = document.querySelector('p');
const input = document.querySelector('input');

total.style.display = 'none';

const get_total_mutiple = async (number) => {
  const response = await fetch('/v1/mutiples', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ number }),
  });

  const data = await response.json();

  return data;
};

const handleClickButton = async () => {
  const number = +input.value;

  total.style.display = 'block';

  total.innerHTML = 'carregando...';

  const data = await get_total_mutiple(number);

  if (data.error) {
    total.style.display = 'none';
    alert(data.error);
    return;
  }

  input.value = '';

  total.innerHTML = data.total;
};

button.addEventListener('click', handleClickButton);
