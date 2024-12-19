const translations = {
    ky: {
      title: "Талипжанов Алишер",
      h2: "Фронтенд иштеп чыгуучу",
      p: "Менин аты жонум Талипжанов Алишер Манасович. Мен front end багытында веб-тиркемелерди иштеп чыгуучумун. Мен үчүн веб-сайттарды жаратуу—чыгармачылык менен технологияны айкалыштыруунун эң мыкты жолу. Менин максатым—бул тармакта өзүмдү көрсөтүп,пайдалануучуга ыңгайлуу жана көркөм веб-тиркемелерди түзүү жана оз тажрыйбамды чонойтуу. Менин 6 айлык тажрыйбамда JavaScript, React, GitHub жана TypeScript сыяктуу технологиялар менен иштедим. Код жазуудан тышкары, мага креативдүү долбоорлорго катышуу, дизайн жасоо жана жаңы технологияларды үйрөнүү жагат. Жеке жашоомдо гитара черткенди жакшы кором.",
      about: "Мен жөнүндө",
      projects: "Долбоорлор",
      contact: "Контакт",
      footer: "Бардык укуктар корголгон",
      project1: {
        title: "Долбоор 1",
        description: "Бул долбоор веб-браузерде ойнолуучу классикалык 'X' жана 'O' оюну...",
      },
      project2: {
        title: "Долбоор 2",
        description: "Бул долбоор универсальный онлайн дукон десек болот...",
      },
      project3: {
        title: "Долбоор 3",
        description: "Бул долбоор—онлайн бут кийим сатуу дүкөнү...",
      },
      nav:{
        a: "Мен жөнүндө"
      }
    },
    ru: {
      title: "Талипжанов Алишер",
      h2: "Фронтенд разработчик",
      p: "Меня зовут Талипжанов Алишер Манасович. Я разработчик веб-приложений в направлении front-end. Для меня создание веб-сайтов — это лучший способ объединить творчество и технологии. Моя цель — проявить себя в этой области, создавать удобные и эстетически привлекательные веб-приложения, а также постоянно развиваться профессионально. За 6 месяцев опыта я работал с такими технологиями, как JavaScript, React, GitHub и TypeScript. Помимо написания кода, мне нравится участвовать в креативных проектах, заниматься дизайном и изучать новые технологии. В свободное время я люблю играть на гитаре.",
      about: "Обо мне",
      projects: "Проекты",
      contact: "Контакты",
      footer: "Все права защищены",
      project1: {
        title: "Проект 1",
        description: "Этот проект — классическая игра 'X' и 'O', которая играется в браузере...",
      },
      project2: {
        title: "Проект 2",
        description: "Этот проект представляет собой универсальный интернет-магазин...",
      },
      project3: {
        title: "Проект 3",
        description: "Этот проект — интернет-магазин обуви с удобным интерфейсом...",
      },
    },
    en: {
      title: "Talipjanov Alisher", 
      h2: "Front-end Developer",
      p: "My name is Talipzhanov Alisher Manasovich. I am a front-end web application developer. For me, creating websites is the best way to combine creativity and technology. My goal is to showcase myself in this field, build user-friendly and visually appealing web applications, and expand my professional experience. During my 6 months of experience, I have worked with technologies such as JavaScript, React, GitHub, and TypeScript. Besides coding, I enjoy participating in creative projects, designing, and learning new technologies. In my free time, I love playing the guitar.",
      about: "About Me",
      projects: "Projects",
      contact: "Contact",
      footer: "All rights reserved",
      project1: {
        title: "Project 1",
        description: "This project is a classic 'X' and 'O' game played in the browser...",
      },
      project2: {
        title: "Project 2",
        description: "This project represents a universal online shop...",
      },
      project3: {
        title: "Project 3",
        description: "This project is an online shoe store with a user-friendly interface...",
      },
      nav:{
        a: "Мен жөнүндө"
      }
    },
  };
  
  document.getElementById("language-selector").addEventListener("change", (event) => {
    const selectedLang = event.target.value;
    updateContent(selectedLang);
  });
  
  function updateContent(lang) {
    document.querySelector(".title").textContent = translations[lang].title;
    document.querySelector(".h2").textContent = translations[lang].h2;
    document.querySelector(".p").textContent = translations[lang].p;
    document.querySelector("#about h2").textContent = translations[lang].about;
    document.querySelector("#projects h2").textContent = translations[lang].projects;
    document.querySelector("#contact h2").textContent = translations[lang].contact;
    document.querySelector(".footer p").textContent = `© 2024 ${translations[lang].footer}`;
  
    const projectCards = document.querySelectorAll(".project-card");
    const projects = ["project1", "project2", "project3"];
  
    projectCards.forEach((card, index) => {
      const project = translations[lang][projects[index]];
      card.querySelector("h3").textContent = project.title;
      card.querySelector("p").textContent = project.description;
    });
  }
  