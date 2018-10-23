$(document).ready(function () {

    // checkEngine();
    // checkChassis();

    // 	$('#btnCheck').on("click",function(){

    // 		var engineNum = $('#txtEngineNo').val();
    // 		var chassisNum = $('#txtChassisNo').val();
    // 		var motorIDChecker = readCookie('motorID');
    // 		// if(engineNum.length <=0 && chassisNum.length > 0 || engineNum.length <=0 && chassisNum.length <= 0){
    // 		if(engineNum.length == 0 || chassisNum.length == 0 ){
    // 			$.growl.error({
    // 						  location: "tc",
    // 			              title: "Invalid Engine or Chassis number",
    // 			              message: "Please input details"
    // 			            });
    // 			createCookie('motorID', '0', 1);
    // 			 $('#txtEngineNo').css('border-color', 'red');
    // 			 $('#txtChassisNo').css('border-color', 'red');
    // 			return;

    // 		}

    // 		if(motorIDChecker === 0){
    // 			$.growl.error({
    // 						  location: "tc",
    // 			              title: "Invalid Engine or Chassis number",
    // 			              message: " "
    // 			            });
    // 			createCookie('motorID', '0', 1);
    // 			 $('#txtEngineNo').css('border-color', 'red');
    // 			 $('#txtChassisNo').css('border-color', 'red');
    // 			return;

    // 		}

    // 	ajax(api+"registration/isMotorValidDetails",{engineNum:engineNum,chassisNum:chassisNum},function(data){

    // // console.log(data);
    // 					if(data.statusCode == 0){
    // 						var motorID = data.data[0].LoyaltyMotorID;
    // 						var motorBrand = data.data[0].LoyaltyMotorBrandModelName;
    // 						createCookie('motorID', motorID, 1);

    //                           $("#txtMotorID").val(motorID);
    // 						  $("#regmotortxt").val(motorBrand);
    // 						  $("#enginenumtxt_0").val(engineNum);
    // 						  $("#chassisnumtxt_0").val(chassisNum);

    // 						  $('#txtEngineNo').css('border-color', 'green');
    // 			 			  $('#txtChassisNo').css('border-color', 'green');

    // 			 			   $('#txtEngineNo').attr("disabled", "disabled"); 
    // 			 			   $('#txtChassisNo').attr("disabled", "disabled"); 


    // 			 			   $(".motorLabel").text(data.data[0].LoyaltyMotorBrandModelName);

    // 			 			   $.growl.notice({
    // 								  location: "tc",
    // 					              title: "Success",
    // 					              message: "Motor is valid."
    // 			            });

    // 			 			    $('#btnCheck').css('display', 'none');
    // 			 			    // $('#btnNextScreen0').css('display', 'block');
    // 			 			    $('.buttonNext').append(
    // 			 			    	'<button class="btn btn-primary pull-right " id="btnNextScreen0" type="button">Next Step</button>'
    // 			 			    	);



    // 						// $("#motorcycleImg").attr("src",genURL+data.data[0].LoyaltyMotorBrandModelURL);
    // 					}else{
    // 						// $("#motorcycleImg").attr("src","");
    // 						$.growl.error({
    // 						  location: "tc",	
    // 			              title: "Invalid Engine or Chassis Number",
    // 			              message: data.statusDescription
    // 			               });
    // 			            createCookie('motorID', '0', 1);
    // 			              $('#txtEngineNo').css('border-color', 'red');
    // 			 			  $('#txtChassisNo').css('border-color', 'red');


    // 					}

    // 				});



    // 		// if(motorIDChecker > 0 && engineNum.length > 0 && chassisNum.length > 0) {





    // 		// }

    // 	});




    /*	$(document).on('click', '#btnNextScreen0', function(e)
    	    {

    	    		

    			$(".container1").css("display","none");
    			$(".container2").css("display","inline");
    			$(".screen1").css("display","inline");
    		});*/




    // $('#btnNextScreen1').on("click",function(){
    // 	console.log('screen1');
    // 	var prevMotorSel = $('input[name=prevMotor]:checked').val();

    // 	var emailChecker = readCookie('emailCheck');
    //    	var passChecker = readCookie('passCheck');
    //    	var usernameChecker = readCookie('usernameCheck');

    //    	var username = $('#userNameTxt').val();
    //    	var password = $('#passwordTxt1').val();
    //    	var firstName = $('#firstNameTxt').val();
    // 	var middleName = $('#middleNameTxt').val();
    // 	var lastName = $('#lastNameTxt').val();
    // 	var gender =$('#gender').val();

    // 	var bday = $('#bdayTxt').val();

    // 	var email = $('#emailTxt').val();
    // 	var contactNum = $('#mobileNumTxt').val();
    // 	var street = $('#streetTxt').val();
    // 	var barangay = $('#barangayTxt').val();
    // 	var cityID = $('#cityComboBox').val();
    // 	var siteID = $('#shop3sComboBox').val();
    // 	var maritalStatus = $('#maritalStatusComboBox').val();


    // 	// if (gender == "0") {
    // 	// 	console.log("bad");
    // 	// 	$.growl.error({
    //  //          location: "tc",
    //  //          title: "Registration Failed",
    //  //          message: 'Please fill up your corresponding gender',
    //  //        });
    // 	// 	return;
    // 	// }

    // 	// if(firstName.length <= 0){
    // 	// 	$.growl.error({
    // 	// 		              location: "tc",
    //  //                             title: "Please input details",
    //  //                             message: 'Please fill up first name field',
    //  //                           });
    // 	// 	return;
    // 	// }

    // 	// if(middleName.length <= 0){
    // 	// 	$.growl.error({

    // 	// 		              location: "tc",
    //  //                             title: "Please input details",
    //  //                             message: 'Please fill up middle name field',
    //  //                           });
    // 	// 	return;
    // 	// }

    // 	// if(lastName.length <= 0){
    // 	// 	$.growl.error({
    // 	// 		              location: "tc",
    //  //                             title: "Please input details",
    //  //                             message: 'Please fill up last name field',
    //  //                           });
    // 	// 	return;
    // 	// }

    // 	// if(username.length <= 0){
    // 	// 	$.growl.error({
    // 	// 		              location: "tc",
    //  //                             title: "Please input details",
    //  //                             message: 'Please fill up username field',
    //  //                           });
    // 	// 	return;
    // 	// }



    // 	// if(usernameChecker==='false'){
    // 	// 	$.growl.error({
    // 	// 		              location: "tc",
    //  //                             title: "Please input details",
    //  //                             message: 'Please input valid username',
    //  //                           });
    // 	// 	return;
    // 	// }

    // 	// if(email.length <= 0){
    // 	// 	$.growl.error({   
    // 	// 		              location: "tc",
    //  //                             title: "Please input details",
    //  //                             message: 'Please fill up email field',
    //  //                           });
    // 	// 	return;
    // 	// }

    // 	// if(emailChecker==='false'){
    // 	// 	$.growl.error({
    // 	// 		              location: "tc",
    //  //                             title: "Please input details",
    //  //                             message: 'Please input valid email',
    //  //                           });
    // 	// 	return;
    // 	// }

    // 	// if(password.length <= 0){
    // 	// 	$.growl.error({
    // 	// 		              location: "tc",
    //  //                             title: "Please input details",
    //  //                             message: 'Please fill up password field',
    //  //                           });
    // 	// 	return;
    // 	// }

    // 	// if(passChecker==='false'){
    // 	// 	$.growl.error({
    // 	// 		              location: "tc",
    //  //                             title: "Please input details",
    //  //                             message: 'Please input valid password',
    //  //                           });
    // 	// 	return;
    // 	// }

    // 	// if(bday.length <= 0  ){
    // 	// 	$.growl.error({
    // 	// 		              location: "tc",
    //  //                             title: "Please input details",
    //  //                             message: 'Please fill up birthday field',
    //  //                           });
    // 	// 	return;
    // 	// }

    // 	//age validation
    // 	// var currentTime = new Date();
    // 	// var year = currentTime.getFullYear();

    // 	// var newbday = new Date(bday);
    // 	// var age = year - newbday.getFullYear();


    // 	// if( age < 16 ){
    // 	// 	$.growl.error({
    // 	// 		              location: "tc",
    //  //                             title: "Please input details",
    //  //                             message: 'You must be 16y/o in above',
    //  //                           });
    // 	// 	return;
    // 	// }

    // 	// if( age > 100 ){
    // 	// 	$.growl.error({
    // 	// 		              location: "tc",
    //  //                             title: "Please input details",
    //  //                             message: 'You reached the age limit of 100 and above',
    //  //                           });
    // 	// 	return;
    // 	// }

    // 	// if(contactNum.length <= 0){
    // 	// 	$.growl.error({
    // 	// 		              location: "tc",
    //  //                             title: "Please input details",
    //  //                             message: 'Please fill up contact number field',
    //  //                           });
    // 	// 	return;
    // 	// }

    // 	// if(street.length <= 0){
    // 	// 	$.growl.error({ 
    // 	// 		              location: "tc",
    //  //                             title: "Please input details",
    //  //                             message: 'Please fill up street field',
    //  //                           });
    // 	// 	return;
    // 	// }

    // 	// if(barangay.length <= 0){
    // 	// 	$.growl.error({
    // 	// 		              location: "tc",
    //  //                             title: "Please input details",
    //  //                             message: 'Please fill up barangay field',
    //  //                           });
    // 	// 	return;
    // 	// }

    // 	if (firstName.length > 0 && middleName.length > 0 && lastName.length > 0 &&  username.length > 0 && password.length > 0 && email.length > 0 && contactNum.length > 0 && bday.length > 0 && street.length > 0 && barangay.length &&  usernameChecker === 'true' && passChecker === 'true' && emailChecker=== 'true'){


    // 		$(".container2").css("display","none");
    // 		$(".container3").css("display","inline");





    // 	}



    // });






    $('#btnNextScreen2').on("click", function () {
        var numItems = $('.brandMotorID').length;
        if (numItems == 1) {
            checkMotorID();
            return;
        }
        var $nonempty = $('.MyClass').filter(function () {
            return this.value != ''
        });

        if ($nonempty.length == 0) {
            $.growl.error({
                location: "tc",
                title: "Invalid",
                message: 'Input Engine or Chassis Number',
            });
        } else {
            $("#overlay").show();
            $(".loader").show();
            setTimeout(function () {
                $("#overlay").hide();
                $(".loader").hide();
                checkMotorID();
            }, 7000);
        }
    });


    $('#btnBackScreen2').on("click", function () {
        console.log("baliw");
        // $(".container5").css("display","none");
        // $(".container1").css("display","none");
        // $(".container2").css("display","inline");
        $(".container3").css("display", "none");
        // $(".container4").css("display","none");

        $("#container02").css("display", "block");

    });



    $('#btnBackScreen3').on("click", function () {


        $(".container5").css("display", "none");
        $(".container1").css("display", "none");
        $(".container2").css("display", "none");
        $(".container3").css("display", "inline");
        $(".container4").css("display", "none");





    });

    // $('#btnNextScreen3').on("click",function(){
    // 	// prev motor

    // 	// if () {}

    // 	$(".container5").css("display","inline");
    // 	$(".container1").css("display","none");
    // 	$(".container2").css("display","none");
    // 	$(".container3").css("display","none");
    // 	$(".container4").css("display","none");

    // 	console.log($('input[name=compareMotor]:checked').val());
    // 	console.log($('#cModelCBox').val());






    // });

    $('#btnBackScreen4').on("click", function () {
        $(".container5").css("display", "none");
        $(".container1").css("display", "none");
        $(".container2").css("display", "none");
        $(".container3").css("display", "none");
        $(".container4").css("display", "block");






    });



});

