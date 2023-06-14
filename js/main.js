$(function(){
    $('.cover').hide()
    $('#Works .inner .list li').mouseenter(function(){
        $(this).stop().find('.cover').slideDown()
    })
    $('#Works .inner .list li').mouseleave(function(){
        $(this).stop().find('.cover').slideUp()
    })

    // $('."slide_wrap').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //   });

      $('header .inner>.gnb>li>a').click(function(){
        let name = $($(this).attr('href'))
        console.log(name)
        let target = $($(this).attr('href')).offset().top
        console.log(target)
        $('body,html').animate({scrollTop:target},1000)
    })
   

    let aboutNum = $('#About').offset().top
    console.log(aboutNum)

    let pfNum = $('#Works').offset().top
    console.log(pfNum)

    let conNum = $('#Contact').offset().top
    console.log(conNum)



    //swiper 슬라이드
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

    //isotope
   
    // $('.grid').isotope({
    //     // options
    //     itemSelector: '.grid-item',
    //     layoutMode: 'fitRows'
    // });
    // $('#all').click(function(){
    //     $('.grid').isotope({ filter: '.grid-item' })
    // })
    // $('#pc').click(function(){
    //     $('.grid').isotope({ filter: '.pc' })
    // })  
   
    // $('#mb').click(function(){
    //     $('.grid').isotope({ filter: '.mb' })
    // })  
    // $('#re').click(function(){
    //     $('.grid').isotope({ filter: '.re' })
    // })  
    // $('#re').click(function(){
    //     $('.grid').isotope({ filter: '.re' })
    // }) 


          
    
})