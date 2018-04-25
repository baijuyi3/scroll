var ul =document.getElementById('ul');
var ulList=ul.children;
var ulWidth=ul.children[0].offsetWidth;
ul.appendChild(ul.children[0].cloneNode(true));
function animate(obj,target) {
      clearInterval(obj.timer);
      var v=-5;
      obj.timer=setInterval(function () {
          var result= obj.offsetLeft - target ;
          obj.style.left=obj.offsetLeft + v +"px";
          if(Math.abs(result)<=Math.abs(v)){
              clearInterval(obj.timer);
              obj.style.left=target+ "px";
              olchange();
          }
      },5)
}
var x=0;
var ol =document.getElementById('ol');
var olList=ol.children;
var mmm=null;
function auto() {
    x++;
    if(x>ulList.length-1){
        x=1;
        ul.style.left=0+"px";
    }
    animate(ul,-x*ulWidth);
    console.log("x:",x);

}

for(let i=0;i<olList.length;i++){
    olList[i].onmouseover=function () {
        clearInterval(mmm);
        ul.style.left=-i*ulWidth+"px";
        x=-ul.offsetLeft/ulWidth;
        olchange()
    };
    olList[i].onmouseleave=function () {
        clearInterval(mmm);
        ul.style.left=-i*ulWidth+"px";
        mmm=setInterval(auto,5000);
    }
}

mmm=setInterval(auto,5000);
var scroll =document.getElementById('scroll');
ul.onmouseover =function () {
    clearInterval(mmm);
};

ul.onmouseleave =function () {
    clearInterval(mmm);
    mmm=setInterval(auto,5000);
};

function olchange() {
    var a=x;
    if(x===5){
        a=0
    }
    for(var m=0;m<olList.length;m++)
    {
        ol.children[m].className="";
    }
    ol.children[a].className="current";
}