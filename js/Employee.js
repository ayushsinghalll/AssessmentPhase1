class Employee{
    constructor(n,na,a,d,t,dp){
        this.n=n;
        this.na=na;
        this.a=a;
        this.d=d;
        this.t=t;
        this.dp=dp;
    }
}

let empArray=[new Employee(1,"Ayush Singhal","Mathura",new Date("2000/06/14"),"123456","JavaFSE"),
    new Employee(2,"Chaman","Noida",new Date("2000/12/25"),"654321","DotNetFSE"),
    new Employee(3,"Aditya B raj","Bangalore",new Date("2000/08/16"),"124356","Velocity"),
    new Employee(4,"Vipul","Mumbai",new Date("2000/02/10"),"124365","Support"),
    new Employee(5,"Kashyap","Gurgaon",new Date("2000/02/10"),"124365","Support")];





window.onload=function(){localStorage.setItem("arr",JSON.stringify(empArray));
    localStorage.setItem("num",-1)};

let button = document.getElementById("ad");
button.addEventListener("click",add,true);
function add(e){
    e.preventDefault();

    let check=validate();
    console.log("check value",check);
    if(check==false){
        console.log("inside false");

        document.getElementById("res").innerHTML="Please provide appropriate input";
        document.getElementById("res").style.display="block";
        document.getElementById("res").style.color="red";
        setTimeout(function(){
            document.getElementById("res").style.display="none";
        },1000);
        return;
    }
    console.log("hi");
    let arr=JSON.parse(localStorage.getItem("arr"));
    console.log(arr);
    if(arr==null){
        arr=[];
    }


    let num=document.getElementById("empNum").value;
    let name=document.getElementById("empName").value;
    let add=document.getElementById("add").value;
    let dob=document.getElementById("dob").value;
    let tel=document.getElementById("tel").value;
    let dp=document.getElementById("dp").value;

    let found=false;
    for(let i=0;i<arr.length;i++){
        if(num==arr[i].n){
            found=true;
        }
    }

    if(found==true){
        document.getElementById("res").innerHTML="Wrong Data, Employee Number already registred";
        document.getElementById("res").style.display="block";
        document.getElementById("res").style.color="red";
        setTimeout(function(){
            document.getElementById("res").style.display="none";
            document.getElementById("res").style.color="white";
        },1000);

        return;
    }else{
        document.getElementById("res").innerHTML="Added Successfully";
        document.getElementById("res").style.display="block";
        setTimeout(function(){
            document.getElementById("res").style.display="none";
        },1000);



    }





    let emp=new Employee(num,name,add,dob,tel,dp);
    arr.push(emp);
    console.log(arr);

    localStorage.setItem("arr",JSON.stringify(arr));



}



let buttonDe = document.getElementById("delete");
buttonDe.addEventListener("click",fn,true);
function fn(e){
    e.preventDefault();

    let check=validate();
    console.log("check value",check);
    if(check==false){
        console.log("inside false");

        document.getElementById("res").innerHTML="Please provide appropriate input";
        document.getElementById("res").style.display="block";
        document.getElementById("res").style.color="red";
        setTimeout(function(){
            document.getElementById("res").style.display="none";
            document.getElementById("res").style.color="white";
        },1000);
        return;
    }
    console.log("hi");
    let arr=JSON.parse(localStorage.getItem("arr"));
    console.log(arr.length);
    if(arr==null){
        arr=[];

    }

    let num=document.getElementById("empNum").value;
    let name=document.getElementById("empName").value;
    let add=document.getElementById("add").value;
    let dob=document.getElementById("dob").value;
    let tel=document.getElementById("tel").value;
    let dp=document.getElementById("dp").value;

    // let emp=new Employee(num,name,add,dob,tel,dp);
    let found=false;
    for(let i=0;i<arr.length;i++){
        if(num==arr[i].n && name==arr[i].na && add==arr[i].a&& dob==arr[i].d && tel==arr[i].t && dp==arr[i].dp){
            arr.splice(i,1);
            found=true;
        }
    }
    console.log(found)
    if(found==false){
        document.getElementById("res").innerHTML="Wrong Data, User not found";
        document.getElementById("res").style.display="block";
        document.getElementById("res").style.color="red";
        setTimeout(function(){
            document.getElementById("res").style.display="none";
        },1000);
    }else{
        document.getElementById("res").innerHTML="Deleted Successfully";
        document.getElementById("res").style.display="block";
        setTimeout(function(){
            document.getElementById("res").style.display="none";
        },1000);
        document.getElementById("empNum").value="";
        document.getElementById("empName").value="";
        document.getElementById("add").value="";
        document.getElementById("dob").value="";
        document.getElementById("tel").value="";
        document.getElementById("dp").value="";


    }



    console.log(arr);


    localStorage.setItem("arr",JSON.stringify(arr));



}

