const ideas = {
	cat1: [
        "Bibo",
        "Maiden",
        "Willow",
        "Majd",
        "Madara",
        "Hadra",
        "Rania",
        "Aug",
        "Jana",
        "Sengab",
        "Audry",
	"Zain"
	],
	cat2: [
        "Bibo",
        "Maiden",
        "Willow",
        "Majd",
        "Madara",
        "Hadra",
        "Rania",
        "Aug",
        "Jana",
        "Sengab",
	"Audry",
	"Zain"
	],
        cat3: [
        "Bibo",
        "Maiden",
        "Willow",
        "Majd",
        "Madara",
        "Hadra",
        "Rania",
        "Aug",
        "Jana",
        "Sengab",
	"Audry",
	"Zain"
	],
	
};

const allIdeas = [].concat(...Object.values(ideas));

const categories = document.querySelectorAll('#categories a');

categories.forEach(category => {
	category.addEventListener('click', () => {
		let idea;
		if (category.id === 'all') {
			idea = allIdeas[Math.floor(Math.random() * allIdeas.length)];
		} else {
			idea = ideas[category.id][Math.floor(Math.random() * ideas[category.id].length)];
		}
		const ideasDiv = document.querySelector('#ideas');
		ideasDiv.innerHTML = `<h2>${idea}</h2>`;
	});
});

     
