const aboutButton = document.querySelector(".about");
const signUpButton = document.querySelector(".signUp")

aboutButton.addEventListener("click", () => {
    document.querySelector(".whatIs").scrollIntoView({ behavior: 'smooth', block: 'center'});
})
signUpButton.addEventListener("click", () => {
    document.querySelector(".joinContainer").scrollIntoView({ behavior: 'smooth', block: 'end'});
})