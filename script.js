let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("phyton");
        habilidades[3].classList.add("reactjs");
        habilidades[4].classList.add("javaspring");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}



window.onscroll = function(){
    efectoHabilidades();
} 


  var formulario = document.getElementById("mi-formulario");

  formulario.addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    var xhr = new XMLHttpRequest();
    xhr.open(formulario.method, formulario.action);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        
        window.location.href = "https://marcosmartinprogram.github.io/#contacto";
      }
    };
    xhr.send(new FormData(formulario));
  });

  document.addEventListener('DOMContentLoaded', function () {
    const lookerIframe = document.createElement('iframe');
    lookerIframe.src = 'https://lookerstudio.google.com/embed/reporting/16a2c696-2ed4-4b77-b972-1b9cfefd697d/page/hlcQD';
    lookerIframe.width = '1000';
    lookerIframe.height = '700';
    const lookerContainer = document.getElementById('looker-container');
    lookerContainer.appendChild(lookerIframe);
});
