$(document).ready(function() {
	$(function() {     
    $('.navbar_toggler').on('click',function(e) {
        e.preventDefault();
        $('.nav').slideToggle(400);
        $('.nav').css('backgroundColor', '#fff').css('display', 'flex');
    });
});
	
		const buy = document.getElementsByClassName('buy');
		const shop = document.getElementById("result");
		const prod = document.getElementById('prod');
		let price = 0;
		let item = 0;

		for(let i=0;i<buy.length; i++) {
		buy[i].addEventListener('click', addToShop);
		}

		function addToShop(){
		let cena = parseFloat(this.value) + price;
		
		item++
		shop.innerHTML = `${cena} zł/`;
		prod.innerHTML = `prod.(${item})`;
		price += parseFloat(this.value);
}

		$('#buy').click(function(){
			$('#txt').html('Dodano<i class="fas fa-check"></i>').css('color', 'green');
		});
		
		$('#buy_two').click(function(){
			$('#txt_two').html('Dodano<i class="fas fa-check"></i>').css('color', 'green');
		});
		
		$('#buy_three').click(function(){
			$('#txt_three').html('Dodano<i class="fas fa-check"></i>').css('color', 'green');
		});
		
		$('#buy_four').click(function(){
			$('#txt_four').html('Dodano<i class="fas fa-check"></i>').css('color', 'green');
		});
		
		$('#buy_six').click(function(){
			$('#txt_six').html('Dodano<i class="fas fa-check"></i>').css('color', 'green');
		});
		
		$('#buy_seven').click(function(){
			$('#txt_seven').html('Dodano<i class="fas fa-check"></i>').css('color', 'green');
		});
		
		$('#buy_eight').click(function(){
			$('#txt_eight').html('Dodano<i class="fas fa-check"></i>').css('color', 'green');
		});
		
		$('#buy_nine').click(function(){
			$('#txt_nine').html('Dodano<i class="fas fa-check"></i>').css('color', 'green');
		});
		
		$('#buy_two').click(function(){
			$('#txt_two').html('Dodano<i class="fas fa-check"></i>').css('color', 'green');
		});
	
});