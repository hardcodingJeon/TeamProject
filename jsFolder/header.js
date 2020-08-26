let flag = 50;
        
        $(window).scroll(function(){  
            let hscroll = $(this).scrollTop();
    
            if( hscroll  >= flag ){
                $('.header').addClass('act smooth'); // act class는 없어도됨, class 두개 추가된것임
                $('#socarLogo').addClass('socarLogo');
                $('.line').addClass('navmenu');
                
            }
            else {
                $('.header').removeClass('act smooth');
                $('#socarLogo').removeClass('socarLogo');
                $('.line').removeClass('navmenu');
            }
        });

        

        $('#line-wrapper').click(function(){
            $('.line').removeClass('init');
            $('#line-top').toggleClass('line-top').toggleClass('top-reverse');
            $('#line-mid').toggleClass('line-mid').toggleClass('mid-reverse');
            $('#mySidenav').toggleClass('closeNav').toggleClass('openNav');
          });
          
        

        

