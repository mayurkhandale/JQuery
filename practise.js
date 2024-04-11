console.log("hiii");

// 1 to 10  count
let count = ''
for (let i = 1; i <= 10; i++) {
    console.log(i, '44')
    count += i + "<br>";

}
document.getElementById('counter').innerHTML = count


// display Array list into ui
let list=["Apple","Banana","Mango","Gauava","Orange"];
let text='';
for(let item=0;item<list.length;item++){
  text+=list[item]+"<br>"
}
document.getElementsByClassName('list')[0].innerHTML=text;

// remove dublicate Array Value with predefine method
let names=["mayur","bhushan","nick","vikas","mayur","vikas"]; 

function removeDublicate(param){
  let results= [...new Set(param)]
  document.getElementById('removedb').innerHTML=results
}
removeDublicate(names)

// remove dublicate method without using predefine method
let store=[]
function removePure(param){
  names.forEach(items=>{
    if(!store.includes(items)){
       store.push(items)
    }
  })
}

removePure(names)
console.log(store,'41::')

// display list which one is dublicate

function valueIsDublicate(param){
  let demo= names.filter((items,index,arr)=>arr.indexOf(items)!=index)
  console.log(demo,'47::')
}
valueIsDublicate(names)

// display which value is not dublicate 

function valueNotDublicate(params){
   let result=names.filter((items,index,arr)=>arr.indexOf(items)===arr.lastIndexOf(items));
   //filter(item,index,arr=>arr.indexOf(item)===arr.lastIndexOf(item))
   console.log(result,'55::')
}
valueNotDublicate(names)

// getEvenNumber & display 1 to 10 between

let even='';

for(let i=0;i<=10;i++){
    if(i%2==0){
        even+=i+'<br>'
    }
}
document.getElementById('evenNumber').innerHTML=even;

// get odd Number & display  1 to 10;

let odd='';
for(let i=0;i<=10;i++){
    if(i%2!=0){
        odd+=i+'<br>'
    }
}
document.getElementById('oddNumber').innerHTML=odd;

// from array get odd numbers
let ArrayOdd=[];
let numbers=[1,2,4,6,8,6,8,5,9,0,,7,9,3,10]
function getOddArray(numbers){
    numbers.forEach(items=>{
        if(items%2!=0){
           ArrayOdd.push(items)
        }
    })
}
getOddArray(numbers)

console.log(ArrayOdd,'odd')

//display reverse string

let userName="mayur rajput";

function reverseString(param){
   console.log(param.split('').reverse().join(''),'100')
} 
reverseString(userName)

// find max length from Array using predefined method.
let listNumber=[22,33,54,33,22,11,44,566,67,7];
console.log(Math.max(...listNumber),'107')
console.log(Math.min(...listNumber),'107')


// find max number without predefined method
let val=listNumber[0]
function maxNumber(param){
   for(let i=0;i<param.length;i++){
      if(listNumber[i]>val){
        val=listNumber[i]
      }
   }
}

maxNumber(listNumber)

console.log('max',val)

// find min number without predefined method
let minVal=listNumber[0]
const minNumber=(param)=>{
   for(let i=0;i<param.length;i++){
      if(param[i]<minVal){
        minVal=param[i]
      }
   }
}

minNumber(listNumber)


console.log('min',minVal)
let a1=document.querySelector('p');
let b1=document.querySelectorAll('p')
console.log(a1,b1,'selector')

//  sort numeric data from array ascending order

function sortArray(param){
 console.log(param.sort((a,b)=>a-b),'sort asc')
}
sortArray(listNumber)


//  sort numeric data from array descending order

function sortArrayDesc(param){
    console.log(param.sort((a,b)=>b-a),'sort desc')
   }
   sortArrayDesc(listNumber);

// sort alphabetic from  array 

function sortAlpha(param){
   console.log(param.sort(),'sort apha')
}
sortAlpha(list)

// sort descending order
function sortDesc(param){
    console.log(param.reverse(),'desc')
}

sortDesc(list)

patientName="mayur"
console.log(patientName,'172::');
var patientName
console.log(patientName,'174')

// destructure object example 
let carDetails={
   model:'new1',
   carName:"Range Rover",
   carPrice:'1cr',
   carColor:"black",
   carFeature:{
      a11:"smooth",
      b1:"innovation"
   }
   
}

