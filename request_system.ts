abstract class ItemCardapio {

    nome: string = ''
    preco: number = 0

    abstract preparar(): void
}

class PratoPrincipal implements ItemCardapio {
    nome = ''
    preco = 0

    public setNome(nome: string) {
        this.nome = nome
    }

    public setPreco(preco: number) {
        this.preco = preco
    }

    preparar() {
        return `o preço do prato principal ${this.nome} é ${this.preco}, estamos preparando`
    }
}

class Sobremesa extends ItemCardapio {
    nome = ''
    preco = 0

    setNome(nome: string) {
        this.nome = nome
    }

    setPreco(preco: number) {
        this.preco = preco
    }

    preparar() {
        return `o preço da sobremesa ${this.nome} é ${this.preco}, estamos preparando`
    }
}

class Bebida extends ItemCardapio {
    nome = ''
    preco = 0

    setNome(nome: string) {
        this.nome = nome
    }

    setPreco(preco: number) {
        this.preco = preco
    }

    preparar() {
        return `o preço da bebida ${this.nome} é ${this.preco}, estamos preparando`
    }
}

abstract class CriadorDeItem {
    public abstract createItemCardapio(): ItemCardapio
}

class CriadorDePratoPrincipal extends CriadorDeItem {
    createItemCardapio(): PratoPrincipal {
        return new PratoPrincipal()
    }
}

class CriadorDeSobremesa extends CriadorDeItem {
    createItemCardapio(): Sobremesa {
        return new Sobremesa()
    }
}

class CriadorDeBebida extends CriadorDeItem {
    createItemCardapio(): Bebida {
        return new Bebida()
    }
}

class Pedido {
    itensCardapio: ItemCardapio[] = []

    adicionarItem(item: ItemCardapio): void {
        this.itensCardapio.push(item)
    }

    resumirPedido(): void {

        const resumoPedidos = this.itensCardapio.map((item) => ({
            nome: item.nome,
            preco: item.preco,
            preparo: item.preparar()
        }))

        console.log(resumoPedidos)

    }
}

const pratoPrincipalFactory = new CriadorDePratoPrincipal()
const pratoPrincipal = pratoPrincipalFactory.createItemCardapio()
pratoPrincipal.setNome('Arroz com ovo')
pratoPrincipal.setPreco(30)

const sobremesaFactory = new CriadorDeSobremesa()
const sobremesa = sobremesaFactory.createItemCardapio()
sobremesa.setNome('petit gateu')
sobremesa.setPreco(17)

const pedido = new Pedido()
pedido.adicionarItem(pratoPrincipal)
pedido.adicionarItem(sobremesa)

pedido.resumirPedido()

const bebidaFactory = new CriadorDeBebida()
const bebida = bebidaFactory.createItemCardapio()
bebida.setNome('suco de laranja')
bebida.setPreco(9.50)

pedido.adicionarItem(bebida)

pedido.resumirPedido()