$(document).ready(function () {

    $('.select2').width("100%");


    /* --  form validation for Screen1 -- */

    var chasis = ''; // checker 
    var engine = ''; // checker
    // okie na 
    $('#btnCheck').on("click", function () {
        var engineNum = $('#txtEngineNo').val().trim();
        var chassisNum = $('#txtChassisNo').val().trim();
        var motorIDChecker = readCookie('motorID');

        // if(engineNum.length <=0 && chassisNum.length > 0 || engineNum.length <=0 && chassisNum.length <= 0){
        if (engineNum.length == 0 || chassisNum.length == 0) {
            $.growl.error({
                location: "tc",
                title: "Invalid Engine or Chassis number",
                message: "Please input details"
            });
            createCookie('motorID', '0', 1);
            $('#txtEngineNo').css('border-color', 'red');
            $('#txtChassisNo').css('border-color', 'red');
            chasis = '';
            engine = '';
            return;


        }

        if (motorIDChecker === 0) {
            $.growl.error({
                location: "tc",
                title: "Invalid Engine or Chassis number",
                message: " "
            });
            createCookie('motorID', '0', 1);
            $('#txtEngineNo').closest('.form-group').addClass("has-danger");
            chasis = '';
            engine = '';
            return;

        }

        ajax(api + "registration/isMotorValidDetails", {
                engineNum: engineNum,
                chassisNum: chassisNum
            },
            function (data) {

                console.log(data);
                if (data.statusCode == 0) {
                    var motorID = data.data[0].LoyaltyMotorID;
                    var motorBrand = data.data[0].LoyaltyMotorBrandModelName;
                    createCookie('motorID', motorID, 1);

                    $("#txtMotorID").val(motorID);
                    $("#regmotortxt").val(motorBrand);
                    $("#enginenumtxt_0").val(engineNum);
                    $("#chassisnumtxt_0").val(chassisNum);

                    $('#txtEngineNo').css('border-color', 'green');
                    $('#txtChassisNo').css('border-color', 'green');

                    $('#txtEngineNo').attr("disabled", "disabled");
                    $('#txtChassisNo').attr("disabled", "disabled");


                    $(".motorLabel").text(data.data[0].LoyaltyMotorBrandModelName);

                    $.growl.notice({
                        location: "tc",
                        title: "Success",
                        message: "Motor is valid."
                    });


                    createCookie('emailCheck', true, 1);
                    chasis = engineNum;
                    engine = chassisNum;

                    // $('.buttonNext').append(
                    // 	'<button class="btn btn-primary pull-right " id="btnNextScreen0" type="button">Next Step</button>'
                    // 	);
                    $('#btnNextScreen0').removeAttr('hidden');
                    $('.motorLabel').css('display', 'block');
                    $('#btnCheck').css({
                        'display': 'none'
                    });

                    // $("#motorcycleImg").attr("src",genURL+data.data[0].LoyaltyMotorBrandModelURL);
                } else {
                    // $("#motorcycleImg").attr("src","");
                    $.growl.error({
                        location: "tc",
                        title: "Invalid Engine or Chassis Number",
                        message: data.statusDescription
                    });
                    createCookie('motorID', '0', 1);

                    $('#txtEngineNo').css('border-color', 'red');
                    $('#txtChassisNo').css('border-color', 'red');
                    chasis = '';
                    engine = '';

                }

            });

        // if(motorIDChecker > 0 && engineNum.length > 0 && chassisNum.length > 0) {

        // }

    });

    $('#btnNextScreen0').on('click', function () {

        $('#container01').css({
            'display': 'none'
        });
        $('#container02').css({
            'display': 'block'
        });

    });

    // on going - medyo okie na
    /* -----------------container02 form validation---------------------*/

    var isValidForm1 = false; // checker if the first form is valid	
    var counterRow = 2; // row number for engine and chassis num

    /* 
    	checks all fields that 
    	are required and should not be empty 
    	Also gives a default error message

    */
    /* for input fields */
    $('#signup2 input:required').blur(function () {

        if (!$(this).val().trim()) {
            isInvalidFeed($(this), "");
            return;
        } else {
            isValidFeed($(this), "");

        }

    });

    /* for select fields */
    $('#signup2 select:required').blur(function (e) {
        if ($(this).val() == '') {
            isInvalidFeed($(this), "");
            return;
        } else {
            isValidFeed($(this), "");
        }
    });

    /* for select fields that are select2 */
    // set the blur event in the select 2 class: .select2-selection
    // instead of the attaching it directly to the select element
    // because the select element is hidden whenever you make it as a select2
    $('#signup2 select:required').filter(":data(select2)").next('.select2').find('.select2-selection')
        .on('blur', function () {
            // the select element e.g. regionComboBox
            var selectElem = $(this).parents('.select2-container').prev();

            if (selectElem.data('select2').isOpen()) { // check if the select element is open
                if (selectElem.val() == '') {
                    $(this).css('border', '1px solid #aaa'); // apply styles that it would normally look
                }
            } else {
                // para matipid sa pag code just trigger the select2:select event 
                // the select2 select event is triggered whenever a result or an option is selected.
                selectElem.trigger({
                    type: 'select2:select'
                })
            }

        });

    $('#signup2 select:required').filter(":data(select2)")
        .on('select2:close', function (e) {
            $(this).trigger({
                type: 'select2:select'
            });

        });

    $('#signup2 select:required').filter(":data(select2)")
        .on('select2:select', function (e) {
            var select2 = $(this).next('.select2').find('.select2-selection');
            if (!$(this).val()) {
                // console.log('di nagselect select')
                select2.css('border', '1px solid red');
                isInvalidFeed($(this), '')
            } else {
                // console.log('selected', $(this).val());
                select2.css('border', '1px solid #aaa');
                isValidFeed($(this), '');
            }
        });



    /*
    	adding custom messages and specific 
    	validations to the signup2 form fields
    */
    $('#userNameTxt').on('blur', function () {
        var username = $(this);
        if (!username.val().trim()) {
            isInvalidFeed($(username), "");
            return;
        }

        checkUsername(username);


    });


    // email -okie
    $('#emailTxt').on('blur', function () {
        var email = $(this);
        if (!$(this).val().trim()) {
            isInvalidFeed($(this), "");
            return;
        }
        if (validateEmail($(this).val().trim()) == false) {
            isInvalidFeed($(this), "Please provide a valid email address");
            return;
        } else {
            ajax(api + "registration/checkEmail", {
                email: email.val()
            }, function (data) {
                console.log(data);
                if (data.statusCode == 0) {
                    // console.log('di existing yung user'); 
                    console.log(data.statusDescription);
                    isInvalidFeed(email, data.statusDescription);
                    return;

                } else {
                    isValidFeed($(this), "");
                }
            });
            //isValidFeed($(this), "");
        }
    });

    // fname okie
    $('#firstNameTxt').blur(function () {
        if (!$(this).val().trim()) {
            return;
        }
        if (checkName($(this).val().trim()) == false) {
            isInvalidFeed($(this), 'Oops, it seems like your first name contains an unaccceptable character. Please Try again');
        } else {
            isValidFeed($(this), "");
        }
    });
    // middle name - okie
    $('#middleNameTxt').blur(function () {
        if (!$(this).val().trim()) {
            return;
        }
        if (checkName($(this).val().trim()) == false) {
            isInvalidFeed($(this), 'Oops, it seems like your first name contains an unaccceptable character. Please Try again');
        } else {
            isValidFeed($(this), "");
        }
    });
    // last name - okie
    $('#lastNameTxt').blur(function () {
        if (!$(this).val().trim()) {
            return;
        }
        if (checkName($(this).val().trim()) == false) {
            isInvalidFeed($(this), 'Oops, it seems like your first name contains an unaccceptable character. Please Try again');
        } else {
            isValidFeed($(this), "");
        }
    });




    // bday - okie
    $('#bdayTxt').on('blur', function () {

        checkBday($(this).val());

    });

    // password - okie
    $('#passwordTxt1').blur(function () {
        var isValidField = false;
        var password = $(this);

        if (!password.val()) {
            isInvalidFeed(password,
                "Please provide a password that must be at least 8 characters long");
            return;
        } else if (password.val().length <= 7) {
            isInvalidFeed(password,
                "Please provide a password that must be at least 8 characters long");
            return;

        } else {
            isValidField = isValidFeed(password, "");
            isValidPassword = isValidField;
        }
    });

    // confirm pass - okie
    $('#passwordTxt2').blur(function () {
        var password = $('#passwordTxt1').val();
        var conPassword = $(this);
        if (!conPassword.val()) {
            isInvalidFeed(conPassword,
                "Please retype your password");
            createCookie('passCheck', 'false', 1);

            return;
        } else if (conPassword.val() != password) {
            isInvalidFeed(conPassword, "Passwords didn't match. Please try again");
            createCookie('passCheck', 'false', 1);

            return;
        } else {
            createCookie('passCheck', 'true', 1);
            isValidFeed(conPassword);
        }
    });

    // mobile - okie
    $('#mobileNumTxt').blur(function () {
        if (checkMobile($(this).val()) == false) {
            isInvalidFeed($(this), "Please provide a valid Philippine mobile number");
        } else {
            isValidFeed($(this), "");
        }
    });

    // home number -not yet
    $('#phoneNumTxt').blur(function () {
        if ($(this).val().trim() != '') {
            // validate
        }
    });

    // okie
    $('#btnNextScreen1').on('click', function (argument) {
        // console.log('click');
        $('#signup2 input:required').trigger('blur');
        $('#signup2 select:required').trigger('blur');
        // $('#signup2 select:required').filter(":data(select2)").trigger('blur');
        checkForm1();

    });

    // form validation and func for second form container03

    // for select elements


    /*

 	addECRow();
 	


	$('#samptbl').on('click', '.deleteRow', function(){
		console.log($(this).closest('tr'));
		$(this).closest('tr').remove();			
	});

	function addECRow(){
		console.log('k');		
		$('#addRow').on('click', function(){
			console.log('au');
			counterRow = counterRow +1;
			var content = 
				'<tr class="addOn bMotorID" data-rID="'+counterRow+'" data-brandMotor="">' +
			      '<th scope="row">'+counterRow+'</th>'+
			      '<td>'+
					'<input type="text" class="form-control engineNo"  id="enginenumtxt_'+counterRow+'">'+
				  '</td>'+
			      '<td>'+
			      	'<input type="text" class="form-control chassisNo">'+
			      '</td>'+
				  '<td>'+
					'<button class="btn btn-danger deleteRow">x</button>'+
				  '</td>'+
			    '</tr>';
			$('#samptbl tbody').append(content);	    
		});

	}*/


    /*-------------- container4 form validation-----------------------*/

    // initialize the select 2 elements
    $('#purchasedYear').select2();


    $('.prevMotor2').on('click', function () {
        var prevMotorSel = $('input[name=prevMotor]:checked').val();

        if (prevMotorSel === '1') {
            $("#brandCBox").removeAttr('disabled');
            $("#modelCBox").removeAttr('disabled');
        }

        if (prevMotorSel === '0') {
            $("#brandCBox").attr('disabled', 'disabled');
            $("#modelCBox").attr('disabled', 'disabled');

        }

    });



    $('#btnNextScreen3').on("click", function () {

        /* validate the do you have prev motor question */
        if (!$('input[name="prevMotor"]').is(':checked')) {
            $.growl.error({
                location: "tc",
                title: "Invalid",
                message: "Please answer the previous motorcycle field"
            });
            return;
        }

        // if the user has a previous motor then 
        // the user should select its brand and model 
        var uhasPrevMotor = $('input[name="prevMotor"]:checked').val(); // finds the checked item value 
        if (uhasPrevMotor == 1) {

            // if previous motor brand is not selected
            if (!$('#brandCBox').val()) { // means value='' 
                $.growl.error({
                    location: "tc",
                    title: "Invalid",
                    message: "Please select the brand of your previous motorcycle"
                });
                return;
            }
            // if previous motor model is not selected
            if (!$('#modelCBox').val()) {
                $.growl.error({
                    location: "tc",
                    title: "Invalid",
                    message: "Please select the model of your previous motorcycle"
                });

                return;
            }


        }


        /* validate compare motor question */
        if (!$('input[name="compareMotor"]').is(':checked')) {
            $.growl.error({
                location: "tc",
                title: "Invalid",
                message: "Please answer the question<br> <strong>Did you compare your current motorcycle to other brands</strong>"
            });
            return;
        }

        var uhasComp = $('input[name="compareMotor"]:checked').val();
        // if the user compares his motorcycle to other brands then 
        // he should answer the 2 questions: the brand and the model of it 
        if (uhasComp == 1) {

            // if compared motor brand is not selected
            if (!$('#cBrandCBox').val()) { // means value='' 
                $.growl.error({
                    location: "tc",
                    title: "Invalid",
                    message: "Please select the brand of motorcycle that you want to compare"
                });
                return;
            }
            // if compared motor model is not selected
            if (!$('#cModelCBox').val()) {
                $.growl.error({
                    location: "tc",
                    title: "Invalid",
                    message: "Please select the model of motorcycle that you want to compare"
                });
                return;
            }

        }


        if (!$('input[name="purchasedLoc"]').is(':checked')) {
            $.growl.error({
                location: "tc",
                title: "Invalid",
                message: "Please select the purchase location"
            });
            return;
        }


        if (!$('#purchasedYear').val()) {
            $.growl.error({
                location: "tc",
                title: "Invalid",
                message: "Please select the purchase year"
            });
            return;
        }
        $(".container5").css("display", "block");
        // 	$(".container1").css("display","none");
        // 	$(".container2").css("display","none");
        // 	$(".container3").css("display","none");
        $(".container4").css("display", "none");

        // 	console.log($('input[name=compareMotor]:checked').val());
        // 	console.log($('#cModelCBox').val());	
    });



    /*-------container4 form validation---------*/
    $('#btnRegister').click(function () {

        if (!$('#eulaChBox').is(':checked')) {
            $.growl.error({
                location: "tc",
                title: "Registration Failed",
                message: 'You have to agree to the terms and conditions to register',
            });
            //alert("Registration Successful! \n Kindly check your email or SMS for the activation code.");
            return;
        }

        var emailChecker = readCookie('emailCheck');
        var passChecker = readCookie('passCheck');
        // var usernameChecker = readCookie('usernameCheck');

        var username = $('#userNameTxt').val();
        var password = $('#passwordTxt1').val();
        var firstName = $('#firstNameTxt').val();
        var middleName = $('#middleNameTxt').val();
        var lastName = $('#lastNameTxt').val();
        var gender = $('#gender').val();


        var prevMotorSel = $('input[name=prevMotor]:checked').val();
        var compareMotorSel = $('input[name=compareMotor]:checked').val();
        var motorStatus = $('input[name=motorStatus]:checked').val();
        var currentMotor = $('input[name=current]:checked').val();

        var purchasedLoc = $('input[name=purchasedLoc]:checked').val();
        var purchasedYear = $('#purchasedYear').val();

        var bday = $('#bdayTxt').val();
        var email = $('#emailTxt').val();
        var mobileNum = $('#mobileNumTxt').val();
        var homeNum = $('#phoneNumTxt').val();
        var street = $('#streetTxt').val();
        var barangay = $('#barangayTxt').val();
        var cityID = $('#cityComboBox').val();
        var siteID = $('#shop3sComboBox').val(); //confirm
        var maritalStatus = $('#maritalStatusComboBox').val();
        var motorID = 0;
        motorID = readCookie('motorID'); // note to improve wag magdedepend sa cookie

        var prevBrandModelID = $('#modelCBox').val();
        var comparedModel = $('#cModelCBox').val();


        var motorIDArr = new Array();

        if (prevMotorSel == 0) {
            prevBrandModelID = 0;
        }

        if (compareMotorSel == 0) {
            comparedModel = null;
        }

        if (homeNum.length == 0) {

            homeNum = 0;
        }



        /* another validation checking */
        // not necessary but its okay
        // though its too redundant 


        // console.log(engine);
        // console.log(chasis);
        if (engine == '' || chasis == '') {
            $.growl.error({
                location: "tc",
                title: "Invalid",
                message: 'Invalid engine number or chassis no',
            });
            return;
        }

        if (firstName.length <= 0) {
            $.growl.error({
                location: "tc",
                title: "Registration Failed",
                message: 'Please fill up first name field',
            });
            return;
        }

        if (middleName.length <= 0) {
            $.growl.error({
                location: "tc",
                title: "Registration Failed",
                message: 'Please fill up middle name field',
            });
            return;
        }

        if (lastName.length <= 0) {
            $.growl.error({
                location: "tc",
                title: "Registration Failed",
                message: 'Please fill up last name field',
            });
            return;
        }

        if (username.length <= 0) {
            $.growl.error({
                location: "tc",
                title: "Registration Failed",
                message: 'Please fill up username field',
            });
            return;
        }


        // if(usernameChecker==='false'){
        // 	$.growl.error({
        //		location: "tc",
        //      title: "Registration Failed",
        //      message: 'Please input valid username',
        //  });
        // 	return;
        // }

        if (email.length <= 0) {
            $.growl.error({
                location: "tc",
                title: "Registration Failed",
                message: 'Please fill up email field',
            });
            return;
        }

        if (emailChecker === 'false') {
            $.growl.error({
                location: "tc",
                title: "Registration Failed",
                message: 'Please input valid email',
            });


            return;
        }

        if (password.length <= 0) {
            $.growl.error({
                location: "tc",
                title: "Registration Failed",
                message: 'Please fill up password field',
            });
            return;
        }

        if (passChecker === 'false') {
            $.growl.error({
                location: "tc",
                title: "Registration Failed",
                message: 'Please input valid password',
            });
            return;
        }

        if (bday.length <= 0) {
            $.growl.error({
                location: "tc",
                title: "Registration Failed",
                message: 'Please fill up birthday field',
            });
            return;
        }

        if (mobileNum.length <= 0) {
            $.growl.error({
                location: "tc",
                title: "Registration Failed",
                message: 'Please fill up mobile number field',
            });
            return;
        }

        if (street.length <= 0) {
            $.growl.error({
                location: "tc",
                title: "Registration Failed",
                message: 'Please fill up street field',
            });
            return;
        }

        if (barangay.length <= 0) {
            $.growl.error({
                location: "tc",
                title: "Registration Failed",
                message: 'Please fill up barangay field',
            });
            return;
        }

        if (motorID === 0) {
            $.growl.error({
                location: "tc",
                title: "Registration Failed",
                message: 'Please fill up correct engine and chassis number',
            });
            return;
        }

        $('.brandMotorID').each(function () {

            if ($(this).val().length != 0) {
                motorIDArr.push($(this).val());
            }
        });

        console.log();
        ajax(api + "registration/registration", {
            comparedModel: comparedModel,
            pLoc: purchasedLoc,
            pYear: purchasedYear,
            username: username,
            password: password,
            fName: firstName,
            mName: middleName,
            lName: lastName,
            gender: gender,
            bday: bday,
            email: email,
            mobileNum: mobileNum,
            contactNum: homeNum,
            street: street,
            brgy: barangay,
            cityID: cityID,
            siteID: siteID,
            maritalStatus: maritalStatus,
            motorIDArr: motorIDArr,
            currentMotorID: motorID,
            motorType: currentMotor,
            motorDetails: motorStatus,
            prevMotorModelID: prevBrandModelID
        }, function (data) {
            console.log(data);
            if (data.statusCode == 1) {
                $.growl.error({
                    location: "tc",
                    title: "Error",
                    size: 'large',
                    message: data.statusDescription

                });

                // alert("Registration Successful! \n Your activation code is \n Kindly check your email or SMS for the activation code.");
                return;
            }


            eraseCookie('emailCheck');
            eraseCookie('passCheck');
            eraseCookie('motorID');

            $.growl.notice({
                location: "tc",
                title: "Registration Successful! ",
                message: "\n You are now part of Yamaha Club. \n To claim your Yamaha Club Cards, \n Please check your Email and SMS for the activation code.  "
            });

            var delay = 1000;
            setTimeout(function () {
                window.location.href = "/login";
            }, delay);

            return;
        });
    });
});




