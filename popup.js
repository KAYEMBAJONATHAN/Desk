// const desktopModalView = document.querySelector('.desktop-project-pop-up');
// const mobileModalView = document.querySelector('.project-pop-up');
// const theProjectButtons = document.querySelectorAll('.see-project-button');
const desktopPopup = document.querySelector('.desktop-project-pop-up');
const projectButtons = document.querySelectorAll('.see-project-btn');
const btns = Array.from(projectButtons);
// const overlay = document.getElementById('overlay');
desktopPopup.style.display = "none";



const array = [
    {
      id: '1',
      name: 'Tonic',
      namedesk: 'Tonic',
      shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      shortDescriptiondesk: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      longDescriptiondesk: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it 1960s with the relea`,
      featured: ['CANOPY', 'Back End Dev', 2015],
      featureddesk: ['CANOPY', 'Back End Dev', 2015],
      image: './assets/Snapshoot Portfolio.png',
      imageDesktop: 'img/nature.svg',
      technologies: ['html', 'css', 'javaScript'],
      technologiesdesk: ['html', 'css', 'javaScript', 'Ruby on rails', 'github', 'ruby', 'Bootstraps'],
      live_version: 'https://kayembajonathan.github.io/Desk/',
      source_link: 'https://github.com/KAYEMBAJONATHAN/Desk.git',
    },
    {
      id: '2',
      name: 'Multi-Post Stories',
      namedesk: 'Multi-Post Stories',
      shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      shortDescriptiondesk: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
      longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      longDescriptiondesk: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it 1960s with the relea`,
      featured: ['CANOPY', 'Back End Dev', 2015],
      featureddesk: ['FACEBOOK', 'Full Stack Dev', 2015],
      image: './assets/Snapshoot Portfolio-1.png',
      imageDesktop: 'img/stories-desk.svg',
      technologies: ['html', 'css', 'javaScript'],
      technologiesdesk: ['html', 'css', 'javaScript', 'Ruby on rails', 'github', 'ruby', 'Bootstraps'],
      live_version: 'https://kayembajonathan.github.io/Desk/',
      source_link: 'https://github.com/KAYEMBAJONATHAN/Desk.git',
    },
    {
      id: '3',
      name: 'Tonic',
      namedesk: 'Facebook 360',
      shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      shortDescriptiondesk: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
      longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      longDescriptiondesk: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it 1960s with the relea`,
      featured: ['CANOPY', 'Back End Dev', 2015],
      featureddesk: ['FACEBOOK', 'Full Stack Dev', 2015],
      image: './assets/Snapshoot Portfolio-2.png',
      imageDesktop: 'img/desk-one.svg',
      technologies: ['html', 'css', 'javaScript'],
      technologiesdesk: ['html', 'css', 'javaScript', 'Ruby on rails', 'github', 'ruby', 'Bootstraps'],
      live_version: 'https://kayembajonathan.github.io/Desk/',
      source_link: 'https://github.com/KAYEMBAJONATHAN/Desk.git',
    },
    {
      id: '4',
      name: 'Multi-Post Stories',
      namedesk: 'Uber Navigation',
      shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      shortDescriptiondesk: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
      longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      longDescriptiondesk: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it 1960s with the relea`,
      featured: ['CANOPY', 'Back End Dev', 2015],
      featureddesk: ['UBER', 'Lead Developer', 2018],
      image: './assets/Snapshoot Portfolio-3.png',
      imageDesktop: 'img/uber-desk.svg',
      technologies: ['html', 'css', 'javaScript'],
      technologiesdesk: ['html', 'css', 'javaScript', 'Ruby on rails', 'github', 'ruby', 'Bootstraps'],
      live_version: 'https://kayembajonathan.github.io/Desk/',
      source_link: 'https://github.com/KAYEMBAJONATHAN/Desk.git',
    },
  ];



function desktop(index) {
    // overlay.classList.add('active')
    desktopPopup.style.display = 'flex';
    // developerName.style.color = '#3e3c3c';
    desktopPopup.innerHTML += `
        <div class="model_content" id="modelcontent">
            <div class="model_header">
                <h2 class="project_title">Name: ${array[index].name}</h2>
                <span onclick="closeModal()" class="crossBtn">&times;</span>
            </div>
            <ul class="info_list">
                <li class="item1">${array[index].featured[0]}</li>
                <li class="item2"><span class="dot">&bull;</span><span>${array[index].featured[1]}</span></li>
                <li class="item2"><span class="dot">&bull;</span><span>${array[index].featured[2]}</span></li>
            </ul>
            <img class="img_project" src=${array[index].image} alt="project">
            <p class="project_description">${array[index].longDescriptiondesk}</p>
            
            <ul class="tech_list">
                <li>${array[index].technologies[0]}</li>
                <li class="margin_li">${array[index].technologies[1]}</li>
                <li class="margin_li">${array[index].technologies[2]}</li>
            </ul>
            <div class="boxxx"><p class="project_descriptiondesk">${array[index].longDescriptiondesk}</p>
            <ul class="tech_listdesk">
                <li>${array[index].technologiesdesk[0]}</li>
                <li class="margin_li">${array[index].technologiesdesk[1]}</li>
                <li class="margin_li">${array[index].technologiesdesk[2]}</li></ul>
                <ul class="tech_listdesk1">
                <li class="margin_li">${array[index].technologiesdesk[4]}</li>
                <li class="margin_li">${array[index].technologiesdesk[5]}</li>
                <li class="margin_li">${array[index].technologiesdesk[6]}</li>
            </ul>
            <img src="./img/border_line.png" alt="border line" class="button_line">
            <div class="buttons">
                <a class="model_btn live" href=${array[index].live_version}>See live<img class="_icon" src="./assets/html circle.svg" alt="live icon"></a>
                <a class="model_btn source" href=${array[index].source_link}>See project<img class="_icon" src="./img/Vector.svg" alt="github icon"></a>
            </div>
            </div>
    </div>`
}


btns.forEach((btn,index) => {
  btn.addEventListener("click", () => {
    desktop(index);
  })
});


// document.addEventListener('click', (event) => {
//     if (event.target.id === 'close-popUp') {
//         desktopProjectPopupScript.style.display = 'none';
//     }
//   });


const desktopHamburgerXPopupScript = document.querySelector(".desktop-close-button-of-popup");

desktopHamburgerXPopupScript.addEventListener("click", () => {
    desktopProjectPopupScript.style.display = 'none';
    overlay.classList.remove('active')
    developerName.style.color = 'white';
  
})

mobileModalView.addEventListener("click", () => {
    mobileModalView.style.display = 'none';
    overlay.classList.remove('active')
    developerName.style.color = 'white';
  
});



// for (let i = 0; i < btns.length; i += 1) {
//     // newBtnArray[i].addEventListener('click', () => {
//     //   mobile(i);
//     //   main.style.backdropFilter = blur();
//     // });
//     btns[i].addEventListener('click', () => {
//       alert("number: " + i);
//       desktop(i);
//     });
//   }






