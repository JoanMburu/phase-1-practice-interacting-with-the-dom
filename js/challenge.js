document.addEventListener("DOMContentLoaded", () => {
    const counterDisplay = document.getElementById("counter");
    const minusButton = document.getElementById("minus");
    const plusButton = document.getElementById("plus");
    const heartButton = document.getElementById("heart");
    const pauseButton = document.getElementById("pause");
    const likesList = document.querySelector(".likes");
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    let count = 0;
    let timer;
    let paused = false;
  
    // Function to start or resume the counter
    function startCounter() {
      timer = setInterval(() => {
        if (!paused) {
          count++;
          counterDisplay.textContent = count;
        }
      }, 1000);
    }
  
    // Function to pause the counter
    function pauseCounter() {
      paused = true;
    }
  
    // Function to resume the counter
    function resumeCounter() {
      paused = false;
    }
  
    // Function to handle clicking the minus button
    minusButton.addEventListener("click", () => {
      count--;
      counterDisplay.textContent = count;
    });
  
    // Function to handle clicking the plus button
    plusButton.addEventListener("click", () => {
      count++;
      counterDisplay.textContent = count;
    });
  
    // Function to handle clicking the heart button
    heartButton.addEventListener("click", () => {
      const li = document.createElement("li");
      li.textContent = `${count} has been liked.`;
      likesList.appendChild(li);
    });
  
    // Function to handle clicking the pause button
    pauseButton.addEventListener("click", () => {
      if (!paused) {
        pauseCounter();
        pauseButton.textContent = "resume";
      } else {
        resumeCounter();
        pauseButton.textContent = "pause";
      }
    });
  
    // Function to handle submitting a comment
    commentForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const comment = commentInput.value.trim();
      if (comment !== "") {
        const commentDiv = document.createElement("div");
        commentDiv.textContent = comment;
        document.getElementById("list").appendChild(commentDiv);
        commentInput.value = "";
      }
    });
  
    // Start the counter when the page loads
    startCounter();
  });