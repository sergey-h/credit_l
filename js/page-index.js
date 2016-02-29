jQuery(document).ready(function($) {
	setTestimonalHendler();
	$('#carousel-home-testimonal ul.item.active li:first a').click();
	initCarousels();

	function setTestimonalHendler() {
		var li_containers = $('#carousel-home-testimonal ul li');

		$('#carousel-home-testimonal ul.item a').click(function(){
			li_containers.removeClass('active');
			$(this).parent('li').addClass('active');

			console.log( $(this).parent('li').index() );

			$('#testimonal_placeholder').html( $(this).parent('li').find('.testimonal_content').html() );
			$('.clientpost .container').removeClass('tetimonal0_0').removeClass('tetimonal0_1').removeClass('tetimonal0_2').removeClass('tetimonal0_3');
			$('.clientpost .container').addClass('tetimonal0_' + $(this).parent('li').index() );
			return false;
		})
	}

	function initCarousels() {

		$('#carousel-home-testimonal').carousel({
		  interval: 1000
		}).carousel('pause');

		$('#carousel-home-testimonal').on('slide.bs.carousel', function(ev) {
			console.log(ev);
			$(ev.relatedTarget).find('li:first a').click();
		})

	}
})	