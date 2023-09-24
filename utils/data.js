const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const email = [
  'email@email.com',
  'test@testemail.org',
  'funlover@gmail.com',
  'negativenelly@yahoo.com',
  'randomjoe@random.net',
]

const thoughts = [
  'I like pie.',
  'Where\'s my phone?',
  'Free piano lessons!',
  'Where are my Star Trek fans at?!?',
  'Playing some Bloons Tower Defense.',
  'Here comes the Monopoly master!',
  'Movie trailers are a little too well made, can\'t tell from them if a movie is bad.',
  'Hello world!',
  'Stupid social media apps making me lose track of time.',
  'Note to self: stop day drinking.',
  'Message to all the bigots: go take a long walk off a short pier <3',
  'Is it a bad idea to share my Email here?',
  'I\'m lost guys, anyone have a compass I can borrow?',
  'Firefox is the best browser, change my mind.',
  'Just got back after a long run.',
  'Cooking time!',
  'Who wants to play poker?',
  'Delivery of warm hugs and puppies for you!',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)}`;

const getRandomEmail = () =>
  `${getRandomArrItem(email)}`;


// Function to generate random assignments that we can add to student object.
const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtName: getRandomArrItem(thoughts),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomEmail, getRandomThoughts };
