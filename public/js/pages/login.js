$(document).ready(function(){
    if (isLogin()){
        redirectTo('/');
    }
    
     $('.carousel').carousel(); 
     btnLogin(); 
     usernameOnEnter();
     passwordOnEnter();
});

function usernameOnEnter(){
    $('#username').keypress(function (e) {
        if (e.which == 13) {
            checkLogin();
        }
    });
}

function passwordOnEnter() {
    $('#password').keypress(function (e) {
        if (e.which == 13) {
            checkLogin();
        }
    });
}

function btnLogin(){
    $('#btn_login').on('click',function(){ 
        checkLogin();
    });
}

function checkLogin(){
     var username = $('#username').val();
     var password = $('#password').val();

     if (username == '' || username == null) {
         showError('Login', 'Username is required!', function () {

         });
         return;
     }

     if (password == '' || password == null) {
         showError('Login', 'Password is required!', function () {

         });
         return;
     }

     login(username, password);
}

function login(username , password){
    var data = {
        username : username,
        password : password
    };
    post(routes.login , data, function(response){
        if(response.success == false){
            if (response.status == 400) {
                showError('Login', response.message, function () { 
                });
                return;
            }
            if(response.status == 401){
                showError('Login',response.message,function(){ 
                });
                return;
            } 
            if (response.status == 422) {
                showError('Login', response.message, function () { 
                });
                return;
            } 
        }

        showSuccess('','Successful Login');
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('name', response.data.name);
        setTimeout(() => {
            redirectTo('/');
        }, 2000);
        
    });
}