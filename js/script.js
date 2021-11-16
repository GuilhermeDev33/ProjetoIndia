const menuMob = document.querySelector('#menu-mobile');
const listFatherTitle = document.querySelectorAll('.father-item li');

menuMob.addEventListener("click",()=>{
	const n = document.querySelector(".nav");
	n.classList.toggle("ativo");
	menuMob.classList.toggle("ativo");
})

/* List-item */

listFatherTitle.forEach((item) => {
	item.addEventListener('click', () => {
		item.classList.toggle('ativo')
		item.nextElementSibling.classList.toggle('ativo');
	})
})