interface Veiculo {
    nome: string;
    placa: string;
    entrada: Date;
}
<<<<<<< HEAD

(function(){
    const $ = (query:string): HTMLInputElement | null => document.querySelector(query);

    function patio(){
        function ler(){}

        function adicionar(veiculo: Veiculo){
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${veiculo.nome}</td>
                <td>${veiculo.placa}</td>
                <td>${veiculo.entrada}</td>
                <td>
                    <button class="delete" data-placa="${veiculo.placa}">X</button>
                </td>
=======

(function () {
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query);

    function patio() {

        function ler() { }

        function adicionar(veiculo: Veiculo) {
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${veiculo.nome}</td>
            <td>${veiculo.placa}</td>
            <td>${veiculo.entrada}</td>
            <td>
                <button class="delete" data-placa="${veiculo.placa}">X</button>
            </td>
>>>>>>> 8c25cdd0f8de111aa7a4dccd67f8dd8a77bae275
            `;

            $("#patio")?.appendChild(row);
        }

<<<<<<< HEAD
        function remover(){}

        function salvar(){}

        function render(){}

        return {ler, adicionar, remover, salvar, render}
    }

    $("#cadastrar")?.addEventListener("click",() => {
=======
        function remover() { }

        function salvar() { }

        function render() { }

        return { ler, adicionar, remover, salvar, render }
    }

    $("#cadastrar")?.addEventListener("click", () => {
>>>>>>> 8c25cdd0f8de111aa7a4dccd67f8dd8a77bae275
        const nome = $("#nome")?.value;
        const placa = $("#placa")?.value;

        if (!nome || !placa) {
            alert("Os campos acima são obrigatórios");
            return;
        }

        patio().adicionar({nome, placa, entrada: new Date()})
<<<<<<< HEAD

=======
>>>>>>> 8c25cdd0f8de111aa7a4dccd67f8dd8a77bae275
    })

})();