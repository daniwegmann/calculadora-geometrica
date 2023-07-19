function areaTriangulo() {
    const base = prompt("Informe a base do triangulo: ")
    const altura = prompt("Informe a altura do triangulo: ")
    return base * altura / 2
}

function areaRetangulo() {
    const base = prompt("Informe a base do retângulo: ")
    const altura = prompt("Informe a altura do retângulo: ")
    return base * altura
}

function areaQuadrado() {
    const base = prompt("Informe o lado do quadrado: ")
    return lado * lado
}

function areaTrapezio() {
    const baseMaior = parseFloat(prompt("informe a base maior do trapezio: "))
    const baseMenor = parseFloat(prompt("informe a base menor do trapezio: "))
    const altura = prompt("informe a altura do trapezio: ")
    return (baseMaior + baseMenor) * altura / 2
}

function areaCirculo() {
    const circulo = prompt("Informe o raio do circulo: ")
    return 3,14 * raio * raio
}

function exibirMenu() {
    return prompt(
    "Calculadora Geométrica!\n" +
    "1. Área do triângulo\n" +
    "2. Área do retângulo\n" +
    "3. Área do quadrado\n" +
    "4. Área do trapézio\n" +
    "5. Área do círculo\n" +
    "6. Sair\n"
    )
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()
        let resultado

        switch (opcao) {
            case "1":
                resultado = areaTriangulo()            
                break
            case "2":
                resultado = areaRetangulo()   
                break
            case "3":
                resultado = areaQuadrado()
                break
            case "4":
                resultado = areaTrapezio()
                break 
            case "5":
                resultado = areaCirculo()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida!")
        }

        if (resultado) {
            alert("Resultado: " + resultado)
        }

    } while (opcao !== "6")
}

executar()