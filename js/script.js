const app = document.querySelector('.app');
const infoElem = document.querySelector('.info');

const keyElem = app.querySelector('#key');
const keyCodeElem = app.querySelector('#keyCode');
const toggleBtn = app.querySelector('#toggleBtn');
// const muteBtn = app.querySelector('#muteBtn');
const audioControlElem = app.querySelector('.audio-control');

let audioOn = true;

// const iconAudioOn = './icons/audio-on.svg';
// const iconAudioOff = './icons/audio-off.svg';

const loggPressedKey = (e) => {
    // app.style.display = 'grid';
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
    // const toggleHandle = toggleBtn.querySelector('#toggleHandle');
    const audioLabels = audioControlElem.querySelectorAll('p');
    audioLabels.forEach(label => label.classList.toggle('active'));

    if (!audioOn) {
        toggleBtn.classList.toggle('js-audio-off');

        // audioLabels[0].classList.remove('active');
        // audioLabels[1].classList.add('active');
        // toggleHandle.style.transform = 'translateX(100%)';
        // muteBtn.src = iconAudioOff;
        // muteBtn.classList.remove('audioOff');
    }
    if (audioOn) {
        toggleBtn.classList.toggle('js-audio-off');
        
        // audioLabels[1].classList.remove('active');
        // audioLabels[0].classList.add('active');
        // audioLabels[0].classList.toggle('active');
        // muteBtn.src = iconAudioOn;
        // muteBtn.classList.add('audioOff');
    }
}

const muteAudio = () => {
    audioOn = !audioOn;
}

// muteBtn.addEventListener('click', toggleAudioBtn);
// muteBtn.addEventListener('click', muteAudio);
toggleBtn.addEventListener('click', toggleAudioBtn);
toggleBtn.addEventListener('click', muteAudio);

// removeAnimationClass();

document.addEventListener('keydown', e => {
    e.preventDefault();
});

document.addEventListener('keyup', loggPressedKey);