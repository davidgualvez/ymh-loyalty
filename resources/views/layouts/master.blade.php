<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge"> 
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<link rel="shortcut icon" href="/assets/favicon.png" type="image/x-icon">
	<title>@yield('title') | YAMAHA LOYALTY</title>
	<!-- global css -->
	<link rel="stylesheet" href="/css/app.css">
	<link rel="stylesheet" href="/css/all.css">
	<link rel="stylesheet" href="/css/styles.css">
	<link rel="stylesheet" href="/css/plugins/iziToast.min.css">
	
	<!-- custom css -->
	@yield('custom_css')
</head>
<body>

	<!-- top nav -->
	@include('layouts.navbar')
	
	<!-- content -->
	<main>
		@yield('content')			
	</main>

	<!-- footer -->
	@include('layouts.footer')

	{{-- API URL --}}
	<input type="text" id="api_url" value="{{config('app.api_url')}}" hidden="">

	{{-- JS --}}
	<script src="/js/app.js"></script>
	<script src="/js/bootstrap.min.js"></script>
	<script src="/js/plugins/iziToast.min.js"></script>
	<script src="/js/settings.js"></script>
	<!-- custom scripts -->
	@yield('custom_js')
</body>
</html>