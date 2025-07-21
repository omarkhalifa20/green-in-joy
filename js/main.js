let contactabout = document.querySelector ("#contact-about")
let productbtn = document.querySelector ("#productbtn")
let product = document.querySelector ("#product")
let contact = document.querySelector ("#contact")
// fruits btn to details

let mangobtn =document.querySelector ("#mango-btn")
mangobtn.addEventListener("click" ,function() {
  showDetails(1)
})

let strwaberrybtn =document.querySelector ("#strwaberry-btn")
strwaberrybtn.addEventListener("click" ,function() {
  showDetails(2)
})

let freezedstrwaberry =document.querySelector ("#freezedstrwaberry-btn")
freezedstrwaberry.addEventListener("click" ,function() {
  showDetails(3)
})


let orangebtn =document.querySelector ("#orange-btn")
orangebtn.addEventListener("click" ,function() {
  showDetails(4)
})

// fruits btn to details


// vegetables btn to details
let sweetpotatoesbtn =document.querySelector ("#sweetpotatoes-btn")
sweetpotatoesbtn.addEventListener("click" ,function() {
  showDetails(5)
})

let potatobtn =document.querySelector ("#potato-btn")
potatobtn.addEventListener("click" ,function() {
  showDetails(6)
})

let redonionbtn =document.querySelector ("#redonion-btn")
redonionbtn.addEventListener("click" ,function() {
  showDetails(7)
})

let goldenonionbtn =document.querySelector ("#goldenonion-btn")
goldenonionbtn.addEventListener("click" ,function() {
  showDetails(8)
})

let garlicbtn =document.querySelector ("#garlic-btn")
garlicbtn.addEventListener("click" ,function() {
  showDetails(9)
})

let ButternutPumpkinbtn =document.querySelector ("#ButternutPumpkin-btn")
ButternutPumpkinbtn.addEventListener("click" ,function() {
  showDetails(10)
})

let Pumpkinbtn =document.querySelector ("#Pumpkin-btn")
Pumpkinbtn.addEventListener("click" ,function() {
  showDetails(11)
})



// vegetables btn to details
function showDetails(productId) {
  localStorage.setItem("selectedProduct", productId);
  window.location.href = "details.html";
}

contactabout.addEventListener ("click" , contactscroll) 
  function contactscroll() {
    contact.scrollIntoView({
      behavior: "smooth"
    })
}

productbtn.addEventListener ("click" , productscroll)


 function productscroll() {
  product.scrollIntoView({
    behavior: "smooth"
  })
    
}

window.addEventListener("DOMContentLoaded", () => {
  const scrollToSection = localStorage.getItem("scrollTo");
  if (scrollToSection) {
      const section = document.getElementById(scrollToSection);
      if (section) {
          section.scrollIntoView({ behavior: "smooth" });
      }
      localStorage.removeItem("scrollTo");
  }
});




document.addEventListener("DOMContentLoaded", function () {
  let loaderShown = localStorage.getItem("loaderShown");

  if (!loaderShown) {
    setTimeout(function () {
      document.querySelector(".lod").classList.add("d-none");
      document.body.classList.remove("loading");
      localStorage.setItem("loaderShown", "true");
    }, 1500); 
  } else {
    document.querySelector(".lod").classList.add("d-none");
    document.body.classList.remove("loading");
  }
});


