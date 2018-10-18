@extends('layouts.master')
@section('title','Settings')

@section('custom_css') 
@endsection

@section('custom_js')   
@endsection

@section('content')
	<div class="container">
		<div class="row m-5">
			<div class="col-sm-12 col-md-12 text-center p-3">
				<h2>EDIT MY ACCOUNT</h2>
			</div>
			<div class="col-sm-12 col-md-4">
				<div class="box text-center p-3">
					<strong>Personal Information</strong>
					<div class="p-2">
						<a href="/profile/personal-information">
							<img class="mr-3 rounded-circle img-fluid"  height="150" src="/assets/Resume_96px.png" alt="Generic placeholder image">
						</a> 
					</div>
					<p>Edit your Personal Information</p>
				</div> 
			</div>
			<div class="col-sm-12 col-md-4 ">
				<div class="box text-center p-3">
					<strong>Account Security</strong>
					<div class="p-2">
						<a href="/profile/security">
							<img class="mr-3 rounded-circle img-fluid"  height="150" src="/assets/Protect_96px.png" alt="Generic placeholder image">
						</a> 
					</div>
					<p>Update your account security</p>
				</div> 
			</div>
			<div class="col-sm-12 col-md-4">
				<div class="box text-center p-3">
					<strong>Motorcycle Information</strong>
					<div class="p-2">
						<a href="/profile/motors">
							<img class="mr-3 rounded-circle img-fluid"  height="150" src="/assets/Motorcycle_96px.png" alt="Generic placeholder image">
						</a> 
					</div>
					<p>Add/Remove motorcycles on your account</p>
				</div> 
			</div>
		</div>
	</div>
@endsection