$(document).ready(function(){
    /********* Super Slide *********/
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: true
    });
    /********  Typed Js ***************/
    var typed = new Typed(".typed", {
        strings: [
            'Web Developer',
            'Flutter Devloper',
            'BITM Trainer',


        ],
        loop:true,
        typeSpeed:70,
        startDelay:1000,
        showCursor: false

    });
    /************** Owl Carousel ************/
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    /************* Easy Pie Chart ********/
    var skillsTopOffset =$(".skillsSection").offset().top;
    $(window).scroll(function() {
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

        }
    });

});

var prices = $(".prices").attr("data_value");
var i=0;
function addcart (){
    i++;
    document.getElementById("price").innerHTML="Total Price=" +i*prices;
}

$("button").click(function(){
    document.getElementById("select").innerHTML="Selected Items=" +i;
});