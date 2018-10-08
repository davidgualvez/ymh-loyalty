<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="/assets/favicon.png" type="image/x-icon">
    <title>{{ config('app.name') }}</title>

    <!-- global css -->
    <link rel="stylesheet" href="/css/app.css">
    <link rel="stylesheet" href="/css/all.css">
    <link rel="stylesheet" href="/css/plugins/iziToast.min.css">
    <link rel="stylesheet" href="/css/pages/login.css">
</head>
<body>
    
    <div id="app">
        <div class="container-fluid">
            <div class="row d-flex align-items-center">
                <div class="col-md-8" id="left-side">
                    <div class="w-50 vh-50 left-side-content" >
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active text-center">
                                <h4>Not Yet A Yamaha Club Member? <a href="/signup">Register Now</a></h4>
                                </div>
                                <div class="carousel-item text-center">
                                    <h4>Join Yamaha Club Membership for Exclusive Rewards!</h4>
                                </div> 
                            </div>
                        </div>
                    </div> 
                </div> 

                <div class="col-sm-12 col-md-4 login" style="min-height:100vh;">
                    <div class="mt-4 mb-4">
                        <img src="/assets/yclub_logo.png" class="img-fluid ymh-logo w-75" >
                    </div> 
                    <h1>Login</h1>
                    <div class="form-group">
                        <label for="username">Username/Yamaha Club Number</label>
                            <input type="text" class="form-control" id="username" aria-describedby="username" placeholder="Enter your username">
                            <small id="username" class="form-text">We'll never share your credential with anyone else.</small> 
                    </div>
                    <div class="form-group">
                        <label for="password">Password/Yamaha Club Number</label>
                        <input type="password" class="form-control" id="password" aria-describedby="password" placeholder="Enter your password">  
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary w-100" id="btn_login">L O G I N</button>
                    </div>
                    <div class="text-center ">
                        <a href="/forgot_password">Forgot Password?</a>
                        <br>
                        Not yet a member? <a href="/signup">Register here.</a>
                    </div>
                </div>
            </div>
        </div>
    </div> 

    {{-- API URL --}}
    <input type="text" id="api_url" value="{{config('app.api_url')}}" hidden="">
    {{-- global js --}}
    <script src="/js/app.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/plugins/iziToast.min.js"></script>
    <script src="/js/settings.js"></script>
    {{-- custom js --}}
    <script src="/js/pages/login.js"></script> 
</body>
</html>