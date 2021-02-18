
let resultado = document.getElementById('resultado')
let numeroIntroducido = document.getElementById("numeros")

const comprobarSimbolo = () => {
    if(resultado.textContent.charAt(resultado.textContent.length-1) !== '+' && resultado.textContent.charAt(resultado.textContent.length-1) !== '-' && resultado.textContent.charAt(resultado.textContent.length-1) !== '/' && resultado.textContent.charAt(resultado.textContent.length-1) !== 'x'){
        return true
    } else return false
}

const comprobarOperacion = segmento => {
    if(segmento.includes('+')){
        return '+'
    } else if(segmento.includes('-')) {
        return '-'
    } else if(segmento.includes('/')) {
        return '/'
    } else if(segmento.includes('x')) {
        return 'x'
    } else return false
}

function hayOperadores(elemento){
    if(elemento.includes('+') || elemento.includes('-') || elemento.includes('/') || elemento.includes('x')){
        return true
    } else return false
}

/*function separarOperaciones(){        //Falta unir para hacer distintas operaciones
    let i = 0
    let operandos = []
    operandos[0] = resultado.textContent.split(comprobarOperacion(resultado.textContent)) 
    do{
        let segmento = operandos[i].split(comprobarOperacion(operandos.indexOf(operandos.length-1)), 2)
        operandos.push(segmento[1])
        i++
    }while(hayOperadores(segmento[1]))
}*/

const calcularResultado = () => {
    let operacion
    let resultadoOperacion
    let iteracion = 0

    switch(comprobarOperacion(resultado.textContent)){
        case '+':
            operacion = resultado.textContent.split('+')    //Primero guardo los datos y despues borro el contenido
            resultadoOperacion = 0
            for (const operando of operacion) {
                resultadoOperacion += parseInt(operando)
            }
            resultado.textContent =  resultadoOperacion
            break
        case '-':
            operacion = resultado.textContent.split('-')    //Primero guardo los datos y despues borro el contenido
            resultado.textContent = operacion[0]
            for (const operando of operacion) {
                if (iteracion != 0) resultado.textContent -= parseInt(operando)     //Para que no se reste el primer numero
                iteracion++
            }
            break
        case '/':
            operacion = resultado.textContent.split('/')    //Primero guardo los datos y despues borro el contenido
            resultado.textContent = operacion[0]
            for (const operando of operacion) {
                if (iteracion != 0) resultado.textContent /= parseInt(operando)     //Para que no se divida el primer numero
                iteracion++
            }
            break
        case 'x':
            operacion = resultado.textContent.split('x')    //Primero guardo los datos y despues borro el contenido
            resultadoOperacion = 1                          //Lo igualo a 1 para hacer el calculo de la multiplicacion
            for (const operando of operacion) {
                resultadoOperacion *= parseInt(operando)
            }
            resultado.textContent =  resultadoOperacion
            break
        default:
            break
    }
}

let botones = document.querySelectorAll('button')
for (const boton of botones) {
    boton.addEventListener('click', evento => {
        switch(evento.target.textContent){
            case '0':
                resultado.textContent += evento.target.textContent.trim()
                console.log(resultado.textContent.charAt(resultado.textContent.length-1))
                break
            case '1':
                resultado.textContent += evento.target.textContent.trim()
                console.log(resultado.textContent.charAt(resultado.textContent.length-1))
                break
            case '2':
                resultado.textContent += evento.target.textContent.trim()
                console.log(resultado.textContent.charAt(resultado.textContent.length-1))
                break
            case '3':
                resultado.textContent += evento.target.textContent.trim()
                console.log(resultado.textContent.charAt(resultado.textContent.length-1))
                break
            case '4':
                resultado.textContent += evento.target.textContent.trim()
                console.log(resultado.textContent.charAt(resultado.textContent.length-1))
                break
            case '5':
                resultado.textContent += evento.target.textContent.trim()
                console.log(resultado.textContent.charAt(resultado.textContent.length-1))
                break
            case '6':
                resultado.textContent += evento.target.textContent.trim()
                console.log(resultado.textContent.charAt(resultado.textContent.length-1))
                break
            case '7':
                resultado.textContent += evento.target.textContent.trim()
                console.log(resultado.textContent.charAt(resultado.textContent.length-1))
                break
            case '8':
                resultado.textContent += evento.target.textContent.trim()
                console.log(resultado.textContent.charAt(resultado.textContent.length-1))
                break
            case '9':
                resultado.textContent += evento.target.textContent.trim()
                console.log(resultado.textContent.charAt(resultado.textContent.length-1))
                break
            case '+':
                if(comprobarSimbolo()){
                    resultado.textContent += evento.target.textContent.trim()
                }
                break
            case '-':
                if(comprobarSimbolo()){
                    resultado.textContent += evento.target.textContent.trim()
                }
                break
            case 'x':
                if(comprobarSimbolo()){
                    resultado.textContent += evento.target.textContent.trim()
                }
                break
            case '/':
                if(comprobarSimbolo()){
                    resultado.textContent += evento.target.textContent.trim()
                }
                break
            case '=':
                calcularResultado()
                break
            case '<--':
                resultado.textContent = resultado.textContent.substring(0, resultado.textContent.length-1)
                break
            case 'C':
                resultado.textContent = ''
                break
        }
})
}
