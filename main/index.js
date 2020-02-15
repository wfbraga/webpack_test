import { Componente } from './componentes/retorna_string'
document.getElementById('title').innerHTML = `
    <h1>Projeto Million</h1>
    `
document.getElementById('content1').innerHTML = `
    ${Componente.mostraJSestiloAntigo('Mostrando o antigo')}
    `
document.getElementById('content2').innerHTML = `
    ${Componente.mostraJSestiloNovo('Mostrando o novo')}
    `
document.getElementById('content3').innerHTML = `
    ${Componente.mostraJSestiloNovo2('Mostrando o novo e mais curto')}
    `

    