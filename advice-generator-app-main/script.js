let isLoading = false;

async function advices() {
  const message = document.querySelector(".status-message");
  if (isLoading) {
    message.textContent = "Advice is still loading. Please wait.";
    return;
  } else {
    message.textContent = "";
  }

  isLoading = true;

  try {
    const response = await fetch(`https://api.adviceslip.com/advice`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    const element = document.querySelector(".advice");
    element.textContent = `"${data.slip.advice}"`;

    const number = document.querySelector(".number");
    number.textContent = `${data.slip.id}`;
  } catch (error) {
    message.textContent = `Error Type: ${error.name}`;
  } finally {
    isLoading = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  advices();
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", () => {
    advices();
  });
});
