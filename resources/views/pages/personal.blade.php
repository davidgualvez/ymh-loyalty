@extends('layouts.master')
@section('title','Personal Information')

@section('custom_css') 
@endsection

@section('custom_js')   
@endsection

@section('content')
	<div class="container">
		<div class="row m-2">
			<div class="col col-sm-12 col-md-12 text-center p-2">
				<h2>Personal Information</h2>
			</div> 

			<div class="col-sm-12 col-md-12 p-2">
				<div class="row justify-content-center"> 
				    <div class="col-sm-12 col-md-12">
				    	<div class="row"> 
				    		<div class="col-sm-12 col-md-12">
								<div class="row">
									<div class="col-4">
										<div class="form-group">
											<label>First Name</label>
											<input type="text" class="form-control form-control-sm">
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label>Middle Name</label>
											<input type="text" class="form-control form-control-sm">
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label>Last Name</label>
											<input type="text" class="form-control form-control-sm">
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label>Birthday</label>
											<input type="text" class="form-control form-control-sm">
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label>Email Address</label>
											<input type="text" class="form-control form-control-sm">
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label>Contact Number</label>
											<input type="text" class="form-control form-control-sm">
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label>Home Number</label>
											<input type="text" class="form-control form-control-sm">
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label>Street</label>
											<input type="text" class="form-control form-control-sm">
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label>Barangay</label>
											<input type="text" class="form-control form-control-sm">
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label>Region</label>
											<input type="text" class="form-control form-control-sm">
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label>Province</label>
											<input type="text" class="form-control form-control-sm">
										</div>
									</div>
									<div class="col-4">
										<div class="form-group">
											<label>City</label>
											<input type="text" class="form-control form-control-sm">
										</div>
									</div>
									<div class="col-12">
										<div class="form-group">
											<label>3S Shop</label>
											<input type="text" class="form-control form-control-sm">
										</div>
									</div>
								</div>
				    		</div>
				    		<div class="col-sm-12 col-md-12">
				    			<button class="btn btn-sm btn-primary">Save changes</button>
				    			<a href="/profile" class="btn btn-sm btn-primary">Back</a> 
				    		</div>
				    	</div> 
				    </div>
				</div>
			</div>
		</div>
	</div>
@endsection