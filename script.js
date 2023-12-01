function login(){
    //to set the user name to the localstorage
    let username = document.getElementById("uname").value;
    console.log(username);
    //store the user name ti localstorage
    localStorage.setItem("USERNAME",username);
    //redirect to home page
    window.location="./prdt.html"
}

let username = localStorage.getItem("USERNAME");
console.log(username);
// head1.innerHTML = `Welcome ${username}`
document.getElementById("head1").innerHTML= `Welcome ${username}`

function logout(){
    //claer localstorage
    localStorage.clear();
    //redirect to login page
    window.location="./index.html"
}

function addemp(){
     const employee={
        id:eid.value,
        name:ename.value,
        add:eadd.value,
        desi:desi.value,
        
        slry:slry.value
     }
     if(employee.id==''||employee.name==''||employee.add==''||employee.desi==''||employee.exp==''||employee.slry==''){
        alert("Please fill all the data")
     }
     else{
        if(employee.id in localStorage){
            alert("Product already exist")
         }
         else{
            localStorage.setItem(employee.id,JSON.stringify(employee))
            alert("Added Succesfully")
            document.getElementById("myform").reset()
         }
    
     }
     
}

function searchemp(){
    let key= search.value
    if(key in localStorage){
        employee=JSON.parse(localStorage.getItem(key))
        console.log(employee);
        result.innerHTML=`<div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Product Id: ${employee.id}</li>
          <li class="list-group-item">Nmae : ${employee.name}</li>
          
          <li class="list-group-item">Category : ${employee.add}</li>
          

          <li class="list-group-item">Description : ${employee.desi}</li>
          <li class="list-group-item">Rate : ${employee.slry}</li>
          
          
         
        </ul>
      </div>`
    }
    else{
        alert("Id does not exist")
        result.innerHTML=""
    }
}

