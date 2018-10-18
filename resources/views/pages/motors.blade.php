@extends('layouts.master')
@section('title','Motors')

@section('custom_css') 
@endsection

@section('custom_js')   
@endsection

@section('content')
	<div class="container">
		<div class="row m-2">
			<div class="col col-sm-12 col-md-12 text-center p-2">
				<h2>Motorcycle Information</h2>
			</div>
			
			<div class="col-sm-12 col-md-12 p-2">
				<div class="row justify-content-center"> 
				    <div class="col-sm-12 col-md-8">
				    	<div class="row">
				    		<div class="col-sm-12 col-md-12">
				    			<div class="form-group">
				    				<button class="btn btn-sm btn-primary"><i class="fa fa-plus"></i>&nbsp;Add new</button> 
				    			</div>
				    		</div>
				    		<div class="col-sm-12 col-md-6">
				    		  	<div class="form-group">
				    		  		<label>Main Engine Number</label>
				    		  		<input type="text" class="form-control form-control-sm" disabled>
				    		  	</div>
				    		</div> 
				    		<div class="col-sm-12 col-md-6">
				    		  	<div class="form-group">
				    		  		<label>Main Chassis Number</label>
				    		  		<input type="text" class="form-control form-control-sm" disabled>
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