// JavaScript Document

$(document).ready(function() {

	//主選單內的次選單2
	$("#pgdata1").hide();
	$("#pgdata2").hide();
	$("#pgdata3").hide();
	$(".opensubmenuToDown").on("click",function(){
		$(this).next("div").slideToggle(500);
		//$(".submenu_div").toggle(500);
	});
	
	$('.btnhover').each(function(){
		$(this).click(function(){
			$('.btnhover').removeClass(" btnclick");
			$(this).addClass(" btnclick");
		});
	});
	$('.subbtnhover').each(function(){
		$(this).click(function(){
			$('.subbtnhover').removeClass(" subbtnclick");
			$(this).addClass(" subbtnclick");
		});
	});
	
	
});