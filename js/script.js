const keyElem = document.querySelector('#key');
const keyCodeElem = document.querySelector('#keyCode');

const logg = (e) => {
    // e.preventDefault();
    
    console.log(e);
    

    let key = e.key;
    let code = e.keyCode;

    if (e.keyCode === 32) {
        key = 'Space';
    }
    // let test = e.code;

    keyElem.innerText = `${key}`;
    keyCodeElem.innerText = `${code}`;

    // console.log(`Pressed: ${key} | KeyCode: ${code} | test: ${test}`);
}

document.addEventListener('keydown', (e) => e.preventDefault());
document.addEventListener('keyup', logg);