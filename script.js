const box1 = document.getElementById('box-1');
box1.addEventListener('click', () => {
    box1.style.backgroundColor="Red";
})
const box2 = document.getElementById('box-2');
box2.addEventListener('click', () => {
    box2.style.backgroundColor="Blue";
})
const box3 = document.getElementById('box-3');
box3.addEventListener('click', () => {
    box3.style.backgroundColor="Green";
})
const box4 = document.getElementById('box-4');
box4.addEventListener('click', () => {
    box4.style.backgroundColor="Yellow";
})

const para = document.getElementById('para');
const msg = document.getElementById('msg');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    
    if(msg.value){
        para.innerText="Hello " + msg.value;
    }
});