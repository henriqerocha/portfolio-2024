$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        // Adiciona a classe 'transparente' ao cabeçalho quando rolar para baixo
        $('.topo').addClass('transparente');
        $('.container-top').addClass('transparente');
    } else {
        // Remove a classe 'transparente' quando voltar ao topo
        $('.topo').removeClass('transparente');
        $('.container-top').removeClass('transparente');
    }
});