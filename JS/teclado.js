const d= document;

export function shortcuts(e){
    console.log(e);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.ctrlKey);
    console.log(e.altKey);
    console.log(e.shiftKey);
    console.log(`Ctrl: ${e.ctrlKey}`);
    console.log(`Alt: ${e.altKey}`);
    console.log(`Shift: ${e.shiftKey}`);

    if(e.key ===`a` && e.altKey)
    {
        alert(`Haz precionado la tecla ${e.key}`);
    }
}