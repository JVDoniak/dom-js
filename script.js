const btnMenu = document.querySelector('#header nav button');

btnMenu.addEventListener('click', function (){
    const menuExpansivo = document.querySelector('#header nav ul');

    //transforma o DOMTokenList em um Array
    const classes = Array.from(menuExpansivo.classlist);
    console.dir(classes);
    menuExpansivo.classList.add("ativado")

    console.log(menuExpansivo.classList);
    //se existir o valor 
    if(menuExpansivo.classList.includes("ativado")){

        menuExpansivo.classList.remove("ativado");

    }else {
        //remove a classe da lista
        menuExpansivo.classList.add("ativado");

    }
});

menuExpansivo.classList = ["ativado", "teste", "fechado"];

classList.includes("ativado")