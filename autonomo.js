let horaInicio = new Date()

const tiempoFalta = limite => {
    let ahora = new Date(),
        // pasar de milisegundos a segundos
        tiempoQFalta = (ahora - horaInicio) / 1000,
        segundos = ('0' + Math.floor(tiempoQFalta % 60)).slice(-2),
        minutos = ('0' + Math.floor(tiempoQFalta / 60 % 60)).slice(-2),
        horas = ('0' + Math.floor(tiempoQFalta / 3600 % 24)).slice(-2),
        dias = Math.floor(tiempoQFalta / (3600 * 30))

        return {
            segundos,
            minutos,
            horas,
            dias
        }
}

const contador = (limitar, elemento, mensaje) => {
        const elem = document.getElementById(elemento)
    
        const actualizar = setInterval(() => {
            let tiempo = tiempoFalta(limitar)
            elem.innerHTML = `Llevas ${tiempo.dias}d:${tiempo.horas}h:${tiempo.minutos}m:${tiempo.segundos}s trabajando`
        }, 1000) // 1 segundo
    }
contador(new Date(), 'reloj_evento', 'EVENTO OK')

window.addEventListener('DOMContentLoaded', () => {

})