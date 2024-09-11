const form = document.getElementById("formAgenda");
const nomes = [];
const fones = [];

linhas = '';

function adicionarLinha() {
    let insertName = document.getElementById("insertName");
    let insertFone = document.getElementById("insertFone");

    nomes.push("insertName.value");
    fones.push("insertFone.value");

    let linha = "<tr>";
    linha += `<td>${insertName.value}</td>`;
    linha += `<td>${insertFone.value}</td>`;
    linha += `</tr>`;

    linhas += linha
};

function calcularTotalContatos() {

};

function adionarQuantidadeContatos() {

}



form.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionarLinha();
    calcularTotalContatos();
    adionarQuantidadeContatos();
});