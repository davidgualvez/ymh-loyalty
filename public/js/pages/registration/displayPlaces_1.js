$(document).ready(function () {
    init();
});


function init() {
    $("#regionComboBox").select2({
        width: 'resolve'

    });
    $("#provinceComboBox").select2({

    });

    $("#cityComboBox").select2({

    });
    $('#shop3sComboBox').select2();
    displayRegions();

    $("#regionComboBox").change(function () {
        var region = $(this).val();
        displayCities('');
        displayShop3s('');
        displayProvinces(region);

    });

    $("#provinceComboBox").change(function () {
        displayCities($(this).val());

    });

    $("#cityComboBox").change(function () {
        displayShop3s($("#regionComboBox").val());

    });

}

function displayRegions() {
    $('#regionComboBox').html('');
    var url = "/assets/json/regions.json"
    ajax(url, {}, function (data) {
        var option = '<option value="">-- Choose a region --</option>';
        $('#regionComboBox').append(option);
        option = '<option value="">Choose a provice</option>';
        $('#provinceComboBox').append(option);
        var regions = data.regions
        for (var i = 0; i < regions.length; i++) {
            option = '<option value="' + regions[i].RegionID + '">' + regions[i].RegionName + '</option>';
            $('#regionComboBox').append(option);
        }

    });
}


function displayProvinces(regionID) {
    $('#provinceComboBox').html('');
    var url = "/assets/json/provinces.json";

    ajax(url, {}, function (data) {
        var option = '<option value="">-- Choose a Province -- </option>';
        $('#provinceComboBox').append(option);
        var provinces = data.provinces;

        for (var i = 0; i < provinces.length; i++) {
            if (provinces[i].RegionID == regionID) {
                option = '<option value="' + provinces[i].ProvinceID + '">' + provinces[i].ProvinceName + '</option>';
                $('#provinceComboBox').append(option);
            }
        }
    });

}

function displayCities(provinceID) {
    $('#cityComboBox').html('');
    var url = "/assets/json/cities.json";

    ajax(url, {}, function (data) {

        var option = '<option value="">-- Choose a City --</option>';
        $('#cityComboBox').append(option);
        var cities = data.cities;

        console.log(cities);
        for (var i = 0; i < cities.length; i++) {
            if (cities[i].ProvinceID == provinceID) {
                option = '<option value="' + cities[i].CityID + '">' + cities[i].CityName + '</option>';
                $('#cityComboBox').append(option);
            }
        }
    });

}

function displayShop3s(regionID) {
    $('#shop3sComboBox').html('');

    var url = api + "registration/getAll3SShopsRegion";
    console.log(api);
    ajax(url, {
        region: regionID
    }, function (data) {
        var option = '<option value="">-- Choose a 3s shop --</option>';
        console.log(data);
        $('#shop3sComboBox').append(option);

        if (data.statusCode == 1) {
            return;
        }
        for (var i = 0; i < data.data.length; i++) {
            if (regionID == data.data[i].RegionID) {
                $("#shop3sComboBox").append("<option value=" + data.data[i].LoyaltySiteID + ">" + data.data[i].LoyaltySiteName + "</option>");
            }
        }

    });
}