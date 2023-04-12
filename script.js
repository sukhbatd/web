const output = document.querySelector('.divo');
const url = 'product.json';
window.addEventListener('DOMContentLoaded', ()=>{
    output.textContent = 'ready';

})
function loadData(){
    fetch().then(reo)
}