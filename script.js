  function minCost(event){
    event.preventDefault(); //use this stop the default behaviour which is page referesh auto
    var inputElement = document.querySelector('input').value;//.value always return into string
    var arr = inputElement.split(',');  //split all the elements and return it into the array
    
      arr.sort(function(a,b) {return a-b});// sorting the array
//we need to access first two element
//add them & store in a variable res

//add the res in array
//increment cost by res
	var cost = 0;
    while(arr.length>1){
      var res = Number(arr[0]) + Number(arr[1]);//write number to convert into number until it will be shown in a string
      arr.splice(0,2);
			  //or 
      //arr.shift(); //use this one to remove element from starting
	  //arr.shift(); //want to remove 2 element thats why used twice

      arr.push(res);
	  cost += res;
			
	arr.sort(function(a,b) {return a-b});
      
    }
    // document.querySelector("div").textContent=cost;
			//or can use below one also
	document.getElementById("result").textContent = cost;
  }
  
