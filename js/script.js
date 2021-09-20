const keyElem = document.querySelector('#key');
const keyCodeElem = document.querySelector('#keyCode');

const logg = (e) => {
    console.log(e);    

    let key = e.key;
    let code = e.keyCode;

    if (e.keyCode === 32) {
        key = 'Space';
    }

    keyElem.innerText = `${key}`;
    keyCodeElem.innerText = `${code}`;

}

document.addEventListener('keydown', (e) => e.preventDefault());
document.addEventListener('keyup', logg);