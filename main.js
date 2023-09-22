function tocaSom(idTagAudio){
    const elemento = document.querySelector(idTagAudio);

    if(elemento === null){
        
    }

    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
       
    } 
    
    else {
        console.log('Elemento não encontrado ou seletor inválido');

    }

}

const listaDeTeclas = document.querySelectorAll('.tecla'); /* lsita das teclas musicas do pad */

    

for (let contador = 0; contador < listaDeTeclas.length; contador++ ){
    
    const tecla = listaDeTeclas[contador]
    
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`; /* "crase - outra maneira de criar strings dentro de javascript"*/
                    /* Cifrão e chaves possibilita uma abertura de pesquisa dentro da string, também chamado de template string*/

    console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio)
    }

    console.log(contador);

    tecla.onkeydown = function(evento) {
        
        console.log(evento.code == 'Space')
        
        if (evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}








