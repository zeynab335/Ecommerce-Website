// view catagoires in home page
$(function(){
    $('.toggle-icon').on('click',function(){
        $('.slide-bar , .header').toggleClass('no-slidebar')
        
    })
})



// start categories-toggle
$('.categories-toggle-icon').on('click', function(){
    // toggle class fa-angle-right and fa-angle-down
    $(this).toggleClass("fa-angle-right fa-angle-down");

    // display .categories-content in slidebar
    var slidebar_categories = $(this).parent('.categories-toggle').parent('.row').parent('.slidebar-categories').data('value');
    $("."+slidebar_categories + " "+".categories-content").toggle(600,"linear")
    
    
    console.log(slidebar_categories)  
})




// start  dropdown login in header page

$('.dropdown-toggle').dropdown()


// end login dropdown in header page


