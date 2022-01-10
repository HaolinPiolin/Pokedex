// const pokeCard = document.querySelector('[data-poke-card]');
// const pokeName = document.querySelector('[data-poke-name]');
// const pokeImg = document.querySelector('[data-poke-img]');
// const pokeImgContainer = document.querySelector('[data-poke-img-container]');
// const pokeId = document.querySelector('[data-poke-id]');
// const pokeTypes = document.querySelector('[data-poke-types]');
// const pokeStats = document.querySelector('[data-poke-stats]');
// const pokeHeld_Items = document.querySelector('[data-poke-held_items]');
// const pokeAbilities = document.querySelector('[data-poke-abilities]');

// const typeColors = {
//     electric: '#FFEA70',
//     normal: '#B09398',
//     fire: '#FF675C',
//     water: '#0596C7',
//     ice: '#AFEAFD',
//     rock: '#999799',
//     flying: '#7AE7C7',
//     grass: '#4A9681',
//     psychic: '#FFC6D9',
//     ghost: '#561D25',
//     bug: '#A2FAA3',
//     poison: '#795663',
//     ground: '#D2B074',
//     dragon: '#DA627D',
//     steel: '#1D8A99',
//     fighting: '#2F2F2F',
//     default: '#2A1A1F',
// };


// const searchPokemon = event => {
//     event.preventDefault();
//     const { value } = event.target.pokemon;
//     fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
//         .then(data => data.json())
//         .then(response => renderPokemonData(response))
//         .catch(err => renderNotFound())
// }

// const renderPokemonData = data => {
//     const sprite =  data.sprites.front_default;
//     const { stats, types, held_items, abilities } = data;
//     console.log

//     pokeName.textContent = data.name;
//     pokeImg.setAttribute('src', sprite);
//     pokeId.textContent = `Nº ${data.id}`;
//     setCardColor(types);
//     renderPokemonTypes(types);
//     renderPokemonStats(stats);
//     renderPokemonHeld_Items(held_items);
//     renderPokemonAbilities(abilities);
// }


// const setCardColor = types => {
//     const colorOne = typeColors[types[0].type.name];
//     const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;
//     pokeImg.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
//     pokeImg.style.backgroundSize = ' 5px 5px';
// }

// const renderPokemonTypes = types => {
//     pokeTypes.innerHTML = '';
//     types.forEach(type => {
//         const typeTextElement = document.createElement("div");
//         typeTextElement.style.color = typeColors[type.type.name];
//         typeTextElement.textContent = type.type.name;
//         pokeTypes.appendChild(typeTextElement);
//     });
// }

// const renderPokemonStats = stats => {
//     pokeStats.innerHTML = '';
//     stats.forEach(stat => {
//         const statElement = document.createElement("div");
//         const statElementName = document.createElement("div");
//         const statElementAmount = document.createElement("div");
//         statElementName.textContent = stat.stat.name;
//         statElementAmount.textContent = stat.base_stat;
//         statElement.appendChild(statElementName);
//         statElement.appendChild(statElementAmount);
//         pokeStats.appendChild(statElement);
//     });
// }

// const renderPokemonHeld_Items = held_items => {
//     pokeHeld_Items.innerHTML = '';
//     held_items.forEach(item => {
//         const itemElement = document.createElement("div");
//         const itemElementName = document.createElement("div");
//         itemElementName.textContent = item.item.name;
//         itemElement.appendChild(itemElementName);
//         pokeHeld_Items.appendChild(itemElement);
//     });
// }

// const renderPokemonAbilities = abilities => {
//     pokeAbilities.innerHTML = '';
//     abilities.forEach(ability => {
//         const abilityElement = document.createElement("div");
//         const abilityElementName = document.createElement("div");
//         abilityElementName.textContent = ability.ability.name;
//         abilityElement.appendChild(abilityElementName);
//         pokeAbilities.appendChild(abilityElement);
//     });
// }


// const renderNotFound = () => {
//     pokeName.textContent = 'No encontrado';
//     pokeImg.setAttribute('src', 'poke-shadow.png');
//     pokeImg.style.background =  '#fff';
//     pokeTypes.innerHTML = '';
//     pokeStats.innerHTML = '';
//     pokeHeld_Items.innerHTML = '';
//     pokeAbilities.innerHTML = '';
//     pokeId.textContent = '';
// }
const pokeImg = document.querySelector('[data-poke-img]');
$(document).ready(function(){
	
	$('#boton').click(function(){
		$(".poke-abilities").html("");
		$(".poke-held_items").html("");
		$(".poke-stats").html("");
		$(".poke-img").html("");
		$(".nombre").html("");
		$(".poke-types").html("");
		var pokemon = $('#searchPokemon').val();

		$.get('https://pokeapi.co/api/v2/pokemon/' + pokemon.toLowerCase(), function(datos){
			
			console.log(datos);
			$(".nombre").text(datos.name);
			pokeImg.setAttribute('src', datos.sprites.front_default);
			$.each(datos.abilities, function(index, obj){
				$(".poke-abilities").append("<p>" + obj.ability.name);
			});
			$.each(datos.held_items, function(index, obj){
				$(".poke-held_items").append("<p>" + obj.item.name);
			});
			$.each(datos.stats, function(index, obj){
				$(".poke-stats").append("<div><div>" + obj.stat.name + "</div><div>" + obj.base_stat);
			});
			$.each(datos.types, function(index, obj){
				$(".poke-types").append("<div>" + obj.type.name);	
			});
			
			
		}).fail(() => {
            $(".nombre").text("Pokemon no encontrado");
			pokeImg.setAttribute('src', 'poke-shadow.png');
        });
	});
});


