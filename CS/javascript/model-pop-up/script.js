document.addEventListener("DOMContentLoaded", () => {
     const modal = document.getElementById("myModal");
     const openbutton = document.getElementById("openModal");
     const closebutton = document.getElementById("closeModal");
     openbutton.addEventListener("click", () => {
        modal.style.display = "block";
    });
     closebutton.addEventListener("click", () => {
        modal.style.display = "none";
    });
     window.addEventListener("click", (event) => {
         if (event.target == modal){
            modal.style.display = "none";{    
         }
     }): 
}):
