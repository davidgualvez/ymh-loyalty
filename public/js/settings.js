$(document).ready(function () { 
    $('#logout').on('click', function () {
        logout();
    });

});

//global variable for all page
var api = $('#api_url').val();
var lbcTrackingRoute = 'https://www.lbcexpress.com/track/?tracking_no='; //append the tracking number
var routes = {
    login:                  '/api/user/login',
    forgot_password:        '/api/user/forgot_password',
    transactions:           '/api/user/earned_points_history',
    userInfo:               '/api/user/user_info',
    user : {
        account :           '/api/user/account', //param ( token )
        changePassword :    '/api/user/account/change_password',
        motors :            '/api/user/motors',
        newMotor :          '/api/user/additionalMotor',
        personalInfo :      '/api/user/personalInfo',
        checkEmail:         '/api/check/user/email'
    },
    motor: {
        find : {
            // engineAndChassis:'/api/motor/check_by_engine_and_chassis'
        }
    },
    sites : {
        findByProvinceId:   '/api/site/by/province/'     // {id}
    },
    rewards:                '/api/reward/index', 
    reward:                 '/api/reward/show', // {id} append the id of reward
    rewards_manufacturer:   '/api/reward/manufacturer', 
    redemption:             '/api/user/redemption', 
    userRedemptionHistory:  '/api/user/redemption/history' 
};

//
// Requests GET | POST 
//
function post(url, request, callback) { 
    $.ajax({
        url: api+url,
        type: "POST",
        dataType: "json",
        data: request,
        // header : getHeader(),
        success: function (data) {
            callback(data);
        },
        error: function (data) {
            console.log(data);
            showError('Server error', 'Please ask the system administrator about this!', function(){
            
            });
        }
    });
}

function postWithHeader(url, request, callback) {
    var token = localStorage.getItem('token'); 
    $.ajax({
        url: api + url,
        type: "POST",
        dataType: "json",
        data: request,
        headers: {
            token: token
        },
        success: function (data) {
            callback(data);
        },
        error: function (data) {
            showError('Server error', 'Please ask the system administrator about this!', function(){

            });
        }
    }); 
}

function get(url, request, callback) {
     $.ajax({
         url: api + url,
         type: "GET",
         dataType: "json",
         data: request,
         // header : getHeader(),
         success: function (data) {
             callback(data);
         },
         error: function (data) {
             showError('Server error', 'Please ask the system administrator about this!', function(){

             });
         }
     }); 
}

//
// Authentication Handler
//
function isLogin() {
    var token = localStorage.getItem('token');
    if (token == '' || token == null) {
        return false; //says that the use is not loggedin
    }
    return true; // says that the user is current loggedin
}

function logout() {
    localStorage.clear();
    window.location.href = "/login";
}

function clearStorage() {
    localStorage.clear();
}

function redirectTo(link) {
    window.location.href = link;
}

function showInfo(title, message, callback){
    iziToast.info({
        title: title,
        message: message,
        position: 'topRight',
        // backgroundColor: 'rgba(129,212,250, 1)',
        onClosed: function () {
            callback();
        }
    });
}

function showSuccess(title,message, callback){
    iziToast.success({
        title:      title,
        message:    message,
        position: 'topRight',
        onClosed:   function () {
            callback();
        }
    }); 
}

function showWarning(title, message, callback) {
    iziToast.warning({
        title: title,
        message: message,
        position: 'topRight',
        onClosed: function () {
            callback();
        }
    });
}

function showError(title, message, callback) {
    iziToast.error({
        title: title,
        message: message,
        position: 'topRight',
        onClosed: function () {
            callback();
        }
    });
}

function getParams(id){
    var urlParams = new URLSearchParams(window.location.search);
    var x = urlParams.get(id); //getting the value from url parameter
    return x; 
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateContactNumber(value){ 
  var regEx = /^([ 0-9\(\)\+\-]{8,})*$/; // accept any phone or mobile number
  //var regEx = /^(09|\+639)\d{9}$/;  // accept only PH Mobile number
  if (!value.match(regEx)){
    return false;
  } 
  return true;
}