










//           var a = Number(prompt("enter "));
//           var b= Number(prompt("2nd time"));
//           var c = a+b;
//           console.log(c)
// ;

// if we dont use number key word then adding is perform as string not like array 


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





// var sstr = "kashyap aman singh whats going";
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

// var t = new Date();
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
// 3 - classList   -------- prior it has four methods , toggle,length, contains

// classList - THIS RETURNS ARRAY.it has two method add & remove
// className - this retun a srting 




// var ele = document.querySelector(".vac").style.color= "red"

// var ele = document.querySelector(".vac").style.background= "red"
// var ele = document.querySelector(".vac").style.width="30px"

// ___________________________________________________________________________________________________________________________________________________________________________________________

//  agar className use kaarna hoo toh ; first assign class name like this  
// var ele = document.querySelector("body").className = "abc";   ,, THEN AFTER THAT MAKE .CLASS{   STATEMENT }   IN css  FILE 
// ___________________________________________________________________________________________________________________________________________________________________________________________



// var ele = document.querySelector("body").className = "abc  xyz";   
// //   yahan xyz aue abc do class hai but last wale class  kee priority jyada hogi


// var v  =  document.querySelector(".vac").attributes
// console.log(v);
// var lis = document.querySelector("body").classList = "abc  xyz"; 
// // ----------------------------------------classList has 2 method add & remove 
// var lis = document.querySelector("body").classList.add("abc" , "gfg"); 
// var lis = document.querySelector("body").classList.remove("abc  xyz "); 
// var lis = document.querySelector(".outer").classList.length;     how many class used here 





// -**********************************--------------MOST IMPORTANT TOGGLE FUNCTION-----------*************************************************************--------------------------------------------------------------------------------------------------------------------------------------------------------
// step - 1 --- firstly target and addEventListener("eventname like click not onclick", fn_name that you have to play onclick etc )
// step- 2 --- second  target then make fn that you have  assign in addEventListener parameter 
// step - 3 --- in function target.classList.toggle("that you want to toggle may be class , id or etc ");
//   step ----4 -- make a css or somthing other that u want to toggle for css add in csss file to property according to your want 


// var ele;
// document.querySelector(".HEADER2").addEventListener( "click", bac );

// function bac()  {   
//  document.querySelector(".HEADER2").classList.toggle("mystyle"); 

// // document.querySelector("outer").classList.add( "gfg");\\\


// }

// console.log(lis);
// console.log(ele);


// length method of classList  - it basically use with . item(0,1,2--)  . retun item assign on particular index 



// var ele;
// document.querySelector(".HEADER2").addEventListener( "click", bac );

// function bac()  {   
//   var l = document.querySelector(".HEADER2").classList.item(0); 

// console.log(l);
// }

// contains method of classList it return true if that element exist ,, return false if not exist



// var ele;
// document.querySelector(".HEADER2").addEventListener( "click", bac );
// var  e =0;
// function bac()  {   
//   var l = document.querySelector(".HEADER2").classList.contains("HEADER2 "); console.log(l); 

//   e++ ;  console.log(e); 
// }


// }

//  <body>

//  <button onclick="myFunction()">Try it</button>

//  <div id="myDIV">
//  This is a DIV element.
//  </div>

//  <script>
//  function myFunction() {
// 	var element = document.getElementById("myDIV");
// 	element.classList.toggle("mystyle");
//  }
//  </script>



// ___________________________________________________________________________________________________________________________________________________________________________________________

// _________________________________________Addeventlistner(event, fn_name, usecapture)________________________________________________________________________________________________________________________________________________



// syntax  ----

// target.addEventListener("eventname like click/mouseenter etc",   fn name without () )


// var lis = document.querySelector(".HEADER2").oncontextmenu = eee;

// function eee(){  document.querySelector(".HEADER2").style.background = "red"                   }


// 2ND METHOd for addEventListener

// 		 document.querySelector(".vac").addEventListener( "mouseenter",  abc);
// 		 function abc(){  document.querySelector(".HEADER2").style.background = "red"   

// 		 document.querySelector(".HEADER2").style.color = "tan"   

// 		}


// 		document.querySelector(".vac").addEventListener( "mouseenter",  abc);
// 		function abc(){  this.style.background = "tan"   
//    this.style.color = "black"   


// 	   }


// BY USING ARROW FUNCTION  

// 				document.querySelector(".vac").addEventListener( "mouseenter", function(){  this.style.background = "tan"   
// 				this.style.color = "black"   });


// // 3RD PARAMETER OF addEventListener UseCapture , return true or false 


// // document.querySelector(".outer").addEventListener( "click", function(){ alert("oUUUter div ")   });

// // document.querySelector(".inner").addEventListener( "click", function(){ alert(" INNER dDiv ")   });


// document.querySelector(".outer").addEventListener( "click", function  bbb(){ confirm("outer div ")}, false    );

// document.querySelector(".inner").addEventListener( "click", function(){ confirm(" INNER div ")} , false );


// jo UseCapture true hoga woh pehle call hoga 
// jo use capture false hoga woh baad mai call hoga kahin payyy bhee click karo aap


// _____________________________//  removeEventListener("onclick",  fn_name);____________________________________________________________________________________________________________________________________________________________________________________________________________

