function add(a,b){
    let sum = a+b;
    return sum;
}

export default add;

function sub(a,b){
    let sub = a-b;
    return sub;
}

function mult(a,b){
    let mult = a*b;
    return mult;
}

function div(a,b){
    let div = a/b;
    div = div.toPrecision(3);    
    return div;
}

export {sub, mult, div};