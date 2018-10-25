
 <!DOCTYPE html>
 <html>
 <head>

 	<script src="/js/pages/registration/jquery-3.1.1.slim.min.js">
 	</script>
 	<script src="/js/pages/registration/tether.min.js">
 	</script>
 	<script type="text/javascript" src="/js/pages/registration/bootstrap.min.js"></script>
 <!-- toggle button -->
 <link href="/css/pages/registration/bootstrap-toggle.min.css" rel="stylesheet">
 <script src="/js/pages/registration/bootstrap-toggle.min.js">
 </script>
 <link href="/css/pages/registration/bootstrap.css" rel="stylesheet">
 <link href="/css/pages/registration/normalize.css" rel="stylesheet">
 <link href="/css/pages/registration/style.css" rel="stylesheet">
 <link href="/css/pages/registration/growl.css" rel="stylesheet">
 <link href="/css/pages/registration/pace.css" rel="stylesheet">
 <link rel="stylesheet" type="text/css" href="/css/pages/registration/select2.css">
 <link rel="stylesheet" href="/css/pages/registration/jquery-ui.css">
 <script src="/js/pages/registration/jquery.js" type="text/javascript"></script>
 <script src="/js/pages/registration/jquery-ui.js"></script>
 <!-- <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script> -->
 <script type="text/javascript" src="/js/pages/registration/pace.js"></script>
 <script type="text/javascript" src="/js/pages/registration/growl.js"></script>
 <script type="text/javascript" src="/js/pages/registration/append.js"></script>
 <script type="text/javascript" src="/js/pages/registration/general.js"></script>
 <script src="/js/pages/registration/select2.js"></script>


 <!-- <script type="text/javascript" src="js/brandModels.js"></script> -->
 <!-- <script type="text/javascript" src="js/surveyDropDown.js"></script> -->

 <script type="text/javascript" src="/js/pages/registration/signup.js"></script>
 <script type="text/javascript" src="/js/pages/registration/motors.js"></script>
 <script type="text/javascript" src="/js/pages/registration/cookie.js"></script>
 <script src="/js/pages/registration/registrationFlow.js" type="text/javascript">
 </script>
 <script type="text/javascript" src="/js/pages/registration/displayPlaces_1.js"></script>
 <script src="/js/pages/registration/signup-samp.js"></script>



 <title></title>

 <style>
 .container2 label {
 	padding-bottom: 0;
 	margin-bottom:  0;
 	padding-left: 0;
 }
 .btnAdd{
 	padding-left: auto!important;
 	padding-right: auto!important;
 }
 .btnRemove{
 	padding-left: auto!important;
 	padding-right: auto!important;
 }

 .feedback{
 	display: none;
 }

 .display-cust{
 	font-weight: 300;
 	line-height: 1.1;
 }

 .bg-gray{
 	background: rgb(235, 235, 235);
 }

 .bs-mat1{
 	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
 }

 .feedback{
 	font-size: 80%;
 }


 .form-group.has-danger > label, 
 .form-group.has-danger > .feedback	 
 {
 	color: red;
 }

 .form-group.has-success > label, 
 .form-group.has-success > .feedback	 
 {
 	color: #5cb85c;
 }

 .select2-container .select2-selection--single{
 	height: 100%;
 }

 .has-danger .select2-selection {
 	border: 1px solid #a94442;
 	border-radius: 4px;
 }

 #container02{
 	display: none;
 }

	/*	.select2-container .select2-search-field,
.select2-container .select2-input{
	  width: 100% !important

}
*/	
</style>	

