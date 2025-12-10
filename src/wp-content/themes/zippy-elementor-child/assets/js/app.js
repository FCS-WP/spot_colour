import "../lib/slick/slick.min.js";


$(".js-category-list .jkit-product-category .jkit-product-category-count").each(function (index, item) {
    let total_count = $(item).text();
    $(item).text(total_count.replace(/[()]/g, "").trim());
});

$(".js-slider .elementor-loop-container").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});