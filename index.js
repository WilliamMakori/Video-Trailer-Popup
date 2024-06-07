const btnEl = document.querySelector(".btn");
// The purpose of this is to manipulate the button and it's functioning 
// The watch now button has to show the video and for it to get played
const closeIconEl = document.querySelector(".close-icon")
// This will be the x button that closes the window
// The window after being closed will remove the playing video window
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");
// this const here controls the functionality for the video

btnEl.addEventListener("click", () => {
    trailerContainerEl.classList.remove("active");

});

closeIconEl.addEventListener("click", () => {
    trailerContainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;

})