// _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// document.querySelector(".inner").removeEventListener( "onmouseenter", bbb );


// _____________________________// DOM traveresal Method;____________________________________________________________________________________________________________________________________________________________________________________________________________

// _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________


// 1 - parentNode  - agar koi parent na ho toh fir bhe kuch n kuch return karga

// 2 - ParentElement - agar koi parent na ho toh null return karega

// 3 - children - target only child tag; use [ 0]- target only children at index 1

// 4 - childNodes -   agar na hua toh bhe kuch n kuch toh return karega  like txetnode bhe return karega;;; ish mai bhe [0] scare brac use hota hai , .innerhtml karne pad  sara inner show kar dega

// 5 - firstChild - kuch toh target karea like TAG, space,coomt,enter annything

// 6 - firstElementChild - sirf child ko target karta hai 

// 7 - lastChild           - kuch toh target karea like ,tag,space,commnt,Text,enter annything

// 8 - lastElementChild  - sirf child ko target karta hai 

// 9 - nextElementChild - sirf child  TAG ko target karta hai 

// 10 - nextElementSibling     -      only nextElementsibling tag

//  11 - previousElementSibling  - only previous tag  for innerhtml .innerHtml

//  12 - previousSibling -- this count everthing lile tag, space, comment, etc 

// 13 - nextSibling  -    this count everthing lile tag, space, comment, etc 
// 


// var e=   document.getElementById("in").firstElementChild.style.background= "tan";;
// var e=   document.getElementById("in").parentNode.style.background= "red";
// var e=   document.getElementById("in").lastElementChild.style.background= "tan";;
// var e=   document.getElementById("chd-c").previousElementSibling.style.background= "tan";;
// var e=   document.getElementById("chd-c").nextElementSibling.style.background= "tan";;

// var e=   document.getElementById("chd-c").parentElement.style.background= "tan";;


// ----------------------------------------------------------------------WE PLAY WITH TOGGLE FUNCTIONOVER HERE---------------------------------------------------------------------------------------  

// var e = document.getElementById("chd-c").parentElement.addEventListener("click", vcv);

// function vcv() {
// 	document.getElementById("ou").classList.toggle("mystyle")



// }


// // var e=   document.getElementById("chd-c").parentElement.style.background= "blue";;


// console.log(e);




// _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// _____________________________// DOM Create Method;____________________________________________________________________________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// createElement - for tag directly from js
// createTextNode - for creatung only text
// createComment - for creating comment 



//   var ele= document.createElement("h2") ;
//   var text = document.createTextNode("i am just testing dom create methods ");
//   var co= document.createComment("this is nothing but only a comment");

//   console.log(e,t,co);




// _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// _____________________________// DOM Append Method;____________________________________________________________________________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// appendChild
// insertBefore


//   document.getElementById("appendtest").style.backgroundColor= "red"
//      ele.appendChild(text);          1st step of append append text and tag

// 2nd atep of append is append appended text and tag into where you want to append 

//      //  document.getElementById("appendtest").appendChild(ele)   is tarah se append karne pad element last mai  append hoga 
// 	// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 	 var target = document.getElementById("he");
//      target.addEventListener("click",mvc);

// 	 function mvc(){  target.classList.toggle("mystyle") }

// // ---------------------------------------------------------------------------------------------Toggle 

// 	 var i = document.getElementById("appendtest").insertBefore(ele,target)
// 	                // simply targetparent.insertBefore(1st parameter will be what to append like here ele , 2nd parameter will be before which  like here document.getElementById("he"). )

// 	 // why query selector not work or get___byClassList
// 	// document.getElementById("appendtest").appendChild(co);      append comment 
//       console.log(ele);   
// 	  console.log(i);   


// _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// _____________________________DOM insertAdjacent Method____________________________________________________________________________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

//    here we dont need to create EventTarget, text, or comment seprately ///    these DOM insertAdjacent Method these append and create both work done by DOM insertAdjacent Method

// insertAdjacentElement -  tag create and append ex -   <p></p>
// insertAdjacentHTML  - create tag and text both like this    ex- <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio?</p>
// insertAdjacentTEXT  -  create text node and append them do both ex-  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 

// there is Total four positions to append 
// 1- beforebegin    
// 2 - afterbegin
// 3 - beforeend
// 4 - beforeend


//   var ele= document.createElement("h2") ;
//   var text = document.createTextNode("i am just testing dom create methods ");
// //   var co= document.createComment("this is nothing but only a comment");

// //   console.log(ele,text,co);

// ele.appendChild(text);



//    document.getElementById("appendtest").insertAdjacentElement("beforebegin" , ele )

// // vs ish se pehle wala jaise hum append kartay thay  Vs

//  document.getElementById("appendtest").insertBefore(ele,target)



//  insertAdjacentHTML  - create tag and text both like this    ex- <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio?</p>
//  ish mai hame alag se create aur append karne kee koi jaroorat nahi
// SIRF 2 STEP MAI SAAB KAAM 


// var newtagtext =  "<h2>Lorem, ipsum dolor sit amet consectetur adipisicing</h2>";
// document.getElementById("appendtest").insertAdjacentHTML("beforebegin" , newtagtext )

// var design = document.getElementById("appendtest").style.border = "2px solid blue"


