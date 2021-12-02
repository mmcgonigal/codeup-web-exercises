

for(let i=0; i<10; i++){
    console.log("for loop iteration #" + i)  //
}

let i=0;
while(i<10){
    console.log("for loop iteration number " + i);
    i++  //
}

for (i=0,j=9; i<10; i++,j--){
    console.log("for loop iteration # " + i + ", j = " + j); // why is this function not working if i put "use strict"???
}

let numberToStop = 5 ;
for (let i =3; i<15; i++){
    console.log("loop counter is:  " + i);
    if(i === numberToStop){
        console.log("We have reached to stopping point ! : break !! ")
        break;                           //break = as soon as hit break , get out of code and iteration.
        console.log("you will never see this line") // that's why this line was not executed.
    }
}
//while(true){
//  let answer = confirm("Do you want to continue?"  // while true, keep do this line
//  if(!answer){                                   //then, when it is false, in this case  confirm is not true,
//      break;                                      // it will break.
//  }
//}




for (let i=0; i <=20; i++){
    if(i%2 !==0){
        continue;       //continue =  it doesnt get out of iteration ,continue to next iteration
    }
    console.log("Here is a lovely even number:  "+ i)
}


for(let i=0 ; i <= 20; i++){
    if(i%2){   // if(i%2) tobe true, 1%2 should be 1 because true =1 false =0
                // so when i is odd number, it met the continue and  and went back to iteration which is i<=20;
                 //
        continue;
    }
    console.log(i)
}


// let i =1;
// do{
//     console.log ( "Little different from just 'while lool'! "); // difference between do while and while is
//         i ++                                                    //do while execute the code first then check condition.
// }while (i<5 )                                               //so 'do while' execute code at least once.
//

