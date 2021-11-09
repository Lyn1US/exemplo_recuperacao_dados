
var database;

function arr (array){

    return array.map((element)=>{
        if(element.name == 'Lyniker'){
            return element.name;
        }
        
    })

}

function sum(a,b){
    return a+b;
}

database = 'dados';

// TestScreen

var hello = 'ola';

export {
    sum, arr , database,
    hello,
}