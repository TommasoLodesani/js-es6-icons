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

genereIcona(arrayIcon);

function genereIcona(array){

	myContainer.innerHTML="";

	for (let i = 0; i < array.length; i++) {

		
		let arrayElement = array[i];
	
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

}


// creo select con le varie option

const mySelect = document.getElementById("button-select");

mySelect.addEventListener("change",
	function(){
		let selection = mySelect.value;
		console.log(selection);
		if(selection === "1"){
			const arrAnimal = arrayIcon.filter((element) => element.type === "animal");
			genereIcona(arrAnimal);
			console.log(arrAnimal);

		} else if ( selection === "2"){
			const arrVeggie = arrayIcon.filter((element) => element.type === "vegetable");
			genereIcona(arrVeggie);
		}else if ( selection === "3"){
			const arrUser = arrayIcon.filter((element) => element.type === "user")
			genereIcona(arrUser);
			
		}else{
			genereIcona(arrayIcon);
		}
	}
)
