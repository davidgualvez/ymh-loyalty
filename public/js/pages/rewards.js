$(document).ready(function(){
    if(!isLogin()){
        redirectTo('/login')
    }

    btnSearch();
    sortOnChange();
    loadManufacturer();


    paginate();
    btnNext();
    btnPrev();
    limitOnChange();
    dataDisplayer(); 
});


function btnSearch(){
    $('#btn_search').on('click',function(){
        paginate();
    });
}

function sortOnChange(){
    $('#sort_by_points').on('change',function(){
        paginate();
    });
} 

function loadManufacturer(){
    var manufacturer = $('#manufacturers');
    manufacturer.empty();
    manufacturer.append(
        '<div class="form-check">'+
          '<input class="form-check-input manufacturers" type="radio" name="manufacturer" id="exampleRadios1" value="all" checked>'+
          '<label class="form-check-label" for="exampleRadios1">'+
            'All'+
          '</label>'+
        '</div> '
    );
    postWithHeader(routes.rewards_manufacturer,{},function(response){ 
         $.each(response.data, function (key, value){ 
            manufacturer.append(
            '<div class="form-check">'+
              '<input class="form-check-input manufacturers" type="radio" name="manufacturer" id="rdb'+key+'" value="'+value.LoyaltyRewardManufacturerID+'">'+
              '<label class="form-check-label" for="exampleRadios1">'+
                value.LoyaltyRewardManufacturerName+
              '</label>'+
            '</div> '
            );
         });
    }); 
}

//pagination================================
var current_page = null;
var prev_page_url = null;
var next_page_url = null;
var current_data = null;

function paginate() {
    var limit           = $('#limit').val();
    var search_val      = $('#search_val').val();
    var sort_by_points  = $('#sort_by_points').val(); 
 
    var manufacturer = document.getElementsByName('manufacturer');
    var selected_manufacturer = null;
    for(var i = 0; i < manufacturer.length; i++){
        if(manufacturer[i].checked){ 
            selected_manufacturer = manufacturer[i].value;
        }
    } 

    var data = {
        search_val          : search_val,
        limit               : limit,
        is_for_loyalty_user : true,
        manufacturer_id     : selected_manufacturer,
        sort_by_points      : sort_by_points
    };

    var url = null;

    if (current_page == null) {
        current_page = 1;
    }

    //test
    // console.log(data,current_page);
    // return;
    //end
    $('.items').preloader();
    postWithHeader(routes.rewards + "?page=" + current_page, data, function (response) {
        current_page = response.data.current_page;
        console.log(response);
        $('#current_page').html(current_page);
        if (response.data.next_page_url == null) {
            $('#next_page_url').parent().addClass('disabled');
        } else {
            $('#next_page_url').parent().removeClass('disabled');
        }

        if (response.data.prev_page_url == null) {
            $('#prev_page_url').parent().addClass('disabled');
        } else {
            $('#prev_page_url').parent().removeClass('disabled');
        }

        dataDisplayer(response.data.data, response.data.from);
        $('.items').preloader('remove');
    });
}

function btnNext() {
    $('#next_page_url').on('click', function () {
        current_page++;
        paginate();
    });
}

function btnPrev() {
    $('#prev_page_url').on('click', function () {
        current_page--;
        paginate();
    });
}

function limitOnChange() {
    $('#limit').on('change', function () {
        current_page = 1;
        paginate();
    });
}

function dataDisplayer(data, from) {
    $('#items').empty();

    if (from == null) {
        $('#current_page').html('Nothing to display...');
        return;
    }
    current_data = data;
    $.each(data, function (key, value) {
        //var date = moment(value.DateCreated);
        var imgPath = api + value.img_path;
        //console.log(value);
        $('#items').append( 
            '<div class="col-sm-4 col-md-4 col-lg-3 col-xl-2" style=" padding:5px;"> ' +
                '<div class="item  h-100 d-flex flex-column">' +
                    '<img src="'+imgPath+'" class="img-fluid" alt="">'+
                    '<div class="h-100 desc">'+
                        '<div class="product_name p-1">'+ value.name +'</div>'+
                        '<div class="r-points"> <label class="points">'+value.points+'</label> YAMAHA CLUB POINTS</div>'+
                    '</div>'+
                    '<div>'+
                        '<button class="btn btn-sm btn-primary w-75 btn_redeem" id="'+value.id+'">Redeem</button> '+
                    '</div>'+
                '</div>'+
            '</div> '
        );
        btnRedeem(value.id);
        from++;
    });
}
//end of pagination================

function btnRedeem(id){
    $('.btn_redeem#'+id).on('click',function(){
        redirectTo('/shop/reward?id='+this.id);
    });
}


