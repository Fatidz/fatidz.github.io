let areaCV = document.getElementById('area-cv');
let resumeButton = document.getElementById('resume-button');
/** Opciones de generacion de pdf */
let opt = {
  margin:       1,
  filename:     'cv-diaz-fatima.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 4 },
  jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
};

/** Generacion pdf del CV */
function generateResume() {
    html2pdf(areaCV, opt);
}

resumeButton.addEventListener('click', () => {
    generateResume();
})

// Opcion desplegable de intereses 
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
