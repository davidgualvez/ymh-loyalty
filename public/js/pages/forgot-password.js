$(document).ready(function(){
    if(isLogin()){
        redirectTo('/');
    }

    btnSubmit();
}); 

function btnSubmit(){
    $('#btn_submit').on('click',function(){ 
        //do the validation here
        var card_number = $('#card_number').val();
        if(card_number == '' || card_number == null){
            showWarning('','Cardnumber is required!',function(){ 
            });
            return;
        }

        var engine_number = $('#engine_number').val();
        if(engine_number == '' || engine_number == null){
             showWarning('', 'Engine number is required!', function () { 
             });
             return;
        }

        var chassis_number = $('#chassis_number').val();
        if(chassis_number == '' || chassis_number == null){
            showWarning('','Chassis number is required!',function(){ 
            });
            return;
        } 

        // var email_address = $('#email_address').val();
        // if(email_address == '' || email_address == null){
        //     showWarning('', 'Email address is required!', function () { 
        //     });
        //     return;
        // }

        // if (!validateEmail(email_address)){
        //     showWarning('', 'Invalid Email address!', function () { 
        //     });
        //     return;
        // }
        
        var new_password = $('#new_password').val();
        if(new_password == '' || new_password == null){
            showWarning('', 'New password is required!', function () {});
            return;
        }
        if (new_password.length < 8) {
            showWarning('', 'New password must be greater than or equal to 8 characters!', function () {});
            return;
        }
        
        forgotPassword(
            card_number,
            engine_number,
            chassis_number,
            // email_address,
            new_password);
    });
}

function forgotPassword(
    card_number,
    engine_number,
    chassis_number,
    // email_address,
    new_password
){
    var data = {
        card_number     : card_number, 
        engine_number   : engine_number, 
        chassis_number  : chassis_number, 
        // email_address   : email_address, 
        new_password    : new_password
    }; 

    post(routes.forgot_password, data, function(response){
        console.log(response);
        if(response.success == false){
            showError('',response.message,function(){
                
            });
            return; 
        }

        showSuccess('', response.message, function () {
            redirectTo('/login')
        });
    });
}
