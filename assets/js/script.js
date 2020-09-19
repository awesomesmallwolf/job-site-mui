(function($){
    $(window).on("load", function(){
        $("body").addClass("page-loaded");
    })

    $(".modal-toggle").on("click", function(e){
        e.preventDefault()
        $(".modal-full").removeClass("active");
        $(".modal-full"+$(this).data('target')).addClass("active");
    });
    $(".modal-close").on("click", function(e){
        e.preventDefault()
        $(this).closest(".modal-full").removeClass("active");
    });
    $(".faq-title").on("click", function(e){
        e.preventDefault()
        $(this).parent().toggleClass("active")
    })
    if($(window).width() <= 991){
        $(document).on("click", function(){
            $(".menu-full").hide()
        })
        $(".nav-actions").on("click", function(e){
            e.stopPropagation()
            $(".menu-full").toggle()
        })
        $(".menu-full").on("click", function(e){
            e.stopPropagation()
        })
    }
    
    

    $("#pwd-toggle").on("change", function(){
        if($('input#pwd-toggle').is(':checked')){
            $("#input_pwd").attr('type', 'text')
        } else {
            $("#input_pwd").attr('type', 'password')
        }
    })
    $("#pwd-toggle2").on("change", function(){
        if($('input#pwd-toggle2').is(':checked')){
            $("#input_pwd2").attr('type', 'text')
        } else {
            $("#input_pwd2").attr('type', 'password')
        }
    })

    $(".nav_action").click(function(e){
        e.preventDefault();
        $("body").toggleClass("nav_active");
    });
    
    $(".panel-heading").on("click", function(e){
        e.preventDefault();
        $(".data-panel > li").removeClass("active");
        $(this).closest("li").addClass("active");
    })

    $(".tab-actions").on("click", "a", function(e){
        e.preventDefault();
        $(this).closest('.tab-outer').find(".tab-actions a").removeClass('active');
        $(this).addClass('active');
        $(this).closest('.tab-outer').find('.tab-panel').removeClass('active');
        $(this).closest('.tab-outer').find('.tab-panel'+$(this).attr('href')).addClass('active')
    })

    $(".action-dd-menu").on("click", "a", function(e){
        e.preventDefault();
        $(".action-dd-menu li").removeClass('active');
        $(this).parent().addClass('active');
        $('.dd-panel').removeClass('active');
        $('.dd-panel'+$(this).attr('href')).addClass('active')
    })

    

    $(document).on("click", function(){
        $(".category-dropdown").removeClass("active");
    })
    $('.cat-close').on("click", function(){
        $(".category-dropdown").removeClass("active");
    })

    
    $(".action-category-menu").on("click", function(e){
        e.stopPropagation();
        $(".category-dropdown").toggleClass("active");
    })
    $(".category-dropdown").on("click", function(e){
        e.stopPropagation();
    })
    $(document).on('click', function(){
        $(".filter-item").removeClass("active");
    })
    $(".filter-label").on("click", function(e){
        e.stopPropagation();
        $(".filter-item").removeClass("active");
        $(this).parent().toggleClass("active");
    })
    $(".filter-dropdown").on("click", function(e){
        e.stopPropagation();
    })
    $(".load-more").on("click", function(e){
        $(this).addClass('loading')
    })
    function screenView(){
    var winW = $(window).width(),
        winH = $(window).height(),
        body = $('body');
        if(winH > winW){
            $(body).addClass("portrait_view");
        } else {
            $(body).removeClass("portrait_view");
        }
    } screenView();

    $(window).on("resize", function(){
        screenView();
    });
   

    var $showWhenScroll = $('.scrollload');
    var $window = $(window);
    function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    $.each($showWhenScroll, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
        $element.addClass('data_loaded');		
        } else {
        //$element.removeClass('data_loaded');
        }
    });
    }
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');


    function headerSticky(){
        var winPosTop = $(window).scrollTop();
        if(winPosTop > 50){
            $("body").addClass("page_scrolled");
        } else {
            $("body").removeClass("page_scrolled");
        }
        var findPanel = $(".find-panel-full");
        if(findPanel.length){
            if(winPosTop > findPanel.offset().top){
                $("body").addClass("nav_sticky");
            } else {
                $("body").removeClass("nav_sticky");
            }
        }        
        var profileInfoBox = $('.profile-info-box');
        if(profileInfoBox.length){
            if(winPosTop > profileInfoBox.offset().top){
                $("body").addClass("active_profile_sticky");
            } else {
                $("body").removeClass("active_profile_sticky");
            }
        }        
    } headerSticky();
    $(window).scroll(function(){
        headerSticky();
    });
    
})(jQuery)