// __________________________________________________--------------------------------------------------------------------------------------------------------
// // insertAdjacentText  -  create text node and append them do both ex-  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
// _________________________________________________--------------------------------------------------------------------------------------------------------



// var newtextonly =  "Lorem, ipsum dolor sit amet consectetur adipisicing";
// document.getElementById("appendtest").insertAdjacentText("beforebegin" , newtextonly )


// -----------------------------------------------------toggle only for prac ------------------------------------------------------------------------------------------

//    var target = document.getElementById("appendtest");
//         target.addEventListener("click",mvc);

//    	 function mvc(){  target.classList.toggle("mystyle") }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// _____________________________DOM Replace and Remove  Method____________________________________________________________________________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
//  1 - replaceChild()
//  2 - removeChild()
// we make unorder list for these practice you can make anything that you WANT TO DO REPLACE 

// var  newele = document.createElement("li");
// var newtexrt =  document.createTextNode("wow i m just using these ");

// newele.appendChild(newtexrt); 

// var target = document.getElementById("st");
// var oldele = target.firstElementChild;


//--------------------------------------------------------------------------------------------------------------------
// target.replaceChild(newele,oldele)
//--------------------------------------------------------------------------------------------------------------------
// target.removeChild(oldele)
//--------------------------------------------------------------------------------------------------------------------

// console.log(oldele);

// ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// _____________________________DOM cloneNode Method____________________________________________________________________________________________________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________________________________________________________________________________________________________________________

//   Step- 1 -- target1.appendChild(target2.cloneNode(true))            Ex-document.getElementById("nd").children[1].appendChild(document.getElementById("st").children[0].cloneNode(true))
// target1 -- where you have to paste copied item 
//   target -- 2 - what to copy 

// ------------------------------------------ELABORATED------------------------------------------------

// var target = document.getElementById("st").children[0];
//       var copied = target.cloneNode(true)
//   cloneNode(true)  ----------- This will copy tag and ineer text also agar false hota toh sirf tag  & attributecopy karta
//  then simply target where to copy and then append them where you have to paste 
// document.getElementById("nd").appendChild(copied);

// OR

// document.getElementById("nd").children[1].appendChild(document.getElementById("st").children[0].cloneNode(true))

// console.log(copied)


// ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// _____________________________DOM Contains() Method__________________________________________________________________________________________________________________________________________________________________________________
// ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________

//       var parent = document.getElementById("lis");
// 	  var target = document.getElementById("ab");

// 	  var find = parent.contains(target);
// console.log(find);



// _____________________________________________________________________________________________________________________________________________________________________________________________________________________________
// _____________________________DOM hasAttribute() & hasChildNodes() Method__________________________________________________________________________________________________________________________________________________________________________________
// ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// var target = document.getElementById("ab");
// var find = target.hasAttribute("style");
// console.log(find);


// var parent = document.getElementById("lis");
// var find = parent.hasChildNodes();
// console.log(find);



// _____________________________________________________________________________________________________________________________________________________________________________________________________________________________
// _____________________________DOM isEqualNode() Method__________________________________________________________________________________________________________________________________________________________________________________
// ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// CONDITION To get compared 
// 1 - Same Node Type   -- para comp para; list comp list ; div comp div 
// 2 - same nodeName  --  li tag vs li tag 
// 3 - same NodeValue  -- internal value same 
// 4 - same childNodes  -- suppose li kay under p tag ha toh woh same p tag hona chaiye jish li se compare liya gya h 
// 5 - same attributes  -- one has class then other must have class... etc others 
//  6 - same attribute value -- same like one class name is ab then other must named as ab 



// var target = document.getElementById("pehla").children[1];
//    var compared = document.getElementById("dusri").children[1]  ;
//   var eql = target.isEqualNode(compared);

//   console.log(eql);




//          _____________________________________________________________________________________________________________________________________________________________________________________________________________________________
//       _____________________________J.S Oop Introduction__________________________________________________________________________________________________________________________________________________________________________________
//     ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// A coding methology; it organise code and make it more usable ; help for easy debug ; use for big projects 

//         Class - blurprint ; car    --- it has properties like let x, let y & METHODS LIKE Function ;  u can use only value that declared in class scope 

// 		Object - buildings ; B.M.W 

// how to declare class and maske methods :--

//      class hello {              // declare a function

//                  message(){    // methods 

// 					console.log("Hello Everyone")
// 				 }
// 	 }

//      let a = new hello();          // a is object over here for making object we use simply new + classname(
//           a.message()            // for calling methods we use object.method name( )


// TYpes of methods :-

// Constructor fn -   Constructor() {   statement }            it has a speciality that it call automatically  if we make object ; ---- it mainly use for initialising the value 

// Prototype  method -- abc() {  console.log("hello world")}

// Static Method --     static name(){  console.log("hello world")       }   we use static word -------- this may call by without making object unlike upper two, we dont need to call it specifically


//    class car{
//            constructor(name, age ){
// 			//   constructor(){


// 			// let name;                   
// 			// Here we have declare as under constructor scope ; SO that we may use this for our any method

// 			// OR , By using in  constructor parameter

