const container = document.querySelector('.container');

const talia = [
  {
    id: 1,
    kolor: 'karo',
    figura: 'as',
    symbol: 'A',
    img: './assets/asKaro.png',
  },
  {
    id: 2,
    kolor: 'karo',
    figura: 'król',
    symbol: 'K',
    img: './assets/krolKaro.png',
  },
  {
    id: 3,
    kolor: 'karo',
    figura: 'dama',
    symbol: 'Q',
    img: './assets/damaKaro.png',
  },
  {
    id: 4,
    kolor: 'karo',
    figura: 'walet',
    symbol: 'J',
    img: './assets/waletKaro.png',
  },
  {
    id: 5,
    kolor: 'karo',
    figura: '10',
    symbol: '10',
    img: './assets/10Karo.png',
  },
  {
    id: 6,
    kolor: 'karo',
    figura: '9',
    symbol: '9',
    img: './assets/9Karo.png',
  },
  {
    id: 7,
    kolor: 'kier',
    figura: 'as',
    symbol: 'A',
    img: './assets/AsKier.png',
  },
  {
    id: 8,
    kolor: 'kier',
    figura: 'król',
    symbol: 'K',
    img: './assets/krolKier.png',
  },
  {
    id: 9,
    kolor: 'kier',
    figura: 'dama',
    symbol: 'Q',
    img: './assets/damaKier.png',
  },
  {
    id: 10,
    kolor: 'kier',
    figura: 'walet',
    symbol: 'J',
    img: './assets/waletKier.png',
  },
  {
    id: 11,
    kolor: 'kier',
    figura: '10',
    symbol: '10',
    img: './assets/10Kier.png',
  },
  {
    id: 12,
    kolor: 'kier',
    figura: '9',
    symbol: '9',
    img: './assets/9Kier.png',
  },
  {
    id: 13,
    kolor: 'trefl',
    figura: 'as',
    symbol: 'A',
    img: './assets/asTrefl.png',
  },
  {
    id: 14,
    kolor: 'trefl',
    figura: 'król',
    symbol: 'K',
    img: './assets/krolTrefl.png',
  },
  {
    id: 15,
    kolor: 'trefl',
    figura: 'dama',
    symbol: 'Q',
    img: './assets/damaTrefl.png',
  },
  {
    id: 16,
    kolor: 'trefl',
    figura: 'walet',
    symbol: 'J',
    img: './assets/waletTrefl.png',
  },
  {
    id: 17,
    kolor: 'trefl',
    figura: '10',
    symbol: '10',
    img: './assets/10Trefl.png',
  },
  {
    id: 18,
    kolor: 'trefl',
    figura: '9',
    symbol: '9',
    img: './assets/9Trefl.png',
  },
  {
    id: 19,
    kolor: 'pik',
    figura: 'as',
    symbol: 'A',
    img: './assets/asPik.png',
  },
  {
    id: 20,
    kolor: 'pik',
    figura: 'król',
    symbol: 'K',
    img: './assets/krolPik.png',
  },
  {
    id: 21,
    kolor: 'pik',
    figura: 'dama',
    symbol: 'Q',
    img: './assets/damaPik.png',
  },
  {
    id: 22,
    kolor: 'pik',
    figura: 'walet',
    symbol: 'J',
    img: './assets/waletPik.png',
  },
  {
    id: 23,
    kolor: 'pik',
    figura: '10',
    symbol: '10',
    img: './assets/10Pik.png',
  },
  {
    id: 24,
    kolor: 'pik',
    figura: '9',
    symbol: '9',
    img: './assets/9Pik.png',
  },
];

const taliaRobocza = [...talia];
const shuffle = (arr) => {
  arr.sort(() => Math.random() - 0.5);
};

shuffle(taliaRobocza);
console.log(talia);
console.log(taliaRobocza);

const showTalia = () => {
  taliaRobocza.forEach((el) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundImage = `url('${el.img}')`;
    container.appendChild(card);
    console.log(`
    Id: ${el.id},
    Kolor: ${el.kolor},
    Figura: ${el.figura},
    Symbol: ${el.symbol},
    Img: ${el.img}
    `);
  });
};

showTalia();

/* const currentPullOfIds = [...talia];

const getRandomId = () => {
  const randomId = Math.floor(Math.random() * currentPullOfIds.length);
  return randomId;
};

const showTalia = () => {
  while (currentPullOfIds.length) {
    const currentIndex = getRandomId();
    const currentCard = talia[currentIndex].img;
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundImage = `url('${currentCard}')`;
    container.appendChild(card);
    doNotShowCurrentQuestionAgain(currentIndex);
  }
};

const doNotShowCurrentQuestionAgain = (currentIndex) => {
  currentPullOfIds.splice(currentIndex, 1);
  return currentPullOfIds;
}; */

/* const consoleTalia = () => {
  talia.forEach((el) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundImage = `url('${el.img}')`;
    container.appendChild(card); */
/*     console.log(`
    Id: ${el.id},
    Kolor: ${el.kolor},
    Figura: ${el.figura},
    Symbol: ${el.symbol},
    Img: ${el.img}
    `); */
/*   });
}; */

// showTalia();