let buttonUp = document.getElementById("update");
buttonUp.addEventListener("click",update,true);
function update(e){
    e.preventDefault();

    let check=validate();
    console.log("check value",check);
    if(check==false){
        console.log("inside false");

        document.getElementById("res").innerHTML="Please provide appropriate input";
        document.getElementById("res").style.display="block";
        document.getElementById("res").style.color="red";
        setTimeout(function(){
            document.getElementById("res").style.display="none";
            document.getElementById("res").style.color="white";
        },1000);
        return;
    }
    console.log("hi");
    let arr=JSON.parse(localStorage.getItem("arr"));
    console.log(arr);
    if(arr==null){
        arr=[];

    }

    let num=document.getElementById("empNum").value;
    let name=document.getElementById("empName").value;
    let add=document.getElementById("add").value;
    let dob=document.getElementById("dob").value;
    let tel=document.getElementById("tel").value;
    let dp=document.getElementById("dp").value;

    // let emp=new Employee(num,name,add,dob,tel,dp);
    let found=false;
    for(let i=0;i<arr.length;i++){
        if(num==arr[i].n){
            arr.splice(i,1);
            let emp=new Employee(num,name,add,dob,tel,dp);
            arr.splice(i,0,emp);
            found=true;
        }
    }

    if(found==false){
        document.getElementById("res").innerHTML="Wrong Data, Enter Valid Employee Number";
        document.getElementById("res").style.display="block";
        document.getElementById("res").style.color="red";
        setTimeout(function(){
            document.getElementById("res").style.display="none";
            document.getElementById("res").style.color="white";
        },1000);
    }else{
        document.getElementById("res").innerHTML="Updated Successfully";
        document.getElementById("res").style.display="block";
        setTimeout(function(){
            document.getElementById("res").style.display="none";
        },1000);



    }



    console.log(arr);


    localStorage.setItem("arr",JSON.stringify(arr));



}


let moveFirst=document.getElementById("first");
moveFirst.addEventListener("click",moveF,true);
function moveF(event){
    event.preventDefault();

    let arr=JSON.parse(localStorage.getItem("arr"));
    if(arr.length==0){
        document.getElementById("res").innerHTML="No Record found,Please add an employee first";
        document.getElementById("res").style.display="block";
        document.getElementById("res").style.color="red";
        setTimeout(function(){
            document.getElementById("res").style.display="none";
            document.getElementById("res").style.color="white";
        },1000);
        return;
    }

    let num=localStorage.getItem("num");
    if(num==0){
        document.getElementById("res").innerHTML="Already on First page";
        document.getElementById("res").style.display="block";
        document.getElementById("res").style.color="red";
        setTimeout(function(){
            document.getElementById("res").style.display="none";
            document.getElementById("res").style.color="white";
        },1000);

    }

    document.getElementById("empNum").value=arr[0].n;
    document.getElementById("empName").value=arr[0].na;
    document.getElementById("add").value=arr[0].a;
    document.getElementById("dob").value=arr[0].d;
    document.getElementById("tel").value=arr[0].t;
    document.getElementById("dp").value=arr[0].dp;

    localStorage.setItem("num",0);



}