// 			this.name = name;                       // using construcot parameter   ;; for hold parameter value ; just use this.parameter name not need to declaer by let,var or const no nedd
// 			                                          // this represent the value of object that we have made by using  let  a =new object(); Here a 
// 			this.age = age;

// 			 console.log("Constructor function");}

// 		   hello(){ 
// 			 console.log("Constructor function my name is " + this.name +"  "  + this.age)                  }


//                 static staticmethod(){         // As we know we cannot cal it by makng objects   like a.staticmethod  ; so for calling this classname.name of static method like this car.staticmethod();

// 					console.log("We Just  make this function for checking static function")
// 				}

//    }


// //  let a = new car();                //    for let name; mean if we only declare variable;
// // let a = new car("aman", 34);    
// // let b = new car("Raman", 64);    
// // let c = new car("Caman", 34);                          // code kitta chota hoo gya baar baar declae karne kee jaroorat nahi rahi 
// // let d = new car("Baman", 24);    
// // let e = new car("KASHYAP", 64);   
// // let f  = new car("AYUSH", 13);  
// //   a.name = prompt("enter ");     //       for 1st one we use over here not for construcor parameter  

//  a.hello();
//  b.hello();
//  c.hello();
//  d.hello();
//  e.hello();
//  f.hello();


//          _____________________________________________________________________________________________________________________________________________________________________________________________________________________________
//       _____________________________J.S Inheritance__________________________________________________________________________________________________________________________________________________________________________________
//     ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________


//          lets suppose class A has some properties and methods 
// And, Similarly     lets suppose class B also has some properties and methods 

// What if we need to use method and prop of other class then we need ineritance ; 
// whose property is use or inherited called Base Class 
// who use property of base class called Derived class

// multi-level Inheritance - When a class use Method & Property of derived and Base class both ; that class called multilevel inheritance class


//   syntax

//  class fruit{  statement
//  }

//   class vegetable extends fruit { statement    //   }


// make Object 
// let f = new fruit();
// let v = new vegetable();                    // this will use mwthod and property of both fruit and vegetable AS IT IS Derived CLass


// ---------------------------------------------EXAMPLE - 1 -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//   class employe{ constructor(name){console.log("Constructor : Employ" + name)} }

//    class manager extends employe{

// 	constructor(name){
//              super()       // Agar derived method mai constructor method banaya toh hum  IsH super()  METHOD ko call karengay ; in constructor of derived class  
// 			console.log("Constructor : manager" + name)	} }


//          //  let a = new manager();            // agar Base class ke Mehtod Constructer ha toh serived class kay object ha nature bhe wAHI HOGA JO BASE CLASS KA HAI HERE CONSTRUCTOR ,.So, this may call automatically without making object
// 		   let a = new manager("Kashyap Aman Singh");          // just for practice ; Here we make object of Derived class and pass parametric value in derivrd method but it print BASE Method so that we use derived from base 
//         //    let b = new employe("aman");



// ---------------------------------------------EXAMPLE - 2 -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//    MAKE PROTOTYPE IN

// class employe {

// 	constructor(name, age, salary) {
// 		this.employname = name;
// 		this.employAge = age;
// 		this.employSALAry = salary;

// 		console.log("Constructor : Employ" )
// 	}

//       info(){
// 		console.log("Manager-name : "  + this.employname + "  "  +   this.employAge+ "  "  + this.employSALAry  )
// 	  }



// }

// class manager extends employe {

// 	info(){     


// 		   super.info();            // lekin agar Derived class mai bhe same method call kar de jo base class mai hai like here info(); toh aab derived class ka object.method of bse class ka call na kar kay derived class wale meehtod ko jyda valude adega aur isi koo call karega ; ASISAY condition ko avoid karnay kay liye hum super.method of base class ka use karen toh wahi cal hoga ; chayen hum derived kay object se hee call kyu na kare  
// 		console.log("Employname : "  + this.employname)

// 		super.info();    // ish case mai yeh baad mai call hoga after base class kay info() methodkay cal hone kay baad 

// 	  }


// }




// //  let a = new manager();            // agar Base class ke Mehtod Constructer ha toh serived class kay object ha nature bhe wAHI HOGA JO BASE CLASS KA HAI HERE CONSTRUCTOR ,.So, this may call automatically without making object
// let a = new manager("Kashyap Aman Singh" , 34, 45000);          // just for practice ; Here we make object of Derived class and pass parametric value in derivrd method but it print BASE Method so that we use derived from base 
//    let b  = new manager("Kashyap Aman Singh" , 66, 45000);   
//    let c = new manager("Kashyap Aman Singh" , 77, 45000);   
//    let d = new manager("Kashyap Aman Singh" , 90, 45000);    
//    let e = new manager("Kashyap Aman Singh" , 99, 45000);   

// // PROTOtype
// a.info()   ;               // aisa ish liya hu kee kyu kee A object hai derived class ka ; So a can also use all methods of construcor class as thats BASE class 
// b.info()   ;     
// c.info()   ;     
// d.info()   ;     
// e.info()   ;     




// _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// _____________________________________________________Module [Import & Export]____________________________________________________________________________________________________________________________________________________________________________________________________

// _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________


// Modules
// JavaScript modules allow you to break up your code into separate files.
// This makes it easier to maintain a code-base.
// Modules are imported from external files with the import statement.
// Modules also rely on type="module" in the <script> tag.



