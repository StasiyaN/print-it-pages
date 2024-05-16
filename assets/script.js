const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
		"altText": "Impressions tous formats en boutique et en ligne", //AJOUT DE NOUVEAU ALT
		"dotColor": "aqua" //DECLARATION DES NOUVEAU COULEURS POUR LES DOTS
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
		"altText": "Tirages haute définition grand format pour vos bureaux et events",
		"dotColor": "#CD006B"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
		"altText": "Grand choix de couleurs de CMJN aux pantones",
		"dotColor": "#eee425"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
		"altText": "Autocollants avec découpe laser sur mesure",
		"dotColor": "#3396c0"
	}
]
//********DECLARATION DES VARIABLES******
//CREATION DU VARIABLE SLIDE EN COURS DANS LA DIAPO
let curImageIndex = 0;
//RECUPERATION DES FLECHES + AJOUT DE CURSEUR POINTER
const arrowRight = document.querySelector('.arrow_right');
const arrowLeft = document.querySelector('.arrow_left');
//RECUPERATION DE BANNER 
let slider = document.querySelector('.banner-img');

//AJOUT BULLET POINTS + AJOUT DE HOVER EFFECT
const dotsContainer = document.querySelector('.dots');
slides.forEach((slide, index) => {
	let dot = document.createElement('span');
	dot.classList.add('dot');
	dot.style.cursor = 'pointer';    
	dot.addEventListener('click', () => {
		slideShow(index);
	});
	dotsContainer.appendChild(dot);
});

//APPELLE A LA FONCTION slideShow
slideShow(curImageIndex);

//AJOUT DE LA STUCTURE DU SLIDER DANS BANNER
function slideShow (index) {
	if (slides[index]) { // amelioration du code en simplifiant la ligne (i)ndex >= 0 && index < slides.length) 
		slider.src = `./assets/images/slideshow/${slides[index].image}`;
		document.querySelector('#banner p').innerHTML = slides[index].tagLine;	
		slider.alt = slides[index].altText;
		curImageIndex = index;
		colorDots();
	}
}

//FONCTION POUR COLORER LES DOTS A CHAQUE SLIDE
function colorDots () {
	const dotElements = document.querySelectorAll('.dot');
	dotElements.forEach ((dot, index) => {
		if (index === curImageIndex) {
			dot.style.backgroundColor = slides[index].dotColor;
		} else {
			dot.style.backgroundColor = 'white';
		}
	});
}
colorDots();

//MODIFICATION DE DU STYLE POUR LES FLECHES
arrowRight.style.cursor = 'pointer';
arrowLeft.style.cursor = 'pointer';

//+ SUPPRESION DE ALT INITIAL + AJOUT DE NOUVEAU ALT
slider.removeAttribute('alt');
slider.setAttribute('alt', 'Impressions tous formats en boutique et en ligne');

// AJOUT DE EVENT LISTENERS POUR LES FLECHES & CREATION DESFONCTIONS CLICK RIGHT & LEFT
arrowRight.addEventListener('click', () => {
	curImageIndex += 1;
	if (curImageIndex >= slides.length) {
		curImageIndex = 0; 
	}
	slideShow(curImageIndex);
});
arrowLeft.addEventListener('click', () => {
	curImageIndex -= 1;
	if (curImageIndex < 0) {
		curImageIndex = slides.length - 1; 
	}
	slideShow(curImageIndex);
});
