

    // start login_page_gmail
    var btn_form_gmail = document.querySelector('.btn_form_gmail')
    btn_form_gmail.onclick = function(){
        var login_page_gmail = document.getElementById('login_page_gmail').style.display = 'block';

        // when click exist , will go to login page
        exit_login_page = document.querySelector('.exit_login_page');
        exit_login_page.onclick= function(){
            document.getElementById('login_page_gmail').style.display = 'none';
            }
    }   
    
    // end login_page_gmail




