
// start show information of all kinds of categories

var category_kind_name = document.querySelectorAll(".All_Kind_category .show_kind-col .category_kind_name");

category_kind_name.forEach(image_info=>{
    //console.log(image_info);
    image_info.addEventListener('click' ,  (infoClick)=>{
        kind_name = image_info.classList[1];
        window.scrollTo(0,200)
        //console.log(document.querySelectorAll(".category_showInfo"))
        document.querySelectorAll(".category_showInfo").forEach(removeItem=>{
            removeItem.style.display = "none";
        })
        document.getElementById(kind_name).style.display = "block";


    })
})    

// end show information of all kinds of categories



/////////////////////////////////////////////////////////////////////////////

// start view info of imaes 
var selectImages = document.querySelectorAll(".category_showInfo .category_showInfo_image img");

selectImages.forEach(image=>{

    image.addEventListener('mouseover' , imageClick = () =>{
        info_of_image = image.parentNode.children[0]
        info_of_image.style.display = 'block';
        //info_of_image.children[0].style.display = 'block';
    })

    image.parentNode.addEventListener('mouseleave' , imageUnClick = () =>{
        info_of_image = image.parentNode.children[0]
        info_of_image.style.display = 'none';
        //info_of_image.children[0].style.display = 'none';
    })

})
// start view info of imaes     


/////////////////////////////////////////////////////////////////////////////////////

// start evaluate_product in  New_Arrivals
var evalu_item = document.querySelectorAll(".category_showInfo_col .evaluate_product i");
evalu_item.forEach(item=>{
    item.onclick=function(){
        item_class = item.classList
        if(item_class=="far fa-star"){
            item.classList.remove("far","fa-star")
            item.classList.add("fas","fa-star")
        }
        else{
            item.classList.remove("fas","fa-star")
            item.classList.add("far","fa-star")
        }
        

        
    }
})
// end evaluate_product in New_Arrivals


//////////////////////////////////////////////////////////////////////////////




/* strat show product */

$('.carousel').carousel({
    interval: 0
})
$('#show_Product_Carousel').on('slide.bs.carousel', function () {
    show_image = document.querySelectorAll('.carousel-indicators li img') ;
    show_image.forEach(image=>{
        image.addEventListener("click" , function(){
            document.querySelectorAll(".carousel-indicators li img").forEach(removeItem=>{
                removeItem.classList.remove('image_border')
            })
            image.classList="image_border";
            console.log(image)

        })
    })
})




var color_option = document.querySelectorAll(".show_Product_col .other_options li")
color_option.forEach(color=>{
    
        color_value = color.getAttribute('data-value');
        color.style.background = color_value;
    

})   

/* end show product */


