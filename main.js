for(let i = 1; i <= 100; i += 1){
    if( i % 5 == 0 && i % 7 == 0){ //check if divisble by both
        console.log("ChickenMonkey");
    }
    else if(i % 5 == 0){ //check divisible by 5
        console.log("Chicken");
    }else if(i % 7 == 0){ //check divisible by 7
        console.log("Monkey");
    }else{ 
        console.log(i); // otherwise print number
    }
}