// Export
// Modules with functions or variables can be stored in any external file.
// There are two types of exports: Named Exports and Default Exports



// export let name = "yahoo baba";
// function hello{       }

// class user{               } 


// SYNTAX for import 
// import{ fn_name, class_name, variable name , ETc }from './File.js'

// name - jisko import karna hai
// './File.js' -- jahan se import karna hoo under '  ./      '

//   for include in HTML File 

//   IN Html document                //  < script type = "module" src= "./File.js">    < /script  >

// script type module dee do . Then , src mai module mai file location jish mai import kiye hoo like this from first file "./File2.js"




// export let msg = "Aman Singh";   


//   export  function helo(naam){
// 	//console.log("function exporting in js" + naam)
//       return `${naam}`

// }

//EXPORT constructor function
//  export class test {
// 	constructor(){console.log('aman is good ')}
//  }

// hame baar baar export likhna oadd raha  hai ;;; lekin agar ek baar mai hee export karna hoo toh ---------   export{      msg , helo, test_____etc                 }

//  export{      msg , helo, test_____etc                 }



// _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// _____________________________________________________PROmise function ____________________________________________________________________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________


//  if promise ful filled use `resolve()` --------------  .then();
//  if promise not fulfilled use `reject()` --------------  .catch();
//  Both then and call are call back fn  

// SYNtAx ----

// let prom = new Promise();

// let prom = new Promise(function(){    


// });


// let prom = new promise (function(resolve,reject){

// 	if (condition){   resolve("Here is success" );   }
// 	else {reject("Here on failure" );}
// })


// let onfulfill = (result) => {console.log(result);}                    // result mai AYAGA JO BHE MESSAGE DALA HOGA resolve methtod mai like here resolve("Here os success" );;  

// let onreject = (error) => {console.log(error );}                      // Similarly for error message from reject()

// // for calling promise 
//   prom.then(onfulfill);
//   prom.catch(onreject);


// -----------------------------------------------------------//EXAMPLE//-----------------------------------------------------------------//

//  function prom( done){
//        return new Promise(function (resolve, reject) {

// 		if (done){
// 			resolve("I am a Successful Boy")
// 		}   
// 		else {  reject("I am a Failed")  }
// 	   })
//  }


//  let onfulfill = (result) => {console.log(result);}                    

//  let onreject = (error) => {console.log(error );}  


//  prom(true).then(onfulfill);
//   prom(false).catch(onreject);

// OR

//   prom(true).then( (result) => {console.log(result);});        

//   prom(true).catch( (error) => {console.log(error );}  );

// console.log(prom(true));




// --------------------------  Syntax  for setinterval 



// function prom( done){
// 	return new Promise(function (resolve, reject) {
// 		console.log("data fetching please wait")
// 	 setTimeout(()=>{

// 		if (done){
// 			resolve("I am a Successful Boy")
// 		}   
// 		else {  reject("I am a Failed")  }

// 	   }, 1000)
// 	 })

// }


// prom(false).then( (result) => {console.log(result);});        

//   prom(false).catch( (error) => {console.log(error );}  );

//OR  
// - do this in single line by using method chaining

//   prom(false).then( (result) => {console.log(result);}).catch( (error) => {console.log(error );}  );




// _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// _____________________________________________________PROmise.all() function ____________________________________________________________________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

//   promise.all()  -- this is fully resolve or rejected 
//    must be resolved and agar koi ek promise bhe resolve nahi hua toh saab fail hoo jayegaa


//   similar syntax like upper

// lets multiple promise  promise

// ---------------------------------------------------------------------------------------------------------------------

//   Promise.all([p1,p2,p3,p3,p3]).then().catch();


// ---------------------------------------------------------------------------------------------------------------------

// let p1 = new Promise((resolve, reject) => { 
// 	// setTimeout(() => {
// 		//  console.log(" checking only promise.all 1st Method");
// 		  resolve(40); },
// 		//    1 * 1000); }
// 		)

// let p2 = new Promise((resolve, reject) => { 
// 	// setTimeout(() => { console.log(" checking only promise.all 2nd method"); 
// 	resolve(30); },
// 	//  2 * 1000); }
// 	)

// let p3 = new Promise((resolve, reject) => { 
// 	// setTimeout(() => {
// 		//  console.log("checking only promise.all  3rd Method");
// 		  resolve(50); },
// 		//    3 * 1000); }
// 		)


// 		// we taKe total & for in loop to print the value in parameter that we gave in resolve(); so to print the value that comes in resolve method to know total sum ;

// var total = 0;
// Promise.all([p1, p2, p3]).then((result) => {           // Agar sara promise resolve  hoga tabhi then function chalega Agar ek bhe Promise reject hoo jata hai toh catch function chal jayega
// 	 for(var i in result) { total += result[i] }      // for loop for know total sum of number that is passed in resolved parameter
// 	  console.log(result);
// 	   console.log(total)
// 	}).catch((error) => console.log(error))




// _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// _____________________________________________________AJAX ____________________________________________________________________________________________________________________________________________________________________________________________________

