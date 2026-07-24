const username = "DevindiEngineer";

fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
    .then(response => response.json())
    .then(repos => {

        const projectsContainer =
            document.getElementById("github-projects");

        repos.forEach(repo => {

            const projectCard =
                document.createElement("div");

            projectCard.classList.add("project-card");

            projectCard.innerHTML = `
                <h3>${repo.name.replaceAll("-", " ")}</h3>

                <p>${repo.description || "Project Repository"}</p>

                <p>
                    <strong>${repo.language || ""}</strong>
                </p>
            `;

            projectCard.onclick = () => {
                window.open(repo.html_url, "_blank");
            };

            projectsContainer.appendChild(projectCard);

        });

    })
    .catch(error => {
        console.log("Error fetching projects:", error);
    });