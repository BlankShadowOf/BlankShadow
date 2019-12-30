/**
 * jquery.snow - jQuery Snow Effect Plugin
 *
 * Available under MIT licence
 *
 * @version 1 (21. Jan 2012)
 * @author Ivan Lazarevic
 * @requires jQuery
 * @see http://workshop.rs
 *
 * @params minSize - min size of snowflake, 10 by default
 * @params maxSize - max size of snowflake, 20 by default
 * @params newOn - frequency in ms of appearing of new snowflake, 500 by default
 * @params flakeColor - color of snowflake, #FFFFFF by default
 * @example $.fn.snow({ maxSize: 200, newOn: 1000 });
 * <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f82dc1a7-8b0b-495d-bab6-b97798f49ce4/dbwh40a-2466e07d-5072-4a4a-b248-1dad0272e0cf.png/v1/fill/w_1024,h_1132,strp/nero_claudius_navidad___padoru_padoru_by_alexzer09_dbwh40a-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEzMiIsInBhdGgiOiJcL2ZcL2Y4MmRjMWE3LThiMGItNDk1ZC1iYWI2LWI5Nzc5OGY0OWNlNFwvZGJ3aDQwYS0yNDY2ZTA3ZC01MDcyLTRhNGEtYjI0OC0xZGFkMDI3MmUwY2YucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.gFkiZa5meAlt0cutXtcTBpDzlA46r_Gf2u26DmgyxdE" style="width:30px;height:auto;">
 * &#10052;
 * &hearts;
 */

(function($){$.fn.snow=function(options){var $flake=$('<div id="flake" />').css({'position':'absolute','top':'-50px'}).html('&hearts;'),documentHeight=$(document).height(),documentWidth=$(document).width(),defaults={minSize:10,maxSize:35,newOn:500,flakeColor:"#FF0000"},options=$.extend({},defaults,options);var interval=setInterval(function(){var startPositionLeft=Math.random()*documentWidth-100,startOpacity=0.5+Math.random(),sizeFlake=options.minSize+Math.random()*options.maxSize,endPositionTop=documentHeight-40,endPositionLeft=startPositionLeft-100+Math.random()*200,durationFall=documentHeight*10+Math.random()*5000;$flake.clone().appendTo('body').css({left:startPositionLeft,opacity:startOpacity,'font-size':sizeFlake,color:options.flakeColor}).animate({top:endPositionTop,left:endPositionLeft,opacity:0.2},durationFall,'linear',function(){$(this).remove()});},options.newOn);};})(jQuery);