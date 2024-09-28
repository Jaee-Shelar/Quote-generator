let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes=[{
    quote:"Elementary, my dear Watson.	",
    person:"Sherlock Holmes"
},{
    quote:"Genius is one percent inspiration and ninety-nine percent perspiration",
    person:"Thomas Edison"
},{
    quote:"To be or not to be, that is the question.	",
    person:"William Shakespeare	"
},{
    quote:"You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time.	",
    person:"Abraham Lincoln	"
},{
    quote:"You must be the change you wish to see in the world.	",
    person:"Mahatma Gandhi	"
},{
    quote:"That’s one small step for a man, a giant leap for mankind.	 ",
    person:" Neil Armstrong	"
},{
    quote:"Life is like riding a bicycle. To keep your balance, you must keep moving.",
    person:"Albert Einstein  "
},{
    quote:"I learned that courage was not the absence of fear, but the triumph over it. ",
    person:"Nelson Mandela "
},{
    quote:"Dream, dream, dream. Dreams transform into thoughts and thoughts result in action",
    person:" Abdul Kalam"
},{
    quote:"When I write, I can shake off all my cares.",
    person:" Anne Frank"
},];

btn.addEventListener('click',function(){
    let random=Math.floor(Math.random()*quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText =quotes[random].person;
})