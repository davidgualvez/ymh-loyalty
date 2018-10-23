$(document).ready(function () {





    setMotorBrand();
    setMotorBrandC();

    // initialize all select elements 
    // that should be searchable
    $('#brandCBox').select2();
    $('#modelCBox').select2();
    $('#cBrandCBox').select2();
    $("#cModelCBox").select2();
});



function setMotorBrand() {


    $('#brandCBox').html('');
    ajax(api + "registration/getAllMotorBrands", {}, function (data) {
        $('#brandCBox').append('<option value="">Choose a brand</option>');
        for (var i = 0; i < data.data.length; i++) {
            $('#brandCBox').append("<option value=" + data.data[i].LoyaltyMotorBrandID + ">" + data.data[i].LoyaltyMotorBrandName + "</option>");
        }
        $("#modelCBox").html("");
        setMotorModel($("#brandCBox").val());
    });

    $("#brandCBox").change(function () {
        $("#modelCBox").html("");

        var brand = $("#brandCBox").val();
        setMotorModel(brand);

    });

}

function setMotorModel(brand) {
    ajax(api + "registration/getAllMotorModels", {}, function (data) {


        $("#modelCBox").html("");
        $('#modelCBox').append('<option value="">Choose a model</option>');
        for (var i = 0; i < data.data.length; i++) {
            if (brand == data.data[i].LoyaltyMotorBrandID) {
                $("#modelCBox").append("<option value=" + data.data[i].LoyaltyMotorBrandModelID + ">" + data.data[i].LoyaltyMotorBrandModelName + "</option>");

            }
        }

    });
}




function setMotorBrandC() {

    ajax(api + "registration/getAllMotorBrands", {}, function (data) {
        $('#cBrandCBox').append('<option value="">Choose a brand</option>');
        for (var i = 0; i < data.data.length; i++) {
            $('#cBrandCBox').append("<option value=" + data.data[i].LoyaltyMotorBrandID + ">" + data.data[i].LoyaltyMotorBrandName + "</option>");
        }
        $("#cModelCBox").html("");
        setMotorModelC($("#cBrandCBox").val());
    });

    $("#cBrandCBox").change(function () {
        $("#cModelCBox").html("");

        var brandC = $("#cBrandCBox").val();
        setMotorModelC(brandC);

    });

}

function setMotorModelC(brandC) {


    ajax(api + "registration/getAllMotorModels", {}, function (data) {


        $("#cModelCBox").html("");
        $("#cModelCBox").append('<option value="">Choose a model</option>');

        for (var i = 0; i < data.data.length; i++) {
            if (brandC == data.data[i].LoyaltyMotorBrandID) {
                $("#cModelCBox").append("<option value=" + data.data[i].LoyaltyMotorBrandModelID + ">" + data.data[i].LoyaltyMotorBrandModelName + "</option>");

            }
        }



    });




}