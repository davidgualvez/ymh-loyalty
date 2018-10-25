@extends('layouts.master')
@section('title', 'Shipment')

@section('custom_css')
	<link rel="stylesheet" type="text/css" href="/css/plugins/easy-autocomplete.min.css">
	<link rel="stylesheet" href="/css/plugins/preloader.css">
	<link rel="stylesheet" type="text/css" href="/css/pages/shipment.css">
@endsection

@section('custom_js')
	<script src="/js/plugins/easy-autocomplete.min.js"></script>
	<script src="/js/plugins/jquery.preloader.min.js"></script>
	<script src="/js/pages/shipment.js"></script>
@endsection

@section('content')
	<div class="container-fluid pt-5 pb-5"> 
		<div class="row">
			<div class="col-md-8 col-sm-7">
				<h3 class="text-center mb-4" >SHIPMENT</h3> 
				<div class="card mt-3 w-75 mx-auto my-auto ">
					<div class="card-body shipment"> 
							<div class="form-group">
								<label for="	"></label>
								<textarea class="form-control" id="shipment_address" rows="3" placeholder="Complete Address (House No., Street, Brangay, City)
								"></textarea>
								<div class="feedback"></div>
							</div>
							<div class="form-group">
								<label for="" class="sr-only"></label>
								<!-- ------------ --> 
								<input type="text" class="form-control" id="regions" aria-describedby="" placeholder="Please select Region..">
								<input type="text" id="region_id" hidden=""> 
								<!-- ------------ --> 
								<div class="feedback"></div>
							</div>
							<div class="form-group">
								<label for="" class="sr-only"></label> 
								<!-- ------------ --> 
								<input type="text" class="form-control" id="cities" aria-describedby="" placeholder="City">
                                <input type="text" id="city_id" hidden=""> 
                                <!-- ------------ -->
								<div class="feedback"></div>
							</div>
							<div class="form-group">
								<label for="" class="sr-only"></label>
								<input type="text" class="form-control" id="contact_number" aria-describedby="" placeholder="Contact Number">
								<div class="feedback"></div>
							</div>
							
							<button id="btn_submit" type="submit" class="btn btn-primary">Submit</button> 
					</div>
				</div>

			</div>
			<div class="col-md-4 col-sm-5 mt-3">

				<div class="card w-75 custom mx-auto" >
					<div class="card-header text-center">
						TOP REDEEMABLE ITEM
					</div>
					<img class="card-img-top h-100" src="/assets/clubcard3.png" width="" alt="Card image cap">
					<div class="card-body text-center">
						<div class="card-title">
							NOT YET WORKING 
							(PHP 0.00)
						</div>
						<p class="card-text">0.00 YAMAHA CLUB POINTS</p>
						<a href="" class="btn btn-sm btn-block btn-primary">Redeem</a>
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection
