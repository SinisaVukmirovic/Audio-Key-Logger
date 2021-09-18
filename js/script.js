
const logg = (e) => {
    e.preventDefault();
    
    console.log(e);
    

    const key = e.key;
    const code = e.keyCode;
    let test = e.code;

    console.log(`Pressed: ${key} | KeyCode: ${code} | test: ${test}`);
}

document.addEventListener('keydown', logg);
