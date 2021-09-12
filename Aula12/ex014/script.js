function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    // var hora = 10
    if (hora != 1){
        msg.innerHTML = `Agora são ${hora} horas.`
    } else {
        msg.innerHTML = `Agora é ${hora} hora da manhã.`
    }
    if(hora >= 0 && hora < 12){
        //BOM DIA!
        img.src='manha.png'
        document.body.style.background = '#FCE9BA'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src='tarde.png'
        document.body.style.background = '#588CA2'
    }else{
        //BOA NOITE!
        img.src='noite.png'
        document.body.style.background = '#242624'
    }
}
