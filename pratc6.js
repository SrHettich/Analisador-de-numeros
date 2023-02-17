    var num = document.getElementById('num')
    var n = Number(num.value)
    var tab = document.getElementById('tab')
    var res = document.getElementById('res')
    let valor = []


function inTab(i, l)
{
    if(l.indexOf(Number(i)) != -1)
    {
        return true
    }
    else
    {
        return false
    }
}

function isNum(n)
{
    if(Number(n) >= 1 && Number(n) <= 100)
    {
        return true
    }
    else
    {
        return false
    }
}

function adc()
{

    if(!inTab(num.value, valor) && isNum(num.value))
    {
        valor.push(Number(num.value))
        var opt = document.createElement('option')
        opt.text = `Valor ${num.value} adicionado`
        tab.appendChild(opt)
        res.innerHTML = ''
    }
    else
    {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}


function fin()
{
    if(valor.length == 0)
    {
        window.alert('Adicione um valor para finalizar!')
    }
    else
    {
    let maior = valor[0]
    let menor = valor[0]
    let soma = 0
    let media = 0
let qntd = tab.length
    for(let posi in valor)
    {
        soma += valor[posi]
        media = soma/qntd

        if(valor[posi] > maior)
        {
            maior = valor[posi]
        }
        if(valor[posi] < menor)
        {
            menor = valor[posi]
        }
    }
    

    

    res.innerHTML = ""
    res.innerHTML +=`<p>Ao todo, temos ${qntd} números adicionados</p>`
    res.innerHTML += `<p>O Maior valor é ${maior}</p>`
    res.innerHTML += `<p>O menor valor é ${menor}</p>`
    res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
    res.innerHTML += `<p>A média dos valores é ${media}</p>`
}
    
}