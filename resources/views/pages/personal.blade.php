@extends('layouts.master')
@section('title','Personal Information')

@section('custom_css') 
	<link rel="stylesheet" href="/css/plugins/preloader.css">
@endsection

@section('custom_js')   
	<script src="/js/plugins/jquery.preloader.min.js"></script>
	<script src="/js/pages/personal.js"></script>
@endsection
 
@section('content')
	<div class="container" id="">
		<div class="row m-2">
			<div class="col col-sm-12 col-md-12 text-center p-2">
				<h2>Personal Information</h2> 
			</div> 

			<div class="col-sm-12 col-md-12 p-2  content">
				<div class="row justify-content-center"> 
				    <div class="col-sm-12 col-md-12">
				    	<div class="row"> 
				    		<div class="col-sm-12 col-md-12">
								<div class="row">
									<div class="col-4">
										<div class="form-group">
											<label>First Name</label>
											<input id="first_name" type="text" class="form-control form-control-sm">
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label>Middle Name</label>
											<input id="middle_name" type="text" class="form-control form-control-sm">
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label>Last Name</label>
											<input id="last_name" type="text" class="form-control form-control-sm">
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label>Birthday</label>
											<input id="bdate" type="date" class="form-control form-control-sm">
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label>Email Address</label>
											<input id="email_address" type="email" class="form-control form-control-sm">
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label>Mobile Number</label>
											<input id="mobile_number" type="text" class="form-control form-control-sm">
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label>Home Number</label>
											<input id="contact_number" type="text" class="form-control form-control-sm">
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label>Street</label>
											<input id="street" type="text" class="form-control form-control-sm">
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label>Barangay</label>
											<input id="barangay" type="text" class="form-control form-control-sm">
										</div>
									</div>
									{{-- <div class="col-4">
										<div class="form-group">
											<label>Region</label>
											<input id="region" type="text" class="form-control form-control-sm">
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label>Province</label>
											<input id="province" type="text" class="form-control form-control-sm">
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label>City</label>
											<input id="city" type="text" class="form-control form-control-sm">
										</div>
									</div> --}}
									{{-- test --}}
									<div class="col-4">
										<div class="form-group">
											<label for="regions">Region</label> 
											<select class="form-control  form-control-sm" id="regions"> 
											</select> 
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label for="provinces">Province</label> 
											<select class="form-control  form-control-sm" id="provinces"> 
											</select> 
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label for="cities">Cities</label> 
											<select class="form-control  form-control-sm" id="cities"> 
											</select> 
										</div>
									</div>
									{{-- end of test --}}
									<div class="col-12">
										<div class="form-group">
											<label for="cities">3S Shop</label> 
											<select class="form-control  form-control-sm" id="sites"> 
											</select> 
										</div>
									</div>
									{{-- <div class="col-12">
										<div class="form-group">
											<label>3S Shop</label>
											<input id="site" type="text" class="form-control form-control-sm">
										</div>
									</div> --}}
								</div>
				    		</div>
				    		<div class="col-sm-12 col-md-12">
				    			<button class="btn btn-sm btn-primary" id="btnSave">Save changes</button>
				    			<a href="/profile" class="btn btn-sm btn-primary">Back</a> 
				    		</div>
				    	</div> 
				    </div>
				</div>
			</div>
		</div>
	</div>
@endsection