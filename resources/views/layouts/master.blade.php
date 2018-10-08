<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>@yield('title') | YAMAHA LOYALTY</title>
	<!-- global css -->
	<link rel="stylesheet" href="/css/app.css">
	<link rel="stylesheet" href="/css/all.css">
	<link rel="stylesheet" href="/css/styles.css">
	
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
	
	<script src="/js/app.js"></script>
	<script src="/js/bootstrap.min.js"></script>
	
	<!-- custom scripts -->
	@section('custom_js')
</body>
</html>