</head>
<body>
	<section class="mt-3" id="container01">	 	
		<div class="container">		 			
			<div class="row text-muted align-items-center">
				<div class="col-md-7 offset-md-3 text-center py-3 bs-mat1" >
					<h1 class="display-cust">Create your Yamaha Club Account</h1>
					<small class="px-3">Yamaha Motor Philippines Inc. establishes the Yamaha Club to bring together the Yamaha Motorcycle community, creating an experience that raises them above the rest.</small>    
					<div class="pt-4 pb-3">
						<a href="https://www.yamahaclub.com.ph/">
							<img src="./assets/yclub_logo.png" alt="YamahaLogo" width="25%" class="img-fluid">
						</a>

					</div>
					<div class="info-form col-sm-8 offset-sm-2 mt-4 mb-5">
						<div id="signup1" class="">
							<div class="form-group">
								<label class="">Engine Number</label>
								<input type="text" class="form-control" placeholder="" id="txtEngineNo" value="">
								<div class="feedback"></div>
							</div>
							<div class="form-group">
								<label class="">Chasis Number</label>
								<input type="text" class="form-control" placeholder="" id="txtChassisNo" value="">
								<div class="feedback"></div>
							</div>

							<div class="alert alert-success motorLabel" role="alert" style="display:  none;">

							</div>
							<button type="button" class="btn btn-primary" id="btnCheck">Check</button>
							<button class="btn btn-primary" id="btnNextScreen0" type="button" hidden="hidden">Next Step</button>
						</div>
					</div>
				</div>
			</div>

		</div>
	</section>
	<section id="container02"  class="mt-5" >
		<div class="container">
			<div class="row">
				<div class="col-lg-3 d-none d-lg-block px-4">
					<div class="row h-100">
						<div class="col">
							<a href="https://www.yamahaclub.com.ph/">
								<img src="./assets/yclub_logo.png" alt="YamahaLogo" width="75%" class="img-fluid">
							</a>
						</div>
						<div class="row " >
							<div class="col" >
								<p style="font-weight:500;" class="text-center">JOIN US AND EXPERIENCE WHAT TRUE RIDING PASSION IS ALL ABOUT!</p>
							</div>			
						</div>
						<div class="row ">
							<div class="col">
								<a href="">
									<img src="./assets/YamahaCard.png" alt="" class="img-fluid">
								</a>
							</div>
						</div>
					</div>

				</div>
				<div class="col-lg-9 col-md-12" >
					<center>
						<label style= "font-family: verdana; font-size: 25px; color: grey;">
							Create 	your Yamaha Club Account
						</label>
					</center> 
					<div id="signup2" class="bs-mat1 bg-gray p-4">
						<div class="row form-row">
							<div class="form-group col-lg-4 col-md-12 col-sm-12 ">
								<label for="firstNameTxt">First Name <span class="text-danger">*</span></label>
								<input type="text" class="form-control" id="firstNameTxt" placeholder="" required>
								<div class="feedback"></div>
							</div>
							<div class="form-group col-lg-4 col-md-12 col-sm-12 ">
								<label for="">Middle Name <span class="text-danger">*</span></label>
								<input type="text" class="form-control" id="middleNameTxt" placeholder="" required="">
								<div class="feedback"></div>
							</div>
							<div class="form-group col-lg-4 col-md-12 col-sm-12 ">
								<label for="">Last Name <span class="text-danger">*</span></label>
								<input type="text" class="form-control" id="lastNameTxt" placeholder="" required>
								<div class="feedback"></div>
							</div>
						</div>
						<div class="row form-row">
							<div class="form-group col-lg-6 col-md-6 col-sm-12">
								<label for="userNameTxt">Username <span class="text-danger">*</span></label>
								<input type="text" class="form-control" id="userNameTxt" placeholder="" required>
								<div class="feedback"></div>
							</div>
							<div class="form-group col-lg-6 col-md-6 col-sm-12 ">
								<label for="">E-mail Address <span class="text-danger">*</span></label>
								<input type="email" class="form-control" id="emailTxt" placeholder="" required>
								<div class="feedback"></div>
							</div>

						</div>
						<div class="row form-row">
							<div class="form-group col-lg-6 col-md-6 col-sm-12 ">
								<label for="passwordTxt1">Create Password <span class="text-danger">*</span></label>
								<input type="password" class="form-control" id="passwordTxt1" placeholder="" required>
								<div class="feedback"></div>
							</div>
							<div class="form-group col-lg-6 col-md-6 col-sm-12 ">
								<label for="passwordTxt2">Confirm Password <span class="text-danger">*</span></label>
								<input type="password" class="form-control" id="passwordTxt2" placeholder="Password" required="">
								<div class="feedback"></div>
							</div>

						</div>
						<div class="row form-row">
							<div class="form-group col-lg-6 col-md-6 col-sm- ">
								<label for="bdayTxt">Birthday <span class="text-danger">*</span></label>
								<input type="date" class="form-control" id="bdayTxt" placeholder="Email" required>
								<div class="feedback"></div>
							</div>

						</div>
						<div class="row form-row">
							<div class="form-group col-lg-6 col-md-6 col-sm-12 ">
								<label for="gender">Gender <span class="text-danger">*</span></label>
								<select class="form-control" id="gender" required>
									<option value="">-- Choose --</option>
									<option value="M">Male</option>
									<option value="F">Female</option>
								</select>
								<div class="feedback"></div>
							</div>
							<div class="form-group col-lg-6 col-md-6 col-sm-12 ">
								<label for="maritalStatusComboBox">Civil Status <span class="text-danger">*</span></label>
								<select class="form-control" id="maritalStatusComboBox" required>
									<option class="" value="">-- Choose --</option>
									<option value="Married">
										Single
									</option>
									<option value="Married">
										Married
									</option>
									<option value="Widowed">
										Widowed
									</option>
									<option value="Separated">
										Separated
									</option>
									<option value="Divorced">
										Divorced
									</option>	
								</select>
								<div class="feedback"></div>
							</div>

						</div>
						
						<div class="row form-row">
							<div class="form-group col-lg-6 col-md-6 col-sm- ">
								<label for="mobileNumTxt">Mobile Number <span class="text-danger">*</span></label>
								<input type="text" class="form-control" id="mobileNumTxt" placeholder="eg. 09123456781" required>
								<div class="feedback"></div>
							</div>
							<div class="form-group col-lg-6 col-md-6 col-sm-12 ">
								<label for="phoneNumTxt">Home Number</label>
								<input type="text" class="form-control" id="phoneNumTxt" placeholder="" maxlength="10">
								<div class="feedback"></div>
							</div>

						</div>
						<div class="row ">
							
							<div class="form-group col-lg-6 col-md-6 col-sm-12 ">
								<label for="">Street Address <span class="text-danger">*</span></label>
								<input type="text" class="form-control" id="streetTxt" placeholder="Address" required>
								<div class="feedback"></div>
							</div>
							<div class="form-group col-lg-6 col-md-6 col-sm-12 ">
								<label for="barangayTxt">Barangay <span class="text-danger">*</span></label>
								<input type="text" class="form-control" id="barangayTxt" placeholder="" required>
								<div class="feedback"></div>
							</div>

						</div>
						<div class="row form-row">
							<div class="form-group col-lg-6 col-md-6 col-sm-12 ">
								<label for="regionComboBox">Region <span class="text-danger">*</span></label>
								<select class="form-control" id="regionComboBox" required style="width: 100%">

								</select>
								<div class="feedback"></div>
							</div>
							<div class="form-group col-lg-6 col-md-6 col-sm-12 " >
								<label for="provinceComboBoxs">Province <span class="text-danger">*</span></label>
								<select class="form-control " id="provinceComboBox" required style="width: 100%">

								</select>
								<div class="feedback"></div>
							</div>
						</div>
						<div class="row form-row">
							<div class="form-group col-lg-6 col-md-6 col-sm- ">
								<label for="">City <span class="text-danger">*</span></label>
								<select class="form-control" id="cityComboBox" required="required" style="width: 100%">
									<option value="">-- Choose a city --</option>
								</select>
								<div class="feedback"></div>
							</div>
							<div class="form-group col-lg-6 col-md-6 col-sm-12 ">
								<label for="">Preferred Yamaha 3S Shop <span class="text-danger">*</span></label>
								<select class="form-control" id="shop3sComboBox" required="required" style="width: 100%">
									<option value="">-- Choose a 3s Shop --</option>
								</select>
								<div class="feedback"></div>
							</div>

						</div>
						<hr>
						<div class="row justify-content-end px-3">
							<button class="btn btn-primary" type="button" id="btnNextScreen1">Next</button>
						</div>
						
					</div>


				</div>


			</div>
		</div>
	</section>
	

	<div class="whole">


		<div class="container3  container mt-5" style="">
			<div class="s3 " id="screen2" >
				<div class="row">
					<div class="col-lg-3 d-none d-lg-block px-4">
						<div class="row h-75">
							<div class="col">
								<a href="https://www.yamahaclub.com.ph/">
									<img src="./assets/yclub_logo.png" alt="YamahaLogo" width="75%" class="img-fluid">
								</a>
							</div>
							<div class="row " >
								<div class="col" >
									<p style="font-weight:500;" class="text-center">For us to improve our service, we need your support in answering some questions.!</p>
								</div>			
							</div>
						</div>
					</div>
					<div class="col-lg-9 col-md-12 ">
						<center>
							<label style= "font-family: verdana; font-size: 25px; color: grey;">
								Motorcycle Information
							</label>
						</center>
						<div class="bs-mat1 p-4 bg-gray">
							<div class="row" id="form-wrapper" align=left>
								<div class="col-md-12 " id="">
									<div class="row">
										<div class="col-md-8">
											<label class="fieldLabel">My Registered Motorcycle</label>
										</div>
									</div>
									<div id="overlay">
										<div  class="loader" style="display:block;" align="center"></div>
									</div>
									<div class="row">
										<div class="col-md-5">
											<input class="form-control" type="text" id="regmotortxt" disabled><BR>
										</div>
									</div>
									<div class="row">
										<div class="col-md-12 formAdd">

											<div class="0">			
												<div class="row">
													<div class="col-md-4">
														<label class="fieldLabel">Engine Number</label>		
													</div>
													<div class="col-md-4">
														<label class="fieldLabel">Chassis Number</label>		
													</div>
												</div>
												<div class="row">
													<div class="col-md-4">
														<input class="form-control engineNo" type="text" id="enginenumtxt_0" disabled>
													</div>
													<div class="col-md-4">
														<input class="form-control chassisNo" type="text" id="chassisnumtxt_0" disabled>
													</div>
													<div class="col-md-1">
														<button id="b1" class="btn btn-primary btnAdd" type="button" >+</button>
													</div>
													<div class="col-md-1">
														<input class="form-control brandMotorID" type="text" id="txtMotorID" disabled >
													</div>
												</div>

											</div> 
										</div>
									</div> 
									<BR><HR>
									<div class="row">			
										<div class="col-md-8">
											<label class="fieldLabel">Current Yamaha Motorcycle Details</label>				

										</div>

									</div>


									<div class="row pl-4">		
										<div class="col-md-2">
											<label class="fieldLabel">Type:</label>
										</div>
										<div class="col-md-4 ">
											<label  style="font-weight:450;"> <input class="form-check-input" type="radio" name="current" id="rbBrandNew"  value="Brand New"> Brand New</label>

										</div>
										<div class="col-md-4 ">
											<label style="font-weight:450;"><input class="form-check-input" type="radio" name="current" id="rbSecondHand" value="Second Hand"> Second Hand</label>						
										</div>
									</div>
									<hr>
									<div class="row">
										<div class="col-md-6">
											<label for="" class="fieldLabel">Status :</label>

										</div>
									</div>

									<div class="row pl-4">			
										<div class="col-md-8">
											<label  style="font-weight:450;">
												<input class="form-check-input" type="radio" name="motorStatus" id="rbFirstMC"  value="First Motorcycle/First MC User"> First Motorcycle/First MC User
											</label>					
										</div>
									</div>
									<div class="row pl-4">			
										<div class="col-md-8">
											<label  style="font-weight:450;">
												<input class="form-check-input" type="radio" name="motorStatus" id="rbAdditionalMotor" value="Additional Motorcycle"> Additional Motorcycle
											</label>						
										</div>
									</div>
									<div class="row pl-4">			
										<div class="col-md-8">
											<label  style="font-weight:450;">
												<input class="form-check-input" type="radio" name="motorStatus" id="rbReplacement" value="Replacement from Previous Motorcycle"> Replacement from Previous Motorcycle
											</label>						
										</div>
									</div>


								</div>
								<div class=col-md-12>
									<BR><div class="row">
										<div class=" col-md-12 text-right">
											<button class="btn btn-primary pull-right" id="btnBackScreen2" type="button">Back</button>
											<button class="btn btn-primary pull-right" id="btnNextScreen2" type="button">Next Step</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container4 container mt-5" >
			<div class="s4" id="screen3">
				<div class="row">
					<div class="col-lg-3 d-none d-lg-block px-4">
						<div class="row h-75">
							<div class="col">
								<a href="https://www.yamahaclub.com.ph/">
									<img src="./assets/yclub_logo.png" alt="YamahaLogo" width="75%" class="img-fluid">
								</a>
							</div>
							<div class="row " >
								<div class="col" >
									<p style="font-weight:500;" class="text-center">For us to improve our service, we need your support in answering some questions.!</p>
								</div>			
							</div>
						</div>
					</div>
					<div class="col-lg-9 col-md-12 ">
						<center>
							<label style= "font-family: verdana; font-size: 25px; color: grey;">
								Answer the Survey
							</label>
						</center>
						<div class="bs-mat1 p-4 bg-gray">
							<div class="row" id="form-wrapper">
								<div class="col-md-12 ">
									<h2 class="text-center">Model Comparison</h2>
									<label class="fieldLabel">Do you have a previous motorcycle?</label>
									<div class="row">
										<div class="col-md-4">
											<div class="btn-group" data-toggle="collapsing" id="prevButton" >

												<label class="btn btn-info active prevMotor2" >
													<input type="radio" class="prevMotor" name="prevMotor" id="yesOption" autocomplete="off"   value="1"> Yes
												</label>
												<label class="btn btn-info prevMotor2">
													<input type="radio" class="prevMotor" name="prevMotor" id="noOption" autocomplete="off"  value="0"> No
												</label>
											</div>
										</div>
									</div>

									<div class="otherMotorInfo">
										<div class="row">
											<div class="col-md-4">
												<label class="fieldLabel">What Brand?</label>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">
												<select class="form-control dropdownStyle brandM" id="brandCBox" disabled>
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">
												<label class="fieldLabel">What Model?</label>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">
												<select class="form-control dropdownStyle brandM" id="modelCBox" disabled>
												</select>
											</div>
										</div>
									</div><HR>
									<div class="row">
										<div class="col-md-12">
											<label class="fieldLabel">Did you compare your current motorcycle to other brands?</label>
										</div>

									</div>

									<div class="row">
										<div class="col-md-4">
											<div class="btn-group" data-toggle="collapsing" id="compareButton" >

												<label class="btn btn-info active compare2" >
													<input type="radio" class="compareMotor" name="compareMotor" id="yesOption" autocomplete="off"   value="1"> Yes
												</label>
												<label class="btn btn-info compare2">
													<input type="radio" class="compareMotor" name="compareMotor" id="noOption" autocomplete="off"  value="0" > No
												</label>
											</div>
										</div>
									</div>
									<div class="CotherMotorInfo">
										<div class="row">
											<div class="col-md-4">
												<label class="fieldLabel">What Brand?</label>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">
												<select class="form-control dropdownStyle brandM " id="cBrandCBox" disabled>
												</select>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">
												<label class="fieldLabel">What Model?</label>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">
												<select class="form-control dropdownStyle modelM" id="cModelCBox" disabled>
												</select>
											</div>
										</div>
									</div>

									<div class="row">
										<div class="col-md-12">
											<h2 class="text-cente">Motorcycle Purchase Information</h2>	
										</div>	
									</div>
									<div class="row">
										<div class="col-md-12">
											<label class="fieldLabel">Where did you purchase your motorcycle?</label>
										</div>
									</div>
									<div class="row pl-4">
										<div class="col-md-4">
											<label  style="font-weight:450;">
												<input class="form-check-input" type="radio" name="purchasedLoc" id="rbpurchasedLoc" value="Yamaha 3S Shop"> Yamaha 3S Shop
											</label>
										</div>
										<div class="col-md-4">
											<label  style="font-weight:450;">
												<input class="form-check-input" type="radio" name="purchasedLoc" id="rbpurchasedLoc" value="Multi-Brand Shop"> Multi-Brand Shop
											</label>
										</div>
									</div><HR>
									<div class="row">
										<div class="col-md-12">
											<label class="fieldLabel">What year did you purchase your motorcycle?</label>
										</div>
									</div>
									<div class="row">
										<div class="col-md-4">
											<select class="form-control dropdownStyle" id="purchasedYear">
											</select>
										</div>
									</div>
								</div>
								<div class=col-md-12>
									<div class="row">
										<div class=" col-md-12 text-right">
											<button class="btn btn-primary pull-right" id="btnBackScreen3" type="button">Back</button>
											<button class="btn btn-primary pull-right" id="btnNextScreen3" type="button">Next Step</button>
										</div>
									</div>
								</div>
							</div>

						</div>

					</div>

				</div>

			</div>
		</div>
		<div class="container5 container my-5" >
			<div class="s5" id="screen4" >
				<div class="row">
					<div class="col-lg-3 d-none d-lg-block px-4">
						<div class="row h-75">
							<div class="col">
								<a href="https://www.yamahaclub.com.ph/">
									<img src="./assets/yclub_logo.png" alt="YamahaLogo" width="75%" class="img-fluid">
								</a>
							</div>
							<div class="row " >
								<div class="col" >
									<p style="font-weight:500;" class="text-center">For us to improve our service, we need your support in answering some questions.!</p>
								</div>			
							</div>
						</div>
					</div>
					<div class="col-lg-9 col-md-12">
						<center>
							<label style= "font-family: verdana; font-size: 25px; color: grey;">
							Last Step of Registration
							</label>
						</center>
						<div class="bs-mat1 p-4 bg-gray">
							<div class="row" >
								<h3 class="pl-4">Yamaha Club Terms and Conditions</h3>
								<div class="col-md-12 ">
									<div class="editable scrollabletextbox">
										<div class="terms-container">
											<ol>
												<li>
													<strong>TERMS AND CONDITIONS</strong>
													<p>This website is published and maintained by Yamaha Motor Philippines, Inc. (Yamaha).</p>
													<ol>

														<li>
															1.1
															<strong>Acceptance of terms and conditions:</strong>
															When you access, browse or use this Site, you accept, without limitation or qualification, the terms of use set forth below.  If you do not accept these terms and conditions, you must refrain from using this website.
														</li>
														<li>
															1.2
															<strong>Amendment of terms and conditions: </strong>
															These terms and conditions may be amended in whole or in part by Yamaha from time to time. Amendments will be effective immediately upon posting of the amended terms and conditions on this Website. You are responsible for ensuring you are familiar with the latest terms and conditions. Your continued use of the website represents your agreement to be bound by the terms and conditions as amended.
														</li>
													</ol>
												</li>

												<hr>
												<li>
													<strong>BECOMING A MEMBER</strong>
													<ol >
														<li> 
															2.1 
															<strong>Creating a user login:  </strong>
															You may only register as a member if you are an owner of Yamaha motorcycle and can form a legally binding contract that is enforceable against you. By registering as a member, you warrant that you can form a legally binding contract.

														</li>
														<li>
															2.2
															<strong>Accurate Information:</strong>
															You warrant that you have provided complete, accurate and current personal information when registering as a member. You must maintain and update your personal information held by Yamaha to ensure it is kept updated at all times. Yamaha may call or mail you to verify these details. You must not register as a user under multiple identities or personas (whether false or not). Where Yamaha finds out that you have breach these requirements, it may suspend or terminate the account(s) of such members.

														</li>
														<li>
															2.3
															<strong>Termination of membership: </strong>
															Yamaha reserves the right to decline to register or to terminate your membership without entering into further discussions with you. Without limiting the foregoing, Yamaha may terminate your membership if you breach these terms and conditions, if you impersonate another member, or if we, at our sole discretion, deem your behaviour to be unacceptable. 

														</li>
														<li>
															2.4
															<strong>Security of your login information: </strong>
															You are responsible for keeping your login information, including your email address and password, secret and secure. Without limiting the foregoing, you agree: 
															<ol style="list-style: lower-alpha;">
																<li>
																	not to permit any other person to use your user name or membership; and
																</li>
																<li>
																	not to disclose, or provide to any other person, your password, email or any other information in connection with your membership that may allow them to gain access to your membership.
																</li>
															</ol>
														</li>
														<li>
															2.5
															<strong>Emails/SMS and newsletters: </strong>
															Yamaha will send you emails and/or SMS relating to your membership, and other activities on the Website, and for promoting and marketing other Yamaha events, products and services to you. Yamaha may also send regular electronic newsletters to users on our database. Newsletters and SMS will contain clear and obvious instructions for how you can unsubscribe from the mailing list.
														</li>
													</ol>
												</li>
												<hr>
												<li>	
													<strong>YAMAHA CLUB CARD</strong>
													<ol>
														<li>
															3.1
															<strong>Non-transferable: </strong>
															Yamaha Club card is issued exclusively to the person whose name appears on the application form and card itself.  It is not transferable to any other person(s).  Any member who are found deliberately using their Yamaha Club Card in favour of a third party and/or purchases made by another customer will have their Yamaha Club card automatically voided and all benefits and privileges which arose therefrom shall also be forfeited.
														</li>
														<li>
															3.2
															<strong>Earning of Points:  </strong>
															A member can earn points by:
															<ol style="list-style: lower-alpha;">
																<li>
																	One (1) Yamaha Club point for every One Hundred Pesos (Php100.00) worth of purchases, based on SRP, of Yamaha genuine parts, apparel or helmet in selected Yamaha 3S Shop nationwide.  (Click here to see list of Yamaha 3S Shops)
																</li>
																<li>
																	Participating in announced Yamaha Club Events and Yamaha activities
																</li>
															</ol>
															If Yamaha Club points are not reflected on the account of the Yamaha Club member, the member must request for retroactive crediting of missing Yamaha club points within six (6) months from the earning date.  Retroactivation of points shall be processed within thirty (30) days upon receipt of the validated request. 
														</li>
														<li>
															3.3
															<strong>Points Redemption: </strong>
															All Yamaha Club points can be used in the following:
															<ul>
																<li>Free pass in Yamaha events</li>
																<li>Touring activities</li>
																<li>Limited edition items</li>
																<li>Redeeming Partner Companies</li>
																<li>Buying Yamaha genuine parts, apparel and helmet</li>
															</ul>
														</li>
														<li>
															3.4
															<strong>Valid ID:</strong>
															A member must present a valid government issued ID upon purchase or redemption.
														</li>
														<li>
															3.5
															<strong>Lost or stolen:</strong>
															Lost or stolen Yamaha Club card must be reported to Yamaha management immediately.  A new card will be issued after presenting an affidavit of loss to that effect and after purchasing a minimum of One Hundred Fifty Pesos (Php150.00) Yamaha genuine parts, apparel or helmet in selected Yamaha 3S Shops.
														</li>
														<li>
															3.6
															<strong>Expiration:</strong>
															Yamaha Club card shall expire after two (2) years from date of membership.  All expired Yamaha Club card may be renewed after purchasing a minimum of One Hundred Fifty Pesos (Php150.00) Yamaha genuine parts, apparel or helmet in selected Yamaha 3S Shops.  Unredeemed points shall be transferred to the new Yamaha Club card.
														</li>
													</ol>


												</li>
												<hr>
												<li>
													<strong>GENERAL PROVISIONS</strong>
													<ol>
														<li>
															4.1.
															<strong>System Integrity: </strong> Yamaha will use its reasonable endeavours to ensure the availability of the Website, subject to any downtime required for maintenance and circumstances outside of its control.  However, Yamaha takes no responsibility for any system unavailability, or for any loss that is incurred as a result of Website being unavailable. Further, Yamaha assumes no responsibility for the corruption of any data or information held by Yamaha.

														</li>

														<li>
															4.2.
															<strong>Force Majeure: </strong> Yamaha has no liability for any lack of performance, unavailability or failure of the Website, or for any failure of Yamaha to comply with these terms and conditions where the same arises from any cause reasonably beyond the control of Yamaha.

														</li>

														<li>
															4.3.
															<strong>No Waiver: </strong> If we do not exercise or enforce any right available to us under these terms and conditions, it does not constitute a waiver of those rights. 

														</li>

														<li>
															4.4.	<strong>Partial Invalidity: </strong>If any provision of these terms and conditions becomes or is held to be invalid, unenforceable or illegal for any reason, and in any respect, that provision shall be severed from the remaining terms and conditions, which shall continue in full force and effect.

														</li>

														<li>
															4.5. <strong> Governing Law:  </strong> These Terms and Conditions will be governed by and construed in accordance with the laws of the Philippines, without giving effect to any principles of conflicts of laws. You consent to exclusive jurisdiction of Makati City with respect to any disputes arising from, related to or in connection with this website.

														</li>

														<li>
															4.6. 
															<strong> Intellectual Property Rights:  </strong> Yamaha (and its licensors, as the case may be) owns all proprietary and intellectual property rights in the Website (including text, graphics, logos, icons and sound recordings) and the software and other material underlying and forming part of the Website.  You may not without our prior written permission, in any form or by any means:
															<ol style="list-style: lower-alpha;">
																<li>
																	Adapt, reproduce, copy, store, distribute, print, display, perform, publish or create derivative works from any part of this Website; or
																</li>
																<li>
																	Commercialize, copy, or on-sell any information, or items obtained from any part of this Website.
																</li>
															</ol>

														</li>

														<li>
															4.7. <strong> Privacy: </strong>  Yamaha collects personal information about you through your use of the Website, including:
															<ul>
																<li>your registration details; and</li>
																<li>information relating to your use of the Website and the content you access.</li>
															</ul>


															You agree that Yamaha may use this personal information to assist us to provide services to you, for internal research purposes, to verify your identity, to enforce or apply our terms and conditions, to protect the rights, property, or safety of Yamaha, our users, or others, for promoting and marketing other Yamaha services to you, and for any other use that you authorize.

															We will not sell or allow third parties to access your personal information without your consent. We release account and other personal information only when we believe release is appropriate to comply with law; facilitate court proceedings; enforce or apply our terms and conditions; or protect the rights, property, or safety of Yamaha, our users, or others. (Click here for the detailed Privacy Policy)

														</li>

														<li>
															4.8. <strong>Questions and Comments: </strong>	If you have any questions or recommendations, please email us at <strong>yamahaclubhelpdesk@yamaha-motor.com.ph</strong> or contact us at 
															<strong>(+63) 917-584-2904</strong>.
														</li>
													</ol>
												</li>
											</ol>


										</div>
									</div>
								</div>
							</div>
							<div class="row pl-2">
								<div class="col-md-12">	
									<input type="checkbox" name="" value="yes" id="eulaChBox"><label for="eulaChBox" class="fieldLabel">&nbsp; &nbsp;I agree with the terms and conditions</label>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12 text-right mt-2">	
									<button class="btn btn-primary pull-right" id="btnBackScreen4" type="button">Back</button>
									<button class="btn btn-primary pull-right" id="btnRegister">Register</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	{{-- API URL --}}
	<input type="text" id="api_url" value="{{config('app.api_url')}}" hidden=""> 
</body>
</html>