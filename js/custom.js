
// Preloader Start
window.addEventListener("load", function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    this.setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
    },1000)
})
// Preloader End






// Portfolio Item Filter Start
const filterContainer = document.querySelector(".portfolio-filter"),
      filterBtns = filterContainer.children,
      totlaFilterBtn = filterBtns.length,
      portfolioItems = document.querySelectorAll(".portfolio-item"),
      totalPortfolioItem = portfolioItems.length;

      for(let i=0;i<totlaFilterBtn; i++){
          filterBtns[i].addEventListener("click", function(){
            filterContainer.querySelector(".active").classList.remove("active");
              this.classList.add("active");

              const filterValue = this.getAttribute("data-filter");
              for(let k=0; k<totalPortfolioItem; k++){
                  if(filterValue===portfolioItems[k].getAttribute("data-category")){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                  }
                  else{
                    portfolioItems[k].classList.add("hide");
                    portfolioItems[k].classList.remove("show");
                  }
                  if(filterValue==="all"){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                  }
              }
          })
      }
// Portfolio Item Filter End


// Portfolio Lightbox Strat
const lightBox = document.querySelector(".lightbox"),
      lightBoxImg = lightBox.querySelector(".lightbox-img"),
      lightBoxText = lightBox.querySelector(".caption-text"),
      lightBoxCounter = lightBox.querySelector(".caption-counter"),
      lightBoxClose = lightBox.querySelector(".lightbox-close");

let itemIndex = 0;
for(let i=0; i<totalPortfolioItem; i++){
    portfolioItems[i].addEventListener("click", function(){
        itemIndex = i;
        changeItem();
        toggleLightbox();
    })
}

function prevItem(){
    if(itemIndex === 0){
        ;
        itemIndex = totalPortfolioItem-1
    }
    else{
        itemIndex--
    }
    changeItem();
}

function nextItem(){
    if(itemIndex === totalPortfolioItem-1){
        itemIndex = 0;
    }
    else{
        itemIndex++
    }
    changeItem();
}

function toggleLightbox(){
    lightBox.classList.toggle("open");
}

function changeItem(){
    imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
    lightBoxImg.src = imgSrc;
    lightBoxText.innerHTML= portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightBoxCounter.innerHTML=(itemIndex+1) + " of " + totalPortfolioItem;
}
// Portfolio Lightbox End


// Close Lightbox Srart
lightBox.addEventListener("click",function(event){
    if(event.target === lightBoxClose || event.target === lightBox){
        toggleLightbox();
    }
})
// Close Lightbox End

// Aside Navbar Start
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavlist = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;


      for(let i=0; i<totalNavlist; i++){
          const a = navList[i].querySelector("a");
          a.addEventListener("click",function(){
            // remove back section class
            removeBacksectionClass();

            for(let j=0; j<totalNavlist; j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    // add back section class
                    addBackSectionClass(j);
                }
                navList[j].querySelector("a").classList.remove("active");
            }
              this.classList.add("active");
              showSection(this);

              if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
              }
          })
      }
      function addBackSectionClass(num){
        allSection[num].classList.add("back-section");
      }
      function removeBacksectionClass(){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
          }
      }

      function showSection(element){
          for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("active");
          }
        const target = element.getAttribute("href").split("#")[1];
            document.querySelector("#"+target).classList.add("active");
      }
 
      function updateNav(element){
        for(let i=0; i<totalNavlist; i++){
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                navList[i].querySelector("a").classList.add("active")
            }
        }
      }

      document.querySelector(".hire-me").addEventListener("click", function(){
          const sectionIndex = this.getAttribute("data-section-index");
        //   console.log(sectionIndex);
        showSection(this);
        updateNav(this);
        removeBacksectionClass();
        addBackSectionClass(sectionIndex);
      })

      
      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");

        navTogglerBtn.addEventListener("click", function(){
            asideSectionTogglerBtn();
        })

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");

    for(let i=0; i<totalSection; i++){
        allSection[i].classList.toggle("open");
      }
}





// Aside Navbar End









