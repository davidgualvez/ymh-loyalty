@extends('layouts.master')
@section('title','Transactions')

@section('custom_css')
    
@endsection

@section('custom_js')
    <script src="/js/pages/transactions.js"></script>
@endsection

@section('content')
    <div class="container">
        <div class="row p-4">
            <div class="col-md-8">
                <div class="media">
                    <img class="mr-3 rounded-circle" width="150" height="150" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16652938e1e%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16652938e1e%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.4296875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder image">
                    <div class="media-body">
                        <h3 class="mt-0">Jose Rizal</h3>
                        <div>Y-CLUB NUMBER : <strong>xxx-xxx-xxx-xxx</strong></div>
                        <div>EXPIRY DATE : <strong>xx-xx-xxxx</strong></div>
                        <a href="/profile">EDIT MY PROFILE</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 text-right">
                <h3>Y-Club Points</h3>
                <h4 class="text-danger">0.00</h4>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
                <div class="dataTables_wrapper">
                    <div class="row mb-1"> 
                        <div class="col-sm-12 col-md-12">
                            <strong>EARN POINTS HISTORY</strong>
                            <div class="form-inline float-right">
                                <div class="form-group">
                                    <label for="limit">Limit &nbsp;</label> 
                                    <select id="limit" aria-controls="tbl_shipment" class="custom-select custom-select-sm form-control form-control-sm">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select> 
                                </div> 
                            </div> 
                        </div> 
                    </div>
                    <table id="tbl_content" class="table table-sm table-hover table-responsive-sm table-responsive-md">
                    <thead>
                        <tr>
                        <th width="5%">#</th>
                        <th width="10%">Date</th>
                        <th width="10%">Time</th>
                        <th width="40%">Purchased Items</th>
                        <th width="10%">Price</th>
                        <th width="25%">3S Shop</th>
                        </tr>
                    </thead>
                    <tbody id="redeemed_list">
                    {{-- 	<tr>
                        <th scope="row">1</th>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        </tr>  --}} 
                    </tbody>
                    </table>
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
                </div>  
            </div>
        </div>
    </div>
    
@endsection