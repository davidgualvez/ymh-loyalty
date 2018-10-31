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

    saveChanges();
});

//globals
var shopTrigger = 0;
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


                loadSites(response.data.region.id);
                setTimeout(() => {
                    $('#sites').val(response.data.shop.id);
                }, 500);
                shopTrigger = 1;
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

        if (shopTrigger == 1) {
            setTimeout(() => {
                loadSites(id);
            }, 300);
        }
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

function loadSites(id){
    //var id = $('#provinces').val();
    get(routes.sites.findByRegioinId + id ,{}, function(response){
        console.log(response);
        var x = $('#sites');
        x.empty();
        $.each(response.data , function (key, value) { 
            x.append('<option value="' + value.LoyaltySiteID + '">' + value.LoyaltySiteName + '</option>');
        }); 
    }); 
}


function saveChanges(){
    $('#btnSave').on('click', function(){
        console.log('you click save...');
        //firstname
        var first_name = $('#first_name');
        if(first_name.val().trim() == '' || first_name.val() == null ){ 
            showWarning('','Firstname is required',function(){

            });
            first_name.val('');
            first_name.focus();
            return;
        }

        //middlename
        var middle_name = $('#middle_name');
        if(middle_name.val().trim() == '' || middle_name.val() == null ){ 
            showWarning('','Middlename is required', function(){

            });
            middle_name.val('');
            middle_name.focus();
            return;
        }

        //lastname
        var last_name = $('#last_name');
        if (last_name.val().trim() == '' || last_name.val() == null) {
            showWarning('', 'Lastname is required', function () {

            });
            last_name.val('');
            last_name.focus();
            return;
        }

        //birthday
        var bdate = new Date($('#bdate').val());
        var today = new Date();
        var age = today.getFullYear() -  bdate.getFullYear();
        if( age < 18 ){
            showWarning('','You must be atleast 18y/o.', function(){

            });
            $('#bdate').focus();
            return;
        } 

        //emailaddress
        var email_address = $('#email_address');
        //console.log(validateEmail(email_address.val()));
        if (!validateEmail(email_address.val())){
            showWarning('', 'Invalid Email address.', function () {

            });
            email_address.focus();
            return;
        }

        //mobilenumber
        var mobile_number = $('#mobile_number');
        if (!validateContactNumber(mobile_number.val())){
            showWarning('', 'Invalid Mobile number.', function(){

            });
            mobile_number.focus();
            return;
        }

        //homenumber
        var contact_number = $('#contact_number');
        if(contact_number.val().trim() == '' || contact_number.val() == null){
            showWarning('','Home number is required.', function(){

            });
            contact_number.focus();
            return;
        }

        //street
        var street = $('#street');
        if(street.val().trim() == '' || street.val() == null){
            showWarning('','Street is required.',function(){

            });
            street.focus();
            return;
        }

        //barangay
        var barangay = $('#barangay');
        if (barangay.val().trim() == '' || barangay.val() == null){
            showWarning('','Barangay is required.', function(){

            });
            barangay.focus();
            return;
        }

        //region
        var regions = $('#regions');
        if (regions.val() == '' || regions.val() == null){
            showWarning('','Region is required',function(){

            });
            return;
        }

        //province
        var provinces = $('#provinces');
        if (provinces.val() == '' || provinces.val() == null){
            showWarning('','Province is required.', function(){

            });
            return;
        }

        //city
        var cities = $('#cities');
        if (cities.val() == '' || cities.val() == null){
            showWarning('','City is required.', function(){

            });
            return;
        }

        //3s Shop
        var sites = $('#sites');
        if (sites.val() == '' || sites.val() == null){
            showWarning('','Shop is required.', function(){

            });
            return;
        }

        //get all the data from above
        var data = {
            '_method'           : 'PATCH',
            'first_name'        : first_name.val(),
            'middle_name'       : middle_name.val(),
            'last_name'         : last_name.val(),
            'bdate': $('#bdate').val(),
            'email_address'     : email_address.val(),
            'mobile_number'     : mobile_number.val(),
            'contact_number'    : contact_number.val(),
            'street'            : street.val(),
            'barangay'          : barangay.val(),
            'region_id'         : regions.val(),
            'province_id'       : provinces.val(),
            'city_id'           : cities.val(),
            'shop_id'           : sites.val()
        };      
 
        patchInfo(data);
    });
}


function patchInfo(data){
    postWithHeader(routes.user.patchInfo, data, function(response){
        console.log(response);
        if(response.success == false){
            showWarning('',response.message, function(){

            });
            return;
        }

        showSuccess('','Changes has been save.',function(){

        });
    });
}