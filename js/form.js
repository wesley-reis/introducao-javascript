

var botaAdicionar = document.querySelector('#adicionar-paciente')

botaAdicionar.addEventListener('click', () => {
    event.preventDefault();
    var form = document.querySelector('#form-adiciona');

    var paciente = formData(form)    

    var pacienteTr = createTr(paciente);

    var tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(pacienteTr)

    form.reset();


});

function formData(form){
    var paciente = {
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    }

    return paciente;
}

function createTr(paciente){

    var pacienteTr = document.createElement('tr');

    pacienteTr.classList.add("pacinete")

    pacienteTr.appendChild(addTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(addTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(addTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(addTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(addTd(paciente.imc, 'info-imc'))

    return pacienteTr;
}

function addTd(dado, classe){
    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)
    return td;
}