// _______________Ajax IS A technique by which we create fast and dynamic web pages.__________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    //   like we suppose we only want to change a single block of content not full page for Example - on crickbuz only runs change not whole change  ; SourceBuffer,reloading become fast                        

//    A - Asynchronous
//    J - javaScript
//    A - and 
//    X - XML ----- A format of data

// XMLHttpRequest - A java script that send request on server but in Background of server 
// it held data in total 3 format -- 
//    1- Text File      2 - XML Data      3 - JSON Data 



// XMLHttpRequest divied request in 5 step  --  called readyState 
//  readyState  0 - request not initilized 
//  readyState  1 - server connection established
//  readyState  2 - request received     
//  readyState 3 - processing start on the request that we have sent 
//  readyState 4 - request finished and response is ready 


// But the question is that what server Respond in two format 1st is Status & 2ND is  || responseText || retrun by server if we had request for TEXT AGAR XML REquest kiya hota toh || responseXML || 
// and  Status return 200-  mean "OK"
// and  Status return 403  -  mean "FOrbiddden"
// and  Status return 404   -  mean "Not Found"
// etc search on google http status code 


// HOw to use 
// Step 1- make object of XMLHttpRequest
// Step 2 -  for getting data we use   ---   take three parameter  Method - Post(in post data is in hidden form we use for log in log out type case ) & Get ; filename.txt &    ASync Mode true{true mean async mode is on ;; false mean sync mode }
// step -3 --  xhttp.send();                       By this we send request to server 



// variable_name.open("GET","filename.txt", true )                             
// for send-------------------
// xhttp.send();                       By this we send request to server 

// for checking readyState


// var xhttp = new XMLHttpRequest();                                                                                                                // step - 1  make object

// variable_name.onreadystatechange = function()  {                                                                                               // step 4 check ready state
// 	// In statement we chacking the condition is data comes by making condition  
//            if (this.onreadystate == 4 && this.status == 200){    document.querySelector("where to set fetch data").innerHTML= this.responseText || requestHtml       }   //     jo address ko target kiye honge sirf wahi refresh hoga baki ka nhai liker here queryselector("refresh only this ")

// };


//       xhttp.open("GET", "FILENAME.txt", true);                                                                                           // step-2 whcih file to open 
// 	  xhttp.sent();                                                                                                                     // step- 3 sent 


// // --------------------------------------------------------------------------------------------------------------------------fresh code syntax of this----------------------------------------------------------------------------------------------

// var xhttp = new XMLHttpRequest();                                                                                                                // step - 1  make object

// xhttp.onreadystatechange = function()  {    
// 	if (this.onreadystate == 4 && this.status == 200){    document.querySelector("where to set fetch data").innerHTML= this.responseText || requestHtml       }  };\


// 	xhttp.open("GET", "FILENAME.txt", true);                                                                                          
// 	xhttp.sent();                                                                                                            

// 	------------------------------------------------------FOR INSTANCE-----------------------------------------------------------------------------------------------------------------------------------------------------------
// look HTML PAGE FOR BUTOON AD FN NAME RELATED QUERY 

            //   function loadData() {
            //         var xhttp = new XMLHttpRequest();

			// 		xhttp.onreadystatechange = function(){

            //             if (this.readyState == 4 && this.status == 200 ){
			// 				// console.log(this.responseText);
			// 				document.getElementById("demo").innerHTML = this.responseText;

			// 			}  else if (  this.readyState == 4 && this.status == 404){             // agar file nahi mili toh 
			// 				document.getElementById("demo").innerHTML= "file not found ";
			// 			}
			// 		};

			// 		xhttp.open("OPEN", "https://jsonplaceholder.typicode.com/posts", true);    
			// 		xhttp.send();

			//   }

// for more detail go network XHR section of console 


// ----------------------------------------------------------------------------------------WARNINg--------------------------------------------------------------------------------------------
// Lekin yeh AJAX bhoot complicated hoojata hai ;; isi liye ya toh jquery ka ya fetch ka use kartay hain 





// _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// _____________________________________________________Fetch ____________________________________________________________________________________________________________________________________________________________________________________________________

        //   fetch make rid from hectic coding of js XMLHttpRequest  
		//   but why we use fetch if we aleady have jquery that make coding  easy ????    but the is a problem that JQUERY use  work only if there is a file of size greater than 1 M.b then only we can use jquery 

            //  fetch() comes in ES6 ;     Always use with server 
			//  Insert
            //  Update 
			//  Read 
			//  Delete 


//SYNTAX
    //   fetch(file/URL).then(function(reponse){ return response.data_format like JSON/TEXT }).then(function(result){console.log(result)}).catch(function(error){console.log(error)}); ------> This fetch method return promise . But here then function also return again a promise 
//
//   fetch(fiel?URI).then(() => return Response.data_type).then((result)=> console.log(result)  ).catch((error)=>console.log(error))




// HOW IT WORKS ??
//  DATA file ya url se aaya fetch() kay dwara fir .then() mai function kay statement mai return kar dengay kuch aisay Response.data_format fir dubara .then() aab ish mai response sse jo dast aaaya ha usko bhe fn kay dwara print karwyengay .. Lekin agar error aaya toh cathc fn bhe  