function checkForm4() {
    console.log()

}


function checkMotor() {


}

function checkMotorID() {


    Pace.track(function () {

        var errorCounter = 0;

        $(".brandMotorID").each(function () {

            if ($(this).val().length <= 0) {


                errorCounter++;

                return;

            }


        });


        if (errorCounter > 0) {
            $.growl.error({
                location: "tc",
                title: "Invalid/Duplicate Engine or Chassis Number Found",
                message: "Please contact Yamaha Club:\nMonday to Friday from 8:30AM to 6:00PM 09175842904 "
            })

            return;
        }




        if (!$('input[name="current"]').is(':checked')) {

            $.growl.error({
                location: "tc",
                title: "Invalid",
                message: 'Please select your Current Yamaha Motorcycle Type.',
            });
            return;
        }
        if (!$('input[name="motorStatus"]').is(':checked')) {

            $.growl.error({
                location: "tc",
                title: "Invalid",
                message: 'Please select your Current Yamaha Motorcycle Status.',
            });
            return;

        }

        $(".container3").css("display", "none");
        $(".container4").css("display", "block");


    });

}


function checkEngine() {
    $('.formAdd').on('blur', '.engineNo', function (e) {

        var id = $(this).parent();
        var fieldID = this.id;
        var engineID = $('#' + fieldID).val();
        var chassisID = $(e.target).parent().parent().parent().find(".chassisNo").val();
        var mainMotorID = $("#txtMotorID").val();
        console.log(mainMotorID);

        if (engineID.length == 0 || chassisID.length == 0) {

            $(e.target).parent().parent().parent().find(".brandMotorID").val("");

            return;
        }

        ajax(api + "registration/isMotorValidDetails", {
            engineNum: engineID,
            chassisNum: chassisID
        }, function (data) {
            // ajax(api+"registration/isMotorValidDetails/"+engineID+"/"+chassisID,function(data){	

            if (data.statusCode == 0) {
                var motorID = data.data[0].LoyaltyMotorID;


                if (mainMotorID == motorID) {



                    $(e.target).parent().parent().parent().find(".brandMotorID").val("");
                    $(e.target).parent().parent().parent().find(".engineNo").css('border-color', 'red');
                    $(e.target).parent().parent().parent().find(".chassisNo").css('border-color', 'red');
                    return;
                }

                $(e.target).parent().parent().parent().find(".brandMotorID").val(motorID);
                $(e.target).parent().parent().parent().find(".engineNo").css('border-color', '');
                $(e.target).parent().parent().parent().find(".chassisNo").css('border-color', '');


                var counter = 0;

                $(".brandMotorID").each(function (index) {

                    if ($(this).val().length <= 0) {
                        return;
                    }

                    if (Number($(this).val()) == motorID) {
                        counter += 1;
                    }

                });

                if (counter > 1) {

                    $(e.target).parent().parent().parent().find(".brandMotorID").val("");
                    $(e.target).parent().parent().parent().find(".engineNo").css('border-color', 'red');
                    $(e.target).parent().parent().parent().find(".chassisNo").css('border-color', 'red');







                    return;
                }

            } else {



                $(e.target).parent().parent().parent().find(".brandMotorID").val("");
                $(e.target).parent().parent().parent().find(".engineNo").css('border-color', 'red');
                $(e.target).parent().parent().parent().find(".chassisNo").css('border-color', 'red');

                return;

            }


        });




    });
}




