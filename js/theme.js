(function(a){a("body").length&&a("body").append('');var k=window.location.href.substr(window.location.href.lastIndexOf("https://html.creativegigstf.com/")+1);a(".navbar-nav > li  a").each(function(){a(this).attr("href")!=k&&""!=a(this).attr("href")||a(this).addClass("active")});a(".counter").length&&a(".counter").counterUp({delay:10,time:1200});a(window).on("scroll",
function(){var b=a(".sticky-menu");100<=a(window).scrollTop()?b.addClass("fixed"):b.removeClass("fixed")});a(window).on("scroll",function(){200<a(this).scrollTop()?a(".scroll-top").fadeIn():a(".scroll-top").fadeOut()});a(".scroll-top").on("click",function(){a("html, body").animate({scrollTop:0});return!1});a("input,textarea").each(function(){a(this).data("holder",a(this).attr("placeholder"));a(this).on("focusin",function(){a(this).attr("placeholder","")});a(this).on("focusout",function(){a(this).attr("placeholder",
a(this).data("holder"))})});if(a(".user-data-form").length)a(".passVicon").on("click",function(){a(".passVicon").toggleClass("eye-slash");var b=a(".pass_log_id");"password"===b.attr("type")?b.attr("type","text"):b.attr("type","password")});a(".service_slider_one").length&&a(".service_slider_one").slick({dots:!1,arrows:!1,centerPadding:"0px",slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:3E3,responsive:[{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]});
a(".service_slider_two").length&&a(".service_slider_two").slick({dots:!1,arrows:!1,centerPadding:"0px",slidesToShow:3,slidesToScroll:1,autoplay:!0,centerMode:!0,autoplaySpeed:3E3,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]});a(".portfolio_slider_one").length&&a(".portfolio_slider_one").slick({dots:!1,arrows:!0,prevArrow:a(".prev_p1"),nextArrow:a(".next_p1"),centerPadding:"0px",slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3500,responsive:[{breakpoint:1200,
settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]});a(".feedback_slider_one").length&&a(".feedback_slider_one").slick({dots:!0,arrows:!1,centerPadding:"0px",slidesToShow:3,slidesToScroll:1,autoplay:!0,centerMode:!0,autoplaySpeed:3E3,responsive:[{breakpoint:768,settings:{slidesToShow:1}}]});a(".feedback_slider_two").length&&a(".feedback_slider_two").slick({dots:!1,arrows:!0,prevArrow:a(".prev_f1"),nextArrow:a(".next_f1"),centerPadding:"0px",
slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:3E3,responsive:[{breakpoint:768,settings:{slidesToShow:1}}]});a(".feedback_slider_three").length&&a(".feedback_slider_three").slick({dots:!0,arrows:!1,centerMode:!0,centerPadding:"0px",slidesToShow:1,fade:!0,autoplay:!0,autoplaySpeed:3500});a(".feedback_slider_four").length&&a(".feedback_slider_four").slick({dots:!0,arrows:!1,centerMode:!0,centerPadding:"0px",slidesToShow:1,fade:!0,autoplay:!0,autoplaySpeed:3500});a(".partner_slider_one").length&&
a(".partner_slider_one").slick({centerMode:!0,centerPadding:"0px",arrows:!1,slidesToShow:4,autoplay:!0,autoplaySpeed:3E3,responsive:[{breakpoint:992,settings:{centerMode:!0,slidesToShow:4}},{breakpoint:768,settings:{centerMode:!0,slidesToShow:3}},{breakpoint:480,settings:{centerMode:!0,slidesToShow:2}}]});a(".skills").length&&a(".skills").skill();a(".circle_percent").length&&a(".circle_percent").each(function(){var b=a(this),c=b.data("percent"),d=3.6*c,e=b.find(".round_per");e.css("transform","rotate("+
parseInt(d+180)+"deg)");b.append('<div class="circle_inbox"><span class="percent_text"></span></div>');b.prop("Counter",0).animate({Counter:c},{duration:2E3,easing:"swing",step:function(f){b.find(".percent_text").text(Math.ceil(f)+"%")}});51<=c&&(e.css("transform","rotate(360deg)"),setTimeout(function(){b.addClass("percent_more")},1E3),setTimeout(function(){e.css("transform","rotate("+parseInt(d+180)+"deg)")},1E3))});a("#contact-form").length&&(a("#contact-form").validator(),a("#contact-form").on("submit",
function(b){if(!b.isDefaultPrevented())return a.ajax({type:"POST",url:"inc/contact.php",data:a(this).serialize(),success:function(c){var d="alert-"+c.type;c=c.message;var e='<div class="alert '+d+' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+c+"</div>";d&&c&&(a("#contact-form").find(".messages").html(e),a("#contact-form")[0].reset())}}),!1}));a(window).on("load",function(){a("#ctn-preloader").fadeOut();a("#preloader").delay(350).fadeOut("slow");
a("body").delay(350).css({overflow:"visible"});a("[data-aos]").length&&AOS.init({duration:800,mirror:!0,once:!0,offset:50});var b=a(".fancybox");b.length&&b.fancybox({arrows:!0,buttons:["zoom","slideShow","thumbs","close"],animationEffect:"zoom-in-out",transitionEffect:"zoom-in-out"});if(a("#isotop-gallery-wrapper").length){var c=a("#isotop-gallery-wrapper").isotope({itemSelector:".isotop-item",percentPosition:!0,masonry:{columnWidth:".grid-sizer"}});a(".isotop-menu-wrapper").on("click","li",function(){var d=
a(this).attr("data-filter");c.isotope({filter:d})});a(".isotop-menu-wrapper").each(function(d,e){var f=a(e);f.on("click","li",function(){f.find(".is-checked").removeClass("is-checked");a(this).addClass("is-checked")})})}});(function(b){b.fn.transformHeroes=function(){var c=this.width(),d=this.height(),e=c/2,f=d/2;this.on({mousemove:function(g){var h=b(this).offset(),l=e-(g.pageX-h.left);g=f-(g.pageY-h.top);b(this).css("transform","perspective(700px) rotateX("+g/50+"deg) rotateY("+-(l/50)+"deg)");
b(this).removeClass("is-out")},mouseleave:function(){b(this).addClass("is-out")}});return this}})(jQuery);a(".transform-img-meta").transformHeroes()})(jQuery);












let contactBTN = document.getElementById('contactBTN')
contactBTN.addEventListener('click',()=>{
	window.scrollTo({
    top: document.body.scrollHeight, // Sayfa yüksekliğine kaydır
    behavior: 'smooth' // Yumuşak kaydırma efekti
  });
})