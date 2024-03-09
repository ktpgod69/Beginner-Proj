const closedfist = document.querySelector(".closed");
const punchreaction = document.querySelector(".open");

//Add event listener
closedfist.addEventListener("click", () => {
    if(punchreaction.classList.contains("open")) {
        punchreaction.classList.add("active");
        closedfist.classList.remove("active");
     }
});

punchreaction.addEventListener("click", () => {
    if (closedfist.classList.contains("closed")) {
        closedfist.classList.add("active");
        punchreaction.classList.remove("active");
    }
});
