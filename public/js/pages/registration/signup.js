$(document).ready(function () {
    if (readCookie('token') != null) {
        // console.log("test");
        window.location.href = '/';
        return;
    } else {
    	
    }

    // createCookie('usernameCheck', 'false', 1);
    // createCookie('emailCheck', 'false', 1);
    createCookie('passCheck', 'false', 1);
    createCookie('motorID', 0, 1);

    var d = new Date();
    var n = d.getFullYear();
    var min = 2000,
        max = n;
    select = document.getElementById('purchasedYear');
    $('#purchasedYear').append('<option value=""> Choose Year Purchased </option>');
    for (var i = min; i <= max; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.appendChild(opt);
    }

    // select.value = new Date().getFullYear();

    /*$('#firstNameTxt').on('blur', function() {
    	var fntxt = $('#firstNameTxt').val().trim();

    	if(fntxt.length == 0){
    		$('#firstNameTxt').css('border-color', 'red');
    		return;
    	}
    	else{
    		$('#firstNameTxt').css('border-color', '');
    	}
    });

    $('#middleNameTxt').on('blur', function() {
    	var mntxt = $('#middleNameTxt').val().trim();
    	if(mntxt.length == 0){
    		$('#middleNameTxt').css('border-color', 'red');
    		return;
    	}
    	else{
    		$('#middleNameTxt').css('border-color', '');
    	}
    	
    	
    });

    $('#lastNameTxt').on('blur', function() {
    	var lntxt = $('#lastNameTxt').val().trim();

    	if(lntxt.length == 0){
    		$('#lastNameTxt').css('border-color', 'red');
    		return;
    	}
    	else{
    		$('#lastNameTxt').css('border-color', '');
    	}
    	
    	
    });*/

    /*
    $('#userNameTxt').on('blur', function() {
    	var username = $('#userNameTxt').val().trim();
    	createCookie('usernameCheck', 'false', 1);

    	if(username.length == 0){
    		createCookie('usernameCheck', 'false', 1);
    		$('#userNameTxt').css('border-color', 'red');
    		return;
    	}

    ajax(api+"registration/checkUsername",{username:username},function(data){
    				if(data.statusCode == 0){
    					$.growl.error({

    					  location: "tc",	
    		              title: "Error",
    		              message: data.statusDescription
    		            });
    		            createCookie('usernameCheck', 'false', 1);
    		            $('#userNameTxt').css('border-color', 'red');

    				}else{
    					createCookie('usernameCheck', 'true', 1);
    					  $('#userNameTxt').css('border-color', '');
    				}
    	});

    });*/




    /*function validateEmail(email) {


    	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(email);
    }*/

    /*

		$('#emailTxt').on('blur', function() {
		var email = $('#emailTxt').val();
		createCookie('emailCheck', 'false', 1);


		if (validateEmail(email)) {


			ajax(api+"registration/checkEmail",{email:email},function(data){
				if(data.statusCode == 0){
					$.growl.error({
						location: "tc",	 
						title: "Error",
						message: data.statusDescription
					});
					createCookie('emailCheck', 'false', 1);
					$('#emailTxt').css('border-color', 'red');
				}else{
					createCookie('emailCheck', 'true', 1);
					$('#emailTxt').css('border-color', '');
				}
			});



		} 
		else {
			createCookie('emailCheck', 'false', 1);
			$('#emailTxt').css('border-color', 'red');
		}


		if(email.length == 0){
			createCookie('emailCheck', 'false', 1);
			$('#emailTxt').css('border-color', 'red');
			return;
		}

		

	});




	$('#passwordTxt1').on('blur', function() {
		var passwordTxt1 = $('#passwordTxt1').val();
		var passwordTxt2 = $('#passwordTxt2').val();

		if(passwordTxt1.length < 8 ){
			$.growl.error({
				location: "tc",
				title: "Required!",
				message: "Password must be atleast 8 characters"
			});
			createCookie('passCheck', 'false', 1);
			$('#passwordTxt1').css('border-color', 'red');
			$('#passwordTxt1').val("");
			$('#passwordTxt2').val("");

			return;
		}

		if(passwordTxt2.length === 0){
			return;
		}




		if(passwordTxt1 === passwordTxt2){
			createCookie('passCheck', 'true', 1);
			$('#passwordTxt1').css('border-color', '');
			$('#passwordTxt2').css('border-color', '');

			return;
		}else{
			$.growl.error({
				location: "tc",
				title: "Required!",
				message: "Passwords do not match!"
			});


			createCookie('passCheck', 'false', 1);
			$('#passwordTxt1').css('border-color', 'red');
			$('#passwordTxt2').css('border-color', 'red');
			return;
		}

		return;
	});


	$('#passwordTxt2').on('blur', function() {
		var passwordTxt1 = $('#passwordTxt1').val();
		var passwordTxt2 = $('#passwordTxt2').val();

		if(passwordTxt1.length === 0){
			$.growl.error({
				location: "tc",
				title: "Required!",
				message: "Please Input Password"
			});
			createCookie('passCheck', 'false', 1);

			$('#passwordTxt1').css('border-color', 'red');
			$('#passwordTxt2').css('border-color', 'red');



			return;
		}

		if(passwordTxt1.length < 8 ){
			$.growl.error({
				location: "tc",
				title: "Required!",
				message: "Password must be atleast 8 characters"
			});
			createCookie('passCheck', 'false', 1);
			$('#passwordTxt1').css('border-color', 'red');
			$('#passwordTxt1').val("");
			$('#passwordTxt2').val("");

			return;
		}

		if(passwordTxt1.length === 0 && passwordTxt2.length === 0){
			return;
		}

		if(passwordTxt1 === passwordTxt2){
			createCookie('passCheck', 'true', 1);
			$('#passwordTxt1').css('border-color', '');
			$('#passwordTxt2').css('border-color', '');

			return;
		}else {
			$.growl.error({
				location: "tc",
				title: "Required!",
				message: "Passwords do not match!"
			});
			createCookie('passCheck', 'false', 1);
			$('#passwordTxt1').css('border-color', 'red');
			$('#passwordTxt2').css('border-color', 'red');
			return;
		}

		createCookie('passCheck', 'false', 1);
		return;
	});

	function isEmpty(elem){
		var elemVal = $(elem).val().trim()
		elem.on('blur', function(){
   			// select elements
   			if($(this).is("select")){
   				if (elemVal == 0) {
   					$(this).css('border-color', 'red');
   					return;
   				}else{
   					console.log("okie")
   					$(this).css('border-color','');
   				}
   			}
   			// 

   		});


	}


	$('#gender').on('blur', function () {
    	// console.log($(this).val());
    	var elemVal = $(this).val().trim();
    	console.log(elemVal);
    	if (elemVal == '0') {
    		$(this).css('border-color', 'red');
    		return;
    	}else{
    		$(this).css('border-color', '');
    	}
    });

	$("#gender").change(function(){
		var selectedElem = $("#gender option:selected").val();
		alert("You have selected the country - " + selectedElem);
		$(this).trigger('blur');
	});

	$('#mobileNumTxt').on('blur', function() {
		var mobile = $('#mobileNumTxt').val();


		if(mobile.length == 0){
			$('#mobileNumTxt').css('border-color', 'red');
			return;
		}
		else{
			$('#mobileNumTxt').css('border-color', '');
		}
		
		
	});

	


	$.fn.regexMask = function(mask) {
		$(this).keypress(function (event) {
			if (!event.charCode) return true;
			var part1 = this.value.substring(0, this.selectionStart);
			var part2 = this.value.substring(this.selectionEnd, this.value.length);
			if (!mask.test(part1 + String.fromCharCode(event.charCode) + part2))
				return false;
		});
	};


	var mask = new RegExp("^[A-Za-z0-9' ]*$")
	$("#firstNameTxt").regexMask(mask) 



	$.fn.regexMask = function(mask) {
		$(this).keypress(function (event) {
			if (!event.charCode) return true;
			var part1 = this.value.substring(0, this.selectionStart);
			var part2 = this.value.substring(this.selectionEnd, this.value.length);
			if (!mask.test(part1 + String.fromCharCode(event.charCode) + part2))
				return false;
		});
	};
	var mask1 = new RegExp("^[A-Za-z0-9._-]*$")
	$("#userNameTxt").regexMask(mask1) 

	*/

    // $("#mobileNumTxt").keydown(function (e) {
    //     // Allow: backspace, delete, tab, escape, enter and .
    //     if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
    //          // Allow: Ctrl/cmd+A
    //         (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
    //          // Allow: Ctrl/cmd+C
    //         (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
    //          // Allow: Ctrl/cmd+X
    //         (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
    //          // Allow: home, end, left, right
    //         (e.keyCode >= 35 && e.keyCode <= 39)) {
    //              // let it happen, don't do anything
    //              return;
    //     }
    //     // Ensure that it is a number and stop the keypress
    //     if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
    //         e.preventDefault();
    //     }
    // });


    /*$("#phoneNumTxt").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl/cmd+A
             (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: Ctrl/cmd+C
             (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: Ctrl/cmd+X
             (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: home, end, left, right
             (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
             return;
         }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        	e.preventDefault();
        }
    });


	$('#streetTxt').on('blur', function() {
		var street = $('#streetTxt').val();

		if(street.length == 0){
			$('#streetTxt').css('border-color', 'red');
			return;
		}
		else{
			$('#streetTxt').css('border-color', '');
		}


	});


	$('#barangayTxt').on('blur', function() {
		var barangay = $('#barangayTxt').val();


		if(barangay.length == 0){
			$('#barangayTxt').css('border-color', 'red');
			return;
		}else{
			$('#barangayTxt').css('border-color', '');
		}


	});
	*/



    // $('.prevMotor2').on('click', function() {

    // 	var prevMotorSel = $('input[name=prevMotor]:checked').val();
    // 	console.log(e);


    // 	if (prevMotorSel === '1'){


    // 		$("#brandCBox").removeAttr('disabled');
    // 		$("#modelCBox").removeAttr('disabled');



    // 	}


    // 	if (prevMotorSel === '0'){

    // 		$("#brandCBox").attr('disabled','disabled');
    // 		$("#modelCBox").attr('disabled','disabled');

    // 	}

    // });


    $('.compare2').on('click', function () {

        var compareMotorSel = $('input[name=compareMotor]:checked').val();

        if (compareMotorSel === '1') {

            $("#cBrandCBox").removeAttr('disabled');
            $("#cModelCBox").removeAttr('disabled');

        }

        if (compareMotorSel === '0') {

            $("#cBrandCBox").attr('disabled', 'disabled');
            $("#cModelCBox").attr('disabled', 'disabled');

        }

    });


    $('.scrollabletextbox').keypress(function (event) {
        event.preventDefault();
    });


});
