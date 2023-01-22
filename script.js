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
                    <li class="formal-ed">
                      <h2 class="education-heading">Formal Education:</h2>
                        <ul class="education-areas">
                          <li class="section-description">School: &laquo;Usum&raquo; Private School</li>
                          <li class="section-description">University: N/A</li>
                          <div class="achievements-heading">
                            <li class="achievements-heading-text">Academic achievements in &laquo;Usum&raquo;:</li>
                            <button class="info-expand-btn"><i class="fa-solid fa-angle-right"></i></button>
                          </div>
                          
                        </ul>
                    </li>
                    <li class="extracurricular-ed">
                        <h2 class="education-heading">Extracurricular Education:</h2>
                        <ul class="education-areas">
                          <li class="section-description">Musical school named after Gh. Saryan(2019-Present)</li>
                          <li class="section-description">ACA JavaScript Profession Course</li>
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

          btn.classList.add("active-btn");

          document.querySelector(".section-name").innerHTML = `
              <h2 class="section-name">${btn.textContent}:</h2>
          `;

          document.querySelector(".section-content").innerHTML = `
              ${sectionHTML}
          `;

          document.querySelectorAll(".info-expand-btn").forEach((btn, i, btnList) => {
            btn.addEventListener("click", function() {
              btn.classList.toggle("expanded-btn");

              if(btn.classList.contains("expanded-btn")) {
                btn.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
                document.querySelector(".education-areas").insertAdjacentHTML(
                  "beforeend",
                  `<ul class="achievements-list">
                    <li class="achievement">9&times; Grade Graduation With Excellence&#127942;</li>
                    <li class="achievement">6&times; First Place Achievement in Various Subjects&#129351;</li>
                    <li class="achievement">4&times; Second Place from Achievement in Various Subjects&#129352;</li>
                    <li class="achievement">3&times; Certificate of Participation in Various Academic Events</li>
                    <li class="achievement">1&times; Certificate of Accomlishment in National English Olympics</li>
                  </ul>`
                );
              } else {
                btn.innerHTML = '<i class="fa-solid fa-angle-right"></i>';
                document.querySelector(".education-areas").removeChild(document.querySelector(".achievements-list"));
              }

            })
          })
      }
    });
});

