$(document).ready(function(){  
	if(!isLogin()){
		redirectTo('/login');
	}

	btnSubmit();

	//try to get only the regions for now
	var regionList = {
        url: "/assets/json/regions.json", 
        listLocation: "regions",
        getValue: "RegionName", 
        list: { 
            match: {
                enabled: true
            },
            onChooseEvent: function() {
                var value = $("#regions").getSelectedItemData().RegionID; //return selected id  
                $('#cities').val('');
                $('#city_id').val(''); 
                $("#region_id").val(value).trigger("change"); //assigning the id of selected city in input element with hidden attribute
            	
            	reloadProvinces();
            	reloadCities();
            }, 
        }
    };
    $("#regions").easyAutocomplete(regionList); 
 	regionOnChange();
 	cityOnChange();
});
	
//global
var selected_cities = [];
var selected_provinces = []; 

function reloadProvinces(){
	var region_id = $('#region_id').val(); 
	selected_provinces = [];
	$.getJSON('/assets/json/provinces.json', 
        function(data) {   
            //console.log(data.provinces);
            $.each(data.provinces,function(key,value){ 
            	if(value.RegionID == region_id){
            		selected_provinces.push(value);
            	}
            });
        }
    );   
}

function reloadCities(){ 
	selected_cities = []; 
	$.getJSON('/assets/json/cities.json', 
        function(data) { 
        	//for every cities
            $.each(data.cities,function(city_key,city){  
            	//check province id of cities in every provinces parameter
            	$.each(selected_provinces,function(province_key,province){ 
            		//console.log(province);
            		if(city.ProvinceID == province.ProvinceID){
	            		selected_cities.push(city); 
	            	}
            	}); 
            });
        }
    );  
    
    //try to get only the regions for now
	var provinceList = {
		data: selected_cities,
        getValue: "CityName", 
        list: { 
            match: {
                enabled: true
            },
            onChooseEvent: function() {
                var value = $("#cities").getSelectedItemData().CityID; //return selected id   
                $("#city_id").val(value).trigger("change"); //assigning the id of selected city in input element with hidden attribute
            }, 
        }
    };
    $("#cities").easyAutocomplete(provinceList);
}

function regionOnChange(){
	$('#regions').on('change',function(){
		if(this.value == '' || this.value == null){
			selected_provinces = [];
			selected_cities = [];  
			$('#region_id').val('');
			$('#cities').val('');
			$('#city_id').val(''); 
            reloadCities();
		}
	});
} 

function cityOnChange(){
	$('#cities').on('change',function(){
		if(this.value == '' || this.value == null){
			$('#cities').val('');
			$('#city_id').val('');
		}
	});
}

function btnSubmit(){
	$('#btn_submit').on('click',function(){  
		//====VALIDATION====//

		//SHIPMENT ADDRESS
		var shipment_address = $('#shipment_address');
		if(shipment_address.val() == '' || shipment_address.val() == null){
			showWarning('','Shipment Address is required.',function(){
				//some code after disappearing the message
			});
			shipment_address.focus();
			return;
		}

		//REGIONS
		var region_id = $('#region_id');
		if(region_id.val() == '' || region_id.val() == null){
			showWarning('','Region is required.',function(){
				//some code after disappearing the message
			});
			$('#regions').focus();
			return;
		}


		//CITIES
		var city_id = $('#city_id');
		if(city_id.val() == '' || city_id.val() == null){
			showWarning('','City is required.',function(){
				//some code after disappearing the message
			});
			$('#cities').focus();
			return;
		}

		//CONTACT NUMBER
		var contact_number = $('#contact_number');
		if( contact_number.val() == '' || contact_number.val() == null ){
			showWarning('','Contact number is required.',function(){
				//some code after disappearing the message
			});
			contact_number.focus();
			return;
		}

		if( !validateContactNumber(contact_number.val()) ){
			showWarning('','Contact number is not valid.',function(){
				//some code after disappearing the message
			});
			contact_number.val('');
			contact_number.focus();
			return;
		}
 		  


 		//IF VALIDATION PASS
 		//code here to save
 		var data = {
 			reward_id 				: getParams('reward_id'),
 			shipment_address  		: shipment_address.val(),
 			region_id 				: region_id.val(),
 			city_id 				: city_id.val(),
 			contact_number 			: contact_number.val()
 		}; 
 		redemption(data);
 		//end
	});
}

function redemption(data){
	$('.shipment').preloader();
	postWithHeader(routes.redemption, data, function(response){ 
		if(response.success == false){
			showError('',response.message, function(){
				//place some code here if you want another after closing this message
			});
			$('.shipment').preloader('remove');
			return; 
		} 
		showSuccess('', response.message ,function(){
			//place some code here if you want another after closing this message
			redirectTo('/');
		}); 
	});
}