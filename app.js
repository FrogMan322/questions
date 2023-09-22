const questionHolder = Array.from(
  document.querySelectorAll(".questions__holder")
);
const question = Array.from(document.querySelectorAll(".questions__holder p"));

const showBtn = document.querySelectorAll(".show__btn");

showBtn.forEach((e, idx) => {
  e.addEventListener("click", (e) => {
    if (e.target.classList.contains("bi-caret-down-fill")) {
      question[idx].classList.add("active");
      questionHolder[idx].classList.add("active");
      showBtn[idx].innerHTML = `<i class="bi bi-x-circle"></i>`;
    } else {
      question[idx].classList.remove("active");
      questionHolder[idx].classList.remove("active");
      showBtn[idx].innerHTML = `<i class="bi bi-caret-down-fill"></i>`;
    }
  });
});
