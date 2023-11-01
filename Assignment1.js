"use strict";
// //convert a number to array
// //capitalise first letter
// //remove non printable ascii character from a given string
//Assignment -Question 1
// class NumberToArray{
//     userNumber:number=0;
//     arrNumber:number[]=[];
//     constructor(userNumber:number){
//         this.userNumber=userNumber;
//     }
//     numberArrayMethod=()=>{
//         // var rem:number=1;
//         console.log("Hi");
//         let numberCopy = this.userNumber;
//       while(numberCopy!==0){
//        var reminder:number=numberCopy%10;
//        this.arrNumber.push(reminder);
//        numberCopy=Math.floor(numberCopy/10);
//       }
//       console.log(this.arrNumber.reverse());
//     }
// }
// var num=new NumberToArray(534);
// num.numberArrayMethod();
//Assignment question 2
// class Capitalisation{
// userWord:String="" //declaring instance variable
// //constructors
// constructor(userWord:String){
//     this.userWord=userWord;
// }
// //method to capitalize firstletter
//     capitalised=()=>{
//        var letter1:string=""
//        var newWord:string=""
//        var i:number=0;
//        for(i==0;i<this.userWord.length;i++){
//         if(i===0){
//             letter1=this.userWord[i].toUpperCase();
//         }
//         else{
//             letter1=this.userWord[i];
//         }
//         var newWord=newWord.concat(letter1);
//        }
//        console.log(newWord);
//     }
// }
// var sName:String=String(window.prompt("enter name:"));
// var cap=new Capitalisation(sName);
// cap.capitalised();
//Assignment Question 3
class CheckAscii {
    //constructors
    constructor(userWord) {
        this.userWord = ""; //declaring instance variable
        this.userWord = userWord;
    }
    checking() {
        var i = 0;
        var asciiNum = 0;
        var newWord = "";
        for (i == 0; i < this.userWord.length; i++) {
            asciiNum = this.userWord.charCodeAt(i);
            if (49 <= asciiNum && asciiNum <= 57 || 65 <= asciiNum && asciiNum <= 90 || 97 <= asciiNum && asciiNum <= 122) {
                newWord = newWord.concat(this.userWord[i]);
            }
        }
        console.log(newWord);
    }
}
var sWord = String(window.prompt("enter Words:"));
var asciiWord = new CheckAscii(sWord);
asciiWord.checking();
