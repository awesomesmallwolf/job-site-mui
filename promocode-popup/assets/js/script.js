(function($){
    $(".modal-toggle").on("click", function(e){
        e.preventDefault()
        $(".modal-full").removeClass("active");
        $(".modal-full"+$(this).data('target')).addClass("active");
    });
    $(".modal-close, .modal-close-action").on("click", function(e){
        e.preventDefault()
        $(this).closest(".modal-full").removeClass("active");
    });
    
})(jQuery)

