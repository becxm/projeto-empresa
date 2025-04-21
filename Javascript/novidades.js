const buttons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".card");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        // Remove classe active de todos
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        cards.forEach(card => {
          if (filter === "all" || card.classList.contains(filter)) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        });
      });
    });

    // Adiciona evento de clique para o botão "Ver mais"

    const txt =
    document.querySelector(".text");
    const textInitialHeight = txt.clientHeight;
    const overflow = document.querySelector(".overflow");
    const btn = document.querySelector(".toggle");

    btn.addEventListener("click", initToggle);

    function initToggle(e) {
        const isMore = e.target.dataset.state === "more";

    txt.style.maxHeight = isMore
        ? `${txt.scrollHeight}px`
        : `${textInitialHeight}px`;

        e.target.setAttribute(
            "data-state",
            e.target.dataset.state === "more" ? "less" : "more"
        );

        e.target.innerHTML =
        e.target.dataset.state === "more" ? "Veja mais " : "Veja menos ";

        overflow.setAttribute(
            "data-state",
            e.target.dataset.state === "more" ? "visible" : "hidden"
        );
    }

