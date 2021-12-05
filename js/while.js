//Create a while loop that uses console.log() to create the output shown below.
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

let i = 1
do {
    let result = 0     // set variable so i can use result on next line.
    result = 2 ** i;
    console.log(result);
    i++
}
while (i < 17)
// change into "for loop" . It works as well!!
// for(let i = 1 ; i < 17; i++){
//     let result = 0
//     result = 2 ** i;
//     console.log (result);
// }


// repeat practice on exercise break / continue.
//Prompt the user for an odd number
// between 1 and 50. Use a loop and
// a break statement to continue prompting the user if they enter invalid input.

let userInput = 0;
do {
    userInput = prompt("Please input any odd number between 1 - 50")
    if (isNaN(userInput){
        alert("That is not a number");
    } else if (userInput > 50 || userInput < 0) {
        alert(" That was out side limit of the number requested")
    } else if (userInput % 2 === 0) {
        alert(" That is not an ODD NUMBER !! ")
    } else {
        prompt(" YAY !!! Your number met the criteria ! Good job!")
        break;
    }
} while (true)