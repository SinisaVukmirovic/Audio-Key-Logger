const keyElem = document.querySelector('#key');
const keyCodeElem = document.querySelector('#keyCode');

const loggPressedKey = (e) => {
    console.log(e);    
    keyElem.classList.remove('js-keyPressAnim');
    keyCodeElem.classList.remove('js-keyPressAnim');

    let key = e.key;
    let code = e.keyCode;

    if (e.keyCode === 32) {
        key = 'Space';
    }

    keyElem.innerText = `${key}`;
    keyCodeElem.innerText = `${code}`;
    
    setTimeout(() => {        
        keyElem.classList.add('js-keyPressAnim');
        keyCodeElem.classList.add('js-keyPressAnim');
    }, 20);
}

document.addEventListener('keydown', e => {
    e.preventDefault();;
});

document.addEventListener('keyup', loggPressedKey);