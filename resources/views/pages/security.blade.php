@extends('layouts.master')
@section('title','Security')

@section('custom_css') 
	<link rel="stylesheet" href="/css/plugins/preloader.css">
@endsection

@section('custom_js')   
	<script src="/js/plugins/jquery.preloader.min.js"></script>
	<script src="/js/pages/security.js"></script>
@endsection

@section('content')
	<div class="container" id="content">
		<div class="row m-2 mb-5 mt-5">
			<div class="col-sm-12 col-md-12 text-center p-2">
				<h2>Account Security</h2>
			</div>  

			<div class="col-sm-12 col-md-12 p-2">
				<div class="row justify-content-center">
				    <div class="col-sm-12 col-md-8">
				      	<div class="form-group">
				      		<label>Username</label>
				      		<input type="text" class="form-control form-control-sm" disabled id="username" value="...">
				      	</div>
				    </div> 
				</div>
				<div class="row justify-content-center">
				    <div class="col-sm-12 col-md-8">
				    	<div class="row">
				    		<div class="col-sm-12 col-md-6">
				    		  	<div class="form-group">
				    		  		<label>New Password</label>
				    		  		<input id="password" type="password" class="form-control form-control-sm">
				    		  	</div>
				    		</div> 
				    		<div class="col-sm-12 col-md-6">
				    		  	<div class="form-group">
				    		  		<label>Confirm Password</label>
				    		  		<input id="re-password" type="password" class="form-control form-control-sm">
				    		  	</div>
				    		</div> 
				    		<div class="col-sm-12 col-md-12">
				    			<button id="btn_save" class="btn btn-sm btn-primary">Save changes</button>
				    			<a href="/profile" class="btn btn-sm btn-primary">Back</a> 
				    		</div>
				    	</div> 
				    </div>
				</div>
			</div> 
		</div> 
	</div>
@endsection