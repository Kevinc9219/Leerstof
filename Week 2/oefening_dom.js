const headr = document.getElementById('page-header');
console.log(headr);

const titel = document.querySelector('.title');
console.log(titel);

const items = document.querySelectorAll('.item');
for (const item of items) {
	console.log(item);
}

const introText = document.getElementById('intro-text');
console.log(introText.textContent);

const eerst = document.querySelector('li');
console.log(eerst.textContent);

const ptag = document.querySelectorAll('p');
for (const p of ptag) {
	console.log(p.textContent);
}

const sectie2 = document.querySelector('#section2 ul');
console.log(sectie2.childElementCount);

const h2 = document.querySelectorAll('h2');
for (const h of h2) {
	console.log(h.textContent);
}

const foot = document.querySelector('footer');
console.log(foot.innerHTML);

const knop = document.querySelector('button');
console.log(knop.id);

const eerste = document.querySelector('section');
console.log(eerste.id);

const alle = document.querySelectorAll('item');
let getal = 0;
for (const i of alle) {
	console.log(i.textContent);
	getal++;
}
console.log(getal);

const huh = document.querySelector('bestaat-niet');
console.log(huh);

const pe = document.querySelector('p');
console.log(pe.parentElement);
console.log(pe.nextElementSibling);

const KnopSection1 = document.getElementById('btn-section1');
KnopSection1.addEventListener('click', () => {
	const hiligtheader = document.getElementById('page-header');
	hiligtheader.classList.add('highlight');
});

KnopSection1.addEventListener('click', () => {	const hiligtheader = document.getElementById('page-header');
	hiligtheader.classList.toggle('highlight');
});

const para2  = document.querySelector('#section2 p');
para2.addEventListener('click', () => {
	if (para2.classList.contains('bold')) {
		para2.classList.remove('bold');
	}
});

const lijstjes = document.getElementById('lijstjelighten');
lijstjes.addEventListener('click', () => {
	const items = document.querySelectorAll('.item');
	for (const item of items) {
		item.classList.add('highlight');
	}
});

const verander = document.getElementById('btn-verander');
verander.addEventListener('click', () => {
	const paraweg = document.querySelector('#section1 p');
	paraweg.textContent = 'Tekst gewijzigd in JavaScript';
});

const oef6 = document.getElementById('btn-section1');
oef6.addEventListener('click', () => {
	oef6.setAttribute('id', 'new-id');
});

const oef7 = document.getElementById('toevoegen');
oef7.addEventListener('click', () => {
	const nieuw = document.createElement('p');
	nieuw.textContent = 'Dit is toegevoegd';
	const sectie = document.getElementById('section2');
	sectie.append(nieuw);	
});

const oef8 = document.getElementById('btn-section1');
oef8.addEventListener('click', () => {
	const bye = document.querySelectorAll('#section2 p');
	for (const b of bye) {
		b.remove();
	}
});



