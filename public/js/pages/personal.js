$(document).ready(function(){
    if(!isLogin()){
        redirectTo('/login');
    } 
 	
    loadInformation();
});

function loadInformation(){
	$('.content').preloader();
	postWithHeader(routes.user.personalInfo, {}, function(response){
		$('.content').preloader('remove');
	});

	
}