// fetch("ajx.txt").then((response)=>return response.text() or for .json());      step-1 mai coding
// fetch("ajx.txt").then((response)=> response.text()).then((data_ish_mai_aaya)  =>  console.log(data_ish_mai_aaya)).catch((error)=>console.log(error));                                  

//shortest
// fetch("https://jsonplaceholder.typicode.com/comments").then((response)=> response.json())
// .then(data  =>  console.log(data))
// .catch(error=>console.log("error so cant fetch data"+ error));                                  

// _____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________--

// agar sara print karwana hoo toh hum for in loop use kar lengya 2nd wale promise mai

// fetch("https://jsonplaceholder.typicode.com/comments").then((response)=> response.json())
// .then(data  => { console.log(data) 
//                   for ( let index in data) {
// 					document.write(`${data[index].name } ---->    ${data[index].id }   -----        ${data[index].postId } <br>`)
				
// 				  }

// })
// .catch(error=>console.log("error so cant fetch data"+ error));                                  



// ------------------------------------  // AAB TAK HUMNAY DATA ko save karna dekha hai aab server par kaise insert kartya hain woh dekhnagya

//  fetch(file ,  {
//                    method : "POST",            // POST send data ////  PUT update data  ////  GET defalut hia for read   ////   DELETE for deleting the data 
//                     body : data,                // jo humko server par save karana hai yeh Form data /////  Json data etc
                   
// 					// body : data.stringify(   ),     hum direct data nahi lee sakte user se toh .stringify  J.S data ko jason form mai la dega   
					  
// 					header :{                   // header kay ander hum jo type ka data bhejnay wale hain woh likhntay hain aisay 'Content-Type' : 'application/json'
// 						'Content-Type' : 'application/json',        //  jo bhe hum body kay through data bhej rahe hain woh json ka data hai
 
// 						'Content-Type' : 'application/x-www-form-urlencoded',                  //   FORM ka data hai


// 					  }


//  })

 
//  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //  Go here "    https://jsonplaceholder.typicode.com/guide/        "  and see all code structure for different method like INSErt, update, output etc ;;Only for help 
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//  for data insert -- dont remeber all these go on website fake json and on guide over there 


// var user_ka_data =  {title: 'our datdas name',
// body: 'humnay isko stringayfy kay parameter se bahar nikla diya h aab se send hoo seke aur ISKA VARIABLE NAMe ko Stringfy(varaible_name ) mai save hai',
// userId: 1000000,
// }


// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({user_ka_data  }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


//  why we approx all time we sent data in json form because json is fully universal ;

// this code for data Update 


// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({                           for sent data in json format
//     id: 1, 
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
       
        // body : new FormData(document.getElement(id_of_form));              for send data in of form in form format

//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',                  

// 'Content-Type' : 'application/x-www-form-urlencoded',                for sending data in form format we use this content type 

//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// for data delete 

// fetch('https://jsonplaceholder.typicode.com/posts/1', {      // bass jisko delete  karna wuska number after posts/1  for delete 2nd data---,posts/1/2/2/3/3/3=----------
//   method: 'DELETE',
// });



// ETC FOR MORE JSON METHOD CODE VISIT WEBSITE  ---------        https://jsonplaceholder.typicode.com/guide/






// _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// _____________________________________________________Async & Await____________________________________________________________________________________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________


//  Comes after ES6 IN 2017
// same like Promise functon ; if it will get resolved then similarly like Promise it will call .then()  & .catch()

//    to get rid of calling resolve & reject again and again ; so to avoid those complication we use ASync functon 
//    THIS is similarly like normal function and work like promise just like write  async before function 

// SYNTAX

//   async function test(){

//                    //STATEMENT
//   }


//   let test = async()  => { return "hello"};       arroe fn_async
// async function test(){

// 	return "Hello"

// 	 }
	
	//  console.log(test())             // return String value this normally works in Asynchronous fn
	
        // test().then((result)=>{  console.log(  result );         })                // SAMe like Promise lekin resolve reject kee koi jaroorat nahi 



//Await ---        This Await method also Works under async function
                     // use to control pace of printing of async statement 
				
	// 				 async function test(){

    //                    try {
	// 					// 	console.log("1 -- mESSAGE");
	// 				const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //                  const  jsondata = await response.json();
					 
	// 				 return jsondata                  //AS WE KNOW this json data is returned as promise by test function ,, by as we knew async also return promise so we return response.json
						
	// // UPper three lines like const response/jsondata  ? return json all in only one lines
	// 				// return (await fetch("https://jsonplaceholder.typicode.com/posts")).json();

	// 				   } catch (error) {
	// 					console.log(error)
	// 				   }

					

					// 		await	console.log("3 -- mESSAGE");       // jahan await likhah wahan se aagay ka code nahi chalega ruk jayega 
								// console.log("4  -- mESSAGE")
						
					
				//		 }
						 
						//  console.log("2 -- mESSAGE");
						//  test();
						//  console.log("5 -- mESSAGE")


						//  console.log(test())             // return String value this normally works in Asynchronous fn
						
					
						// test().then((result)=>{  console.log(  result ); }).catch((error)=> console.log(error))               // SAMe like Promise lekin resolve reject kee koi jaroorat nahi 
					          
					// test().then((result)=>{  console.log(  result ); })       // ---------------------  aiN THE CASE OF TRY AND CATCH we dont need to write catch again and again 

       

