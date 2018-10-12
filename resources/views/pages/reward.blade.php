@extends('layouts.master')
@section('title', 'Rewards')

@section('custom_css')
	<style>
		.gallery-wrap .img-big-wrap img {
		    height: 450px;
		    width: auto;
		    display: inline-block;
		    cursor: zoom-in;
		}


		.gallery-wrap .img-small-wrap .item-gallery {
		    width: 60px;
		    height: 60px;
		    border: 1px solid #ddd;
		    margin: 7px 2px;
		    display: inline-block;
		    overflow: hidden;
		}

		.gallery-wrap .img-small-wrap {
		    text-align: center;
		}
		.gallery-wrap .img-small-wrap img {
		    max-width: 100%;
		    max-height: 100%;
		    object-fit: cover;
		    border-radius: 4px;
		    cursor: zoom-in;
		}
	</style>
	<link rel="stylesheet" href="/css/plugins/jquery-confirm.min.css">
	<link rel="stylesheet" type="text/css" href="/css/plugins/jquery.fancybox.min.css">
	<link rel="stylesheet" href="/css/plugins/preloader.css"> 
@endsection

@section('custom_js') 
	<script src="/js/plugins/jquery-confirm.min.js"></script>
 	<script src="/js/plugins/jquery.preloader.min.js"></script>
	<script src="/js/plugins/jquery.fancybox.min.js"></script>
	<script src="/js/pages/reward.js"></script>
@endsection

@section('content')
<div class="container">
	<p id="if_null" class="lead p-5 text-center" style="display: none;">
	  Page not found
	</p>
	<div id="if_not_null" class="card m-3" style="display: none;">
		<div class="row">
			<aside class="col-sm-5 border-right">
				<article class="gallery-wrap"> 
					<div class="img-big-wrap">
						<div> <a id="m-v" href="" data-fancybox data-caption="Main Picture"><img src="" class="w-100"></a></div>
					</div> <!-- slider-product.// -->
					<div class="img-small-wrap">
						<div class="item-gallery"><a id="l-v" data-caption="Left View" href="" data-fancybox="gallery"><img src=""></a></div> 
						<div class="item-gallery"><a id="r-v" data-caption="Right View" href="" data-fancybox="gallery"><img src=""></a></div>
						<div class="item-gallery"><a id="t-v" data-caption="Top View" href="" data-fancybox="gallery"><img src=""></a></div>
					</div> <!-- slider-nav.// -->
				</article> <!-- gallery-wrap .end// -->
			</aside>
			<aside class="col-sm-7">
				<article class="card-body p-5">
					<h3 class="title mb-3" id="r-name">title</h3>

					<p class="price-detail-wrap"> 
						<span class="price h5"> 
							<span class="currency">Y-Club Points </span><span class="num" id="r-points">0.00</span>
						</span> 
					</p> <!-- price-detail-wrap .// -->
					<dl class="item-property">
						<dt>Description</dt>
						<dd><p id="r-description">...</p></dd>
					</dl> 
					<hr>
					<button class="btn btn-outline-primary text-uppercase" id="btn_redeem"><i class="fas fa-shopping-basket"></i> Redeem Now</button> 
				</article> <!-- card-body.// -->
			</aside> <!-- col.// -->
		</div> <!-- row.// -->
	</div> 
</div> 
@endsection

