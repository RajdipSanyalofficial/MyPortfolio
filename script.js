    //Loading JS
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("hide");
    setTimeout(() => {
      preloader.remove();
    }, 300); 
  }, 500);
});
    //Loading JS



    //Active NavBar
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");  
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navLinks.forEach((nav) => nav.classList.remove("active")); // Remove active from all
        this.classList.add("active"); // Add active to clicked item
      });
    });
  });
   //Active NavBar   


  // Nav bar close in mobile view
  document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.getElementById('navbarNav');
  
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        const collapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (collapse && navbarCollapse.classList.contains('show')) {
          collapse.hide();
        }
      });
    });
  });



  // Typing Animation starts

  const texts = ["web developer","problem solver"]; 
    let index = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;
    
    function type() {
        if (index === texts.length) {
            index = 0; 
        }
    
        currentText = texts[index];
    
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }
    
        document.querySelector(".text").textContent = currentText.substring(0, charIndex);
    
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 2000); 
        } else if (charIndex === 0) {
            isDeleting = false;
            index++;
            setTimeout(type, 500); 
        } else {
            setTimeout(type, isDeleting ? 100 : 150); 
        }
    }

    type();

    // Typing Animation ends


    //Form validation
    function validation(){
    const name1 = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    

    if (!name1 || !email || !phone || !message) {
      alert("Please fill in all fields!");
      return false;
    }

    // Email check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    // 10 Digits Phone format check 
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }

    const abcd= confirm("Are you sure you want to submit your response?");
  if(!abcd){
    return false
  }

    alert("Your response has been submitted successfully!");
    document.querySelector("form").reset();
    return true;
  }
  //Form validation