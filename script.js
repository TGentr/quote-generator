const quotes = [
{
    name: 'Yoda',
    quote: 'Always pass on what you have learned',
},
{
    name: 'Yoda',
    quote: 'Train yourself to let go of everything you fear to lose.',
},
{
    name: 'Darth Vader',
    quote: 'The circle is now complete. When I left you, I was but the learner. Now I am the master.',
},
{
    name: 'Leia',
    quote: 'Help me, Obi-Wan Kenobi. You’re my only hope.',
},
{
    name: 'Emperor Palpatine',
    quote: 'There is a great disturbance in the Force.',
},
{
    name: 'Yoda',
    quote: 'Everything is proceeding as I have foreseen.',
},
{
    name: 'Luke Skywalker',
    quote: 'There IS still good in him. I’ve felt it.',
},
{
    name: 'Luke Skywalker',
    quote: 'If I don’t make it back, you’re the only hope for the Alliance.',
},
{
    name: 'General Ackbar',
    quote: 'It\'s a trap!',

},
{
    name: 'Han Solo',
    quote: 'Don\'t everybody thank me at once',
},
{
    name: 'Han Solo',
    quote: 'You know, sometimes I amaze even myself.'
}
]

//zmienne

const buttonn = document.querySelector("#wybierz");
const quotee = document.querySelector("#quote");
const autor = document.querySelector("#autor");
buttonn.addEventListener('click', pokazuj);

function pokazuj (){

// random number from array

let rande = Math.floor(Math.random()*quotes.length);
console.log(rande);
//problem: losowe liczby nie mogą się powtarzać

//quotee.innerHTML = `${quotes[1].quote}`;
//quotee.innerHTML = `${quotes[rande].quote}`;


quotee.innerHTML = quotes[rande].quote;
autor.innerHTML = quotes[rande].name;


}


