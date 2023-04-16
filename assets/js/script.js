
/* As "chaves" de criptografia que utilizaremos são:
`A letra "e" é convertida para "enter"`
`A letra "i" é convertida para "imes"`
`A letra "a" é convertida para "ai"`
`A letra "o" é convertida para "ober"`
`A letra "u" é convertida para "ufat"` */
const btnEncrypt = document.getElementById('encrypt')
const btnDecrypt = document.getElementById('decrypt')
const btnCopy = document.getElementById('btnCopy')
const inputText = document.getElementById('input_text')
let inTxt = inputText.value
const showText = document.getElementById('block-show__text')

btnEncrypt.addEventListener('click', criptografar)
btnDecrypt.addEventListener('click', descriptografar)
btnCopy.addEventListener('click', copiar)

function criptografar(){
    if(inTxt.includes('e')){
      inTxt = inTxt.replace(/e/g, 'enter')
    }
    if(inTxt.includes('i')){
        inTxt = inTxt.replace(/i/g, 'imes')
    }
    if(inTxt.includes('a')){
        inTxt = inTxt.replace(/a/g, 'ai')
    }
    if(inTxt.includes('o')){
        inTxt = inTxt.replace(/o/g, 'ober')
    }
    if(inTxt.includes('u')){
        inTxt = inTxt.replace(/u/g, 'ufat')
    }
    console.log(inTxt)

    showText.innerHTML = `<p id='resultado'>${inTxt}</p>`
    //showText.innerHTML += `<button id="btnCopy">Copiar</button>`
    document.btnCopy.style.display = 'block'
}

function descriptografar(){
    if(inTxt.includes('enter')){
        inTxt = inTxt.replace(/enter/g, 'e')
    }
    if(inTxt.includes('imes')){
        inTxt = inTxt.replace(/imes/g, 'i')
    }
    if(inTxt.includes('ai')){
        inTxt = inTxt.replace(/ai/g, 'a')
    }
    if(inTxt.includes('ober')){
        inTxt = inTxt.replace(/ober/g, 'o')
    }
    if(inTxt.includes('ufat')){
        inTxt = inTxt.replace(/ufat/g, 'u')
    }

    showText.innerHTML = `<p id='resultado'>${inTxt}</p>`
    //showText.innerHTML += `<button id="btnCopy">Copiar</button>`
    document.btnCopy.style.display = 'block'
}

function copiar(){
    let res = document.getElementById('resultado')
    res.innerText.select()
    document.execCommand('copy')
    document.getElementById('btnCopy')
    console.log(res.value)
    window.alert('Copiado!')
}