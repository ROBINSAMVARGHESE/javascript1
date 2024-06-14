// 1. Write a function calculate Factorial (n) that takes a non-negative integer n and returns the factorial of n.(factorial of 5= 5*4*3*2*1=120)

let n= 5;
function factorial(n) {
    if (n===0) {
      return 1;  
    }
    else {
        return n*factorial(
            n-1  
        );
    }
}
console.log('Factorial = ' + factorial(n));

//2.Write a function is Prime(num) that takes a positive integer num and returns true if the number is prime, and false otherwise

function checkPrime(num) {
    let i, n = true;
    for (i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            n = false;
            break;
        }
    }
    if (n == true)
        console.log(num + " is prime");
    else
        console.log(num + " is not prime");
}
checkPrime(3);
checkPrime(4);

//3. Write a function sum Even Numbers (start, end) that takes two integers start and end, 
//  and returns the sum of all even numbers in the inclusive range from start to end.
let Sum=0;
function SumEvenNumbers(start, end){
    
    const evenarray=[]
    
    for(let i=start;i<=end;i++)
    {
         if(i%2==0)
            {
                evenarray.push(i)
            }
    }
    console.log(evenarray);
    for(let j=0;j<5;j++)
        {
            Sum=Sum+evenarray[j]
        }
        console.log(Sum);
}
SumEvenNumbers(1,7);

// 4. Write a JavaScript program to remove items(clicking on a button) from a drop-down list.

// Sample HTML file :
 // <select id="colorSelect">
 // <option>red</option>
 // <option>green</option>
 // <option>white</option>
// <option>black</option>
//  </select>

function removecolor()
{
var rele=document.getElementById("colorSelect");
rele.remove(rele.selectedIndex);
}


// 5. Write a JavaScript program to change the  color given text in p tag.

// Eg : if you select green then the color of the text should be green 
// Sample HTML file :
 // <select id="colorSelect">
 // <option>red</option>
// <option>green</option>
// <option>white</option>
// <option>black</option>
// </select>
// <button>change Color </button>
// <p>”sample test….” </p>

function changeColor() {
    var js = document.getElementById("js");
    var selectColor =
        document.getElementById("selectColor");
        var selectedColor =
        selectColor.options[selectColor.selectedIndex].value;
        js.style.color = selectedColor;
}


// 6. Write a JavaScript function to get the values of First and Last names of the following form.

// Sample HTML file :
// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
// <title>Return first and last name from a form - w3resource</title>
// </head><body>
// <form id="form1">
// First name: <input type="text" name="fname" value="David"><br>
// Last name: <input type="text" name="lname" value="Beckham"><br>
// <input type="submit" value="Submit">
// </form>
// </body>
// </html>

function myFunction() {
    document.getElementById("form1").innerHTML = "David Backham";
  }

//7. Write a JavaScript program to display a random image (clicking on a button) from the following list.
// Sample Image information :"http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg&quot;,width: "240", height: "160"
// "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg&quot;, width: "320", height: "195"
//  "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg&quot;, width: "500", height: "343"


function display_random_image() 
{
     var theImages = [{
        src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        width: "240",
        height: "160"
    }, {
        src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        width: "320",
        height: "195"
    }, {
        src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
        width: "500",
        height: "343"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}









































