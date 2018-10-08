@extends('layouts.master')
@section('title', 'Shipment')

@section('custom_css')
	<style>
		@media (max-width: 1114px) {
			.custom.card{
				width:75%!important;
			}
		}

		@media (max-width: 780px){
			.custom.card{
				width:95%!important;
			}
		}
	</style>
@endsection

@section('content')
<div class="container-fluid pt-5" style="margin-top: 63px; background: rgb(242,242,242); ">
	<h3 class="text-center mb-4" >SHIPMENT</h3>
	<div class="row">
		<div class="col-md-8 col-sm-7">
			<div class="card mt-3 w-75 mx-auto my-auto ">
				<div class="card-body">
					<form>
						<div class="form-group">
							<label for="	"></label>
							<textarea class="form-control" id="" rows="3" placeholder="Complete Address (House No., Street, Brangay, City)
							"></textarea>
							<div class="feedback"></div>
						</div>
						<div class="form-group">
							<label for="" class="sr-only"></label>
							<input type="text" class="form-control" id="" aria-describedby="" placeholder="Region">
							<div class="feedback"></div>
						</div>
						<div class="form-group">
							<label for="" class="sr-only"></label>
							<input type="text" class="form-control" id="" aria-describedby="" placeholder="City">
							<div class="feedback"></div>
						</div>
						<div class="form-group">
							<label for="" class="sr-only"></label>
							<input type="text" class="form-control" id="" aria-describedby="" placeholder="Contact Number">
							<div class="feedback"></div>
						</div>
						
						<button type="submit" class="btn btn-primary">Submit</button>
					</form>	
				</div>
			</div>

		</div>
		<div class="col-md-4 col-sm-5 mt-3">

			<div class="card w-50 custom mx-auto" >
				<div class="card-header text-center">
					TOP REDEEMABLE ITEM
				</div>
				<img class="card-img-top h-100" src="/assets/clubcard3.png" width="" alt="Card image cap">
				<div class="card-body text-center">
					<div class="card-title">
						PETRON VALUE CARD 
						(PHP 500)
					</div>
					<p class="card-text">100 YAMAHA CLUB POINTS</p>
					<a href="" class="btn btn-sm btn-block btn-primary">Redeem</a>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection
