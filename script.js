var stabs = document.getElementById("stabs");
var caurums = document.getElementById("caurums");
var putns = document.getElementById("putns");
var jumping = 0;
var counter = 0;

caurums.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    caurums.style.top = random + "px";
    counter++;
});
setInterval(function(){
    var putnsTop = parseInt(window.getComputedStyle(putns).getPropertyValue("top"));
    if(jumping==0){
        putns.style.top = (putnsTop+3)+"px";
    }
    var stabsLeft = parseInt(window.getComputedStyle(stabs).getPropertyValue("left"));
    var caurumsTop = parseInt(window.getComputedStyle(caurums).getPropertyValue("top"));
    var cTop = -(500-putnsTop);
    if((putnsTop>480)||((stabsLeft<20)&&(stabsLeft>-50)&&((cTop<caurumsTop)||(cTop>caurumsTop+130)))){
        alert("Game over. Score: "+(counter-1));
        putns.style.top = 100 + "px";
        counter=0;
    }
},10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var putnsTop = parseInt(window.getComputedStyle(putns).getPropertyValue("top"));
        if((putnsTop>6)&&(jumpCount<15)){
            putns.style.top = (putnsTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}