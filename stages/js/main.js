// start header-button  (sales_policy)
document.querySelector('.header-background .btn-sales_policy').onclick = function(e){
    window.location.href = 'Sales_policy/step1.html';
}

// end header-button (sales_policy)



// start header_info of navbar

var header_info_li = document.querySelectorAll('.header-infor ul li');
header_info_li.forEach(li=>{
    li.addEventListener('mouseover', (e) =>{
        document.querySelectorAll('.link_hover').forEach(All_link=>{
            All_link.style.display = 'none'
        })
        li_hover = e.target.getAttribute('data-link');
        document.querySelector("."+li_hover).style.display = "block";
        
        })

        li.addEventListener('mouseleave', (e) =>{
            li_hover = e.target.getAttribute('data-link');
            document.querySelector("."+li_hover).style.display = "none";
            
        })

    
})


// end header_info of navbar




/* start  our  New_Arrivals*/

// start view info of images 
var selectImages = document.querySelectorAll(".New_Arrivals .row img");

selectImages.forEach(image=>{

    image.addEventListener('mouseover' , imageClick = () =>{
        info_of_image = image.parentNode.parentNode.children[1]
        info_of_image.style.display = 'block';
        //info_of_image.children[0].style.display = 'block';
    })

    image.parentNode.parentNode.addEventListener('mouseleave' , imageUnClick = () =>{
        info_of_image = image.parentNode.parentNode.children[1]
        info_of_image.style.display = 'none';
        //info_of_image.children[0].style.display = 'none';
    })    
        //start adding discont to images
        if(image.classList.contains('dis-30')){
            image_parent = image.parentNode.children[1];
            image_parent.innerHTML = "30%";

            // price after 30% discount
            price_before_dis = image.parentNode.children[2].children[1].innerHTML
            price_after_dis =  price_before_dis - (price_before_dis * 0.3) 
            image.parentNode.children[2].children[2].innerHTML = "السعر بعد الخصم: " + Math.ceil(price_after_dis)
        }

        else if(image.classList.contains('dis-40')){
            image_parent = image.parentNode.children[1];
            image_parent.innerHTML = "40%";

            // price after 40% discount
            price_before_dis = image.parentNode.children[2].children[1].innerHTML
            price_after_dis =  price_before_dis - (price_before_dis * 0.4) 
            image.parentNode.children[2].children[2].innerHTML = "السعر بعد الخصم: " + Math.ceil(price_after_dis)
        }
        else if(image.classList.contains('dis-50')){
            image_parent = image.parentNode.children[1];
            image_parent.innerHTML = "50%";

            // price after 50% discount
            price_before_dis = image.parentNode.children[2].children[1].innerHTML
            price_after_dis =  price_before_dis - (price_before_dis * 0.5) 
            image.parentNode.children[2].children[2].innerHTML = "السعر بعد الخصم: " + Math.ceil(price_after_dis)
        }

    // end adding discont to images
    
})
    

// end view info of images 
////////////////////////////////////////////////////////////////////////////




