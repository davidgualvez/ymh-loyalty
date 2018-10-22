@extends('layouts.master')
@section('title','Motors')

@section('custom_css') 
	<link rel="stylesheet" href="/css/plugins/preloader.css">
@endsection

@section('custom_js')   
	<script src="/js/plugins/jquery.preloader.min.js"></script>
	<script src="/js/pages/motors.js"></script>
@endsection

@section('content')
	<div class="container" id="content">
		<div class="row m-2 mb-5 mt-5">
			<div class="col col-sm-12 col-md-12 text-center p-2">
				<h2>Motorcycle Information</h2>
			</div>
			
			<div class="col-sm-12 col-md-12 p-2">
				<div class="row justify-content-center"> 
				    <div class="col-sm-12 col-md-8">
				    	<div class="row">
				    		<div class="col-sm-12 col-md-12">
				    			<div class="form-group">
				    				<button class="btn btn-sm btn-primary" data-toggle="modal" data-target="#modal-new-motor"><i class="fa fa-plus"></i>&nbsp;Add new</button> 
				    			</div>
				    		</div>
				    		
				    		{{-- MOTOR LIST --}} 
			    			<div class="col-sm-12 col-md-6">
			    			  	<div class="form-group" id="motor-engine-listing">
			    			  		<label>Main Engine Number</label>
			    			  		{{-- <input type="text" class="form-control form-control-sm" disabled> --}}
			    			  	</div>
			    			</div> 
			    			<div class="col-sm-12 col-md-6">
			    			  	<div class="form-group" id="motor-chassis-listing">
			    			  		<label>Main Chassis Number</label>
			    			  		{{-- <input type="text" class="form-control form-control-sm" disabled> --}}
			    			  	</div>
			    			</div>  

				    		{{-- END OF MOTOR LIST --}}
				    		<div class="col-sm-12 col-md-12"> 
				    			<a href="/profile" class="btn btn-sm btn-primary">Back</a> 
				    		</div>

				    	</div> 
				    </div>
				</div>
			</div>  
		</div> 

		<!-- Update Modal -->
		<div class="modal fade" id="modal-new-motor" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		  <div class="modal-dialog modal-dialog-centered" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="exampleModalLongTitle">Additional Motor's</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div class="modal-body"> 
		      	<div class="p-2" id="new-motor-content">
		      		<div class="form-group">
		      			<label>Engine Number</label>
		      			<input id="engine" type="text" class="form-control form-control-sm">
		      		</div>
		      		<div class="form-group">
		      			<label>Chassis Number</label>
		      			<input id="chassis" type="text" class="form-control form-control-sm">
		      		</div>
		      	</div>
		      </div>
		      <div class="modal-footer">
		        {{-- <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Close</button> --}}
		        <button id="btn_add" type="button" class="btn btn-sm btn-primary">Add changes</button>
		      </div>
		    </div>
		  </div>
		</div> 
	</div>
@endsection