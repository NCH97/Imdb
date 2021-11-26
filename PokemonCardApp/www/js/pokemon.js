import { pokemon } from 'pokemontcgsdk';

pokemon.configure({apiKey: '01184107-8359-4314-9120-8f386f2c3374'});

function allCard (){
    pokemon.card.all()
        .then((cards) => {
            console.log(cards[0].name) // "Blastoise"
        });
}