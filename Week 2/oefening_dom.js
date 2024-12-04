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

const sectie2 = document.querySelector('.section2 ul');
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
getal = 0;
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