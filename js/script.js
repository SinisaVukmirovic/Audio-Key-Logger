const keyElem = document.querySelector('#key');
const keyCodeElem = document.querySelector('#keyCode');

const loggPressedKey = (e) => { 
    removeAnimationClass();
    
    let key = e.key;
    let code = e.keyCode;
    
    if (code === 32) {
        key = 'Space';
    }
    
    playAudio(key);
    
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
    const utterance = new SpeechSynthesisUtterance(key);
    speechSynthesis.speak(utterance);
}

removeAnimationClass();

document.addEventListener('keydown', e => {
    e.preventDefault();
});

document.addEventListener('keyup', loggPressedKey);