var select_Info_Of_Images = document.querySelectorAll(".New_Arrivals .row > div .display_info");
select_Info_Of_Images.forEach(info=>{
    info.addEventListener('click' ,  (infoClick) =>{


        // start definition
            Popup_overlay           = document.createElement('div');
            Popup_box               = document.createElement('div');
            
            Popup_image             = document.createElement('img');
            Popup_image_info        = document.createElement('div');
            Popup_img_heading       = document.createElement('h4');
            Popup_clear             = document.createElement('div');
            Popup_img_price         = document.createElement('p');


            // start Popup_image_select size
                Popup_product_detail        = document.createElement('p');
                Popup_product_detail_text   = document.createTextNode('تفاصيل المنتج: ');
                
                Popup_product_detail_span    =  document.createElement('span');
                Popup_product_detail_value   =  document.createTextNode(info.parentNode.children[0].children[2].children[3].value);


                Popup_product_description       = document.createElement('p');
                Popup_product_description_text  = document.createTextNode(' الوصف: '); 

                Popup_product_description_span    =  document.createElement('span');
                Popup_product_description_value   =  document.createTextNode(info.parentNode.children[0].children[2].children[4].value);





            
            // end Popup_image_select size


            // start Quantity of product:
            Popup_image_product_quanity = document.createElement('p');
            Popup_image_product_quanity_text = document.createTextNode(' الكمية : ');
            Popup_image_prod_qun_input  = document.createElement('input');

            // end Quantity of product:



            // select alt of image of this info and add it to Popup_image_title
            // start select source of image of this info
                ImageOfInfo         = info.parentNode.children[0].children[0];
                Popup_image.src     = ImageOfInfo.src;
                Product_heading     = document.createTextNode(" اسم المنتج : "+ ImageOfInfo.title + '\n');
                
                Popup_img_price         = info.parentNode.children[0].children[2].children[2];
            // end  select source of image of this info

            //  start Popup_Cart_button
                Popup_Cart_button      = document.createElement('button');
                Popup_Cart_button_text = document.createTextNode('اضافة المنتج الي المحفظة');
            //  start Popup_Cart_button    

            // start exit icon
                Popup_exist = document.createElement('div');
                Popup_icon_exist = document.createTextNode('X');
            // start exit icon    

        
        // end definition

        //////////////////////////////////////////////////

        // start adding attributes

            // add class to Popup_overlay:
            Popup_overlay.classList = 'Popup_overlay';

            // add class to Popup_box:
            Popup_box.classList = 'Popup_box row animation left';
        
            // add class img_info to img_info
            Popup_image_info.classList = "img_info col-lg-6 col-md-12 animation right";
            
            // add class clearfix to popup-clear
            Popup_clear.classList = "clearfix";

            // add class img-price to Popup_img_price
            Popup_img_price.classList = "img-price";


            // start append Popup_Cart_button 
            Popup_Cart_button.classList = "cart_button";

            // add class "exist" to Popup_exist ;
            Popup_exist.classList = "exist animation right";
        
        // end adding attributes
        //////////////////////////////////////////////////////////////////////
        

        // start appending childern

            // append child Popup_overlay to body
            document.body.appendChild(Popup_overlay);

            //append child Popup_box-div to Popup_overlay
            Popup_overlay.appendChild(Popup_box);

             // append  img_info to Popup_box
            Popup_box.appendChild(Popup_image_info);
            

            //append child Popup_image  to Popup_box
            Popup_box.appendChild(Popup_image);

            // append headding to Popup_img_heading
            Popup_img_heading.appendChild(Product_heading);
            
            // append img_info to Popup_img_heading
            Popup_image_info.appendChild(Popup_img_heading);


            // append Popup_img_price to Popup_image_info
            Popup_image_info.appendChild(Popup_img_price);
        

            // start append Popup_product_detail to Popup_image_info
                Popup_product_detail.appendChild(Popup_product_detail_text);
                Popup_image_info.appendChild(Popup_product_detail);

                Popup_product_detail_span.appendChild(Popup_product_detail_value);
                Popup_image_info.appendChild(Popup_product_detail_span);

            // end append all options in select

            
               // start append Popup_product_description to Popup_image_info
                Popup_product_description.appendChild(Popup_product_description_text);
                Popup_image_info.appendChild(Popup_product_description);

                
                Popup_product_description_span.appendChild(Popup_product_description_value);
                Popup_image_info.appendChild(Popup_product_description_span);

                // end append  Popup_product_description to Popup_image_info         
                        

            // append Popup_clear to popup-box
            Popup_image_info.appendChild(Popup_clear);
            
            // start append Popup_Cart_button 
                Popup_Cart_button.onclick = function(){
                    window.location.href = "../html/All_Categories/card.html"
                }
                Popup_Cart_button.appendChild(Popup_Cart_button_text);
                Popup_image_info.appendChild(Popup_Cart_button);
            // start append Popup_Cart_button 

        
            // append popup exist to popup box
                //append child Popup_icon_exist  to Popup_exist
                Popup_exist.appendChild(Popup_icon_exist);

                // when click on Popup_exist, will hide puple
                Popup_exist.addEventListener('click' , function(){
                    Popup_overlay.style.display = "none";
                })
                //append child Popup_exist  to Popup_box
                Popup_box.appendChild(Popup_exist);

        

        // end appendeing childern

        // Popup_icon_exist 

        
        

        
        
    })

})    

/* end  our  New_Arrivals*/




/* start loading */

window.onload = setInterval(function(){
    
    document.getElementById('loading').style.display = 'none';

    // Annimation_function will exeute after window loading
    function Annimation_function (url , height){
        $(window).scroll(function(){
                if($(this).scrollTop() >= height){
                    $(url).show();
                    console.log("kkkk")
                }
                else{
                    $(url).hide();
                }
        })
    }
    // in advertisments page
    Annimation_function(".Adevertis .container .row > div",300)
    
},1000) 

/* end loading */


// animations in all page

// carousel of Advertisment
$('.carousel').carousel()


// carousel of Advertisment
$('.id-ele-carousel').carousel()


// carousel of Advertisment
$('.id-clothes-carousel').carousel()

