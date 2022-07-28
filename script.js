function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os valores digitados!');
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        //res.innerHTML=`Idade calculada <strong>${idade}</strong>`;
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id','foto');
        if (fsex[0].checked){
            genero = 'masculino';
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','imagens/masculino1.jpg');
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/masculino2.jpg');
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/masculino3.jpg');
            }else{
                //idoso
                img.setAttribute('src','imagens/masculino4.jpg');
            }
        }else if(fsex[1].checked){
            genero = 'feminino';
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','imagens/feminino1.jpg');
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','imagens/feminino2.jpg');
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/feminino3.jpg');
            }else{
                //idoso
                img.setAttribute('src','imagens/feminino4.jpg');
            }
        }
        res.style.textAlign='center';
        res.innerHTML=`o genero é ${genero} e a idade é ${idade}<br>`;
        res.appendChild(img);
        res.appendChild(img.style.borderRadius = '50%');
    }
}