const randomize = document.querySelector('.randomize');
const skeleton = document.querySelector('.skeleton');

let skeletonText = ':insertSubject: :insertVerb: :insertComp:.';
let insertSubject = ['Je', 'Moi je'];
let insertVerb = ['pense', 'propose'];
let insertComp = ['un peu de cyber', 'plusieurs scénarios'];

function randomValueFromArray(array) {
	const random = Math.floor(Math.random() * (array.length));
	return array[random];
}

randomize.addEventListener('click', result);

function result() {
	let newPhrase = skeletonText;

	let sItem = randomValueFromArray(insertSubject);
	let vItem = randomValueFromArray(insertVerb);
 	let cItem = randomValueFromArray(insertComp);

	newPhrase = newPhrase.replace(':insertSubject:', sItem);
	newPhrase = newPhrase.replace(':insertVerb:', vItem);
	newPhrase = newPhrase.replace(':insertComp:', cItem);

	skeleton.textContent = newPhrase;
	skeleton.style.visibility = 'visible';
}