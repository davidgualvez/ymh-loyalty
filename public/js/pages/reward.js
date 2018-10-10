$(document).ready(function(){
	var reward_id = getParams('id');
	loadReward(reward_id); 

	btnRedeem();
});

//global
var reward_id = null;

function loadReward(id){
	$('.container').preloader();
	postWithHeader(routes.reward,{id:id},function(response){
		if(response.success == false){
			$('#if_not_null').css('display','none');
			$('#if_null').css('display','block'); 
			$('.container').preloader('remove');
			return;
		}	 

		reward_id = response.data.id;
		var base_url = response.data.base_url;
		$('#r-name').html(response.data.name);
		$('#r-points').html(response.data.points);
		$('#r-description').html(response.data.description); 
		$('#m-v').attr('href',base_url + response.data.images.main); 		$('#m-v').children().attr('src',base_url + response.data.images.main);
		$('#l-v').attr('href',base_url + response.data.images.left_side); 	$('#l-v').children().attr('src',base_url + response.data.images.left_side);
		$('#r-v').attr('href',base_url + response.data.images.right_side); 	$('#r-v').children().attr('src',base_url + response.data.images.right_side);
		$('#t-v').attr('href',base_url + response.data.images.top); 		$('#t-v').children().attr('src',base_url + response.data.images.top);



		$('#if_not_null').css('display','block');
		$('#if_null').css('display','none'); 
		$('.container').preloader('remove');
	});
}

function btnRedeem(){

	$('#btn_redeem').on('click',function(){
		$.confirm({
		    title: 'Confirmation!',
		    content: 'Are you sure you want to redeem this item?. Please confirm to continue!',
		    type: 'dark',
		    buttons: { 
		        cancel: function () {
		            //$.alert('Canceled!');
		        },
		        somethingElse: {
		            text: 'Confirm',
		            btnClass: 'btn-green',
		            keys: ['enter', 'shift'],
		            action: function(){ 
		               redirectTo('/shipment?reward_id='+reward_id);
		            }
		        }
		    }
		});
		
	});

}