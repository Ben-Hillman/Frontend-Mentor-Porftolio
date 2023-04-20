const projects = document.querySelectorAll(".projects-card");
const projectOverview = document.querySelectorAll(".projects-overview");
const close = document.querySelectorAll(".close");

const colors = ["red", "orange", "yellow", "green", "blue",];

for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener("click", () => {
        // projectOverview[i].style.backgroundColor = colors[i];

        if(projectOverview[i].classList.contains("hidden")) {
            for(let j = 0; j < projectOverview.length; j++) {
                if(!projectOverview[j].classList.contains("hidden")) {
                    projectOverview[j].classList.add("hidden");
                }
            }
    
            projectOverview[i].classList.remove("hidden");
        }
        else {
            projectOverview[i].classList.add("hidden");
        }
    });
    
    close[i].addEventListener("click", () => {
        projectOverview[i].classList.add("hidden");
    });
}


