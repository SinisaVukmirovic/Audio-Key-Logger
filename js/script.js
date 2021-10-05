const app = document.querySelector('.app');

const keyElem = app.querySelector('#key');
const keyCodeElem = app.querySelector('#keyCode');
const toggleBtn = app.querySelector('#toggleBtn');

const audioControlElem = app.querySelector('.audio-control');

let audioOn = true;

const loggPressedKey = (e) => {
    const infoElem = document.querySelector('.info');
    infoElem.style.visibility = 'hidden';
    
    removeAnimationClass();
    
    let key = e.key;
    let code = e.keyCode;
    // Handling Space key
    if (code === 32) key = 'Space';

    if (audioOn) {
        playAudio(key);
    }

    populatedElems(key, code);
    
    setTimeout(() => {        
        addAnimationClass();
    }, 20);
}

const removeAnimationClass = () => {
    keyElem.classList.remove('js-keyPressAnim');
    keyCodeElem.classList.remove('js-keyPressAnim');
}
const addAnimationClass = () => {
    keyElem.classList.add('js-keyPressAnim');
    keyCodeElem.classList.add('js-keyPressAnim');
}

const populatedElems = (key, code) => {
    keyElem.innerText = key;
    keyCodeElem.innerText = code;
}

const playAudio = (key) => {
    speechSynthesis.cancel();

    // handling keys without audio on default MS Anna voice
    if (key === ';') key = 'semicolon';
    if (key === '.') key = 'dot';
    if (key === ',') key = 'comma';
    if (key === "'") key = 'apostrophe';
    if (key === '[') key = 'opening square brackets';
    if (key === ']') key = 'closing square brackets';
    
    const utterance = new SpeechSynthesisUtterance(key);
    speechSynthesis.speak(utterance);
}

const toggleAudioBtn = () => {
    const audioLabels = audioControlElem.querySelectorAll('p');
    audioLabels.forEach(label => label.classList.toggle('active'));

    if (!audioOn) toggleBtn.classList.toggle('js-audio-off');
    if (audioOn) toggleBtn.classList.toggle('js-audio-off');
}

const muteAudio = () => {
    audioOn = !audioOn;
}

toggleBtn.addEventListener('click', toggleAudioBtn);
toggleBtn.addEventListener('click', muteAudio);

document.addEventListener('keydown', e => {
    e.preventDefault();
});

document.addEventListener('keyup', loggPressedKey);