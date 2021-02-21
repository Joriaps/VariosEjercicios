let botones = document.querySelectorAll('button')

for (const boton of botones) {
    boton.addEventListener('click', evento => {
        switch(evento.target.id){
            case 'autonomo':
                location.assign(`${location.href+'/autonomo.html'}`)
                break
            case 'calculadora':
                location.assign(`${location.href+'/calculadora.html'}`)
                break
            case 'divisas':
                location.assign(`${location.href+'/divisas.html'}`)
                break
            case 'zombies':
                location.assign(`${location.href+'/zombies.html'}`)
                break
        }
    })
}