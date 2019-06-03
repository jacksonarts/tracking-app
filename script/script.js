function calculator(){
    // #this is my logic
  var a= parseFloat(document.getElementById("a").value);
  var b= parseFloat(document.getElementById("b").value);
  var c= parseFloat(document.getElementById("c").value);
  
  // #my business logic/
  if(a===b && b===c && c===a){
           alert("equilateral Triangle");
           console.log('congrats! keep trying')
  }
  else if(a==b && a + b > c || b==c && b + c > a || a== c && a + c >b){
          alert("isosceles triangle");
          console.log('congrats! keep trying')
  }
  else if(a!==b && b!==c && c!==a && a + c>b && b + c >a && a+b>c){
          alert("scalene triangle");
          console.log('congrats! keep trying')
  }
  else if (a + b <= c ){
          alert("not a triangle");
          console.log('congrats! keep trying')
  }
  else if(b + c <= a ){
    alert("not a triangle");
    console.log('congrats! keep trying')
  }
  else if(a + c <= b){
    alert("not a triangle");
    console.log('congrats! keep trying')
  }
  
  else (alert("input a valid integer"))
  console.log('Oops! keep trying')
  
  }
  