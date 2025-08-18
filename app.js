// STYLE 

const style = document.createElement("style");
style.textContent = `
  body {
    margin:0;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
  }

  body.dark{
  background-color: #000;
  }

  body.dark >.button{
  background-color: #000;
  }
  .button{
  border-radius: 10px
  color:#000
  }
  .cards {
    display:flex;
    max-width: 1000px;
    width:100%
  }
  .card {
    padding:30px;
    color:white;
    border-radius:  5px
  }
  .card h2 {
   margin-top:20px; 
   font-family: Big Shoulders Display, sans-serif
    }

  .card p { 
  flex-wrap: nowrap
  margin:20px 0; 
  line-height:1.5; 
  font-family: Lexend Deca, sans-serif 
  }
  .card .btn {
    display:inline-block;
    padding:12px 24px;
    background:white;
    border-radius:20px;
    text-decoration:none;
    font-family:Lexend Deca, sans-serif
  }
  .card.sedans { background: #E28625; }
  .card.suvs   { background: #006970; }
  .card.luxury { background: #004241; }
  .card.sedans .btn { color: #e38826; }
  .card.suvs .btn   { color: #006970; }
  .card.luxury .btn { color: #004241; }

`
document.head.appendChild(style);

// PAGES 

const data = [
  {
    key:"sedans",
    title:"Sedans",
    text:"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
  },
  {
    key:"suvs",
    title:"SUVs",
    text:"Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
  },
  {
    key:"luxury",
    title:"Luxury",
    text:"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
  }
];

// FOR EACH 

const cards = document.createElement("div");
cards.className = "cards";
document.body.appendChild(cards);


data.forEach(({key,title,text})=>{
  const card = document.createElement("div");
  card.className = `card ${key}`;

  const img = document.createElement("img");
  img.src = `./images/${key}.svg`

  const h2 = document.createElement("h2");
  h2.textContent = title;

  const p = document.createElement("p");
  p.textContent = text;

  const a = document.createElement("a");
  a.className = "btn";
  a.href="#";
  a.textContent="Learn More";

  card.append(img,h2,p,a);
  cards.appendChild(card);
})  ;
