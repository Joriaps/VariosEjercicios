
let zombi = document.getElementById('zombi')
let x=0, y=0
const up = () => zombi.style.transform = `translate(${x}%, ${y -= 25}%)`
    down = () => zombi.style.transform = `translate(${x}%, ${y += 25}%)`
    right = () => zombi.style.transform = `translate(${x += 25}%, ${y}%)`
    left = () => zombi.style.transform = `translate(${x -= 25}%, ${y}%)`

let agujeros = document.getElementById("agujeros")
let numAgujeros = Math.round(Math.random()*30 +1)

console.log(`Habra ${numAgujeros} agujeros`)

for(let i=0; i<numAgujeros; i++){
    let agujero = document.createElement('div')
    let posAgujero = {
        x: 0,
        y: 0
    }
    agujero.id = 'agujero'
    agujero.style.borderRadius = '70%'
    agujero.style.border = 'solid 2px'
    agujero.style.zIndex = '-5'
    agujero.style.backgroundColor = 'grey'
    agujero.style.width = `${Math.floor((Math.random()*(90-70)+70)+1)}px`
    agujero.style.height = `${Math.floor((Math.random()*(90-70)+70)+1)}px`
    let agujeroX = Math.floor((Math.random()*1700)-10)
    let agujeroY = Math.floor((Math.random()*1700)-10)
    agujero.style.marginTop = `${agujeroX}px`
    agujero.style.marginLeft = `${agujeroY}px`
    posAgujero.x = agujeroX
    posAgujero.y = agujeroY
    agujero.style.position = 'relative'
    agujeros.appendChild(agujero)
}

const trampaZombi = () =>{
    console.log(agujero.getBoundingClientRect().x, zombi.getBoundingClientRect().x)
    for (const agujero of document.querySelectorAll('#agujero')) { //Compruebo los agujeros si el zombi ha caido
        if(agujero.getBoundingClientRect().left <= zombi.getBoundingClientRect().left+70 && agujero.getBoundingClientRect().left >= zombi.getBoundingClientRect().left-20){
            if(agujero.getBoundingClientRect().top <= zombi.getBoundingClientRect().top+70 && agujero.getBoundingClientRect().top >= zombi.getBoundingClientRect().top-20){
                alert('¡¡¡CAISTE EN EL AGUJERO!!!')
            }
        }
    }
}

addEventListener('keydown', event => {
    switch(event.key){
        case 'ArrowUp':
            if(zombi.getBoundingClientRect().y>=10) up()
            trampaZombi()
            break
        case 'ArrowDown':
            if(zombi.getBoundingClientRect().y<=screen.height) down()
            trampaZombi()
            break
        case 'ArrowRight':
            if(zombi.getBoundingClientRect().x<= screen.width) right()
            trampaZombi()
            break
        case 'ArrowLeft':
            if(zombi.getBoundingClientRect().x>=7) left()
            trampaZombi()
            break
    }
})

