const btnListEl = document.querySelector(".btn-list");
const btnsEl = document.querySelectorAll(".btn-list__button");
const cardsEl = document.querySelectorAll(".card-list__item");

const onClick = (e) => {
  const { target } = e;
  if (target.nodeName !== "BUTTON") return;

  [...btnsEl].map((btn) => {
    btn.classList.remove("active");
  });

  const filterValue = target.value;
  target.classList.add("active");
  target.focus({ focusVisible: false });

  if (filterValue === "all") {
    [...cardsEl].map((card) => {
      card.classList.remove("is-hidden");
    });
    return;
  }

  [...cardsEl].map((card) => {
    if (card.getAttribute("data-category") !== filterValue) {
      card.classList.add("is-hidden");
    } else {
      card.classList.remove("is-hidden");
    }
  });
};

btnListEl.addEventListener("click", onClick);
