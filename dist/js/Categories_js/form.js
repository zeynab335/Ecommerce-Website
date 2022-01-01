// strat form
var form_acion = document.querySelectorAll(".form_acion")
form_acion.forEach(input=>{
    input.onfocus = function(){
        input.style.border = 'none';
        input.style.boxShadow = 'none';
        input.style.borderBottom='2px solid #006c45';
        input_attr = input.getAttribute('placeholder');
        input.setAttribute('placeholder',' ')
        
    }
    input.onblur = function(){
        input.style.border = '1px solid #ced4da';
        input.setAttribute('placeholder',input_attr)

    }
})




var buy_options = document.querySelectorAll('.R_btn_option');

buy_options.forEach(option=>{
    option.onclick = function(){
        option2_btn = document.querySelector('.btn_form')

        if(option.value=='option1'){
            document.querySelector('.buy_by_option1').style.display = 'block';
            document.querySelector('.buy_by_option2').style.display = 'none';
            option2_btn.disabled = false;
        }
        else{
            document.querySelector('.buy_by_option2').style.display = 'block';
            document.querySelector('.buy_by_option1').style.display = 'none';
            
            option2_btn.disabled = false;

            option2_btn.onclick = function(){
                option2_btn.removeAttribute('type');
                document.querySelector('.form_nav #step_three').classList = 'active_step';
                document.querySelector('.form.form_st2').style.display = 'none';
                $("#form3").load("card.html .card_info",function(){
                    form3_header = document.querySelector('.card_info h2');
                    form3_header.innerHTML = "تفاصيل المنتج"

                    card_button = document.querySelector('.card_button a');
                    card_button.innerHTML = 'شراء المنتج'
                    card_button.setAttribute("href" , "../../html/Admin_Pages/user_page.html")

                })

            }

        }
    }
})




// end form
