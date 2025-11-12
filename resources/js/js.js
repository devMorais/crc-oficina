$(document).ready(function () {
    // menu toggle
    $('.btn-nav').on('click', function () {
        $('.menu').toggleClass('active');
        $('.btn-nav i').toggleClass('fa-bars-staggered fa-close');
    });

    // slick slider initialization
    $('.slide-banner .conteudo .itens').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<a class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i></a>',
        nextArrow: '<a class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i></a>',
        autoplay: true,
        autoplaySpeed: 5000,
    });
});