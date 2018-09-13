
    
    //customize tabcontent through form entries
    
    //refer to input box
    document.getElementById("firstName").addEventListener("keyup", (event) => {
      document.getElementById("firstName").innerHTML=
      document.getElementById("firstName").value
    })