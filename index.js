var objectArray = [];




 
 
function calculate(){
if (toString()=="") {
    return;
}
   else {
    var x =eval(toString());
    objectArray = [];
    objectArray.push(x);
    arrayToDisplay();
}
    }

function del(){
    objectArray.pop();
    arrayToDisplay();
}


function allClear(){
    objectArray = [];
    arrayToDisplay();
}
    

function input(s){
    objectArray.push(s);
    arrayToDisplay();
    
   }

function toString(){
    var str="";
    for(i = 0;i<objectArray.length;i++){
        str +=objectArray[i]
    }
    return str;
}

 
function arrayToDisplay(){
    
    document.getElementById('display').value = toString();
        
    
}
function specialInput(x){
    let mathArray = ['+','-','*','/','.','('];
    let b = false;
    let c = false;
    let k =objectArray[objectArray.length - 1];
    let displayValue = document.getElementById('display').value;
    let isFloat = (displayValue*10%10)>0 ;
    
    
    for (i = 0; i<mathArray.length;i++){
        if(mathArray[i]==x){
            b = true;
        }
         if(mathArray[i]==k){
            c = true;
        }
        
    }
    
        
    
    if (k==x){
        return;
    }
     else if (b&&c) {
        objectArray[objectArray.length-1]=x;
        arrayToDisplay();
    
     }
    else if (isFloat&&x=='.'){
        return;
    }
    
    
    else {
        objectArray.push(x);
        arrayToDisplay();
    
    }
    if (objectArray[0]=='.'&&x=='.'){
        objectArray[0] = '0';
        arrayToDisplay();
    }
    
}













