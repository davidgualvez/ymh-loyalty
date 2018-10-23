$(document).ready(function(){
    if(!isLogin()){
        redirectTo('/login');
    } 
 	
    loadInformation();
});

function loadInformation(){
	$('.content').preloader();
	postWithHeader(routes.user.personalInfo, {}, function(response){
        if(response.success == false){
            showError('',response.message,function(){});
            $('.content').preloader('remove');
            return;
        }

        $('#first_name').val(response.data.first_name);
        $('#middle_name').val(response.data.middle_name);
        $('#last_name').val(response.data.last_name);
        $('#bdate').val(response.data.birth_date);
        $('#email_address').val(response.data.email_address);
        $('#mobile_number').val(response.data.mobile_number);
        $('#contact_number').val(response.data.contact_number);
        $('#street').val(response.data.street);
        $('#barangay').val(response.data.barangay);
        $('#region').val(response.data.region.name);
        $('#province').val(response.data.province.name);
        $('#city').val(response.data.city.name);
        $('#site').val(response.data.shop.name);
        
		$('.content').preloader('remove'); 
	});
}