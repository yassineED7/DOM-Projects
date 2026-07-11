// Variable 

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
    { quote: "It’s not the face that makes someone a monster, it’s the choices they make with their lives.", person: "Naruto Uzumaki" },
    { quote: "If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be.", person: "Naruto Uzumaki" },
    { quote: "People's lives don't end when they die, they end when they believe in themselves.", person: "Maito Gai" },
    { quote: "The moment you find the courage to give up your life for someone, you would have finally understood love.", person: "Kenshin Himura" },
    { quote: "Even if I'm not confident that I'll succeed, I will try my best to do what I can.", person: "Kousei Arima" },
    { quote: "Whatever you do, enjoy it to the fullest. That is the secret of life.", person: "Rider (Fate/Zero)" },
    { quote: "If you can't do something, then don't. Focus on what you can do.", person: "Shiroe (Log Horizon)" },
    { quote: "Hard work is worthless for those that don't believe in themselves.", person: "Naruto Uzumaki" },
    { quote: "A lesson without pain is meaningless. For you cannot gain anything without sacrificing something else.", person: "Edward Elric" },
    { quote: "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger.", person: "Gildarts Clive" },
    { quote: "There’s no shame in falling down! The real shame is not standing up again!", person: "Shintaro Midorima" },
    { quote: "I want to be someone who can change the world.", person: "Lelouch Lamperouge" },
    { quote: "Don't believe in yourself. Believe in me! Believe in the Kamina who believes in you!", person: "Kamina" },
    { quote: "The only ones who should kill are those who are prepared to be killed.", person: "Lelouch Lamperouge" },
    { quote: "Thinking you're no good and worthless is the worst thing you can do.", person: "Nobita Nobi" }
];

btn.addEventListener("click", function(){

    let randomQuote = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[randomQuote].quote;
    person.innerText = quotes[randomQuote].person;

});