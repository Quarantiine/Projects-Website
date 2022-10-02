const SearchInputVar = {
    optTitle: document.querySelector('.option-title'),
    searchItems: document.querySelectorAll('.search-items')
}
const {optTitle, searchItems} = SearchInputVar;
// ---
const ProjectLanguages = {
    websiteProj: document.querySelectorAll('.website'),
    javascriptProj: document.querySelectorAll('.javascript'),
    reactProj: document.querySelectorAll('.react')
}
const {websiteProj, javascriptProj, reactProj} = ProjectLanguages;
// ---
const mainProjectCardBoxesContainer = document.querySelector('.main-project-card-boxes-container');
const ProjectCardBoxVar = {
    projectCardBox: document.querySelectorAll('.project-card-box'),
    cardBoxNumbers: document.querySelectorAll('.card-box-number')
    
}
const {projectCardBox, cardBoxNumbers} = ProjectCardBoxVar;

class SearchBarSystem {
    constructor(){}

    ImgSystem() {
        let imgs = [
            // Websites
            'imgs/card-box-img-3.jpg',
            'imgs/card-box-img-2.jpg',
            'imgs/card-box-img-1.jpg',

            // Javascript
            'imgs/card-box-img-4.jpg'

            // React
        ];

        for (let i = 0; i < imgs.length; i++) {
            const element = imgs[i];
            const misImg = 'imgs/mis-img.jpg'; 
            projectCardBox[i].style.backgroundImage = `url(${element})`;
            
            if (!projectCardBox[i].style.backgroundImage == `imgs/card-box-img-${i}.jpg`) {
                projectCardBox[i].style.backgroundImage = `url(${misImg})`;
            } else {
                projectCardBox[i].style.backgroundImage = `url(${element})`;
            }
        }
    }

    CardBoxNumbersMethod() {
        for (let i = 0; i < cardBoxNumbers.length; i++) {
            const element = cardBoxNumbers[i];
            element.textContent = i+1;
        }
    }

    OptionItem() {
        optTitle.addEventListener('click', ()=> {

            for (let i = 0; i < projectCardBox.length; i++) {
                if (i >= 1) {
                    $(projectCardBox).css('grid-column', `auto`);
                } else {
                    $(projectCardBox).css('grid-column', `1/4`);
                }
            }

            projectCardBox.forEach(element => {
                element.classList.add('project-card-box-class-list-enable');
                element.classList.remove('project-card-box-class-list-disable');
            });
        });
    }

    SearchItem1() {
        searchItems[0].addEventListener('click', ()=> {

            for (let i = 0; i < websiteProj.length; i++) {
                if (i >= 1) {
                    $(projectCardBox).css('grid-column', `auto`);
                } else {
                    $(projectCardBox).css('grid-column', `1/4`);
                }
            }

            projectCardBox.forEach(element => {
                $(element).css('grid-column', 'auto');
                if (element.classList[1] == 'website') {
                    element.classList.add('project-card-box-class-list-enable');
                    element.classList.remove('project-card-box-class-list-disable');
                }

                if (element.classList[1] == 'javascript' || element.classList[1] == 'react') {
                    element.classList.add('project-card-box-class-list-disable');
                    element.classList.remove('project-card-box-class-list-enable');
                }
            });
        });
    }

    SearchItem2() {
        searchItems[1].addEventListener('click', ()=> {

            for (let i = 0; i < javascriptProj.length; i++) {
                if (i >= 1) {
                    $(projectCardBox).css('grid-column', `auto`);
                } else {
                    $(projectCardBox).css('grid-column', `1/4`);
                }
            }

            projectCardBox.forEach(element => {
                if (element.classList[1] == 'javascript') {
                    element.classList.add('project-card-box-class-list-enable');
                    element.classList.remove('project-card-box-class-list-disable');
                }

                if (element.classList[1] == 'website' || element.classList[1] == 'react') {
                    element.classList.add('project-card-box-class-list-disable');
                    element.classList.remove('project-card-box-class-list-enable');
                }
            });
        });
    }

    SearchItem3() {
        searchItems[2].addEventListener('click', ()=> {

            for (let i = 0; i < reactProj.length; i++) {
                if (i >= 1) {
                    $(projectCardBox).css('grid-column', `auto`);
                } else {
                    $(projectCardBox).css('grid-column', `1/4`);
                }
            }

            projectCardBox.forEach(element => {
                $(element).css('grid-column', '1/4');
                if (element.classList[1] == 'react') {
                    element.classList.add('project-card-box-class-list-enable');
                    element.classList.remove('project-card-box-class-list-disable');
                }

                if (element.classList[1] == 'website' || element.classList[1] == 'javascript') {
                    element.classList.add('project-card-box-class-list-disable');
                    element.classList.remove('project-card-box-class-list-enable');
                }
            });
        });
    }
}
const SBS = new SearchBarSystem();

const ClassMethodControlSystem = ()=> {
    SBS.ImgSystem();
    SBS.CardBoxNumbersMethod();
    SBS.OptionItem();
    SBS.SearchItem1();
    SBS.SearchItem2();
    SBS.SearchItem3();
};
ClassMethodControlSystem();