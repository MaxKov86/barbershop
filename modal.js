const back = document.querySelector("[data-modal]");
const btnCloseModal = document.querySelector("button[data-modal-close]");
let btnOpenModal = document.querySelectorAll("button[data-modal-open]");
const btnSub = document.querySelector(".modal-btn-sub");
const modal = document.querySelector(".modal");

// document.body.addEventListener("click", (e) => {
//   back.classList.toggle("is-hidden");

// });

btnOpenModal.forEach((btn) => {
  btn.addEventListener("click", toggle);
});

// btnOpenModal.addEventListener("click", () => {
//   console.log("Hello");
//   back.classList.toggle("is-hidden");
// });
btnCloseModal.addEventListener("click", () => {
  back.classList.add("is-hidden");
});

function toggle() {
  back.classList.toggle("is-hidden");
}

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "Escape") {
    back.classList.add("is-hidden");
  }
});
document.addEventListener("click", (e) => {
  if (e.target === back) {
    back.classList.add("is-hidden");
  }
});

const INITIAL_STATE = [{ login: "", email: "", password: "" }];

const state = { ...INITIAL_STATE[0] };

console.log(state);
