function getAnswerHTML(answer) {
  return `<span class="trivia__answer">${answer}</span>`;
}

function getAnswerLabelHTML(label) {
  return `<span class="trivia__answer-label">${label}:</span>`;
}

function getSongAnswerHTML(song, artist) {
  return `${getAnswerLabelHTML('Song')}
          ${getAnswerHTML(song)} <br/>
          ${getAnswerLabelHTML('Artist')}
          ${getAnswerHTML(artist)}`;
}

function getMovieAnswerHtml(movie, actor, name) {
  return `${getAnswerLabelHTML('Movie')}
          ${getAnswerHTML(movie)} <br/>
          ${getAnswerLabelHTML('Actor')}
          ${getAnswerHTML(actor)} <br/>
          ${getAnswerLabelHTML('Character Name')}
          ${getAnswerHTML(name)}`;
}

const Trivia = [
  {
    question: 'Name the song and the artist',
    audio: 'assets/2019/audio/need-you-now.mp3',
    answer: getSongAnswerHTML('Need You Now', 'Lady Antebellum'),
    type: 'song',
    pointValue: 2
  }, {
    question: 'Name the song and the artist',
    audio: 'assets/2019/audio/how-to-save-a-life.mp3',
    answer: getSongAnswerHTML('How to Save a Life', 'The Fray'),
    type: 'song',
    pointValue: 2
  }, {
    question: 'Name the song and the artist',
    audio: 'assets/2019/audio/glad-you-came.mp3',
    answer: getSongAnswerHTML('Glad You Came', 'The Wanted'),
    type: 'song',
    pointValue: 2
  }, {
    question: 'Name the song and the artist',
    audio: 'assets/2019/audio/ramblin-man.mp3',
    answer: getSongAnswerHTML('Ramblin\' Man', 'The Allman Brothers Band'),
    type: 'song',
    pointValue: 2
  }, {
    question: 'Name the movie title, actor, and character name',
    image: 'assets/2019/images/Easy-A-Emma-Stone-Olive.png',
    answer: getMovieAnswerHtml('Easy A', 'Emma Stone', 'Olive'),
    type: 'movie',
    pointValue: 3
  }, {
    question: 'Name the movie title, actor, and character name',
    image: 'assets/2019/images/Pulp-Fiction-Uma-Thurman-Mia.png',
    answer: getMovieAnswerHtml('Pulp Fiction', 'Uma Thurman', 'Mia'),
    type: 'movie',
    pointValue: 3
  }, {
    question: 'Name the movie title, actor, and character name',
    image: 'assets/2019/images/Houdini-1953-Tony-Curtis-Harry-Houdini.png',
    answer: getMovieAnswerHtml('Houdini', 'Tony Curtis', 'Harry Houdini'),
    type: 'movie',
    pointValue: 3
  }, {
    question: 'Name the movie title, actor, and character name',
    image: 'assets/2019/images/Oceans-Eleven-Brad-Pitt-Rusty-Ryan.jpg',
    answer: getMovieAnswerHtml('Oceans Eleven', 'Brad Pitt', 'Rusty Ryan'),
    type: 'movie',
    pointValue: 3
  }, {
    question: `${getAnswerLabelHTML('Fact or fiction')}<br/>The California flag was the result of a mistake; it was supposed to feature a pear.`,
    answer: 'Fiction. This was perpetuated by an internet hoax that was quickly debunked.',
    type: 'trivia',
    pointValue: 1
  }, {
    question: 'Which planet is the hottest planet in our solar system?',
    answer: 'Venus, which reaches up to 870°F',
    type: 'trivia',
    pointValue: 2
  }, {
    question: 'Who beat Ivan Lendl in the French Open finals serving underhand?',
    answer: 'Michael Chang',
    type: 'trivia',
    pointValue: 2
  }, {
    question: 'Which company owns Bugatti, Lamborghini, Audi, Porsche, and Ducati?',
    answer: 'Volkswagen',
    type: 'trivia',
    pointValue: 2
  }
];

export default Trivia;
export const NUM_TRIVIA_QUESTIONS = Trivia.length;
