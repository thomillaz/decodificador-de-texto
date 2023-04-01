
/* As "chaves" de criptografia que utilizaremos são:
`A letra "e" é convertida para "enter"`
`A letra "i" é convertida para "imes"`
`A letra "a" é convertida para "ai"`
`A letra "o" é convertida para "ober"`
`A letra "u" é convertida para "ufat"` */
const inputText = document.querySelector('.input_text');
const showText = document.querySelector('.show_txt');

function btnEncrypt(){
    const txtEncrypt = encrypt(inputText.value);
    showText.value = txtEncrypt;
    inputText.value = '';
}

function encrypt(stringEncrypt){
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringEncrypt = stringEncrypt.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncrypt.includes(matrizCodigo[i][0])){
            stringEncrypt = stringEncrypt.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncrypt;
}