const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      name = body.querySelector('.name'),
      profession = body.querySelector('.profession'),
      logotext = body.querySelector('.logo-text'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
    name.classList.toggle("hide");
    profession.classList.toggle("hide");
    logotext.classList.toggle("hide");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
    name.classList.remove("hide");
    profession.classList.remove("hide");
    logotext.classList.remove("hide");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});


def