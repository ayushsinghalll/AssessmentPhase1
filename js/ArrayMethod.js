let fruits=[];

let add=document.getElementById("ad");
let div=document.getElementById("innerDiv");
add.onclick=function(){
    let input=document.createElement("input");

    let br=document.createElement("br");
    div.appendChild(input);
    div.appendChild(br);



}
let clear=document.getElementById("clearInput");
clear.onclick=function(){
    document.getElementById("innerDiv").innerHTML="";

}

let removeAll=document.getElementById("removeAll");
removeAll.onclick=function(){
    fruits=[];
    display();
}

let removeTop=document.getElementById("removeTop");
removeTop.onclick=function(){
    let num=fruits.shift();
    display();
}
let removeBottom=document.getElementById("removeBottom");
removeBottom.onclick=function(){
    let num=fruits.pop();
    display();
}
let uppercase=document.getElementById("upperCase");
uppercase.onclick=function(){
    for(let i=0;i<fruits.length;i++){
        fruits[i]=fruits[i].toUpperCase();
    }

    display();
}
let lowercase=document.getElementById("lowerCase");
lowercase.onclick=function(){
    for(let i=0;i<fruits.length;i++){
        fruits[i]=fruits[i].toLowerCase();
    }

    display();
}

let submit=document.getElementById("submit");
submit.onclick=function(){
    let value=document.getElementsByTagName("input");
    for(let i=0;i<value.length;i++){
        let found=false;
        for(let j=0;j<fruits.length;j++){
            if(fruits[j]==value[i].value){
                found=true;
            }
        }
        if(found==false){
            fruits.push(value[i].value);
        }
    }

    console.log(fruits);
    for(let i of fruits){
        console.log(i);
    }
    display();
}

function display(){
    let res=document.getElementById("result");
    res.innerHTML="";
    for(let i=0;i<fruits.length;i++){
        let li=document.createElement("li");
        li.innerHTML=fruits[i];
        res.appendChild(li);
    }
}
