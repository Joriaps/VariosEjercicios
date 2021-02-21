let botones = document.querySelectorAll('button')
console.log(location.href)
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