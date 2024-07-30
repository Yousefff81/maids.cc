let george=document.getElementById("george")
let lis=document.querySelectorAll("ul li")







   



for(let i=0; i<lis.length; i++){

   lis[i].addEventListener('click',function(e){

      
      let move=e.target.innerText
      if(move=="All"){
         window.location.assign("index.html")
        
           
      
         
      }

      else if(move=="George Bluth"){


         window.location.assign("george.html")
         
          
      
         
      }
      else if(move=="Janet Weaver"){


         window.location.assign("ganet.html")
      }
      else if(move=="Emma Wong"){


         window.location.assign("emma.html")
      }
      else if(move=="Eve Holt"){


         window.location.assign("eve.html")
      }
      else if(move=="Charles Morris"){


         window.location.assign("charels.html")
      }
      else {


         window.location.assign("Tracey.html")
      }
    
   })
   
}


let posts=[]




 async function getApi(){

   var res= await fetch(`https://reqres.in/api/users?page={page}`)


 finalResult= await res.json()

 posts=finalResult.data


 display()


}


function display(){
   let cartona=``;
   for(let i=0; i<posts.length; i++){

     

      
     
      cartona +=`<div class="col-md-4" >

      <div class="item " id="zero">
      <img src='${posts[i].avatar}' class="w-100">
      <h3>${posts[i].id}</h3>
      <h3>${posts[i].first_name} ${finalResult.data[i].last_name}</h3>
      
      <h4>${posts[i].email}</h4>
      </div>
   </div> `



   }
  
   document.getElementById("myData").innerHTML=cartona
 
  
}




 





( async function () {
   await getApi ()
}) ()





