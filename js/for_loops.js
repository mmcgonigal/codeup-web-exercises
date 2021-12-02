

for(let i=0; i<10; i++){
    console.log("for loop iteration #" + i)
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
        break;
        console.log("you will never see this line")
    }
}
for (let i=0; i <=20; i++){
    if(i%2 !==0){
        continue;
    }
    console.log("Here is a lovely even number:  "+ i)
}
