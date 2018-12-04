/*
 * Labstyle
*/

jQuery(document).ready(function($){
	/**********   全站JS   *********/
	var Glo = {
		/**
		 * 
		 */
		logo: function() {
			// $('.site-title').html('<a href="http://dblab.xmu.edu.cn/" title="厦门大学数据库实验室" rel="home">厦门大学数据库实验室<span class="site-logo"><img src="http://dblab.xmu.edu.cn/wp-content/themes/labstyle/images/branding.png" /></span></a>');
		},
		/**
		 * 网站统计
		 */
		addTongji: function() {
			// cnzz统计
			var cnzz = document.createElement("script");
			cnzz.src = "//s4.cnzz.com/z_stat.php?id=1258992124&web_id=1258992124";
			var s = document.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(cnzz, s);
			// 百度统计，才能看到百度的搜索关键词
			var hm = document.createElement("script");
			hm.src = "//hm.baidu.com/hm.js?cdf40af5f6d12dbdd627a870fcaffbd6";
			var s = document.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(hm, s);
		},
		/**
		 * 浏览器兼容
		 */
		ieVersion: function() {
		    var ver = 100;
		    if ($.browser.msie) {
		        ver = parseInt($.browser.version);
		    }
		    return ver;
		},
		forIE: function() {
			if (this.ieVersion() == 8 && document.documentMode != 8) { /* IE8兼容模式 */
				$('#wrapper').before('<div style="text-align: center;font-size: 16px; padding: 20px 0; line-height: 1.6em;">您正在使用兼容模式浏览本站，<b>强烈建议您切换到正常/极速模式</b>。<br/><br/>'+
					'兼容模式是为了能支持旧网站，但在本网站下会有错位等情况，影响浏览。<br/>一般在地址栏（即网址的输入框）的右边有切换正常/兼容模式的按钮。<br/>'+
					'切换后本提示自动消失。</div>');
			}
			if (this.ieVersion() <= 8 ) { /* IE 透明 */
				$('.caption-wrap').css({'background-color': '#FFFFFF', 'opacity': '0.6'});
			}
			if (this.ieVersion() <= 7 ) { /* IE6,7 布局 */
				$('.site-content').css({'width': '72%'});
				$('.widget-area').css({'width': '24%'});
				$('#wrapper').before('<div style="text-align: center;font-size: 16px; padding: 20px 0; line-height: 1.6em;">您正在使用的浏览器对本网站支持不佳。<br/><br/>不论处于什么原因，您还在使用已经落伍的低版本IE，<br/>'+
					'但强烈建议您尝试使用<a href="http://www.google.com/intl/zh-CN/chrome/‎" target="_blank">Chrome</a>、<a href="http://www.firefox.com.cn/‎" target="_blank">Firefox</a>等现代浏览器，<br/>'+
					'或使用<a href="http://ie.sogou.com" target="_blank">搜狗浏览器</a>等双核浏览器且切换到高速(WebKit)内核来浏览网站，</br>'+
					'<strong>这将大大提升您的上网体验！</strong></div>');
			}
		},
		/**
		 * metaslider
		 */
		metaslider: function() {
			if ($('#teachers').length) {
				html = '<div class="widget-title"><h5>教师风采</h5></div>'+
				'<div style="width: 100%; margin: 0 auto;" class="metaslider metaslider-responsive metaslider-1558 ml-slider"><div id="metaslider_container_1558"><ul id="metaslider_1558" class="rslides">'+
					'<li><a href="http://dblab.xmu.edu.cn/post/113/" target="_blank"><img src="http://dblab.xmu.edu.cn/wp-content/uploads/2012/01/linziyu-200x300.jpg" height="300" width="200" class="slider-1558 slide-1609" /><div class="caption-wrap"><div class="caption">林子雨</div></div></a></li>'+
					'<li style="display: none;"><a href="http://dblab.xmu.edu.cn/post/112/" target="_blank"><img src="http://dblab.xmu.edu.cn/wp-content/uploads/2012/01/zhangdongzhan-200x300.jpg" height="300" width="200" class="slider-1558 slide-1615" /><div class="caption-wrap"><div class="caption">张东站</div></div></a></li>'+
					'<li style="display: none;"><a href="http://dblab.xmu.edu.cn/post/114/" target="_blank"><img src="http://dblab.xmu.edu.cn/wp-content/uploads/2012/01/linwenshui-146x220.jpg" height="300" width="200" class="slider-1558 slide-1614" /><div class="caption-wrap"><div class="caption">林文水</div></div></a></li>'+
					'<li style="display: none;"><a href="http://dblab.xmu.edu.cn/post/110/" target="_blank"><img src="http://dblab.xmu.edu.cn/wp-content/uploads/2012/01/fengshaorong-192x289.jpg" height="300" width="200" class="slider-1558 slide-1617" /><div class="caption-wrap"><div class="caption">冯少荣</div></div></a></li>'+
				'</ul></div></div>';

				html = html + '<div class="all-teachers"><ul class="clearfix">'+
					'<li><a href="http://dblab.xmu.edu.cn/post/113/" target="_blank"><img src="http://dblab.xmu.edu.cn/wp-content/uploads/2012/01/linziyu-200x300.jpg" /><div class="caption-wrap"><div class="caption">林子雨</div></div></a></li>'+
					'<li><a href="http://dblab.xmu.edu.cn/post/112/" target="_blank"><img src="http://dblab.xmu.edu.cn/wp-content/uploads/2012/01/zhangdongzhan-200x300.jpg" /><div class="caption-wrap"><div class="caption">张东站</div></div></a></li>'+
					'<li><a href="http://dblab.xmu.edu.cn/post/114/" target="_blank"><img src="http://dblab.xmu.edu.cn/wp-content/uploads/2012/01/linwenshui-146x220.jpg" /><div class="caption-wrap"><div class="caption">林文水</div></div></a></li>'+
					'<li><a href="http://dblab.xmu.edu.cn/post/110/" target="_blank"><img src="http://dblab.xmu.edu.cn/wp-content/uploads/2012/01/fengshaorong-192x289.jpg" /><div class="caption-wrap"><div class="caption">冯少荣</div></div></a></li>'+
				'</ul></div>';

				$('#teachers').html(html);
			}
			/* 首页幻灯片 */
			if ($('#metaslider_1554').length) {
				$('#metaslider_1554').responsiveSlides({ 
					timeout:5000,
					pager:false,
					nav:true,
					pause:false,
					speed:600,
					prevText:"<",
					nextText:">",
					auto:true
				});
			}
			/* 列表页和文章页的幻灯片 */
			if ($('#metaslider_1558').length) {
				$('#metaslider_1558').responsiveSlides({ 
					timeout:5000,
					pager:false,
					nav:true,
					pause:false,
					speed:600,
					prevText:"<",
					nextText:">",
					auto:true
				});
			}
		},
		init: function() {
			this.logo();
			this.forIE();
			this.metaslider();
			this.addTongji();
		}
	};


	/**********   首页JS   *********/
	var Home = {
		statistics: function() {
			var siteUrl = "http://dblab.xmu.edu.cn/";
			$.ajax({
				type: "GET",
				dataType: "json",
				url: siteUrl + "wp-content/themes/labstyle/inc/statistics.php"
				// cache: false
			}).done(function( data ) {
				if (data['status'] == 'success') {
					$('#statistics-total-pv').text(data['data']['total_pv']);
					$('#statistics-yestoday-pv').text(data['data']['yestoday_pv']);
					$('#statistics-today-pv').text(data['data']['today_pv']);
					if (data['date'] < '0600') {
						$('#site-statistics-text').html($('#site-statistics-text').html() + ' (当前数据维护中，数据显示可能不正常)');
					}
				} else {
					$('#site-statistics-text').html('!加载访问数据出错，请尝试刷新页面重试!');
				}
			});
		},
		init: function() {
			if ($('body').hasClass('home')) {
				this.statistics();
			}
		}
	}


	/**********   分类页JS   *********/
	var Archive = {
		categoryGallery: function() {
			/* 相册分类直接popup */
			$('.gallery-link').each(function() {
				var data = $(this).attr('data');
				/* 有的文章未设置缩略图，则点击直接进入文章 */
				if (!data) {
					// data = '[{"link": ' + $(this).find('img').attr('src') + ', caption:""}]';
					$(this).attr('class', 'gallery-link-none');
				} else {
					var item = jQuery.parseJSON(data);
					var html = '<span class="post-gallery-popup" style="display:none">';
					for (var i = 0; i < item.length; i++) {
						html += '<a href="'+item[i].link+'">'+item[i].caption+'</a>';
						// console.log(item[i].link);
					};
					html += '</span>';
					$(this).after(html);
				}
			});

			/**
			 * gallery popup初始化
			 */
			$('.post-gallery-popup').each(function() { // the containers for all your galleries
				$(this).magnificPopup({
					delegate: 'a', // the selector for gallery item
					type: 'image',
					tLoading: '图片加载中...',
					gallery: {
						enabled: true,
						// cursor: 'mfp-zoom-out-cur',
						preload: [0,2],
						navigateByImgClick: true,
						// arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
						titleSrc: 'title',
						tCounter: '%curr% of %total%' // markup of counter
					},
					image: {
						tError: '图片未能加载.',
						titleSrc: function(item) {
							return item.el.text();
						}
					}
			    });
			}); 

			/**
			 * 点击thumbnail则触发点击第一张图片来popup
			 */
			$('.gallery-link').on('click', function(event) {
				event.preventDefault();
				$(this).siblings('.post-gallery-popup').find('a:first').trigger('click');
			});

		},
		init: function() {
			if ($('body').hasClass('category-gallery')) {
				this.categoryGallery();
			}
		}

	};

	/********** 内容页JS   ********/
	var Single = {
		gallery: function() {
			/**
			 * popup iamges
			 */
			$('.image-link').magnificPopup({type:'image'});

			/**
			 * gallery
			 */
			$('.gallery').each(function() { // the containers for all your galleries
				$(this).magnificPopup({
					delegate: 'a', // the selector for gallery item
					type: 'image',
					tLoading: '图片加载中...',
					gallery: {
						enabled: true,
						// cursor: 'mfp-zoom-out-cur',
						preload: [0,2],
						navigateByImgClick: true,
						// arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
						titleSrc: 'title',
						tCounter: '%curr% of %total%' // markup of counter
					},
					image: {
						tError: '图片未能加载.',
						titleSrc: function(item) {
							return item.el.find('span').text();
						}
					}
			    });
			}); 

			if ($('.gallery-need-load').find('a').length) {
				$('.gallery').after('<div id="gallery-load-more" class="gallery-load-more"><span>显示更多照片(' + $('.gallery-need-load').find('a').length + ')</span></div>');
				$('#gallery-load-more').bind('click', function() {
					var i = 0;
					$('.gallery-need-load').find('a').each(function() {
						if (i > 23) return;
						i++;
						var html = '<dl class="gallery-item">' +
							'<dt class="gallery-icon">' +
								'<a href="'+ $(this).attr('href') +'">' +
									'<img src="'+ $(this).attr('data-src') +'" class="attachment-thumbnail" alt="nebulae outer space stars">' +
									'<span class="gallery-caption">'+ $(this).text() +'</span>' +
								'</a>' + 
							'</dt>' +
						'</dl>';
						$('.gallery').append(html);
						$(this).remove();
					});
					if ( !$('.gallery-need-load').find('a').length ) {
						$('#gallery-load-more').hide();
					} else {
						$('#gallery-load-more').html('<span>显示更多照片(' + $('.gallery-need-load').find('a').length + ')</span>');
					}
				});
			}
		},
		/* 在小分辨率下，表格的处理 */
		tableAdvanced: function() {
			var w = $('.entry-content').width();
			$('.entry-content table').each(function() {
				// 不处理嵌套的table
				if ( $(this).parent('table').length ) return false;
				// 超出宽度，则外嵌一个 div
				if ( !$(this).parent().hasClass('table-overflow-wrap') && ( $(this).width() > w ) ) {
					$('<span style="display:block; width:100%; font-size: 12px;text-align: right;color: #AAA;">左右滑动下方表格查看超出屏幕的内容</span>').insertBefore($(this));
					$(this).wrap('<div class="table-overflow-wrap" style="overflow-x: auto; box-shadow: 0 0 0, 5px 0px 5px #ccc,0 0 0, 0 0 0;"></div>');
				}
			});
			$('.table-overflow-wrap').width(w);
		},
		ajaxCount: function() {
			var siteUrl = 'http://dblab.xmu.edu.cn/';
			var postId = null;
			var c = document.getElementsByTagName('body')[0].className;
			if (c) postId = c.match(/postid-([\d]+)/)[1];
			if (!postId) return false;
			$.ajax({
				type: "GET",
				url: siteUrl + "wp-content/plugins/ajax-hits-counter/increment-hits.rapid.php?post_id=" + postId + "&t="+(parseInt(new Date().getTime()))+"&r="+(parseInt(Math.random()*100000))
				// cache: false
			}).done(function( html ) {
				$( "#views" ).text( html );
			});
		},
		backToTop: function() {
			$('body').append('<div class="back-to-top" id="back-to-top" title="嗖的就上去了！"><span>∧</span></div>');
			$(window).bind("scroll", function(){

				// 获取网页文档对象滚动条的垂直偏移
				var scrollTopNum = $(document).scrollTop(),
				    // 获取浏览器当前窗口的高度
				    winHeight = $(window).height(),
				    returnTop = $("#back-to-top");

				// 滚动条的垂直偏移大于 0 时显示，反之隐藏
				(scrollTopNum > 300) ? returnTop.fadeIn(200) : returnTop.fadeOut(200);

				// 给 IE6 定位
				if (!-[1,]&&!window.XMLHttpRequest) {
				    returnTop.css("top", scrollTopNum + winHeight - 200);
				}

				// 相册自动加载
				if ( $('.gallery').length && $('#gallery-load-more').is(":visible") ) {
					// 整个页面的高度
					var documentHeight = $(document).height();
					if (scrollTopNum + winHeight >= documentHeight - 120) {
						$('#gallery-load-more').trigger('click');
					}
				}

			});

			// 点击按钮后，滚动条的垂直方向的值逐渐变为0，也就是滑动向上的效果
			$("#back-to-top").click(function() {
			  $("html, body").animate({ scrollTop: 0 }, 500);
			});

		},
		resize: function() {
			// var w = $(document).width();
			// var h = $(document).height();
			// var wVideo = 640;
			// var hVideo = 480;
			// // 调整视频尺寸
			// if ($('.video-youku iframe').length && (w>=320 && w<=720) ) {
			// 	console.log(w/wVideo*hVideo);
			// 	$('.video-youku iframe').height(w/wVideo*hVideo);
			// }
			Single.tableAdvanced();
		},
		init: function() {
			if ($('body').hasClass('single-post')) {
				this.tableAdvanced();
				this.gallery();
				this.ajaxCount();
				this.backToTop();

				this.resize();
				$(window).resize(Single.resize);
			}
		}
	};

	Glo.init();
	Home.init();
	Archive.init();
	Single.init();
});
