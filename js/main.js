window.onload = () => {

    // nav hamburgger

    let toggleBtn = document.querySelector(".navbugger");
    let menu = document.querySelector(".navmenu");

    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle("active");
        toggleBtn.classList.toggle("open");
    });

    // scroll box popup

    function boxPosition(evnt, startevent) {
        let top = evnt.getBoundingClientRect().top;
        let innerHeight = window.innerHeight;
        return top > innerHeight + (startevent || 0);
    }
    function scrollEvent() {
        let elmt = document.querySelectorAll(".scrollPopup");
        elmt.forEach((evnt) => {
            if (boxPosition(evnt, -80)) {
                evnt.style.opacity = "0";
                evnt.style.transform = "translateY(120px)";
            }
            else {
                evnt.style.opacity = "1";
                evnt.style.transform = "translateY(0px)";
            }
        });
    }
    window.addEventListener("scroll", scrollEvent);

    // typing effect

    const texts = document.querySelector(".typing")
    const phrases = ["WEB Dev", "Back-End Dev."];
    let texti = 0
    let textj = 0
    let curruntphrase = []
    let isdeleting = false
    let isEnd = false

    function typeText() {
        isEnd = false
        texts.innerHTML = curruntphrase.join("")
        if (texti < phrases.length) {

            if (!isdeleting && textj <= phrases[texti].length) {
                curruntphrase.push(phrases[texti][textj])
                textj++
                texts.innerHTML = curruntphrase.join("")
            }
            if (isdeleting && textj <= phrases[texti].length) {
                curruntphrase.pop(phrases[texti][textj])
                textj--
                texts.innerHTML = curruntphrase.join("")
            }
            if (textj == phrases[texti].length) {
                isdeleting = true
            }
            if (isdeleting && textj === 0) {
                curruntphrase = []
                isdeleting = false
                texti++
                if (texti === phrases.length) {
                    texti = 0
                }
            }
        }
        const deleteSpeed = Math.random() * (400 - 50) + 50
        const normalSpeed = Math.random() * (500 - 200) + 200
        const time = isEnd ? 2000 : isdeleting ? deleteSpeed : normalSpeed
        setTimeout(typeText, time)
    }
    typeText()

    //skills image

    let images = ["html.png", "css.png", "js.png", "jquery.png", "mysql.png", "php.png", "photoshop.png", "illu.png"];
    let src = "url('./image/icons/";
    function skills() {
        for (i = 0; i < images.length; i++) {
            document.getElementsByClassName("skills")[i].style.backgroundImage = src + images[i];
        }
    };
    skills();

    // skills progress

    const skillBox = document.querySelector(".skillBox");
    const progressBars = document.querySelectorAll(".progress");

    function showProgress() {
        progressBars.forEach(progressBar => {
            const value = progressBar.dataset.progress;
            progressBar.style.opacity = 0.7;
            progressBar.style.width = `${value}%`;
        });
    }

    function hideProgress() {
        progressBars.forEach(progressBar => {
            progressBar.style.opacity = 0;
            progressBar.style.width = 0;
        });
    }
    window.addEventListener("scroll", () => {
        const skillPos = skillBox.getBoundingClientRect().top;
        const screenPos = window.innerHeight;

        if (skillPos < screenPos) {
            showProgress();
        }
        else {
            hideProgress();
        }
    });
};