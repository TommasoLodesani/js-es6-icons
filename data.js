const myContainer = document.getElementById("container");


const arrayIcon = [

	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

for (let i = 0; i < arrayIcon.length; i++) {

	let arrayElement = arrayIcon[i];

	const elementIconContainer = document.createElement("div");
	elementIconContainer.className = `icon-container`;



	const elementIcon = document.createElement("i");
	elementIcon.className = `${arrayElement.family} ${arrayElement.prefix}${arrayElement.name}`;
	elementIcon.style.color = arrayElement.color;


	const elementCaption = document.createElement("h4");
	elementCaption.innerHTML += arrayElement.name;


	myContainer.append(elementIconContainer);
	elementIconContainer.append(elementIcon);


	elementIconContainer.append(elementCaption);

}

// filtro array in base al type


const arrAnimals = arrayIcon.filter(function (index) {

	return index.type === "animal";
})

console.log(arrAnimals);

const arrVeggie = arrayIcon.filter(function (index) {

	return index.type === "vegetable";
})

console.log(arrVeggie);


const arrUser = arrayIcon.filter(function (index) {

	return index.type === "user";
})

console.log(arrUser);


// creo select con le varie option

const mySelect = document.getElementById("button-select");


mySelect.addEventListener('change', (event) => {
	const result = document.querySelector('.icon-container');
	result.textContent = `${event.target.arrUser}`;
});
