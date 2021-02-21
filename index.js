let botones = document.querySelectorAll('button')

for (const boton of botones) {
    boton.addEventListener('click', evento => {
        switch(evento.target.id){
            case 'autonomo':
                location.assign('http://google.es')
                break
            case 'calculadora':
                break
            case 'divisas':
                break
            case 'zombies':
                break
            case 'autonomo':
                break
        }
    })
}