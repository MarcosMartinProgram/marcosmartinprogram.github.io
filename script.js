let menuVisible = false;
//Función que oculta o muestra el menu
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
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
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


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


  var formulario = document.getElementById("mi-formulario");

  formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío predeterminado del formulario

    // Enviar el formulario usando una solicitud AJAX
    var xhr = new XMLHttpRequest();
    xhr.open(formulario.method, formulario.action);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Redirigir al usuario a la página correcta después del envío
        window.location.href = "https://marcosmartinprogram.github.io/#contacto";
      }
    };
    xhr.send(new FormData(formulario));
  });

  document.addEventListener('DOMContentLoaded', function () {
    const lookerIframe = document.createElement('iframe');
    lookerIframe.src = 'https://lookerstudio.google.com/s/k5YK8rjijN4';
    lookerIframe.width = '800';
    lookerIframe.height = '600';
    const lookerContainer = document.getElementById('looker-container');
    lookerContainer.appendChild(lookerIframe);
});

/*document.addEventListener('DOMContentLoaded', function () {
  const googleSheetsUrl = 'https://sheets.googleapis.com/v4/spreadsheets/TU_SPREADSHEET_ID/values/TU_RANGO?key=TU_API_KEY';

  fetch(googleSheetsUrl)
      .then(response => response.json())
      .then(data => {
          const values = data.values;
          const googleSheetsContainer = document.getElementById('google-sheets-container');

          values.forEach(row => {
              const rowElement = document.createElement('div');
              rowElement.textContent = row.join(' | ');
              googleSheetsContainer.appendChild(rowElement);
          });
      })
      .catch(error => console.error('Error:', error));
});*/


