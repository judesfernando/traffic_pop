$(document).ready(function(){
	
	$('body').append('<div id="fb-root"></div> <script>(function(d, s, id) {  var js, fjs = d.getElementsByTagName(s)[0];  if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/en_US/all.js#xfbml=1"; fjs.parentNode.insertBefore(js, fjs);}(document, \'script\', \'facebook-jssdk\'));</script>');
	
	$e = $('<div></div>').addClass('traffic_pop_modal');
	
	$dialog = $('<div></div>').addClass('traffic_pop_dialog');
	
	if(traffic_pop.show_close){
		$close = $('<a href="#" class="traffic_pop_close"></a>').bind('click',function(){
			$e.fadeOut(400,function(){
				$e.remove();
			});
			return false;
		})
	}
	else{
		$close='';
	}
	$body = '<div class="traffic_pop_dialog_body"> <div class="fb-like" data-href=" '+ traffic_pop.fb_url +'" data-width="450" data-show-faces="true"></div> </div>';
			
	$dialog.append( $('<div><h2>'+ traffic_pop.title +'</h2></div>').addClass('traffix_pop_dialog_header').append( $close ) );
	$dialog.append( $body );
	
	
	var st_time = traffic_pop.max_duration;
	var timer = setInterval(function(){setTime(st_time--)},1000);
	
	$footer_msg = $('<div>This will close in '+st_time+' seconds | <a target="_blank" href="http://goo.gl/cbjhP" >Powered by Traffic Pop for Drupal</a></div>').addClass('traffic_pop_dialog_footer'); 
	
	$dialog.append( $footer_msg );
	
	$e.append( $dialog );
	$('body').append($e).hide().fadeIn();
	
	function setTime(st_time){

		if(st_time<=0){
			
			clearInterval(timer);
			$e.fadeOut(400,function(){
				$e.remove();
			});
		}
		
		$footer_msg.html('<div>This will close in '+st_time+' seconds | <a target="_blank" href="http://goo.gl/cbjhP" >Powered by Traffic Pop for Drupal</a></div>');
	}

})	