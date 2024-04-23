const value1=Number(prompt("Enter the first value"));
const value2=Number(prompt("Enter the second value"));
const operator=prompt("Enter the appropriate operator");

const calculate=(a,b,c)=>{
    if(b===0 && (c=="/" || c == "%")){
        alert("can not be divided by zero");
    }
    if(isNaN(a) || isNaN(b) ){
        alert("Use only numbers");
    }
    if(c=="+"){
        alert(a+b);
    }
    else if(c=="-"){
        alert(a-b);
    }
    else if(c=="*"){
        alert(a*b);
    }
    else if(c=="/"){
        alert(a/b);
    }
    else if(c=="%"){
        alert(a%b);
    }
    else if(c=="**"){
        alert(a**b);
    }
    else{
        alert("use only these ( + ,- ,* , / , ** , % ) operators");
    }
}
calculate(value1,value2,operator);