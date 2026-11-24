document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-btn");
  const declineBtn = document.getElementById("decline-btn");

  
  acceptBtn.addEventListener("click", function(){
    banner.classList.add("hidden");
  });


  declineBtn.addEventListener("click",function() {
    banner.classList.add("hidden");
  });
});
