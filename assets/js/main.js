let row=document.querySelector('.row')


$.ajax({
  method:"GET",
  url:"https://api.tvmaze.com/shows"
})
.done((data)=>{
console.log(data)
  data.forEach(element => {
    row.innerHTML+=`<div class="col-3 py-3">
         <div class="card" style="width: 15rem;background-color:rgb(0, 0, 0) ">
                  <img src="${element.image.medium}" class="card-img-top" alt="scr">
                   <div class="card-body">
                  <h2 class="card-title" style="color: rgb(255, 255, 255)"> <b>${element.name}</b></h2>
                   <p class="card-text"  style="color: rgb(255,255,255)"><em>${element.language} </em></p>
                     <p class="card-text" style="color: rgb(255,255,255)"><em>${element.externals.imdb}</em></p>
                       <p class="card-text" style="color: rgb(255,255,255)"><em>${element.genres}</em></p>
                      
                  <a href="details.html?id=${element.id}" class="btn btn-primary">click</a>
        </div>
        
      </div>`
    
  })
})




















// fetch('https://api.tvmaze.com/show')

// .then(response=>response.json())
// .then(data => 
// { console.log(data);
//   data.forEach(element => {
   
//     row.innerHTML+=`<div class="col-3 py-4
    
//     ">
//     <div class="card" style="width: 15rem;">
//              <img src="${element.image.medium}" class="card-img-top" alt="scr">
//               <div class="card-body">
//               <h1 class="card-title"> <b>${element.name}</b></h1>
//               <p class="card-text"><em>${element.language} </em></p>
//                 <p class="card-text"><em>${element.externals.imdb}</em></p>
//                   <p class="card-text"><em>${element.genres}</em></p>
                  
//              <a href="${element.url}" class="btn btn-primary">click</a>
//     </div>
//   </div>`
 
//         });
// })
    



    
  



























