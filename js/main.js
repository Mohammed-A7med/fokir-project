//let aboutOffset = $('#About').offset().top;
$(window).scroll(function () {
    let wScroll = $(window).scrollTop();
    if (wScroll > 50) {
        $('#nav-main').css('backgroundColor', 'rgba(0,0,0,.8)');
        $('#btnUp').fadeIn(500);
    }
    else {
        $('#nav-main').css('backgroundColor', 'transparent');
        $('#btnUp').fadeOut(500);
    }
});

$('#btnUp').click(function () {
    $("html,body").animate({ scrollTop: 0 }, 2000);
});

$("#home .navbar-nav a[href^='#']").click(function (e) {
   $(e.target).css('border-bottom','#FF305B 2px solid');
   $(e.target).parent().siblings().children().css('border-bottom','none');
   let linkHref = $(e.target).attr('href');
   let sectionOffset = $(linkHref).offset().top;
    $('html,body').animate({scrollTop:sectionOffset} , 1100)
})

$(document).ready(function () {
    $('.lds-facebook').fadeOut(1000,function () {
        $('#loding').fadeOut(1000,function () {
            $('#loding').remove()
            $("body").css({overflow:'auto'})
        })
    })
});

$("#Portfolio a[href^='#']").click(function (e) {
   let PortfolioHref = $(e.target).attr('href');
    $(PortfolioHref).css('display','flex');
    $(PortfolioHref).siblings().css('display','none');
    $(e.target).css('color' , "#FF305B");
    $(e.target).parent().siblings().children().css('color' , "black")
})
// $('PortfolioHref').parent().siblings().children().css({display:'none'})

