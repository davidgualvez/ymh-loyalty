$(document).ready(function(){
    if(!isLogin()){
        redirectTo('/login');
    } 
    //user info
    loadUserInfo(); 
    // earn transaction history
    earnPaginate();
    earnBtnNext();
    earnBtnPrev();
    earnLimitOnChange();

    redeemPaginate();
    redeemBtnNext();
    redeemBtnPrev();
    redeemLimitOnChange();
});

//user info
function loadUserInfo(){
    $('.user-profile').preloader();
    postWithHeader(routes.userInfo,'',function(response){ 
        if(response.success == false){
            if(response.status == 401){
                showError('',response.message,function(){
                    clearStorage();
                    redirectTo('/login');
                }); 
                return;
            } 
        }
        $('#name').html(response.data.name);
        $('#card_number').html(response.data.card_number);
        $('#expiry_date').html(response.data.expiry_date);
        $('#current_points').html(response.data.current_points);
        // remove the loading indicator 
        $('.user-profile').preloader('remove')

    });
}

//earn pagination================================
var current_page = null;
var prev_page_url = null;
var next_page_url = null;
var current_data = null;

function earnPaginate() {
    var limit = $('#earned_limit').val();
    var search_val = $('#earned_search_val').val();
    var data = {
        search_val: search_val,
        limit: limit
    };

    var url = null;

    if (current_page == null) {
        current_page = 1;

    }
    
    $('.earned-history').preloader();
    postWithHeader(routes.transactions + "?page=" + current_page, data, function (response) {
        current_page = response.data.current_page;
        console.log(response.data.data); 
        $('#earned_current_page').html(current_page);
        if (response.data.next_page_url == null) {
            $('#earned_next_page_url').parent().addClass('disabled');
        } else {
            $('#earned_next_page_url').parent().removeClass('disabled');
        }

        if (response.data.prev_page_url == null) {
            $('#earned_prev_page_url').parent().addClass('disabled');
        } else {
            $('#earned_prev_page_url').parent().removeClass('disabled');
        }

        earnDataDisplayer(response.data.data, response.data.from);
        $('.earned-history').preloader('remove');
    });
}

function earnBtnNext() {
    $('#earned_next_page_url').on('click', function () {
        current_page++;
        earnPaginate();
    });
}

function earnBtnPrev() {
    $('#earned_prev_page_url').on('click', function () {
        current_page--;
        earnPaginate();
    });
}

function earnLimitOnChange() {
    $('#earned_limit').on('change', function () {
        earnPaginate();
    });
}

function earnDataDisplayer(data, from) {
    $('#earned_list').empty();

    if (from == null) {
        $('#earned_current_page').html('Nothing to display...');
        return;
    }
    current_data = data;
    $.each(data, function (key, value) {
        var date = moment(value.DateCreated);
        $('#earned_list').append(
            '<tr data-id="' + from + '">' +
            '<th scope="row">' + from + '</th>' +
            '<td>' + date.format('ll') + '</td>' +
            '<td>' + date.format('LT') + '</td>' +
            '<td>' + value.LoyaltyProductName + '</td>' +
            '<td class="text-right">' + value.Price + '</td>' +
            '<td>' + value.LoyaltySiteName + '</td>' + 
            '</tr>'
        );
        from++;
    });
}
//end of pagination================

//redeem pagination================================
var redeem_current_page = null;
var redeem_prev_page_url = null;
var redeem_next_page_url = null;
var redeem_current_data = null;

function redeemPaginate() {
    var limit = $('#redeem_limit').val();
    var search_val = $('#redeem_search_val').val();
    var data = {
        search_val: search_val,
        limit: limit
    };

    var url = null;

    if (redeem_current_page == null) {
        redeem_current_page = 1; 
    }
    
    $('.redeemed-history').preloader();
    postWithHeader(routes.userRedemptionHistory + "?page=" + redeem_current_page, data, function (response) {
        redeem_current_page = response.data.current_page; 
        $('#redeem_current_page').html(redeem_current_page);
        if (response.data.next_page_url == null) {
            $('#redeem_next_page_url').parent().addClass('disabled');
        } else {
            $('#redeem_next_page_url').parent().removeClass('disabled');
        }

        if (response.data.prev_page_url == null) {
            $('#redeem_prev_page_url').parent().addClass('disabled');
        } else {
            $('#redeem_prev_page_url').parent().removeClass('disabled');
        }

        redeemDataDisplayer(response.data.data, response.data.from);
        $('.redeemed-history').preloader('remove');
    });
}

function redeemBtnNext() {
    $('#redeem_next_page_url').on('click', function () {
        redeem_current_page++;
        redeemPaginate();
    });
}

function redeemBtnPrev() {
    $('#redeem_prev_page_url').on('click', function () {
        redeem_current_page--;
        redeemPaginate();
    });
}

function redeemLimitOnChange() {
    $('#redeem_limit').on('change', function () {
        redeemPaginate();
    });
}

function redeemDataDisplayer(data, from) {
    $('#redeem_list').empty();

    if (from == null) {
        $('#redeem_current_page').html('Nothing to display...');
        return;
    }
    redeem_current_data = data;
    $.each(data, function (key, value) {
        
        // status
        // 0 = pending
        // 1 = approved
        // 2 = intransit 
        var status = null;
        if(value.status == 0){
            status = '<span class="badge badge-secondary">Pending</span>';    //secondary
        }else if(value.status == 1){
            status = '<span class="badge badge-info">Approved</span>';        //info
        }else if(value.status == 2){
            status = '<span class="badge badge-success">Intransit</span>';    //success
        }else{
            status = '<span class="badge badge-danger">Undefined</span>';     //danger
        }

        var date = moment(value.created_at);
        $('#redeem_list').append(
            '<tr data-id="' + from + '">' +
            '<th scope="row">' + from + '</th>' +
            '<td>' + date.format('ll') + '</td>' +
            '<td>' + date.format('LT') + '</td>' +
            '<td>' + value.reward_name + '</td>' +
            '<td class="text-right">' + value.reward_points + '</td>' +
            '<td>' + status + '</td>' + 
            '<td> <button class="btn btn-sm btn-secondary"  data-toggle="modal" data-target="#modal-shipping-details"> <i class="fa fa-eye"></i> view </button> </td>' + 
            '</tr>'
        );
        from++;
    });
}
//end of pagination================