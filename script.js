let box = document.getElementById('box1');
let backgroundbox = document.getElementById('backgroundbox')
let backgroundbox2 = document.getElementById('backgroundbox2')
let head = document.getElementById('header1')

window.addEventListener('scroll', () => {
    let value = window.scrollY;

        box.style.marginTop = value * .3 + 'px';
        backgroundbox.style.backgroundPositionY = value * -.2 + 'px';
        backgroundbox2.style.backgroundPositionY = value * -.1 + 'px';
})

let scroller = document.querySelector(".gallery");
let backbtn = document.getElementById('back');
let nextbtn = document.getElementById('next');

scroller.addEventListener("wheel", (evt) => {
    evt.preventDefault(); 
    scroller.scrollLeft += evt.deltaY;
    scroller.style.scrollBehavior = "auto";
})

nextbtn.addEventListener("click", ()=> {
    scroller.style.scrollBehavior = "smooth";
    scroller.scrollLeft += 800;
    
})

backbtn.addEventListener("click", ()=> {
    scroller.style.scrollBehavior = "smooth";
    scroller.scrollLeft -= 800;
})

window.addEventListener('scroll', () => {
    let value2 = window.scrollY;
    if (value2 > 1000) {
        head.style.backgroundColor = "#080808";
    } else {
        head.style.backgroundColor = "#08080800";
    }
})

let artistImages = document.querySelectorAll('.artists img, .artists2 img');
let alonzoContent = document.getElementById('showAlonzo');
let dharatiContent = document.getElementById('showDharati');
let ginawContent = document.getElementById('showGinaw');
let masinoContent = document.getElementById('showMasino');
let samoanContent = document.getElementById('showSamoan');
let uwangContent = document.getElementById('showUwang');
let estellitaContent = document.getElementById('showEstellita');
let hajaContent = document.getElementById('showHaja');
let langContent = document.getElementById('showLang');
let salintaContent = document.getElementById('showSalinta');

artistImages.forEach(img => {
    img.addEventListener('click', () => {

        setTimeout(function() {window.scrollTo({top: 3900,behavior: 'smooth'});}, 200); 

        alonzoContent.style.display = 'none';
        dharatiContent.style.display = 'none';
        ginawContent.style.display = 'none';
        masinoContent.style.display = 'none';
        samoanContent.style.display = 'none';
        uwangContent.style.display = 'none';
        estellitaContent.style.display = 'none';
        hajaContent.style.display = 'none';
        langContent.style.display = 'none';
        salintaContent.style.display = 'none';

        if (img.id === 'alonzo') {
            alonzoContent.style.display = 'block';
        } else if (img.id === 'dharati') {
            dharatiContent.style.display = 'block';
        } else if (img.id === 'ginaw') {
            ginawContent.style.display = 'block';
        } else if (img.id === 'masino') {
            masinoContent.style.display = 'block';
        } else if (img.id === 'samoan') {
            samoanContent.style.display = 'block';
        } else if (img.id === 'uwang') {
            uwangContent.style.display = 'block';
        } else if (img.id === 'estellita') {
            estellitaContent.style.display = 'block';
        } else if (img.id === 'haja') {
            hajaContent.style.display = 'block';
        } else if (img.id === 'lang') {
            langContent.style.display = 'block';
        } else if (img.id === 'salinta') {
            salintaContent.style.display = 'block';
        }
    });
});