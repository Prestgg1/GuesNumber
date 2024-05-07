let UserNumber = Number(document.querySelector('footer .container input').value) ;
let Score = 20;
let RandomNumber = Math.floor(Math.random()*20);
document.querySelector('header button').onclick = ()=>{
    resetScore();
};
function resetScore() {
    Score = 20;
    RandomNumber=Math.floor(Math.random()*20);
    document.body.style.backgroundColor = "blueviolet"
    document.querySelector('main .score span').innerText = Score;
    document.querySelector('main p:last-child').style.opacity ='0';
}
let time;
function autohidde(){
    time = setTimeout(()=>{
        document.querySelector('main p:last-child').style.opacity ='0';
    },1500)
}
function onCheck(){
    
    document.querySelector('main p:last-child').style.opacity ='1';
    clearTimeout(time);
    if (UserNumber === RandomNumber && Score!=0) {
        RandomNumber=Math.floor(Math.random()*20);
        document.querySelector('main p:last-child').innerText = 'Your score has increased by 1 unit.';
        document.querySelector('main p:last-child').style.color ='lime';
        Score++;
    }
    else if(Score == 0){
        document.body.style.backgroundColor="red";
        document.querySelector('main p:last-child').innerText = 'You lost. All your points are gone.Pleace again game;';
        document.querySelector('main p:last-child').style.color ='purple';
    }
    else if(UserNumber > RandomNumber){
        Score--;
        document.querySelector('main p:last-child').innerText = 'You lost. Please increase the number!';
        document.querySelector('main p:last-child').style.color ='red';
    }
    else{
        Score--;
        document.querySelector('main p:last-child').innerText = 'Uduzdun Xalın 1 Vahid Azaldı Xalı Artır!';
        document.querySelector('main p:last-child').style.color ='red';
    }
    autohidde()
    document.querySelector('main .score span').innerText = Score;
}
document.querySelector('footer .container button').onclick=()=>{
    onCheck();
}
document.querySelector('footer .container input').addEventListener("keydown",(e)=>{
    if(e.keyCode == 13){
        onCheck();
    }
})
window.addEventListener("keydown",(e)=>{
    if(e.key == "r"){
        resetScore();
    }
});