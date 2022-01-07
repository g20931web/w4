const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'その日はとても暑かった。 :insertx: は出かけた。:inserty: に着いた 混雑していた。　:insertz: が、Bob は驚かなかった — 体重300ポンドの :insertx: は驚いていた。今日は暑い日だった。';
const insertX = ['ミッキー', 'お父さん', 'サンタクロース'];
const insertY = ['炊き出し', 'ディズニーランド', '新宿'];
const insertZ = ['自然発火していた', '大きな水溜りがあった', 'ナメクジがたくさんいた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