function checkForm1() {
    var isValidForm = false;
    var inputs = $('#signup2 input').closest('.form-group').hasClass('error-field');
    var selects = $('#signup2 select').closest('.form-group').hasClass('error-field');



    if (inputs == true || selects == true) {
        isValidForm = false;

    } else {
        isValidForm = true;

    }
    if (checkUsername($('#userNameTxt')) == false) {
        isValidForm = false;
    }
    console.log(isValidForm);
    if (!isValidForm) {
        console.log("isValidForm", isValidForm);
        return;
    } else {
        console.log("nandayo");
        $('.container3').css({
            "display": "block"
        });
        $('#container02').css({
            "display": "none"
        });
        // $('#container03').css({"display":"block"}); // di pa ok kaya wag muna

    }
}

function checkUsername(username) {
    ajax(api + "registration/checkUsername", {
        username: username.val()
    }, function (data) {
        console.log(data);
        if (data.statusCode == 0) {
            console.log('existing yung user');
            return isInvalidFeed(username, data.statusDescription);
        }
    });
}

function checkMobile(mobileString) {
    var regEx = /^(09|\+639)\d{9}$/;
    if (!mobileString.match(regEx)) return false
}

function checkName(nameString) {
    var regEx = /^[A-Za-z0-9' ]*$/;
    if (!nameString.match(regEx)) return false

}

function validateEmail(email) {
    var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(email); //  code nila james
    if (!email.match(regEx)) return false;
}

function checkBday(bdayString) {
    if (isValidFormatDate(bdayString) == false) {
        isInvalidFeed($('#bdayTxt'), 'Please provide a valid date');

    } else {

        var todaysdate = new Date();
        var birthday = new Date(bdayString);
        var age = todaysdate.getFullYear() - birthday.getFullYear();

        if (age < 16) {
            isInvalidFeed($('#bdayTxt'), 'You must be at least 16 years old');
            return;
        } else if (age >= 99) {
            isInvalidFeed($('#bdayTxt'), 'You reached the maximum age requirement of 100');
            return;
        } else {
            isValidFeed($('#bdayTxt'), '');
        }

    }

}

function isValidFormatDate(dateString) {
    var regEx = /^\d{4}-\d{2}-\d{2}$/; // must be YYYY-MM-DD format

    if (!dateString.match(regEx)) return false; // Invalid format
    var d = new Date(dateString);
    if (!d.getTime() && d.getTime() !== 0) return false; // Invalid date
    return d.toISOString().slice(0, 10) === dateString;
}

function isInvalidFeed(currElem, message) {
    // console.log('err', currElem);
    if (message == "") {
        var label = currElem.closest('.form-group').children('label').text().split(' *')[0];
        message = 'Please fill up the ' + label + ' field';
    }

    currElem.closest('.form-group').addClass('has-danger').addClass('error-field');
    currElem.closest('.form-group').find('.feedback')
        .css({
            "display": "block",
            "color": "red"
        })
        .text(message);
    return false;
}

function isValidFeed(currElem, message) {
    currElem.closest('.form-group').removeClass('has-danger').removeClass('error-field');
    currElem.closest('.form-group').find('.feedback')
        .css({
            "display": "block"
        })
        .text(message);
    return true;
}