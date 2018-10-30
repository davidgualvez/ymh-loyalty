$(document).ready(function(){
    if(!isLogin()){
        redirectTo('/login');
    }  
    //
    loadSites();


    emailChecker();
    getRegions();
    getProvinces();
    getCities();

    setTimeout(() => {
        loadRegions();
        regionOnChange();
        provinceOnChange();
    }, 300);

    setTimeout(() => {
        loadInformation();
    }, 500);
});

//globals
var user_email = null;
var regions = [];
var provinces = [];
var cities = [];

function loadInformation(){
	$('.content').preloader();
	postWithHeader(routes.user.personalInfo, {}, function(response){
        if(response.success == false){
            showError('',response.message,function(){});
            $('.content').preloader('remove');
            return;
        }
        
        user_email = response.data.email_address;

        $('#first_name').val(response.data.first_name);
        $('#middle_name').val(response.data.middle_name);
        $('#last_name').val(response.data.last_name);
        $('#bdate').val(response.data.birth_date);
        $('#email_address').val(response.data.email_address);
        $('#mobile_number').val(response.data.mobile_number);
        $('#contact_number').val(response.data.contact_number);
        $('#street').val(response.data.street);
        $('#barangay').val(response.data.barangay);
        // $('#region').val(response.data.region.name);
        // $('#province').val(response.data.province.name);
        // $('#city').val(response.data.city.name);
        $('#site').val(response.data.shop.name);
        
        $('#regions').val(response.data.region.id); 
        loadProvinces(response.data.region.id);
        setTimeout(() => {
            $('#provinces').val(response.data.province.id);

            loadCities(response.data.province.id);
            setTimeout(() => {
                $('#cities').val(response.data.city.id);
            }, 200);
        }, 200);
        //------------
        regionOnChange();
        provinceOnChange();
		$('.content').preloader('remove'); 
	});
}

function emailChecker(){ 
    $('#email_address').on('change', function () { 
        var email = $('#email_address');
        var data = {
            email: email.val(),
            except_at: user_email
        };
 
        postWithHeader(routes.user.checkEmail, data , function(response){ 
            if(response.success == false){
                showError('',response.message , function(){
                    
                });
                email.val('');
                email.focus();
                return;
            }
        });
    });
}

function getRegions(){ 
     $.getJSON("/assets/json/regions.json", function (json) {
         //console.log(json);
         regions = json; 
     });
}

function getProvinces() {
    $.getJSON("/assets/json/provinces.json", function (json) {
        //console.log(json);
        provinces = json;
    });
}

function getCities() {
    $.getJSON("/assets/json/cities.json", function (json) {
        //console.log(json);
        cities = json;
    });
}

function loadRegions(){ 
    
    var x = $('#regions');
    x.empty();  
    $.each(regions.regions, function(key, value){  
        x.append('<option value="' + value.RegionID + '">' + value.RegionName + '</option>'); 
 
        if(regions.regions.length == key+1){  
            loadProvinces( $('#regions').val() );
        }
    }); 
    //
    //loadProvinces( $('regions').val() );
}

function regionOnChange(){
    $('#regions').on('change',function(){   
        var id = $('#regions').val();
        loadProvinces(id);
    });
}

function loadProvinces(region_id){  
    var x = $('#provinces');
    x.empty();
    $.each(provinces.provinces, function (key, value) {
        if(value.RegionID == region_id){ 
            x.append('<option value="' + value.ProvinceID + '">' + value.ProvinceName + '</option>');
        }
 
        if (provinces.provinces.length == key + 1) { 
            loadCities($('#provinces').val());
        }
    });

    //
    //loadCities( $('cities').val() ); 
}

function provinceOnChange(){
    $('#provinces').on('change', function(){ 
        var id = $('#provinces').val();
        loadCities(id);
    });
}

function loadCities(province_id) { 
    var x = $('#cities');
    x.empty();
    $.each(cities.cities, function (key, value) {
        if (value.ProvinceID == province_id) {
            x.append('<option value="' + value.CityID + '">' + value.CityName + '</option>');
        }
    });
}

function loadSites(){
    var id = $('#provinces').val();
    get(routes.sites.findByProvinceId + id ,{}, function(response){
        console.log(response);
        var x = $('#sites');
        x.empty();
        $.each(response.data , function (key, value) { 
            x.append('<option value="' + value.LoyaltySiteID + '">' + value.LoyaltySiteName + '</option>');
        });
    });
}