export default function fileToggle() {
  const inputs = document.querySelectorAll(".input-file");

  if (inputs.length) {
    inputs.forEach(input => {
      input.addEventListener("change", e => {
        if (e.target.files[0]) {
          const currentTitle = input.nextElementSibling.querySelector("span");
          currentTitle.textContent = e.target.files[0].name;
        }
      })
    })
  }
}