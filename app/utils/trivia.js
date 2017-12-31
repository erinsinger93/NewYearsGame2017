const Trivia = [
  {
    question: 'Name the song and the artist',
    audio: 'assets/audio/TimMcGraw.m4a',
    answer: 'Artist: Tim McGraw, Song: I Like It, I Love It',
    type: 'song',
    pointValue: 2
  }, {
    question: 'Name the song and the artist',
    audio: 'assets/audio/Hoobastank.m4a',
    answer: 'Artist: Hoobastank, Song: The Reason',
    type: 'song',
    pointValue: 2
  }, {
    question: 'Name the song and the artist',
    audio: 'assets/audio/GeorgeHarrison.m4a',
    answer: 'Artist: George Harrison, Song: My Sweet Lord',
    type: 'song',
    pointValue: 2
  }, {
    question: 'Name the song and the artist',
    answer: 'Artist: A-ha, Song: Take On Me',
    audio: 'assets/audio/aHa.m4a',
    type: 'song',
    pointValue: 2
  }, {
    question: 'Name the movie title, character name, and actor',
    answer: 'Title: Dumb and Dumber, Character: Lloyd Christmas, Actor: Jim Carrey',
    audio: 'assets/audio/dumbAndDumber.m4a',
    type: 'movie',
    pointValue: 3
  }, {
    question: 'Name the movie title, character name, and actor',
    audio: 'assets/audio/homeAlone.m4a',
    answer: 'Title: Home Alone, Character: Kevin McCallister, Actor: Macaulay Culkin',
    type: 'movie',
    pointValue: 3
  }, {
    question: 'Name the movie title, character name, and actor',
    audio: 'assets/audio/theGoodTheBadAndTheUgly.m4a',
    answer: 'Title: The Good, the Bad and the Ugly, Character: Blondie, Actor: Clint Eastwood',
    type: 'movie',
    pointValue: 3
  }, {
    question: 'Name the movie title, both character names, and both actors',
    audio: 'assets/audio/findingNemo.m4a',
    answer: 'Title: Finding Nemo, Characters: Dory & Marlin, Actors: Ellen DeGeneres & Albert Brooks',
    type: 'movie',
    pointValue: 5
  }, {
    question: 'What 90s toy became the one of the most popular toys of 2017?',
    answer: 'The Fidget Spinner',
    type: 'pop-culture',
    pointValue: 1
  }, {
    question: 'Which celebrity was the executive producer for the TV show 13 Reasons Why?',
    answer: 'Selena Gomez',
    type: 'pop-culture',
    pointValue: 1
  }, {
    question: 'The most successful film in Golden Globe Awards history, what film won all seven awards for which it had been nominated?',
    answer: 'La La Land',
    type: 'pop-culture',
    pointValue: 2
  }, {
    question: 'Hollywood actor Jake has starred in movies such as Brokeback Mountain, Southpaw, and Nightcrawler. But how do you spell his last name?',
    answer: 'Jake Gyllenhaal',
    type: 'pop-culture',
    pointValue: 2
  }, {
    question: 'Who is the only athlete ever to play in a Super Bowl and a World Series?',
    answer: 'Deion Sanders',
    type: 'sports',
    pointValue: 1
  }, {
    question: 'What Boston Red Sox player has the most career hits?',
    answer: 'Carl Yastrzemski with 3,419 career hits',
    type: 'sports',
    pointValue: 2
  }, {
    question: 'Which is the only country to have played in every World Cup?',
    answer: 'Brazil',
    type: 'sports',
    pointValue: 2
  }, {
    question: 'Who hit an underhand serve to defat Ivan Lendl for the 1989 French Open title? Jim Courier, Michael Chang, Björn Borg, or Mats Wilander?',
    answer: 'Michael Chang',
    type: 'sports',
    pointValue: 2
  }
];

export default Trivia;
export const NUM_TRIVIA_QUESTIONS = Trivia.length;
