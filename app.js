const text = 'This is me and my Love: (3';

let inedx = 0;

function writeText(){
    document.body.innerText = text.slice(0,inedx);
    inedx++;
    if(inedx > text.length){
        inedx = 0;
    }
}

setInterval(writeText, 100);