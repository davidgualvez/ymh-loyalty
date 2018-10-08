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
});

//user info
function loadUserInfo(){
    postWithHeader(routes.userInfo,'',function(response){
        console.log(response);
        if(response.success == false){
            return;
        }

         $('#name').html(response.data.name);
        $('#card_number').html(response.data.card_number);
        $('#expiry_date').html(response.data.expiry_date);
        $('#current_points').html(response.data.current_points);
    });
}

//pagination================================
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