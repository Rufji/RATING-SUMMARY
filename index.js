const rateList = document.querySelectorAll(".rating-list");
const btn = document.querySelector(".btn");
const pick = document.getElementById("pick");
const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const span = document.querySelector("span")


rateList.forEach(item =>{
    item.addEventListener("click", function(e){
       const clickedValue = item.textContent;
        span.textContent = `${clickedValue}`;
        document.querySelector(".active")?.classList.remove("active");
        e.currentTarget.classList.add("active");
    })
})

container1.style.display = "flex";
container2.style.display = "none";

btn.addEventListener("click", ()=>{
   if (span.textContent === ""){
    alert("Please pick a rating");
} else{
       if(container1.style.display = "flex"){
           container1.style.display = "none";
           container2.style.display = "flex";
       } else{
           container1.style.display = "flex";
           container2.style.display = "none";
       }
        
   }
});


