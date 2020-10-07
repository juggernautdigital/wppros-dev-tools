(function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

	 var a = document.body.scrollWidth;
	 var b = document.documentElement.scrollWidth;
	 var c = document.body.offsetWidth;
	 var d = document.documentElement.offsetWidth;
	 var e = document.documentElement.clientWidth;
	 var f = window.innerWidth;

console.log( a,b,c,d,e,f );





$(document).ready(function() {





	 function getWidth() {
	  return Math.max(
	 	 document.body.scrollWidth,
	 	 document.documentElement.scrollWidth,
	 	 document.body.offsetWidth,
	 	 document.documentElement.offsetWidth,
	 	 document.documentElement.clientWidth,
		 window.innerWidth
	  );
	 }

	 var wpprozsw = getWidth();

	 var result = parseInt( wpprozsw ) / parseInt( 16 );

	 $("#media_query_dev_tool span").html(getWidth() + "px" + " " + result + "em");

	 $(window).resize(function() {
	 	 // do something here

		 var wpprozsw = getWidth();
		 var result = parseInt( wpprozsw ) / parseInt( 16 );

	 	 $("#media_query_dev_tool span").html(getWidth() + "px" + " " + result + "em");
	 });



});


})( jQuery );
