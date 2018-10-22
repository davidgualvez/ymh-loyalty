$(document).ready(function(){
    if(!isLogin()){
        redirectTo('/login');
    }  

    getAccount();
    btnSave();
});

function getAccount(){
    var token = localStorage.getItem('token');
    var data = {
        token : token
    }

    $('.content').preloader();
    get(routes.user.account,data, function(response){ 
        if(response.success == false){
            showError('',response.message,function(){});
            $('.content').preloader('remove');
            return;
        } 
        $('#username').val(response.data.Username);
        $('.content').preloader('remove');
    }); 
}

function btnSave(){
    $('#btn_save').on('click',function(){
        var password = $('#password');
        if(password.val() == '' || password.val() == null){
            showWarning('Warning', 'Password is required',function(){});
            return;
        }

        if(password.val().length < 6){
            showWarning('Warning', 'Password must be greater than 6 character',function(){});
            return;
        }

        var repassword = $('#re-password');
        if(repassword.val() == '' || repassword.val() == null){
            showWarning('Warning', 'Repassword is required', function(){});
            return;
        }

        if(password.val() != repassword.val()){
            showWarning('Warning', 'Password doesnt match.', function(){});
            return;
        }

        //save here 
        savePassword(password, repassword);
    });
}

function savePassword(p,rp){
    var data = {
        newpassword     : p.val().trim(),
        repassword      : rp.val().trim()
    };

    $('#content').preloader();
    postWithHeader(routes.user.changePassword, data, function(response){
        console.log(response);
        if(response.success == false){
            showError('',response.message,function(){});
            $('#content').preloader('remove');
            return;
        } 

        p.val('');
        rp.val('');
        showSuccess('','You change your password successfuly!', function(){});
        $('#content').preloader('remove');
    });
}