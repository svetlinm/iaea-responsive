(function(e){e(document).ready(function(){e("ul.nav li.dropdown, ul.nav li.dropdown-submenu").hover(function(){e(this).find(".dropdown-menu").stop(!0,!0).delay(200).fadeIn(200)},function(){e(this).find(".dropdown-menu").stop(!0,!0).delay(200).fadeOut(200)});e("ul.nav li.dropdown, ul.nav li.dropdown-submenu").click(function(e){e.stopPropagation()});e(".bootstrap-tabs a").click(function(t){t.preventDefault();e(this).tab("show")});e(".bootstrap-tabs a:first").tab("show");e(".social").tooltip();e(window).scroll(function(){e(this).scrollTop()>200?e(".go-top").fadeIn(500):e(".go-top").fadeOut(200)});e(".go-top").click(function(t){t.preventDefault();e("html, body").animate({scrollTop:0},500)});e(".basicpage-image").each(function(){e(this).parent().width(e(this).width())})})})(jQuery);