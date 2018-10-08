@extends('layouts.master')
@section('title', 'Rewards')

@section('custom_css')
<style>
@media(min-width: 992px ){
	#filter{
		display: none;
	}
}

#filter{
/*	position: fixed;
	top:72px;
	right: 0;
	left:0;
	z-index: 1000;*/
	margin-top: 75px;
	background: #f0f0f2;
	/*margin-bottom: 501px ;*/
}


#rewards .card-columns {
   column-count:5;
}

</style>

@endsection

@section('content')

<div class="container-fluid" style="margin-top:63px;">
	<!-- for filter search -->
	<nav id="filter" class="container navbar navbar-expand-lg navbar-light  mb-2 bs-mat2"  style=""> 
		<!-- Navbar brand -->
		<span class="navbar-brand">Filter Search:</span>

		<!-- Collapse button -->
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="true" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<!-- Collapsible content -->
		<div class="navbar-collapse collapse" id="basicExampleNav" style="">

			<div class="mt-3">
				<div class="input-group input-group-sm ">
					<input type="text" class="form-control " id="txt_productname" placeholder="Search Items" aria-describedby="basic-addon2">
					<div class="input-group-append">
						<button class="btn btn-outline-secondary" type="button" id="btn_go">Go!</button>
					</div>
				</div>
				<div class="form-group ">
					<label for="" class="text-light">SORT BY POINTS</label>
					<select name="" id="" class="form-control form-control-sm">
						<option value="">Ascending</option>
						<option value="">Descending</option>
					</select>
				</div>
				<div class="form-row">	
					<div class="form-group col-md-12 manufacturer">	
						<label>MANUFACTURERS</label>
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="" name="">
							<label class="form-check-label" for="">
								All
							</label>
						</div>
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="" name="">
							<label class="form-check-label" for="">
								VS1
							</label>
						</div>
						<div class="form-check form-check">
							<input class="form-check-input" type="checkbox" value="" id="" name="">
							<label class="form-check-label" for="">
								MOTOTEK
							</label>
						</div>
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="" name="">
							<label class="form-check-label" for="">
								PETRON
							</label>
						</div>
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="" name="">
							<label class="form-check-label" for="">
								RACING BOY
							</label>
						</div>
					</div>
				</div>

			</div>
		</div>
		<!-- Collapsible content -->
	</nav>

	<div class="row">
		<div class="col-md-2 pt-4 d-none d-lg-block" >
			<div class="form-row">
				<div class="form-group col-md-12 col-sm-6">
					<div class="input-group input-group-sm">
						<input type="text" class="form-control" placeholder="Search Items" aria-label="Search Items" aria-describedby="basic-addon2">
						<div class="input-group-append" >
							<span class="input-group-text" id="" style=""><i class="fas fa-search"></i></span>
						</div>
					</div>
				</div>
				<div class="form-group col-md-12 col-sm-6">
					<label for="" class="">SORT BY POINTS</label>
					<select name="" id="" class="form-control form-control-sm">
						<option value="">Ascending</option>
						<option value="">Descending</option>
					</select>
				</div>
			</div>
			
			<div class="form-row">	
				<div class="form-group col-md-12 manucturer">	
					<label>MANUFACTURERS</label>
					<div class="form-check">
						<input class="form-check-input" type="checkbox" value="" id="" name="">
						<label class="form-check-label" for="">
							All
						</label>
					</div>
					<div class="form-check">
						<input class="form-check-input" type="checkbox" value="" id="" name="">
						<label class="form-check-label" for="">
							VS1
						</label>
					</div>
					<div class="form-check">
						<input class="form-check-input" type="checkbox" value="" id="" name="">
						<label class="form-check-label" for="">
							MOTOTEK
						</label>
					</div>
					<div class="form-check">
						<input class="form-check-input" type="checkbox" value="" id="" name="">
						<label class="form-check-label" for="">
							PETRON
						</label>
					</div>
					<div class="form-check">
						<input class="form-check-input" type="checkbox" value="" id="" name="">
						<label class="form-check-label" for="">
							RACING BOY
						</label>
					</div>
				</div>
			</div>
		</div>
		

		<!-- products -->

		<div class="col-md-10 d-flex align-self-center">
			<div class="container-fluid py-5" id="rewards">
				<div class="row">
					<div class="col-md-12">
						<div class="card-columns">
							<div class="card">
								<img class="card-img-top " src="/assets/p1.jpg" alt="Card image cap">
								<div class="card-body">
									<div class="card-title">
										a	
									</div>
									<p>80 PTS</p>
									<a href="" class="btn btn-sm btn-block btn-secondary">Redeem</a>
								</div>
							</div>
							<div class="card">
								<img class="card-img-top " src="/assets/p1.jpg" alt="Card image cap">
								<div class="card-body">
									<div class="card-title">
										b
									</div>
									<p>80 PTS</p>
									<a href="" class="btn btn-sm btn-block btn-secondary">Redeem</a>
								</div>
							</div>
							<div class="card">
								<img class="card-img-top " src="/assets/p1.jpg" alt="Card image cap">
								<div class="card-body">
									<div class="card-title">
										c
									</div>
									<p>Lorem ipsum dolor </p>
									<a href="" class="btn btn-sm btn-block btn-secondary">Redeem</a>
								</div>
							</div>
							<div class="card">
								<img class="card-img-top " src="/assets/p1.jpg" alt="Card image cap">
								<div class="card-body">
									<div class="card-title">
										d
									</div>
									<p>80 PTS</p>
									<a href="" class="btn btn-sm btn-block btn-secondary">Redeem</a>
								</div>
							</div>
							<div class="card">
								<img class="card-img-top " src="/assets/p1.jpg" alt="Card image cap">
								<div class="card-body">
									<div class="card-title">
										e
									</div>
									<p>Lorem ipsum dolor </p>
									<a href="" class="btn btn-sm btn-block btn-secondary">Redeem</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</div>
@endsection

@section('custom_js')
<script>
	
</script>
@endsection
