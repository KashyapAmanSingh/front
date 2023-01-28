



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
// var element = document.getElementById("header").getAttribute("class");      target kay under ka Attribute ke value return karta hai
// var element = document.getElementById("header").getAttribute("class");    
// var element = document.getElementById("header").getAttributeNode("class");        Attribute node print every thing like propertyname ; attribute name etc    
// var element = document.getElementById("header").getAttributeNode("class").value;      return value of target ,;; but not prescribed to do this 
// var element = document.getElementById("header").innerHTML;    
// var element = document.getElementById("header").innerText; 
// var element = document.getElementById("header").attributes;                    REturn in array  of collection of array
// OR
// var element = document.getElementById("header").attributes[0]; 
// var element = document.getElementById("header").attributes[0].value;     value of attibute that is on index number 0 
// var element = document.getElementById("header").removeAttributes[0]; 

//SET VALUE
// var element = document.getElementsByClassName("HEADER2").innerTEXT= "<h1>SETTING ARRTIBUTE</h1>"     // THIS WILL PRINT DIRECTLY WITH H TAG TO AVOID THIS USE .InnerHTML INstead of InnerText

// var element = document.getElementById("header").innerHTML = "<h1>SETTING ARRTIBUTE</h1>"  
// SAME

// var element = document.getElementById("header").innerText = "<h1>SETTING ARRTIBUTE</h1>"  
// var element = document.getElementById("header").innerHTML = "<h1>SETTING ARRTIBUTE</h1>"  


// var element = document.getElementById("header").setAttribute("class","sss") ;    this will set any attibute directly form JS file with setAttribute("what to set ", "what value to set like for style we set here 2px solid red")
//  var element = document.getElementById("header").getAttribute("class");  
// OR SET ATTRIBTE BY attribute index.value

// var element = document.getElementById("header").attributes[1].value=  "SSS";
// var element = document.getElementById("header").getAttribute("class");
// but later arrtibte is easy to set

// var element = document.getElementById("header").removeAttribute("style");                   by this method we delete all attribute that we want to delete by simply targer.removeAttribute(""name of attri that we want to remove")

// console.log(element);

// _____________________________________________________________________________________________________________________________________________________
// _________________________________________DOM QUERY SELECTOR ______________________________________________________________________________--?
// __________________________________________________________________________________________________________________________________________________________________?




// var element = document.querySelector("header").attributes
// console.log(element);








// ___________________________________________________________________________________________________________________________________________________________________________________________

// __________________________________________________________________________________________________________________________________________________________________________________________



// const team = [
//         { name:"kashyap" , role:"frontend developer" , skill: "mern" , rank :3      },
// 				  { name:"AMAN kashyap" , role:"BACKEND developer" , skill: "mern" , rank :3      },
// 				  { name:"AYUSH kashyap" , role:"FULL developer" , skill: "mern" , rank :3      },
// 				  { name:"UTKARSH kashyap" , role:"frontend developer" , skill: "mern" , rank :3      },
// 				  { name:"AARAV kashyap" , role:"MERN developer" , skill: "mern" , rank :3      },
// 				  { name:"ABHISHEK kashyap" , role:"MEAN developer" , skill: "mern" , rank :3      }

// ]

//                   team.forEach((team,index, arr)   =>{ console.log(  index + "  " + team.role + " " + team.rank   + "  "  + team.skill   + "  " + arr) })             
				// value at 1st parameter 
				// index at second
				  //   arr  IS ARRAY OBJECT BELONG TO CURRENT ARRAY which array
				     


  ///  const age =[ 33,44,56,76,12,65,09,65];

// age.forEach(( age,index)=>  console.log(  typeof( index + "  " + age)))              this will return string if only console.log(age)  , this will return data in form of ARRAY
      //age.forEach(function(value,index,arr) {console.log(value , arr[3])} );



// __________________________________________________________FILTER________________________________________________________________________________________________________________________________-



// const  data = [33,44,55,12,32,23,45,56,76,12];

//          data.filter(  (data,index,arr) =>  {if(data>40){ console.log(data+"  "  +  index  +   "  "  + arr[index]) ;}else{ console.log(  "false") }}                  )



// _______________________________________________________________sorting___________________________________________________________________________________________________________________________________________



















// ______________________________________________________________________FOR IN LOOP________________________________________________________________________________________________________________________________________________
//  for(var x in arrayname)

            //  var a = {  fname:"aman",
            // lname:"kashyap",
			// age:18,
			// country:"india"
            //         };

    
			//  for(var i in a){console.log(a.age + "  " + a.fname  + "  " + a.lname     )}
// taKE A VARIAble like this (var key in a )  matlab A ka sara value x mai cahala jayegaa    for printing console.log(a[x])


// __________________________________________________________________________________FOR OF LOOP________________________________________________________________________________________________________________________________________________________

// SYNtax-

// for(var value of array){    statement      }
//   var a = [56,76,88,90,34]
// var a = ["aman", "kashyap", "akash" ,56,76,40,88,90,34]

  
// for(var value of  a  ) {console.log(value[2] )}
 

// for(var value of  a  ) {console.log(value[0])}    Allow to access the values DIRECTLY of the object directly,without having to use an index       ,, yeh srting kee har ek single object ko print kar deta hai 


                                            // Vs.

// for(var i in a){console.log(a[0])}                   for in only ALLOW  TO access srting not every single element of string
                                                    //  SIMPLY, FOR IN LOOP ALLOW TO ACCESS KEY{PROPerty} OF OBJECT RATHER THAN VALUE ,,... FOR ARRAY ITS INDEX NUMBER                     // gives index number



// VVi
// value show kar ha toh ----- for of loop
//  agar object kay key aur array kay index Number deekhnay ha toh ---    for in loop


        // a.find((datafroma)    =>   {if(datafroma >=40){console.log("print all is well"+ "  " + a )}else{console.log("inter valid")}})
		// a.findIndex((datafroma)    =>   {if(datafroma > 40){console.log("print all is well"+ "  " + datafroma )}else{console.log("inter valid")}})







// ___________________________________________________________________________________________________________________________________________________________________________________________

// _________________________________________DOM QUERY SELECTOR_________________________________________________________________________________________________________________________________________________





    //   var ele = document.querySelectorAll(".hed2").innertext = "  <h1> this is only for check </h1>";
	// var ele = document.querySelectorAll(".hed2")           sara hed2 classs ka document return karr diya gya 

	// var ele = document.querySelectorAll(".hed2").innerText
    //           console.log(ele);

//   var ele = document.getElementsByClassName(".hed2").innerText
			//   var ele = document.querySelector(".vac").innertext;


			// var ele = document.querySelectorAll(".hed2")[1].innerText;




			// var ele = document.querySelector(".vac h3").inner
            //   console.log(ele);




			// ___________________________________________________________________________________________________________________________________________________________________________________________

			// _________________________________________DOM CSS STYLing_________________________________________________________________________________________________________________________________________________
			
// 3 method to set and get css value 
// 1- Style
// 2 - className
// 3 - classList



var ele = document.querySelector(".vac").attribute.style.color[1]

console.log(ele);
