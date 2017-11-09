$(document).ready(function(){
		

       $('#main-title-panel li a').focus(function(){
    	var dom = $(this).parent().find('.sub-title').clone();
    	// $('#subtitle-panel').attr('hidden',false);
    	console.log(dom);
    	$('#subtitle-panel').empty();
    	$('#subtitle-panel').append(dom).find('ul.sub-title').attr('hidden',false);
    });

     $('.searchCondition a').on('click',function(){

     		$(this).parent('li').find('a.cur').removeClass('cur');
     		$(this).addClass('cur');
     });

       $('.js-example-basic-multiple#attractions').select2({
                placeholder: "Attractions",
                //allowClear: true

       });  

});


