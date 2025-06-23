
let expression = [];
let num="";
let equals=false;
let table =  document.querySelector("table");
let input = document.querySelector(".input");
table.addEventListener("click",function(e){
    let value = e.target.innerText;
    let classValue = e.target.classList.value;
    if(classValue.includes("digit")){
        // to perform after equal to behaviour
        if(equals){
            input.innerHTML="<span>.</span>";
            num = "";
            equals=false;
        }
        // to prevent the decimal from inserting more than one time in a single digit
        if(classValue.includes("decimal") && num.includes(".")){
            
        }
        else{
            num = num.concat(value);
            input.innerHTML=input.innerHTML.concat(value);
        }
        input.scrollLeft = input.scrollWidth;
    }
    else if(classValue.includes("operator") && num!=""){
        equals=false;
        expression.push(num);
        expression.push(value);
        input.innerHTML=input.innerHTML.concat(value);
        num="";
    }
    else if(classValue.includes("equals") && num!=""){
        expression.push(num);
        let ans = eval(expression.join(""));
        input.innerHTML=ans;
        num=String(ans); // to perform operation directly on previous result
        expression=[];
        equals=true; // to keep track of expression after equals
    }
    else if(classValue.includes("clear")){
        expression = [];
        input.innerHTML="<span>.</span>";
        num="";
    }

});