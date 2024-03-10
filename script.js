const No=document.getElementById('No');
function run_button(){
    y=Math.floor(Math.random()*200);
    x=Math.floor(Math.random()*600);
    No.style.left = `${x}px`;
    No.style.top = `${y}px`;
}
No.addEventListener('mousemove', run_button);