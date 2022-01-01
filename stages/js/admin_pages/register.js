
    // strat regiser page 
    password_register = document.getElementById('password_register');

    confirm_password_register = document.getElementById('confirm_password_register');
    

    password_register.onkeyup = function(){
        
        password_register_value = password_register.value
        document.querySelector('.password_paraghar').style.display = 'none';

        if(password_register_value.length < 6){
            document.querySelector('.password_paraghar').style.display = 'block';
        }else{
            document.querySelector('.password_paraghar').style.display = 'none';
        }
    }

    password_register.onblur = function(){
        if(password_register_value.length < 6){
            document.querySelector('.password_paraghar').style.display = 'block';
        }else{
            document.querySelector('.password_paraghar').style.display = 'none';
        }
        password_register.style.border = '1px solid #ced4da';

    }
    
    

    
    // end register page
