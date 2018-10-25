$(document).ready(function () {

    appendRow();
    removeRow();


    $('.formAdd').on('focus', '.engineNo', function () {}).on('blur', '.engineNo', function (e) {
        console.log('a');
        var id = $(this).parent();
        var fieldID = this.id;
        var engineID = $('#' + fieldID).val();
        var chassisID = $(e.target).parent().parent().parent().find(".chassisNo").val();
        var mainMotorID = $("#txtMotorID").val();

        if (engineID.length == 0 || chassisID.length == 0) {

            $(e.target).parent().parent().parent().find(".brandMotorID").val("");

            return;
        }

        ajax(api + "registration/isMotorValidDetails", {
            engineNum: engineID,
            chassisNum: chassisID
        }, function (data) {
            console.log('nani');
            if (data.statusCode == 0) {
                var motorID = data.data[0].LoyaltyMotorID;


                if (mainMotorID == motorID) {

                    //           $.growl.error({
                    //            location: "tc",
                    //            title: "Duplicate Entry",
                    //            message: " "
                    //          });
                    console.log('a');
                    $(e.target).parent().parent().parent().find(".brandMotorID").val("");
                    $(e.target).parent().parent().parent().find(".engineNo").css('border-color', 'red');
                    $(e.target).parent().parent().parent().find(".chassisNo").css('border-color', 'red');
                    return;
                }

                $(e.target).parent().parent().parent().find(".brandMotorID").val(motorID);
                $(e.target).parent().parent().parent().find(".engineNo").css('border-color', '');
                $(e.target).parent().parent().parent().find(".chassisNo").css('border-color', '');


                var counter = 0;

                $(".brandMotorID").each(function (index) {

                    if ($(this).val().length <= 0) {
                        return;
                    }

                    if (Number($(this).val()) == motorID) {
                        counter += 1;
                    }

                });

                if (counter > 1) {

                    $(e.target).parent().parent().parent().find(".brandMotorID").val("");
                    $(e.target).parent().parent().parent().find(".engineNo").css('border-color', 'red');
                    $(e.target).parent().parent().parent().find(".chassisNo").css('border-color', 'red');

                    // 	$.growl.error({
                    //           location: "tc",
                    //          title: "Duplicate Entry",
                    //          message: " "
                    //        });





                    return;
                }

            } else {


                // $.growl.error({
                // 		     location: "tc",
                //              title: "Invalid Entry",
                //              message: " "
                //     });

                $(e.target).parent().parent().parent().find(".brandMotorID").val("");
                $(e.target).parent().parent().parent().find(".engineNo").css('border-color', 'red');
                $(e.target).parent().parent().parent().find(".chassisNo").css('border-color', 'red');

                return;

            }


        });




    });





    $('.formAdd').on('focus', '.chassisNo', function () {}).on('blur', '.chassisNo', function (e) {
        //console.log('chassisNo blur');
        var id = $(this).parent();
        var fieldID = this.id;
        var chassisID = $('#' + fieldID).val();
        var engineID = $(e.target).parent().parent().parent().find(".engineNo").val();
        var mainMotorID = $("#txtMotorID").val();

        if (engineID.length == 0 || chassisID.length == 0) {

            $(e.target).parent().parent().parent().find(".brandMotorID").val("");

            return;
        }

        ajax(api + "registration/isMotorValidDetails", {
            engineNum: engineID,
            chassisNum: chassisID
        }, function (data) {

            if (data.statusCode == 0) {
                var motorID = data.data[0].LoyaltyMotorID;

                console.log('b');
                if (mainMotorID == motorID) {

                    // $.growl.error({
                    //   location: "tc",
                    //            title: "Duplicate Entry",
                    //            message: " "
                    //          });

                    $(e.target).parent().parent().parent().find(".brandMotorID").val("");
                    $(e.target).parent().parent().parent().find(".engineNo").css('border-color', 'red');
                    $(e.target).parent().parent().parent().find(".chassisNo").css('border-color', 'red');

                    return;
                }

                $(e.target).parent().parent().parent().find(".brandMotorID").val(motorID);
                $(e.target).parent().parent().parent().find(".engineNo").css('border-color', '');
                $(e.target).parent().parent().parent().find(".chassisNo").css('border-color', '');


                var counter = 0;

                $(".brandMotorID").each(function (index) {

                    if ($(this).val().length <= 0) {
                        return;
                    }

                    if (Number($(this).val()) == motorID) {
                        counter += 1;
                    }

                });

                if (counter > 1) {

                    $(e.target).parent().parent().parent().find(".brandMotorID").val("");
                    $(e.target).parent().parent().parent().find(".engineNo").css('border-color', 'red');
                    $(e.target).parent().parent().parent().find(".chassisNo").css('border-color', 'red');

                    // 	$.growl.error({
                    // location: "tc",
                    //          title: "Duplicate Entry",
                    //          message: " "
                    //        });





                    return;
                }

            } else {


                // $.growl.error({
                // 		     location: "tc",
                //              title: "Invalid Entry",
                //              message: " "
                //     });

                $(e.target).parent().parent().parent().find(".brandMotorID").val("");
                $(e.target).parent().parent().parent().find(".engineNo").css('border-color', 'red');
                $(e.target).parent().parent().parent().find(".chassisNo").css('border-color', 'red');

                return;

            }


        });





    });




});





function appendRow() {

    //ADDING NEW ROW
    //console.log("al");
    var counter = 0;

    $(document).on('click', '.btnAdd', function () {

        counter++;
        //console.log('append');
        $('.formAdd').append('' +
            '<div class="' + counter + '">' +
            '<div class="row">' +
            '<div class="col-md-4">' +
            '<label class="fieldLabel">Engine Number</label>' +
            '</div>' +
            '<div class="col-md-4">' +
            '<label class="fieldLabel">Chassis Number</label>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-md-4">' +
            '<input class="form-control engineNo MyClass" type="text" id="enginenumtxt_' + counter + '">' +
            '</div>' +
            '<div class="col-md-4">' +
            '<input class="form-control chassisNo MyClass" type="text" id="chassisnumtxt_' + counter + '">' +
            '</div>' +
            '<div class="col-md-2 btn-group">' +
            // '<button id="b1" class="btn btn-primary btnAdd" type="button" >+</button>'+
            '<button id="" class="btn btn-danger btnRemove" type="button" >-</button>' +
            '</div>' +
            '<div class="col-md-1">' +
            '<input class="form-control brandMotorID MyClass" type="text" id="brandMotorID_' + counter + '" disabled type="hidden">' +
            '</div>' +
            '</div>' +
            '</div>' +

            '');


    });


}


function removeRow() {

    $(document).on('click', '.btnRemove', function (e) {
        $(this).parent().parent().parent().remove();

        e.preventDefault();

        return false;
    });

}
