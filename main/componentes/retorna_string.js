export const Componente = {
    mostraJSestiloAntigo: function(dado){
        return dado + " --- "
    },
    mostraJSestiloNovo: dado => {
        return dado + " === ";
    },
    mostraJSestiloNovo2: dado => (
        `
            ${dado} +++
        `
    ),
}
