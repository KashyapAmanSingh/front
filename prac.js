



//           var a = Number(prompt("enter "));
//           var b= Number(prompt("2nd time"));
//           var c = a+b;
//           console.log(c)
// ;

// if we dont use number key word then adding is perform as string not like array 


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





var sstr = "kashyap aman singh whats going";
    // var p  = ;
//   console.log(sstr.length);
// console.log(sstr.toLowerCase());
// console.log(sstr.toUpperCase());
// console.log(sstr.includes("k"));
// console.log(sstr.startsWith("kashyap"));
// console.log(sstr.endsWith(" going"));                       // if there is any space then it must incule in this parameter

// console.log(sstr.search("k"));
// console.log(sstr.match(/a/g));               these match makes array if you want to collect element globally then just pass va/g?lue in  parameter of match /element

// console.log(sstr.indexOf("k"));
// console.log(sstr.lastIndexOf("a"));                 this  return from last index like here a from last index on 21

// indexof and search are almost same 

// console.log(sstr.replace("aman" , "bala"));  //  replace( WHom TO REPLACE , fROM WHAT   )

// console.log(sstr.replace( "a", "X"));  //   BUT IN THIS CASE  , AS A IS PRESENT GLOBALLY BUT OVER HERE A IS REPLACED BY X ON 1ST OCCURING A ONLT IN FULL COLLECTUIN           

// console.log(sstr.replace( "/a/g", "X"));
// console.log(sstr.replace( /a/g, "m"));            for replace globally

    //    console.log(sstr.trim());

  //  console.log(sstr.charAt(10))     ;    //   the parameter that index you give this print like here at index 0 k         
//   console.log(sstr.charCodeAt(0))                     Asky table   at index 0 k has 107 number in askyy
// console.log(sstr.fromCharCode( 107 ));    


// CONCAT 
// var t= "bala ji";
// var r = "lala ji";
// var c = sstr.concat(t,r );
// console.log(c)

// console.log(sstr.split("  "));      split jahan space hai 
// console.log(sstr.split(" a "));           split jahan jahan a hai

// console.log(sstr.repeat(6));                 repeat Xtimes you want to make it happen



// The index to the end of the specified portion of stringObj.The substring includes the characters up to, but not including, the character indicated by end.If this value is not specified, the substring continues to the end of stringObj.
  
// console.log(sstr.slice(3));                  char kay bad saab rerurn karr diya 
//    console.log(sstr.slice(0));                     for 0 it will return all
    // console.log(sstr.slice(-7));         from last 7 char
//    string.slice(start?: number | undefined, end?: number | undefined): string


// console.log(sstr.substr(2));             char 2 se saab return ksr  dega 
// console.log(sstr.substr(0,5));                   substr(from: number, length?: number | undefined): string

// console.log(sstr.substring(0,5));             count till 5 not 5 but slice do count 5 also 


// .tostring()   change in Number
// valueOf();       defsalut


// _______________________________________________________________________________________________________________________________________________________________________________
// _________________________MATH METHOD______________________________________________________________________________________________________________________________________________________


// var a = Math.ceil(2.44);
// var a = Math.ceil(-2.44);

// var a = Math.floor(2.44);

// var a = Math.round(2.44);
// var a = Math.round(7.54);

// var a = Math.trunc(3.98 );           // return only integer

// var a = Math.max(2.44,33,43,544,999,999.99);          similarly min work for return minium of list

// var a = Math.sqrt(4);
// var b= Math.cbrt(27);

// var a = Math.random();
// var a = Math.floor(Math.random()*1000 +1);  between 1 and 1000 

// var a = Math.abs(-66.8767);          return only absolute value because -ve also as absolute  


// var a = Math.PI;         // pi is not an function so only PI

// console.log(a);



// _______________________________________________________________________________________________________________________________________________________________________________
// _____________________________________ DaTe Method______________________________________________________________________________________________________________________________________________________


                // for using objecct of DaTE MAKE A    new varialbe as vae d = new Date

//  var t = new Date();
// //  console.log(t);

// // console.log(t.getDate());
// // console.log(t.getMonth());
// // console.log(t.getDay());
// // console.log(t.getTime());
// // console.log(t.getMilliseconds());
// // console.log(t.getMinutes());
// console.log(t.getSeconds());
// console.log(t.getMilliseconds());
// console.log(t.getUTCSeconds());


// var t = new Date('january 5 2010');                // with parameter 

// console.log(t.getDate());
// console.log(t.getMonth());
// console.log(t.getDay());
// console.log(t.getTime());
// console.log(t.getMilliseconds());
// console.log(t.getMinutes());
// console.log(t.getMilliseconds());
// console.log(t.getSeconds());
// console.log(t.getMilliseconds());
// console.log(t.getUTCSeconds());

// _________________________________________________SET DATE METHOD________________________________________________________________________________________________-

var t = new Date();
//  t.setDate(20);                PRINT THIS MONTHS DATE AND DAY
// t.setFullYear(2029);              2029 KO DEVICE KAY DATE ANUSAR KON SA DATE HOGA

// t.setDate(20)
// t.setTime(9)


// console.log( t);
           
	// // Initialization
	// let date = new Date();
	
	// // Execution
	// let output = date.setTime(400);
	
	// // Display Output
	// console.log(`setTime() Output:`, output, date);



	// // Initialization
	// let date = new Date();
	
	// // Execution
	// let output = date.setTime(-300000000000);
	
	// // Display Output
	// console.log(`setTime() Output:`, output, date);




// _______________________________________________________________________________________________________________________________________________________________________________
// _____________________________________ D.O.M ( DOcument Object Method)______________________________________________________________________________________________________________________________________________________



// var element = document.all[];
// var element= document.links[0];     // return total anchor tag with index number 
// var element = document.images;              
// var element = document.doctype;
// var element = document.URL;
// var element = document.domain;
// var element = document.baseURI;    //  retun full url

// var element = document.getElementsByClassName("container")[0];
// var element = document.getElementsByTagName("div")[1];

// var element = document.getElementById("header").getAttribute("id");
var element = document.getElementById("header").getAttribute("class");
console.log(element);




