function checkChassis() {

    $('.formAdd').on('blur', '.chassisNo', function (e) {

        var id = $(this).parent();
        var fieldID = this.id;
        var chassisID = $('#' + fieldID).val();
        var engineID = $(e.target).parent().parent().parent().find(".engineNo").val();
        var mainMotorID = $("#txtMotorID").val();

        if (engineID.length == 0 || chassisID.length == 0) {

            $(e.target).parent().parent().parent().find(".brandMotorID").val("");

            return;
        }

        ajax(api + "registration/isMotorValidDetails", {
            engineNum: engineID,
            chassisNum: chassisID
        }, function (data) {
            // ajax(api+"registration/isMotorValidDetails/"+engineID+"/"+chassisID,function(data){	

            if (data.statusCode == 0) {
                var motorID = data.data[0].LoyaltyMotorID;


                if (mainMotorID == motorID) {

                    // $.growl.error({
                    //   location: "tc",
                    //            title: "Duplicate Entry",
                    //            message: " "
                    //          });

                    $(e.target).parent().parent().parent().find(".brandMotorID").val("");
                    $(e.target).parent().parent().parent().find(".engineNo").css('border-color', 'red');
                    $(e.target).parent().parent().parent().find(".chassisNo").css('border-color', 'red');
                    return;
                }

                $(e.target).parent().parent().parent().find(".brandMotorID").val(motorID);
                $(e.target).parent().parent().parent().find(".engineNo").css('border-color', '');
                $(e.target).parent().parent().parent().find(".chassisNo").css('border-color', '');


                var counter = 0;

                $(".brandMotorID").each(function (index) {

                    if ($(this).val().length <= 0) {
                        return;
                    }

                    if (Number($(this).val()) == motorID) {
                        counter += 1;
                    }

                });

                if (counter > 1) {

                    $(e.target).parent().parent().parent().find(".brandMotorID").val("");
                    $(e.target).parent().parent().parent().find(".engineNo").css('border-color', 'red');
                    $(e.target).parent().parent().parent().find(".chassisNo").css('border-color', 'red');

                    // 	$.growl.error({
                    // location: "tc",
                    //          title: "Duplicate Entry",
                    //          message: " "
                    //        });





                    return;
                }

            } else {


                // $.growl.error({
                // 		     location: "tc",
                //              title: "Invalid Entry",
                //              message: " "
                //     });

                $(e.target).parent().parent().parent().find(".brandMotorID").val("");
                $(e.target).parent().parent().parent().find(".engineNo").css('border-color', 'red');
                $(e.target).parent().parent().parent().find(".chassisNo").css('border-color', 'red');

                return;

            }


        });


    });

}
