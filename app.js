const container = document.querySelector('#container')

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
for (let i=1;i<152;i++)
{
    const img = document.createElement('img');
    const pokemon = document.createElement('div');
    const label = document.createElement('span');
    label.innerText = `${i}`;
    pokemon.appendChild(img);
    pokemon.appendChild(label);
    img.src = `${baseUrl}${i}.png`
    container.appendChild(pokemon)
    
}

