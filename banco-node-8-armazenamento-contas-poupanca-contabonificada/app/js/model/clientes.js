class Clientes {
    constructor() {
        this.clientes = new Array();
        const c1 = new Cliente('Marianna', "30", 1234);
        const c2 = new Cliente('artur', "23", 123);
        this.clientes.push(c1, c2);
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    remover(cpf) {
        const Removercliente = this.pesquisar(cpf);
        if (Removercliente) {
            const indicecliente = this.clientes.indexOf(Removercliente);
            if (indicecliente > -1) {
                this.clientes.splice(indicecliente, 1);
            }
        }
    }
    pesquisar(cpf) {
        return this.clientes.find(Cliente => Cliente.cpf === cpf);
    }
    listar() {
        return this.clientes;
    }
}
