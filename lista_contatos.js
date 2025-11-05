let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let opção = prompt("Escolha uma opção: ");

function adicionando_contatos(){
    let name = prompt("Escolha um nome a ser adicionado: ");
    let phone = prompt("Digite o número desse contato: ");
    let email = prompt("Digite o Email desse novo contato")

    let novo_contato = {
        name: name,
        phone: phone,
        email: email
    }
    
    if(name === ""|| phone === "" || email === ""){
        alert("Alguma entrada ficou vazia!")
    }else{
       contacts.push(novo_contato) 
       let htmlCompleto = ""; 
        for (let contato of contacts) {
            htmlCompleto += 
            `Nome: ${contato.name} <br>
            Phone: ${contato.phone} <br>
            Email: ${contato.email}<br>`
        };
        meuContainer.innerHTML = htmlCompleto; 
    }
    
}

let meuContainer = document.getElementById("novo_contato");
switch(opção){

    case "1":
        meuContainer.innerHTML = 
        `Nome: ${contacts[0].name}<br>
        Phone: ${contacts[0].phone}<br>
        Email: ${contacts[0].email}<br>`;
        break;

    case "2":
        meuContainer.innerHTML = 
        `Nome: ${contacts[contacts.length - 1].name}<br>
        Phone: ${contacts[contacts.length - 1].phone}<br>
        Email: ${contacts[contacts.length - 1].email}<br>`;
        break;

    case "3":
        adicionando_contatos();
        
        break; 
    default:
        console.log("Caso inválido");
        break;
}