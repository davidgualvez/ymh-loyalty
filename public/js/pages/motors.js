$(document).ready(function(){
    if(!isLogin()){
        redirectTo('/login');
    } 

    getMotors();
    btnAdd();
});

function getMotors(){
	var token = localStorage.getItem('token');
    var data = {
        token : token
    }

	$('#content').preloader();
	get(routes.user.motors,data,function(response){
		console.log(response);
		if(response.success == false){
            showError('',response.message,function(){});
            $('#content').preloader('remove');
            return;
        } 
        displayMotors(response.data);
		$('#content').preloader('remove');
	});
}

function displayMotors(data){
	$('#motor-engine-listing').empty();
	$('#motor-chassis-listing').empty();

	$.each(data,function(key,value){
		if(key == 0){
			$('#motor-engine-listing').append(
				'<label>Main Engine Number</label>'
			);

			$('#motor-chassis-listing').append(
				'<label>Main Chassis Number</label>'
			);
		}

		$('#motor-engine-listing').append(
			'<input value="'+value.EngineNumber +'" type="text" class="form-control form-control-sm" disabled>'
		);

		$('#motor-chassis-listing').append(
			'<input value="'+value.ChassisNumber+'" type="text" class="form-control form-control-sm" disabled>'
		);
	});
}

function btnAdd(){
	$('#btn_add').on('click',function(){
		var engine = $('#engine');
		var chassis= $('#chassis');

		if(engine.val() == '' || engine.val() == null){
			showWarning('Warning', 'Engine number is required!',function(){});
			return;
		}

		if(chassis.val() == '' || chassis.val() == null){
			showWarning('Warning', 'Chassis number is required!',function(){});
			return;
		} 
		//save 
		newMotor(engine,chassis);
	});
}

function newMotor(e,c){  // e=engine, c=chassis
	var token = localStorage.getItem('token'); 

	var data = {
		token 	: token,
		engine 	: e.val().trim(),
		chassis : c.val().trim()
	}

	$('#new-motor-content').preloader();
	get(routes.user.newMotor,data, function(response){
		console.log(response);
		if(response.success == false){
            showError('',response.message,function(){});
            $('#new-motor-content').preloader('remove');
            return;
        } 

        showSuccess('','New Motor has been added',function(){});
        $('#new-motor-content').preloader('remove');
        $('#modal-new-motor').modal('toggle'); 
        getMotors();
	});

}