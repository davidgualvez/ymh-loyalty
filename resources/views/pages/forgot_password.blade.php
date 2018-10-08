<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="/assets/favicon.png" type="image/x-icon">
    <title>{{ config('app.name') }}</title>

    <!-- global css -->
    <link rel="stylesheet" href="/css/app.css">
    <link rel="stylesheet" href="/css/all.css">
    <link rel="stylesheet" href="/css/pages/forgot_password.css">
</head>
<body>
    
    <div class="container-fluid">
        <div class="row  d-flex justify-content-center">
            <div class="col-md-8" style="">
                <div class="mt-1 mb-4">
                    <img src="/assets/yclub_logo.png" class="img-fluid ymh-logo">
                    
                </div> 
                <div class="card">
                    <div class="card-header">
                        <strong>Forgot Password</strong> 
                        <a class="btn btn-sm btn-secondary float-right" href="/login">back</a> 
                    </div>
                    <div class="card-body">
                        <div class="form-group row">
                            <label class="col-md-3 text-right" for="x">Yamaha Club Number</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control " id="card_number" aria-describedby="card_number" placeholder="Enter Yamaha Club Number">
                            </div>  
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 text-right" for="x">Engine Number</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control " id="card_number" aria-describedby="card_number" placeholder="Enter Engine Number">
                            </div>  
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 text-right" for="x">Chassis Number</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control " id="card_number" aria-describedby="card_number" placeholder="Enter Chassis Number">
                            </div>  
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 text-right" for="x">Email Adress</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control " id="card_number" aria-describedby="card_number" placeholder="Enter Email Adress">
                            </div>  
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 text-right" for="x">New Password</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control " id="card_number" aria-describedby="card_number" placeholder="Enter New Password">
                            </div>  
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary float-right">Submit</button>   
                        </div>
                        
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
    <script> 
    </script>
</body>
</html>