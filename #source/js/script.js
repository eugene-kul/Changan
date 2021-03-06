//добавление иконки ко всем кнопкам btn-type3
let btnSvg1 = `<svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M2.9842 0.0421448H0L5.9684 7.45481L0 14.9579H2.9842L8.9526 7.45481L2.9842 0.0421448Z"/><path d="M9.03156 0.0421448H6.04736L12.0158 7.45481L6.04736 14.9579H9.03156L15 7.45481L9.03156 0.0421448Z"/></svg>`;
$('.btn.btn-type3').append(btnSvg1);

//мобильное меню
$('.js-menu-icon').click(function(){
	$(this).toggleClass('active');
	$('.js-overflow').toggleClass('active');
	$('.js-menu-list').toggleClass('active');
	//$('body').toggleClass('lock');
});
$('.js-overflow').click(function(){
	$(this).toggleClass('active');
	$('.js-menu-icon').toggleClass('active');
	$('.js-menu-list').toggleClass('active');
	//$('body').toggleClass('lock');
});

//залипалка второй строчи менюшки
addEventListener('scroll', slimMenu);
addEventListener('resize', slimMenu);
slimMenu();
function slimMenu() {
	let list_hght = $('.js-menu-body').css('height').replace('px','');
	let header_hght = $('header').css('height').replace('px','');
	$('body').css('padding-top', header_hght+'px');
	let topScroll = window.pageYOffset;
	if (topScroll <= header_hght-list_hght) {
		$('header').css('top', 0 - topScroll +'px');
		if ($(window).outerWidth()<=767.98) {$('.js-menu-list').css('top', header_hght - topScroll +'px')}
		else {$('.js-menu-list').css('top', '0px')}
	}
	else {
		$('header').css('top', list_hght - header_hght+'px');
		if ($(window).outerWidth()<=767.98) {$('.js-menu-list').css('top', list_hght +'px')}
		else {$('.js-menu-list').css('top', '0px')}
	}
}

//смена цветов==============//
let colors = $('.cart-model__content-colors-list-item');
let colorName = $('.cart-model__content-colors-text span.color-name');
let carImage = $('.cart-model__content-image img');
$(colors).click(function(){
	if ($(this).hasClass('active')) {return}
	if($(colors).hasClass('active')){$(colors).removeClass('active')}
	$(this).toggleClass('active');
	refreshColor();
});
function refreshColor() {
	$(colors).each(function(i,item) {
		$(this).css('background-color', $(item).attr('data-color'));
		if($(this).hasClass('active')) {
			$(colorName).text($(item).attr('data-color-name'));
			$(carImage).each(function(i,img) {
				if ($(img).css('display') == 'inline-block') {$(img).css('display', 'none')};
				if($(item).attr('data-color-name') == $(img).attr('data-color-name')) {$(img).css('display', 'inline-block')}
			});
		}
	});
}
refreshColor();

//смена цветов при наведении=================
let smallColor = $('.equipment-block__item-equipment-name-color-item');

$(smallColor).hover(function() {
	let color = $(this).attr('data-color-name');
	let smallImage = $(this).parent().parent().parent().prev().children('img');
	$(smallImage).each(function(i,img) {
		$(img).css('display', 'none');
		if(color == $(img).attr('data-color-name')) {$(img).css('display', 'inline-block')}
	});
});

//кнопка характеристики в маленькой карточке==================
let eqSmallBtn = $('.equipment-block__item-equipment-description-btn');
$(eqSmallBtn).click(function(){
	$(this).toggleClass('active');
	$(this).parent().parent().next().slideToggle(300);
});

//tab===================
$('.tab-block__tab-nav-item').click(function(){
	if ($(this).hasClass('active')) {return;}
	var tabItem = $(this).data('tab'),
		tab = $('.tab-block__tab-item[data-tab="'+tabItem+'"]');
	
		$('.tab-block__tab-nav-item.active').removeClass('active');
		$(this).addClass('active');

		$('.tab-block__tab-item.active').removeClass('active');
		$(tab).addClass('active');
});

//equipment list===================
$('.js-sp-main').click(function(){
	$(this).toggleClass('active').next().slideToggle(300);
});

//смена курсора====================//
let eqDropItem = $('.equipment-block__item-drop-btn.list');
$(eqDropItem).css('cursor', 'url("/images/icons/pointer-small.png") 10 8, pointer');
$(eqDropItem).mousedown(function(e){
	$(this).css('cursor', 'url("/images/icons/pointer-small-2.png") 10 8, pointer');
});
$(eqDropItem).mouseup(function(e){
	$(this).css('cursor', 'url("/images/icons/pointer-small.png") 10 8, pointer');
});

//вертикальный ховер
let cells = $('.in-stock-block__compare-table table td');
$(cells).mouseover(function() {
	let index = $(this).index();
	$(cells).each(function(i,cell) {
		if (cell.cellIndex == index && cell.cellIndex != 0) {
			$(cell).addClass('table-hover');
		}	else {$(cell).removeClass('table-hover')}
	});
});
$(cells).mouseout(function() {
	$(cells).each(function(i,cell) {
		$(cell).removeClass('table-hover')
	});
});