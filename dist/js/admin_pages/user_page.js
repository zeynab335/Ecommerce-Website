
// strat user_info_pages

var user_info_pages = document.querySelectorAll('.user_info_accont div');
user_info_pages.forEach(page=>{
    page.onclick = function(){
        
        //page_url = page.getAttribute('class');
        //console.log(page_url);
        //window.location.hash(page_url)
        page_name = page.getAttribute('class') + '_page';
        All_pages_of_user = document.querySelectorAll(".user_pages > div")

        // hide all pages , only page click that appear
        All_pages_of_user.forEach(AllPages=>{
            AllPages.style.display = 'none'
        })
        user_info_pages.forEach(div_color=>{
            div_color.style.background = 'none'
        })

        page.style.backgroundColor = '#cde9d3'
        
        document.querySelector('.'+ page_name ).style.display = 'block';
    }
})


// end user_info_pages



// strat user_form

var user_form = document.querySelectorAll('.btn_user_form');
user_form.forEach(button=>{
    
    button.onclick = function(){
        
        document.querySelector('.form_address.edit').style.display = 'none';
        user_addr = document.querySelectorAll(".user_Addresses_content")
        user_addr.forEach(addr => {
            addr.style.display = 'none'
        });

        form_id=button.getAttribute('value');
        console.log(form_id)
        document.querySelector('.' + form_id).style.display = 'block';
        
    }
    
    

})


var user_form_close = document.querySelectorAll('.btn_user_form_close');
user_form_close.forEach(button=>{
    button.onclick = function(){
        form_id=button.getAttribute('value');
        button.parentNode.parentNode.style.display = 'none'
        if(button.parentNode.parentNode.parentNode.children[0].classList.contains("user_Addresses_header")){
            user_addr = document.querySelectorAll(".user_Addresses_content")
            user_addr.forEach(addr => {
                addr.style.display = 'block'
            });
        }
        if(button.parentNode.parentNode.parentNode.children[0].classList.contains("form_Add_product")){
            console.log('yes')
            document.querySelector(".show_admin_products_page").style.display = 'block'
        }
        
    }
})

// end user_form



// start show all products 
var btn_all_product = document.querySelector('.show_admin_products_page .btn_all_product')
btn_all_product.onclick = function(){
    document.querySelector(".show_admin_products_page").style.display = 'none';
    document.querySelector(".update_product").style.display = 'block';
}

// end all products 

////////////////////////////////////////////
// start update email
var btn_update_product = document.querySelector('.accont_setting_page .btn-update-email')
btn_update_product.onclick = function(){
    document.querySelector('.form_edit_account').style.display = 'block';
}



// end update email


/////////////////////////////////////////////////////////

// start form_addrs_edit
var form_addrs_edit = document.querySelectorAll('.edit_button .form_addrs_edit');
form_addrs_edit.forEach(btn=>{
    btn.onclick= function(){
        form_addrs = btn.parentNode.parentNode.children[3]
        console.log(form_addrs)
        form_addrs.style.display = 'block';
    }
})
// end form_addrs_edit


