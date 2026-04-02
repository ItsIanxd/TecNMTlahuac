$gmx(document).ready(function () {

    // FILTRO
    document.querySelectorAll(".filtro").forEach(btn => {
        btn.addEventListener("click", () => {
            let filtro = btn.dataset.filtro;

            document.querySelectorAll(".carrera").forEach(card => {
                if (filtro === "todas" || card.dataset.categoria === filtro) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // MODAL
    document.querySelectorAll(".ver-mas").forEach(btn => {
        btn.addEventListener("click", () => {
            document.getElementById("modalTitulo").innerText = btn.dataset.titulo;
            document.getElementById("modalTexto").innerText = btn.dataset.texto;

            let modal = new bootstrap.Modal(document.getElementById('modalCarrera'));
            modal.show();
        });
    });

    // ANIMACIÓN SCROLL
    const animar = document.querySelectorAll(".animar");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    animar.forEach(el => observer.observe(el));

});