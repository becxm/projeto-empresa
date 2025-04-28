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

    document.querySelectorAll('.toggle').forEach((btn) => {
      const txt = btn.closest('.description').querySelector('.text');
      const overflow = txt.querySelector('.overflow');
      const textInitialHeight = txt.clientHeight;
  
      btn.addEventListener('click', function () {
          const isMore = btn.dataset.state === 'more';
  
          txt.style.maxHeight = isMore
              ? `${txt.scrollHeight}px`
              : `${textInitialHeight}px`;
  
          btn.setAttribute('data-state', isMore ? 'less' : 'more');
          btn.innerHTML = isMore
              ? 'Leia menos <i class="fa-solid fa-chevron-right arrow"></i>'
              : 'Leia mais <i class="fa-solid fa-chevron-right arrow"></i>';
  
          overflow.setAttribute('data-state', isMore ? 'hidden' : 'visible');
      });
  });