let moveLast=document.getElementById("last");
moveLast.addEventListener("click",moveL,true);
function moveL(event){
    event.preventDefault();

    let arr=JSON.parse(localStorage.getItem("arr"));
    let len=arr.length-1;
    let num=localStorage.getItem("num");


    if(arr.length==0){
        document.getElementById("res").innerHTML="No Record found,Please add an employee first";
        document.getElementById("res").style.display="block";
        document.getElementById("res").style.color="red";
        setTimeout(function(){
            document.getElementById("res").style.display="none";
            document.getElementById("res").style.color="white";
        },1000);
        return;
    }


    if(num==len){
        document.getElementById("res").innerHTML="Already on last page";
        document.getElementById("res").style.display="block";
        document.getElementById("res").style.color="red";
        setTimeout(function(){
            document.getElementById("res").style.display="none";
            document.getElementById("res").style.color="white";
        },1000);

    }

    document.getElementById("empNum").value=arr[len].n;
    document.getElementById("empName").value=arr[len].na;
    document.getElementById("add").value=arr[len].a;
    document.getElementById("dob").value=arr[len].d;
    document.getElementById("tel").value=arr[len].t;
    document.getElementById("dp").value=arr[len].dp;
    localStorage.setItem("num",len);



}

let moveNext=document.getElementById("next");
moveNext.addEventListener("click",moveN,true);
function moveN(event){
    event.preventDefault();

    let arr=JSON.parse(localStorage.getItem("arr"));
    let len=arr.length-1;
    let num=localStorage.getItem("num");


    if(arr.length==0){
        document.getElementById("res").innerHTML="No Record found,Please add an employee first";
        document.getElementById("res").style.display="block";
        document.getElementById("res").style.color="red";
        setTimeout(function(){
            document.getElementById("res").style.display="none";
            document.getElementById("res").style.color="white";
        },1000);
        return;
    }


    if(num==-1){
        moveF(e);
        return;

    }
    if(num==len){
        document.getElementById("res").innerHTML="Already on last page";
        document.getElementById("res").style.display="block";
        document.getElementById("res").style.color="red";
        setTimeout(function(){
            document.getElementById("res").style.display="none";
            document.getElementById("res").style.color="white";
        },1000);
        return;

    }
    num++;

    document.getElementById("empNum").value=arr[num].n;
    document.getElementById("empName").value=arr[num].na;
    document.getElementById("add").value=arr[num].a;
    document.getElementById("dob").value=arr[num].d;
    document.getElementById("tel").value=arr[num].t;
    document.getElementById("dp").value=arr[num].dp;
    localStorage.setItem("num",num);



}

let movePrevious=document.getElementById("previous");
movePrevious.addEventListener("click",moveP,true);
function moveP(event){
    event.preventDefault();

    let arr=JSON.parse(localStorage.getItem("arr"));
    let len=arr.length-1;
    let num=localStorage.getItem("num");


    if(arr.length==0){
        document.getElementById("res").innerHTML="No Record found,Please add an employee first";
        document.getElementById("res").style.display="block";
        document.getElementById("res").style.color="red";
        setTimeout(function(){
            document.getElementById("res").style.display="none";
            document.getElementById("res").style.color="white";
        },1000);
        return;
    }


    if(num==-1){
        moveF(e);
        return;

    }
    if(num==0){
        document.getElementById("res").innerHTML="Already on First page";
        document.getElementById("res").style.display="block";
        document.getElementById("res").style.color="red";
        setTimeout(function(){
            document.getElementById("res").style.display="none";
            document.getElementById("res").style.color="white";
        },1000);
        return;

    }
    num--;
    document.getElementById("empNum").value=arr[num].n;
    document.getElementById("empName").value=arr[num].na;
    document.getElementById("add").value=arr[num].a;
    document.getElementById("dob").value=arr[num].d;
    document.getElementById("tel").value=arr[num].t;
    document.getElementById("dp").value=arr[num].dp;
    localStorage.setItem("num",num);



}
function validate(){
    let num=document.getElementById("empNum").value;
    let name=document.getElementById("empName").value;
    let add=document.getElementById("add").value;
    let dob=document.getElementById("dob").value;
    let tel=document.getElementById("tel").value;
    let dp=document.getElementById("dp").value;
    console.log("hihello",num,name);

    if(num==""||name==""||add==""||dob==""||tel==""||dp==""){
        return false;
    }
    return true;

}
