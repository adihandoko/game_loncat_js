var bola=document.getElementById('bola');
var area=document.getElementById('area-bola');
var halangan=document.getElementById('halangan');
var score=document.getElementById('score');
var message=document.getElementById('message');
var playground=document.getElementById('playground');

let start_count=0;
let total_score=0;

document.body.onkeypress = function(e){
    if(e.keyCode == 32){
        lompat();
    }
}
function lompat() {    
    // jump_count=jump_count+1;
    area.style.marginTop='10px';
    // start_count=start_count+1;
    setTimeout(() => {
        area.style.marginTop='60px';
    }, 800);
    
    // if(jump_count%4==0 || jump_count==1){
        start()
    // }
}

function start() {
    message.innerHTML="";
    start_count=start_count+1;
    if(start_count==1){
        var intervalnya=setInterval(() => {
            var marginhalangan=parseInt(halangan.style.marginLeft);
            if(marginhalangan>-50){
                marginhalangan=marginhalangan-3;
                halangan.style.marginLeft=marginhalangan+"px";
            }
            crash(intervalnya);
            if(marginhalangan<=-50){
                halangan.style.marginLeft=1000+"px";
                total_score=total_score+10;
                score.innerHTML=total_score;
            }
        }, 10);
    }
}
function crash(intervalnya) {
    var marginhalangan=parseInt(halangan.style.marginLeft);
    var margintoparea=parseInt(area.style.marginTop);
    if(marginhalangan<=30 && marginhalangan>0 && (margintoparea>20 || isNaN(margintoparea))){
        clearInterval(intervalnya);
        message.innerHTML="Game Over";
        total_score=0;
        playground.style.backgroundColor="black"; 
        setTimeout(() => {
            bola.style.backgroundColor="red";
            playground.style.backgroundColor="lightblue";    
            halangan.style.marginLeft=1000+"px";
        }, 1000);
        /*                        
        start_count=start_count+1;
        setTimeout(() => {
            document.getElementById('btn-jump').removeAttribute('disabled');
            bola.style.backgroundColor="red";
            document.getElementById('background').style.backgroundColor="lightblue";    
            document.getElementById('message').innerHTML="";
            halangan.style.marginLeft=1000;
        }, 800);*/
    }
}