
let expression = "";
let equals=false;
let table =  document.querySelector("table");
let input = document.querySelector(".input");
table.addEventListener("click",function(e){
    let value = e.target.innerText;
    let classValue = e.target.classList.value;
    if(classValue.includes("digit")){
        // to perform after equal to behaviour
        if(equals){
            expression = "";
            equals=false;
        }
        // to prevent the decimal from inserting more than one time in a single digit
        let tempExp = expression.split(/([+\-*/])/);
        if(classValue.includes("decimal") && tempExp[tempExp.length-1].includes(".")){
            // nothing to do if already a decimal is present in the expression
        }
        else{
            expression += value;
        }
        input.scrollLeft = input.scrollWidth;
    }
    else if(classValue.includes("operator")){
        if(expression=="" && value!="-"){
            // to accept -ve values. if first char is operator and not '-' then do nothing
        }
        else if(!"+-/*".includes(expression[expression.length-1])){
            equals=false;
            expression += value;
        }
    }
    else if(classValue.includes("equals") && expression!=""){
        let ans = eval(expression);
        expression=String(ans);
        equals=true; // to keep track of expression after equals
    }
    else if(classValue.includes("back")){
        expression = expression.slice(0,expression.length-1);
    }
    else if(classValue.includes("clear")){
        expression = "";
    }
    input.innerHTML="<span>.</span>"+expression;
});