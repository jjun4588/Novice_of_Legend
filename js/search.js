      function filter(){

        var value, col, front, name, i;

        value = document.getElementById("value").value.toUpperCase();
        name = document.getElementsByClassName("name");
        front = document.getElementsByClassName("front");
        col = document.getElementsByClassName("col");

        for(i=0;i<col.length;i++){
          name = col[i].getElementsByClassName("name");
          if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
             col[i].style.display = "grid";
          }else{
             col[i].style.display = "none";
          }
        }
      }


