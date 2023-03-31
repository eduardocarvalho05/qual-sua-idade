function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let formAno = document.getElementById(`anoNasc`)
    let resultado = document.getElementById(`resultado`)
    if (formAno.value.length == 0 || formAno.value > ano) {
        alert(`Verifique os dados e tente novamente!`)
    } else {
        let formSex = document.getElementsByName(`radioSex`)
        let idade = ano - Number(formAno.value)
        let genero = ``
        resultado.innerHTML = `Idade calculada: ${idade}`
        let img = window.document.getElementById(`img`)
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        if (formSex[0].checked) {
            genero = `Homem`
            if (idade >= 0 && idade < 5) {
                img.src = `./img/bebeHomem.jpeg`
                //bebe
            } else if (idade >= 5 && idade < 12) {
                //criança
                img.src = `./img/criançaHomem.jpeg`
            } else if (idade >= 12 && idade < 20) {
                //jovem
                img.src = `./img/adolescenteHomem.jpeg`
            } else if (idade >= 20 && idade < 50) {
                //adulto
                img.src = `./img/adultoHomem.jpeg`
            } else if (idade >= 50) {
                //idoso
                img.src = `./img/idosoHomem.jpeg`
            }
        } else if (formSex[1].checked) {
            genero = `Mulher`
            if (idade >= 0 && idade < 5) {
                //bebe
                img.src = `./img/bebeMulher.jpeg`
            } else if (idade >= 5 && idade < 12) {
                //criança
                img.src = `./img/criançaMulher.jpeg`
            } else if (idade >= 12 && idade < 20) {
                //jovem
                img.src = `./img/adolescenteMulher.jpeg`
            } else if (idade >= 20 && idade < 50) {
                //adulto
                img.src = `./img/adultaMulher.jpeg`
            } else if (idade >= 50) {
                //idoso
                img.src = `./img/idosaMulher.jpeg`
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        // resultado.appendChild(img)
    }
}















