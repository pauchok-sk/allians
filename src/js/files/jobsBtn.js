export default function jobsBtn() {
  const buttons = document.querySelectorAll("[data-job-btn]");
  
  if (buttons.length) {
    const input = document.querySelector("#input-job");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const job = btn.dataset.jobBtn;
        
        input.value = job;
      })
    })
  }
}