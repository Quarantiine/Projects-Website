"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SearchInputVar = {
  optTitle: document.querySelector('.option-title'),
  searchItems: document.querySelectorAll('.search-items')
};
var optTitle = SearchInputVar.optTitle,
    searchItems = SearchInputVar.searchItems; // ---

var ProjectLanguages = {
  websiteProj: document.querySelectorAll('.website'),
  javascriptProj: document.querySelectorAll('.javascript'),
  reactProj: document.querySelectorAll('.react')
};
var websiteProj = ProjectLanguages.websiteProj,
    javascriptProj = ProjectLanguages.javascriptProj,
    reactProj = ProjectLanguages.reactProj; // ---

var mainProjectCardBoxesContainer = document.querySelector('.main-project-card-boxes-container');
var ProjectCardBoxVar = {
  projectCardBox: document.querySelectorAll('.project-card-box'),
  cardBoxNumbers: document.querySelectorAll('.card-box-number')
};
var projectCardBox = ProjectCardBoxVar.projectCardBox,
    cardBoxNumbers = ProjectCardBoxVar.cardBoxNumbers;

var SearchBarSystem =
/*#__PURE__*/
function () {
  function SearchBarSystem() {
    _classCallCheck(this, SearchBarSystem);
  }

  _createClass(SearchBarSystem, [{
    key: "ImgSystem",
    value: function ImgSystem() {
      var imgs = [// Websites
      'imgs/card-box-img-3.jpg', 'imgs/card-box-img-2.jpg', 'imgs/card-box-img-1.jpg', // Javascript
      'imgs/card-box-img-4.jpg' // React
      ];

      for (var i = 0; i < imgs.length; i++) {
        var element = imgs[i];
        var misImg = 'imgs/mis-img.jpg';
        projectCardBox[i].style.backgroundImage = "url(".concat(element, ")");

        if (!projectCardBox[i].style.backgroundImage == "imgs/card-box-img-".concat(i, ".jpg")) {
          projectCardBox[i].style.backgroundImage = "url(".concat(misImg, ")");
        } else {
          projectCardBox[i].style.backgroundImage = "url(".concat(element, ")");
        }
      }
    }
  }, {
    key: "CardBoxNumbersMethod",
    value: function CardBoxNumbersMethod() {
      for (var i = 0; i < cardBoxNumbers.length; i++) {
        var element = cardBoxNumbers[i];
        element.textContent = i + 1;
      }
    }
  }, {
    key: "OptionItem",
    value: function OptionItem() {
      optTitle.addEventListener('click', function () {
        for (var i = 0; i < projectCardBox.length; i++) {
          if (i >= 1) {
            $(projectCardBox).css('grid-column', "auto");
          } else {
            $(projectCardBox).css('grid-column', "1/4");
          }
        }

        projectCardBox.forEach(function (element) {
          element.classList.add('project-card-box-class-list-enable');
          element.classList.remove('project-card-box-class-list-disable');
        });
      });
    }
  }, {
    key: "SearchItem1",
    value: function SearchItem1() {
      searchItems[0].addEventListener('click', function () {
        for (var i = 0; i < websiteProj.length; i++) {
          if (i >= 1) {
            $(projectCardBox).css('grid-column', "auto");
          } else {
            $(projectCardBox).css('grid-column', "1/4");
          }
        }

        projectCardBox.forEach(function (element) {
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
  }, {
    key: "SearchItem2",
    value: function SearchItem2() {
      searchItems[1].addEventListener('click', function () {
        for (var i = 0; i < javascriptProj.length; i++) {
          if (i >= 1) {
            $(projectCardBox).css('grid-column', "auto");
          } else {
            $(projectCardBox).css('grid-column', "1/4");
          }
        }

        projectCardBox.forEach(function (element) {
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
  }, {
    key: "SearchItem3",
    value: function SearchItem3() {
      searchItems[2].addEventListener('click', function () {
        for (var i = 0; i < reactProj.length; i++) {
          if (i >= 1) {
            $(projectCardBox).css('grid-column', "auto");
          } else {
            $(projectCardBox).css('grid-column', "1/4");
          }
        }

        projectCardBox.forEach(function (element) {
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
  }]);

  return SearchBarSystem;
}();

var SBS = new SearchBarSystem();

var ClassMethodControlSystem = function ClassMethodControlSystem() {
  SBS.ImgSystem();
  SBS.CardBoxNumbersMethod();
  SBS.OptionItem();
  SBS.SearchItem1();
  SBS.SearchItem2();
  SBS.SearchItem3();
};

ClassMethodControlSystem();