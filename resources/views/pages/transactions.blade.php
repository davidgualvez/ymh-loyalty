@extends('layouts.master')
@section('title','Transactions')

@section('custom_css')
    <link rel="stylesheet" href="/css/plugins/preloader.css">
@endsection

@section('custom_js') 
    <script src="/js/plugins/moment.js"></script>
    <script src="/js/plugins/jquery.preloader.min.js"></script>
    <script src="/js/pages/transactions.js"></script> 
@endsection

@section('content')
    <div class="container">
        <div class="row p-4">
            <div class="col-md-6 user-profile">
                <div class="media">
                    <img class="mr-3 rounded-circle" width="150" height="150" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16652938e1e%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16652938e1e%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.4296875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder image">
                    <div class="media-body">
                        <h3 class="mt-0" id="name">...</h3>
                        <div>Y-CLUB NUMBER : <strong id="card_number">...</strong></div>
                        <div>EXPIRY DATE : <strong id="expiry_date">...</strong></div>
                        <a href="/profile">EDIT MY PROFILE</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 text-center  user-profile">
                <h3>Y-Club Points</h3>
                <h4 class="text-danger" id="current_points">...</h4>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12  earned-history">
                <div class="dataTables_wrapper">
                    <div class="row mb-1"> 
                        <div class="col-sm-12 col-md-12">
                            <strong>EARN POINTS HISTORY</strong>
                            <div class="form-inline float-right">
                                <div class="form-group">
                                    <label for="earned_limit">Limit &nbsp;</label> 
                                    <select id="earned_limit" class="custom-select custom-select-sm form-control form-control-sm">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select> 
                                </div> 
                            </div> 
                        </div> 
                    </div>
                    <table id="tbl_earn_history" class="table table-sm table-hover table-responsive-sm table-responsive-md">
                        <thead>
                            <tr style="background-color:#1565c0; color:whitesmoke; padding:2px;">
                            <th width="5%">#</th>
                            <th width="10%">Date</th>
                            <th width="10%">Time</th>
                            <th width="40%">Purchased Items</th>
                            <th width="10%" class="text-right">Price</th>
                            <th width="25%">3S Shop</th>
                            </tr>
                        </thead>
                        <tbody id="earned_list"> 
                        </tbody>
                    </table>
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <div class="dataTables_length">
                                page-<strong id="earned_current_page">1</strong>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <nav aria-label="..." class="float-right">
                                <ul class="pagination pagination-sm">
                                    <li class="page-item disabled"> 
                                        <button class="page-link" id="earned_prev_page_url">Previous</button>
                                    </li> 
                                    <li class="page-item">
                                        <button class="page-link" id="earned_next_page_url">Next</button> 
                                    </li>
                                </ul>
                            </nav> 
                        </div>
                    </div>
                </div>  
            </div>
        </div>

        <br>
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 redeemed-history">
                <div class="dataTables_wrapper">
                    <div class="row mb-1"> 
                        <div class="col-sm-12 col-md-12">
                            <strong>REDEEM HISTORY</strong>
                            <div class="form-inline float-right">
                                <div class="form-group">
                                    <label for="redeem_limit">Limit &nbsp;</label> 
                                    <select id="redeem_limit" class="custom-select custom-select-sm form-control form-control-sm">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select> 
                                </div> 
                            </div> 
                        </div> 
                    </div>
                    <table id="tbl_redeem_history" class="table table-sm table-hover table-responsive-sm table-responsive-md">
                        <thead>
                            <tr style="background-color:#1565c0; color:whitesmoke; padding:2px;">
                            <th width="5%">#</th>
                            <th width="10%">Date</th>
                            <th width="10%">Time</th>
                            <th width="40%">Purchased Items</th>
                            <th width="10%">Points</th>
                            <th width="15%">Status</th>
                            <th width="10%">Action</th>
                            </tr>
                        </thead>
                        <tbody id="redeem_list"> 
                        </tbody>
                    </table>
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <div class="dataTables_length">
                                page-<strong id="redeem_current_page">1</strong>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <nav aria-label="..." class="float-right">
                                <ul class="pagination pagination-sm">
                                    <li class="page-item disabled"> 
                                        <button class="page-link" id="redeem_prev_page_url">Previous</button>
                                    </li> 
                                    <li class="page-item  disabled">
                                        <button class="page-link" id="redeem_next_page_url">Next</button> 
                                    </li>
                                </ul>
                            </nav> 
                        </div>
                    </div>
                </div>  
            </div>
        </div>
        
    </div>
    
@endsection