@extends('layouts.master')
@section('title', 'Rewards')

@section('custom_css')
<style>
	.item{ 
		text-align: center;
		 padding : 0px 0px 10px 0px; 
		box-shadow: 0px 0px 3px 0px #bdbdbd;
	}
	.item > img{
		display: block;
		margin-left:  auto; 
		margin-right:  auto;
		width: 75%;
		height:150px;
		object-fit: scale-down;
	}
 
	.item > .product_name{
		font-size: 1.2em;
	}
	/* .item > .r-points {
		font-size: .7em;
	} */
	.points{
		font-weight: 700;
	}
	.r-points{
		font-size: .8em;
	}
</style>

@endsection

@section('content') 
<div class="container-fluid"> 
	<div class="row" style="padding-top:10px;">
		
		{{-- START OF SIDEBAR --}}
		<div class="col-sm-12 col-md-2 col-lg-2">
			<div class="row">
				<div class="form-group col-md-12 col-sm-6">
					<label for="search">Search Item:</label>
					<div class="input-group input-group-sm mb-3">
						<input id="search_val" type="text" class="form-control" placeholder="Search item here...">
						<div class="input-group-append">
							<button id="btn_search" class="btn btn-outline-secondary" type="button">Search</button>
						</div>
					</div>
				</div>
				<div class="form-group col-md-12 col-sm-6">
					<label for="" class="">Sort by Points</label>
					<select  id="sort_by_points" class="form-control form-control-sm">
						<option value="asc">Ascending</option>
						<option value="desc">Descending</option>
					</select> 
				</div>

				<div class="col-sm-6 col-md-12">
					MANUFACTURERS
					<div id="manufacturers">
						{{-- <div class="form-check">
						  <input class="form-check-input" type="radio" name="manufacturer" id="exampleRadios1" value="option1" checked>
						  <label class="form-check-label" for="exampleRadios1">
						    All
						  </label>
						</div>  --}}
					</div>
					
				</div>
				<div class="col-sm-6 col-md-12"> 
					 <div style="text-align:center; margin: 10px 0px 10px 0px; border:1px solid gray; padding:10px;">
						 <h6>TOP REDEEMABLE ITEM</h6>
						 <img src="/assets/clubcard.jpg" alt="" class="w-100" height="150">
						 <strong>NOT YET WORKING (Php500)</strong> 
						 <div>100 yamaha points</div>
						 <div style="padding:0px 20px 0px 20px;">
							<button class="btn btn-sm btn-seconday w-100">Redeem</button>
						 </div>
					 </div>
				</div>
			</div> 
		</div>
		{{-- END OF SIDEBAR --}}

		{{-- START OF ITEMS --}}
		<div class="col-sm-12 col-md-10 col-lg-10"> 
			<div class="row"> 
				<div class="col-sm-12 col-md-12">
					<strong>REDEEMABLE ITEMS</strong>
					<div class="form-inline float-right">
						<div class="form-group">
							<label for="limit">Limit &nbsp;</label> 
							<select id="limit" class="custom-select custom-select-sm form-control form-control-sm">
								<option value="12">12</option>
								<option value="24">24</option>
								<option value="60">60</option>
								<option value="120">120</option>
							</select> 
						</div> 
					</div> 
				</div> 
			</div>
			<div class="row .items p-3" id="items"> 
				{{-- <div class="col-sm-4 col-md-2 col-lg-2" style=" padding:5px;"> 
					<div class="item">
						<img src="/assets/p1.jpg" alt="">
						<div class="product_name">test name</div>
						<div class="r-points"> <label class="points">100</label> YAMAHA CLUB POINTS</div>
						<button class="btn btn-sm btn-primary w-75">redeem</button> 
					</div>   //asdasd
				</div>  --}}
			 </div>
			 <div class="row">
				<div class="col-sm-12 col-md-6">
					<div class="dataTables_length">
						page-<strong id="current_page">1</strong>
					</div>
				</div>
				<div class="col-sm-12 col-md-6">
					<nav aria-label="..." class="float-right">
						<ul class="pagination pagination-sm">
							<li class="page-item disabled"> 
								<button class="page-link" id="prev_page_url">Previous</button>
							</li> 
							<li class="page-item">
								<button class="page-link" id="next_page_url">Next</button> 
							</li>
						</ul>
					</nav> 
				</div>
			</div> 
		{{-- END OF ITEMS --}}  
	</div> 
</div>
@endsection

@section('custom_js') 
<script src="/js/plugins/jquery.preloader.min.js"></script>
<script src="/js/pages/rewards.js"></script>
@endsection


