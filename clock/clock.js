
setInterval(function () {
    var time=new Date();
    var min = time.getMinutes() * 6;
    var hr = time.getHours()*30+time.getMinutes()/2;
    var sec = time.getSeconds() * 6;
    
    document.querySelector(".hr").style.transform = `rotate(${hr}deg)`;
    document.querySelector(".min").style.transform = `rotate(${min}deg)`;
    document.querySelector(".sec").style.transform = `rotate(${sec}deg)`;



    var digi=document.querySelector(".digital");
    digi.innerText=time.getHours()%12+' : '+time.getMinutes()+" : "+time.getSeconds() + (time.getHours()>=12? " PM" : " AM");

}, 1000);


