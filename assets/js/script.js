const citas = [
    "La vida es lo que pasa mientras estás ocupado haciendo otros planes. - John Lennon",
    "No cuentes los días, haz que los días cuenten. - Muhammad Ali",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día. - Robert Collier",
    "Es imposible vivir sin fallar en algo, a menos que vivas con tanta precaución que no hayas vivido en absoluto. - J.K. Rowling",
    "Tu tiempo es limitado, así que no lo desperdicies viviendo la vida de alguien más. - Steve Jobs",
    "La vida es ahora, no en un futuro lejano. - Rainer Maria Rilke",
    "La grandeza de la vida no está en no caer, sino en levantarnos cada vez que caemos. - Vincent Van Gogh",
    "Lo que obtienes al lograr tus metas no es tan importante como en lo que te conviertes al alcanzarlas. - Zig Ziglar",
    "La vida puede ser maravillosa si no tienes miedo de vivirla. - F. Scott Fitzgerald",
    "Vive como si fueras a morir mañana. Aprende como si fueras a vivir para siempre. - Mahatma Gandhi",
    "La experiencia es una maestra severa, pero enseña a los que están dispuestos a aprender. - C.S. Lewis",
    "El hombre que mueve montañas comienza cargando pequeñas piedras. - Confucio",
    "No se puede vivir la vida en el pasado ni en el futuro. La vida es ahora. - James Baldwin",
];

const imagenes = [
    '/assets/img/imagen1.jpg',
    '/assets/img/imagen2.jpg',
    '/assets/img/imagen3.jpg',
    '/assets/img/imagen4.jpg',
    '/assets/img/imagen5.jpg',
];

let currentImageIndex = 0;

function citaRandom() {
    const randomIndex = Math.floor(Math.random() * citas.length);
    return citas[randomIndex];
}

function cambiarFondo() {
    currentImageIndex = (currentImageIndex + 1) % imagenes.length;
    document.body.style.backgroundImage = `url('${imagenes[currentImageIndex]}')`;
}

setInterval(cambiarFondo, 10000);

document.getElementById("nueva-cita").addEventListener("click", () => {
    document.getElementById("cita").textContent = citaRandom();
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cita").textContent = citaRandom();
    cambiarFondo();
});
