



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



var target = document.getElementById("pehla").children[1];
   var compared = document.getElementById("dusri").children[1]  ;
  var eql = target.isEqualNode(compared);

  console.log(eql);




































