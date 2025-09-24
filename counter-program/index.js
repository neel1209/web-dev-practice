countValue = Number(document.getElementById('counter-element').textContent);

document.getElementById('decrease').onclick = function(){
    countValue--;
    document.getElementById('counter-element').textContent = countValue
    console.log(countValue)
}
document.getElementById('reset').onclick = function(){
    countValue = 0;
    document.getElementById('counter-element').textContent = countValue
}
document.getElementById('increase').onclick = function(){
    countValue++;
    document.getElementById('counter-element').textContent = countValue
}