function start(){
    var b = document.getElementById("run");
    var c = document.getElementById("runn");
    c.addEventListener("click",clean2,false);
    b.addEventListener("click",clean,false);
    
}


function clean(){
    var b1 = document.getElementById("run");
    var a = document.getElementById("run1");
    var a2 = document.getElementById("run2");
    var a3 = document.getElementById("run3");
    var a4 = document.getElementById("run4");
    var a5 = document.getElementById("run5");
    var a6 = document.getElementById("run6");
    var state = a.style['animationPlayState'];
    if(state == "running"){
    a.style['animationPlayState']= 'paused';
    a2.style['animationPlayState']= 'paused';
    a3.style['animationPlayState']= 'paused';
    a4.style['animationPlayState']= 'paused';
    a5.style['animationPlayState']= 'paused';
    a6.style['animationPlayState']= 'paused';
    b1.value= 'run';
    }
    else{
        a.style['animationPlayState']= 'running';
        a2.style['animationPlayState']= 'running';
        a3.style['animationPlayState']= 'running';
        a4.style['animationPlayState']= 'running';
        a5.style['animationPlayState']= 'running';
        a6.style['animationPlayState']= 'running';
        b1.value= 'paused';
    }
}

function clean2(){
    var b11 = document.getElementById("runn");
    var a11 = document.getElementById("run11");
    var a12 = document.getElementById("run12");
    var a13 = document.getElementById("run13");
    var a14 = document.getElementById("run14");
    var a15 = document.getElementById("run15");
    var a16 = document.getElementById("run16");
    var state1 = a11.style['animationPlayState'];
    if(state1 == "running"){
    a11.style['animationPlayState']= 'paused';
    a12.style['animationPlayState']= 'paused';
    a13.style['animationPlayState']= 'paused';
    a14.style['animationPlayState']= 'paused';
    a15.style['animationPlayState']= 'paused';
    a16.style['animationPlayState']= 'paused';
    b11.value= 'run';
    }
    else{
        a11.style['animationPlayState']= 'running';
        a12.style['animationPlayState']= 'running';
        a13.style['animationPlayState']= 'running';
        a14.style['animationPlayState']= 'running';
        a15.style['animationPlayState']= 'running';
        a16.style['animationPlayState']= 'running';
        b11.value= 'paused';
    }
}

window.addEventListener( "load", start, false );