// withount destructuring object
console.log(carDetails.model,carDetails.carPrice,'without destructure');

// with destructure
const {carName,carColor}=carDetails
console.log(carName,carColor,'destructure');

//  destrucure nested Object
const {carFeature:{a11}}=carDetails
console.log(a11,'nested destructure');

// spred operater example
let s1=[1,2,3,4];
let s2=[2,3,54,6]
console.log([...s1,...s2])

// rest operater example
let restNumber=[1,2,3,4];
const [first,...rest]=restNumber
console.log(first,'first');
console.log(rest,'rest')

// write a function pass string as a parameter and return alternate casing string 
//  example :- 'HeLLo'  --> hEllO
function alternateCasing(casing){
  let text='';
  for(let i=0;i<casing.length;i++){
     if(casing[i]===casing[i].toUpperCase()){
       text+=casing[i].toLowerCase();
     }else{
       text+=casing[i].toUpperCase()

     }

    
  }
  console.log(text,'225::')
}

alternateCasing("maYur Rajput");


// display current Day 
let getDay=new Date();
const days=["Sunday","Monday","TuesDay","WednesDay","ThusDay","Friday","SaturDay"]
console.log(getDay.getDay(),'233::');
console.log(`Today is : ${days[getDay.getDay()]}`);

// display the all format date time 
let today=new Date();

const dd=today.getDay();
const mm=today.getMonth()+1
const getYear=today.getFullYear();
// format is dd-mm-yy
today=dd+"-" +mm+ "-" +getYear
console.log("Today Date is ",today);
//format is dd/mm/yy
today=` ${dd} / ${mm} / ${getYear}`;
console.log("Today Date is ",today);
// format is mm-dd-yy
today=mm+'-'+dd+'-'+getYear
// format is mm/dd/yy
console.log("Today Date is ",today);
// format is mm/dd/yy
today=`${mm}/ ${dd}/${getYear}`;
console.log("Today Date is ",today);
console.log(dd,mm,getYear,'241');

// let newData=[]
// let oldData=[]
let apiData=[
   {Name:"mayur",Work:"ui",Age:22,name:"mr",work:"front-end",age:23},
   {Name:"arjun",Work:"Busness",Age:30,name:"aj",work:"Bi",age:31},
   {Name:"shiva",Work:"Team Lead",Age:31,name:"mr",work:"Tl",age:32}
]

// apiData.forEach(items=>{
//    oldData.push({Name:items.Name,Work:items.Work,Age:items.Age})
//    newData.push({name:items.name,work:items.work,age:items.age}
//  )
// })
// let oldData = apiData.map(({ Name, Work, Age }) => ({ Name, Work, Age }));
// let newData = apiData.map(({ name, work, age }) => ({ name, work, age }));
let oldData = [];
let newData = [];

apiData.forEach(item => {
    let oldObj = {};
    let newObj = {};
    Object.keys(item).forEach(key => {
        if (key.toLowerCase() === 'name' || key.toLowerCase() === 'work' || key.toLowerCase() === 'age') {
            oldObj[key.charAt(0).toUpperCase() + key.slice(1)] = item[key];
            newObj[key] = item[key];
        }
    });
    oldData.push(oldObj);
    newData.push(newObj);
});

console.log(oldData, newData, 'olds');


// generator how to use  it
function* generator() {
   yield 10;
   yield 20;
   yield 30;
}

let num=generator();
console.log(num.next(),"gen")
console.log(num.next(),"gen")
console.log(num.next(),"gen")
console.log(num.next(),"gen")
// console.log(num.next().done(),"gen")

// write  aprogram guess number 1 to 5 

let digit=Math.floor(Math.random()*6);
let guess=Number(prompt('enter a number between 1 to 6'));
if(digit==guess){
    console.log("your guess is correct",digit,'==',guess)
}else{
    console.log('not correct please try again!!')
}

// capitalize first charecter from each word

function capitalize(str){
   str=str.split(' ');
   for(var i=0;i<str.length;i++){
       str[i]=str[i][0].toUpperCase()+str[i].substr(1);
   }
   return str.join(' ');

}

console.log(capitalize('This is javascript code Practise'),'444')
