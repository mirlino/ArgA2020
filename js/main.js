// // Scroll arriba de la web
// $('.subir').click(function(e){
//     e.preventDefault();
    
//     $('html, body').animate({
//         scrollTop: 0
//     }, 500);
//     return false;
    
//     });


// /*Menu*/
// $(document).ready(main);
 
// var contador = 1;
 
// function main () {
    
//     // Mostramos y ocultamos submenus
// 	$('.submenu').click(function(){
//         $(this).children('.children').slideToggle();
// 	});
// }


// /*Subir al top*/
// $(window).scroll(function() {        
//     var scroll = $(window).scrollTop();    
//     if (scroll >= 1000) {
//         var element = document.getElementById("ventana");
//         element.classList.add("d-block");
//         element.classList.remove("d-none");
//         element.classList.remove("toTopY");
//         element.classList.add("toTop");

//     }else if(scroll < 500){
//         var element = document.getElementById("ventana");
//         element.classList.add("d-none");
//         element.classList.remove("d-block");
//         element.classList.remove("toTop");
//         element.classList.add("toTopY");
//     }
// });


// /*MENU FIXED AL BAJAR CON SCROLL*/
// $(window).scroll(function() {        
//     var scroll = $(window).scrollTop();    
//     if (scroll >= 2000) {
//         var element = document.getElementById("my-menuEffect");
//         element.classList.remove("my-menu");
//         element.classList.add("my-menu-scroll");
//     }else if(scroll < 200){
//         var element = document.getElementById("my-menuEffect");
//         element.classList.remove("my-menu-scroll");
//         element.classList.add("my-menu");
//     }
// });

// /*BackGround Tres*/
// $('.colorFondo-Uno').css({'height': (($(window).height()))+'px'});
 
// $(window).on('resize', function(){
//  $('.colorFondo-Uno').css({'height': (($(window).height()))+'px'});
// });

// /*BackGround Dos*/
// $('.colorFondo-Dos').css({'height': (($(window).height()))+'px'});
 
// $(window).on('resize', function(){
//  $('.colorFondo-Dos').css({'height': (($(window).height()))+'px'});
// });