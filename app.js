        //Exercise 1
console.log("EXERCISE 1:\n==========\n");

for (let i=0; i < 100; i++){
  if (i % 2 == 0){
    continue;
  } else {
    console.log(i);
  } 
}

        //Exercise 2 
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i < 100; i++){
  if(i % 3 == 0 && i % 5){
    console.log("FizzBuzz");
  }else{
    if(i % 3 == 0){
      console.log("Fizz"); 
    }
    if(i % 5 == 0){
      console.log("Buzz");
    }
  }
}


        //Exercise 3
console.log("EXERCISE 3:\n==========\n");

        //exercise 1 while loop:
console.log("exercise 1 as while loop:\n=======\n");        

let i =0;

while(i < 100){
  if (i % 2 !== 0){
    console.log(i);
  }
  i ++; 
};


    //exercise 2 do/while loop:
console.log("exercise 2 as do/while loop:\n=======\n");        

let x = 1;

do {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("FizzBuzz");
  } else {
    if (x % 3 === 0) {
      console.log("Fizz");
    }
    if (x % 5 === 0) {
      console.log("Buzz");
    }
  }
  x++;
} while (x < 100);

         //Exercise 4
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500

let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 0; i <= n; i++ ){
  if(i == value){
    console.log(`Found ${value}!`);
    break;
  }
}
console.log(`Did not find ${value} within 1 -${n}..`);


