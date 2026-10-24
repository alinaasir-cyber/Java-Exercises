function changeContent() {
  
    const titleElement = document.querySelector("#title");
    titleElement.textContent = "Welcome to my new website!";

   
    const bioElement = document.querySelector("#bio-text");
    bioElement.innerHTML = "Waan ku faraxsanahay inaan idin soo bandhigo mashruucayga <strong>JavaScript DOM Manipulation</strong>!";

    
    const skillsList = document.querySelector("#skills-list");
    skillsList.innerHTML = `
        <li class="skill-item" style="background: #d4edda; color: #155724;">Advanced JavaScript</li>
        <li class="skill-item" style="background: #d4edda; color: #155724;">DOM Manipulation Mastered</li>
    `;
    
    console.log("Content successfully changed!");
}