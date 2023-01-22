const navBtns = document.querySelectorAll(".nav-btn");

navBtns.forEach((btn, _, btnList) => {
    btn.addEventListener("click", function () {
      if (!btn.classList.contains("active-btn")) {
        btnList.forEach(nestedBtn => {
          nestedBtn.classList.remove("active-btn")
        });

          let sectionHTML;
          const curDate = new Date();
          const myEmail = "vardanyanzaven3@gmail.com";
          const myPhoneNumber = "+37498774044";

          switch(btn.textContent) {
            case "About Me":
              sectionHTML = `
              <div class="about-me-content">
                <div>
                  <h3 class="name-text">Zaven Vardanyan</h3>
                  <h4 class="cur-occupation">High school student</h4>
                  <img class="my-image" src="my-picture.jpeg" alt="">
                </div>
                <div>
                  <div class="quote">
                    <p class="section-quote">
                      <span class="quote-symbol">&ldquo;</span>Innovation distinguishes between a leader and a follower.<span class="quote-symbol">&rdquo;</span>
                    </p>
                    <p class="quote-author">Steve Jobs</p>
                  </div>
                  <p class="section-description">
                    Highly motivated and with great ambition, I'm always willing to take up new challenges and reach new heights. For over 2 years, I've been constantly improving upon my knowledge about Front-End Development. I'm also greatly interested in expanding my knowledge into Back-End Development.
                  </p>
                </div>
              </div>
              `;
              break;
              case "Education":
                sectionHTML = `
                  <ul class="education-list">
                    <li>
                      <h2 class="education-heading">Formal Education:</h2>
                        <ul class="education-areas">
                          <li class="section-description">School: &laquo;Usum&raquo; Private School</li>
                          <li class="section-description">University: N/A</li>
                          </ul>
                      </li>
                      <li>
                        <h2 class="education-heading">Extracurricular Education:</h2>
                        <ul class="education-areas">
                          <li class="section-description">Musical school named after Gh. Saryan 2019-Present</li>
                          <li class="section-description">ACA JavaScript Profession Course</li>
                          <!-- <li class="section-description"></li> -->
                          </ul>
                      </li>
                  </ul>
                `;
                break;
            case "Projects":
              sectionHTML = `
                <ul class="project-list">
                  <li><a href="https://vardanyanzaven.github.io/Portfolio" class="link">Portfolio Website(currently opened)</a></li>
                  <li><a href="#" class="link">Carousel Slider</a></li>
                  <li><a href="#" class="link">To-do Application</a></li>
                  <li><a href="#" class="link">Tetris</a></li>
                </ul>
              `;
              break;
            case "Work Experience":
              sectionHTML = `
                <p class="section-description">
                  None(as of <span class="current-date">${curDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>)
                </p>
              `;
              break;
            case "Contact Me":
              sectionHTML = `
                <div>
                  <a href="mailto:${myEmail}.com" target="_blank" class="link">
                    <span class="contact-symbol">&#9993;</span> Email: ${myEmail}
                  </a>
                  <a href="tel:${myPhoneNumber}" target="_blank" class="link">
                    <span class="contact-symbol">&#9742;</span> Telephone: ${myPhoneNumber}
                  </a>
                </div>
              `;
          }
          if(btn.textContent === "About Me") {

          }

          btn.classList.add("active-btn");

          document.querySelector(".section-name").innerHTML = `
              <h2 class="section-name">${btn.textContent}:</h2>
          `;

          document.querySelector(".section-content").innerHTML = `
              ${sectionHTML}
          `;
      }
    });
});
