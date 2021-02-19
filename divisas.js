let euros = document.getElementById('euro')
let dollar = document.getElementById('dollar')

const convertirEuros = () => {
    if(!isNaN(euros.value && euros.value !== '')){
        dollar.value = euros.value * 1.21
    }
}

const convertirDolares = () => {
    if(!isNaN(dollar.value && dollar.value !== '')){
        euros.value = dollar.value / 1.21
    }
}

let boton = document.getElementById('boton')
boton.addEventListener('click', evento => {
    if(euros.value !== '' && dollar.value === '') {
        convertirEuros()
    } else if(dollar.value !== '' && euros.value === ''){
        convertirDolares()
    } else if(euros.value !== '' && dollar.value !== ''){
        if(confirm('¿Quieres convertir euros a dolares?')) {
            convertirEuros()
        } else {
            if(confirm('¿Quieres convertir dolares a euros?')){
                convertirDolares()
            } else {
                if(!confirm('¿Desea realizar alguna operacion?')) window.close()
            }
        }
    }
})