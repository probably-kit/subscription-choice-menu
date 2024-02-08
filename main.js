const params = new URLSearchParams(window.location.search);
const userId = params.get('user_id');


const basicButton = document.getElementById('basic-button');
const proButton = document.getElementById('pro-button');
const platinumButton = document.getElementById('platinum-button');

basicButton.addEventListener('click', () => {window.location.href=`https://buy.stripe.com/5kA8yL9NC4US4UM144?${userId}`});
proButton.addEventListener('click', () => {window.location.href=`https://buy.stripe.com/cN26qDaRGgDA86Y001?${userId}`});
platinumButton.addEventListener('click', () => {window.location.href=`https://buy.stripe.com/aEUcP18Jy730af67su?${userId}`});