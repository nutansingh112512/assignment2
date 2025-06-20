
let expression = [];
let num="";
let table =  document.querySelector("table");
let input = document.querySelector(".scrollable");
table.addEventListener("click",function(e){
    let value = e.target.innerText;
    let classValue = e.target.classList.value;
    if(classValue.includes("digit")){
        num = num.concat(value);
        input.innerHTML=input.innerHTML.concat(value);
        input.scrollLeft = input.scrollWidth;
    }
    else if(classValue.includes("operator") && num!=""){
        expression.push(num);
        expression.push(value);
        input.innerHTML=input.innerHTML.concat(value);
        num="";
    }
    else if(classValue.includes("equals") && num!=""){
        expression.push(num);
        let ans = eval(expression.join(""));
        input.innerHTML=ans;
        num="".concat(ans);
        expression = [];
    }
    else if(classValue.includes("clear")){
        expression = [];
        input.innerHTML="<span>.</span>";
        num="";
    }
});