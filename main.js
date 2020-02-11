//function Declaration


//calling function
onTestDemoDeclaration();//call


//defining function
function onTestDemoDeclaration(){
 console.log("Test Demo");
}


//calling function 
onTestDemoDeclaration();//call



//function expression
//function define

//onTestDemoExpression1();//exception throw

//console.log(onTestDemoExpression3("hello","javascript"));//onTestDemoExpression3 is not a function


let onTestDemoExpression1 =function(){
    console.log("Hello Function Expression 1");
}

let onTestDemoExpression2 = function(strName){
    console.log(strName);
}

var onTestDemoExpression3 = function(strFirstName,strLastName){
    return `${strFirstName} ${strLastName}`;
}

//calling function
onTestDemoExpression1();
onTestDemoExpression2("Nahid");

let result = onTestDemoExpression3("Nahid","Fatima");
console.log(result);

console.log(onTestDemoExpression3("Nahid","Fatima"));