// ________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// ___________________________________________________________________SYMBOL________________________________________________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________________________________________________________________---


// this is use for make any variable unique .. only one ?
// SYNTAX 
// var x = Symbol();

// var x = Symbol("AMAN SINGH ");

// var y  = Symbol("AMAN SINGH ");

// console.log(x===y);                              // this give result false ; as X has symbol keyword so this is unique as not equal to y 

// Agar COMpare karna ha toh hawe symbol ko string mai change karna hoga  ish se symbol jo likha aata ha woh bhe haat jayega ---    sirf description ke value aayi gee by     .description  
        
//  let age = Symbol();


//  let user = {
//                 name: "YAHOO BABA",
// 				class : "btech",
// 				[age] : 35            // symbol ko object kay saath use karnay kay liye hum usko [age]  useke variable ka name falengay

//  }
                
//        user[age] = 25;                          // agar bahar se object mai symbol ke value insert karni ha toh object_name[symbol_variable_name] = ___what to enter___;
//                                             // dono tarh se dalla toh bahr wale ke priority hogi like here line 1571 && 1575(priority)


//  console.log(user);
//  console.log(user[age]);                              // printing outer insertion 


// agar hum {for in} & in json  loop use karengay oth symbol ko print nahi karega but only json kay liye .description use karne se print kar dega





// ______________________________________________________________________________________________________________________________________________________________________________________________________________________________
// ___________________________________________________________________ITERATORS________________________________________________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________________________________________________________________---


// object or pattern that  traverse list or collection. define sequences and implement the iterator protocol that returns an object by using next() method that contains the value and is done. 
// Value contains the next value of iterator sequence and return boolean if last value of sequence has then it’s true else false. 

// We can check if any entity is by default iterable or not We can check its prototype and can see if it is having a method Symbol(Symbol.iterator) or not. 

// In Array.prototype you will find Symbol(Symbol.iterator): ƒ values() method. The array is by default iterable. Also, String, Map & Set are built-in iterables because their prototype objects all have a Symbol.iterator() method.


        //  let x = ["Apple" , "Oranges"  , "grapes "];
        //  var number = [44,44,65,2,90,4,53,32,45]
		//  let str = "Yahoo Baba";                      //    this string will be printed one by one 

//  SYNTAX
//   let ish_mai_value_aayega = jiski_variable_ke_value_chaiye[Symbol.iterator]();
// FOR PRINTING      
//          Jish_mai_value_aayega.next();

            
        // let y = x[Symbol.iterator]();                 // for printing string wala 

        // let y = number[Symbol.iterator]();                // x ke sari value y mai chali aayegi for hum uskp iterate karr lengay 
      
                    // let y = str[Symbol.iterator]();



//   y.next();                 // Suppose hame pehle value print nahi karni ha toh buss console na kare sirf    Jish_mai_value_aayega.next(); likhe basss ---fir yeh value print nahi hogi 
//  console.log(  y.next()   );             // this simply print 
//  console.log(  y.next().value);                        //  .value lagane se hamko uske under ka sirf value print hoga  
//  console.log(  y.next().done   );                    // showing the value is true or false 
//  // jab takk done ke value false ha tabhi taak chala sakte hain





// ______________________________________________________________________________________________________________________________________________________________________________________________________________________________
// ___________________________________________________________________GENERATORS________________________________________________________________________________________________________________________________________________________
// ___________________________________________________________________________________________________________________________________________________________________________---


//  function *fn_name(){
//                     yield "first";                  // yield means pause --if we have to print the yoeld we will use .next()
//                      yield "second";
// 					 yield "third";



//  }
//  console.log (fn_name().next());

			
		
function *generatorfn(){
                //  console.log("first message");
				//  yield "first yield";
				//  console.log("second message");
				//  yield "second  22 yield";
				//  console.log("Third message");
				
				//  console.log("Fourth message");
//OR 

                     let nextnum = 300;
					 while(true ){
						yield(nextnum++);

// PARAMETRIC VALUE   
                    //  let result = (yield)*10;
					let arrayresult = [yield,yield,yield,yield,yield,yield];         // jab 6 yield ke entry lene ho 
					//  console.log(result);
					 console.log(arrayresult[0]);              // if need then use [0] , index number to access element as desire 


					 }  


}



//PRINTING METHOD START 

// let g = generatorfn();
// console.log(g.next())
// console.log(g.next())
         

// lets experiment with for of loop  kay under if condition 
 for(let value of g ){             // fn ke value g mai aur g kee value value mai aa jayeg
	//   if ( value > 310){
	// 	console.log(value);
	//   }
	
	// else{console.log("not completed")}
	
 }

//   Printing PARAMETRIC VALUE 



let g = generatorfn();
      g.next(500);               // next ka matlab next yield pe chala jaye , toh 1st yield khali ha toh 1st wale pe chala jayega 
	  g.next("AMAN");
	  g.next(300);
	  g.next(200);
	  g.next(900);
	  g.next(800); 
	         
// console.log(g.next())
// console.log([ ...g ]);                       // SPREAD OPERATOR 











// console.log (generatorfn().next());                 dont print directly ; if u do this willl directly  print 1st yield pnly again and again









