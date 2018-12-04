
/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
jQuery(document).ready(function($){
	var LabMenu = {
		/**
		 * 显示小菜单
		 */
		showSmallMenu: function() {
			$('.site-navigation').append('<div class="small-menu"></div>');
		},
		/**
		 * 在主菜单中
		 */
		showSearch: function() {
			var html = '<div class="search-area"><span id="search-content" class="search-content">' +
						'<form role="search" method="get" class="search-form" action="http://dblab.xmu.edu.cn/">' + 
								'<input type="search" class="search-field" placeholder="搜索内容…" value="" name="s" title="搜索内容：">' +
								'<input type="submit" class="search-submit" value="搜索"></form>' +
						'</span><span id="search-icon" class="search-icon" title="搜索文章内容"></span></div>';
			$('.menu-main-container').append(html);
			$('#search-content').hide();
			$('#search-icon').on('click', LabMenu.toggleSearch);
		},
		/**
		 * 加载菜单效果
		 */
		showMenu: function() {
			$('#menu-main').on('click', 'li', function(event) {
			// $('#menu-main').on('click', 'li', function(event) {
				event.stopPropagation();
				if ($(this).hasClass('has-sub-menu')) {
					// console.log('has-sub-menu');
					event.preventDefault();
					if ($(this).hasClass('active')) {
						$(this).trigger('mouseleave');
					} else {
						$(this).trigger('mouseenter');
					}
				}
			});
			$('#menu-main > li').hover(
				function() {
					// console.log('trigger in');
					$(this).addClass('active').children('ul').stop(false, true).slideDown(200);
				}, function() {
					// console.log('trigger out');
					$(this).removeClass('active').children('ul').stop(false, true).slideUp(0);
				}
			);
		},
		/**
		 * 显示搜索框
		 */
		toggleSearch: function() {
			$('#search-icon').toggleClass('active');
			// $('#search-content').toggle();
			$('#search-content').stop(false, true).fadeToggle(300, function() {
				if ($('#search-icon').hasClass('active')) {
					$('#search-content').find('.search-field').focus();
				}
			});
		},
		/**
		 * 将当前菜单项加上背景
		 * 文章可能有多个分类，只取第一个
		 */
		showCurrentMenuItem: function() {
			if ($('#menu-main').find('.current-path').length == 1) {
					$('#menu-main').find('.current-path').addClass('active-path');
			} else {
				var arr = [];
				var flag = false;
				$('.breadcrumbs').find('a').each(function() {
					arr.push($(this).text());
				});
				$('#menu-main').find('.current-path').each(function() {
					if ($.inArray($(this).children('a').text(), arr) > -1) {
						flag = true;
						$(this).addClass('active-path');
					}
				});
				if (!flag) {
					$('#menu-main li:first').addClass('active-path');
				}
			}
		},
		/**
		 * 小菜单面板是需要时才载入的
		 */
		isLoad: false,
		/**
		 * 加载小菜单面板
		 */
		loadMenuPanel: function() {
			if (this.isLoad) return;
			this.isLoad = true;
			var html = '<div id="menu-panel" class="menu-panel"><div class="menu-panel-container">' + 
							'<div class="menu-panel-back"><a href="javascript:void(0);">返回</a></div>' + 
							'<div class="menu-panel-search">' + 
								'<form role="search" method="get" class="search-form" action="http://dblab.xmu.edu.cn/">' + 
								'<input type="search" class="search-field" placeholder="搜索内容…" value="" name="s" title="搜索内容：">' +
								'<input type="submit" class="search-submit" value="搜索"></form></div>';
			var menu = $('.menu-main-container').html();
			html += menu.replace(/( id="([^'"]*)")/g, '');
			html += '</div></div>';
			$('body').append(html);
			$('#menu-panel').css({'width': '260px'});
			$('#wrapper').css({'position': 'relative', 'left': 0, 'top': 0, 'z-index': '2'});
			$('.small-menu').on('click', this.toggleMenuPanel);
			$('.menu-panel-back').on('click', this.toggleMenuPanel);
			$('#menu-panel').on('click', 'li', this.menuPanelLink);
		},
		/**
		 * 记录小菜单面板的状态
		 */
		isActive: false,
		/**
		 * 显示小菜单面板
		 * 只要控制wrapper就可以了
		 */
		toggleMenuPanel: function() {
			// console.log(LabMenu.isActive);
			if (LabMenu.isActive) { // hide
				$('.small-menu').removeClass('small-menu-open');
				$('#wrapper').stop(false, true).animate({'left': '0'}, 300, function() {
					LabMenu.isActive = false;
					$('#menu-panel').hide();
					$('body').css('overflow-x', 'visible');
				});
			} else { // show
				$('body').css('overflow-x', 'hidden');
				$('#menu-panel').show();
				$('.small-menu').addClass('small-menu-open');
				$('#wrapper').stop(false, true).animate({'left': '260px'}, 300, function() {
					LabMenu.isActive = true;
				});
			}
		},
		/**
		 *
		 */
		menuPanelLink: function(event) {
			// console.log($(this).attr('class'));
			event.stopPropagation();
			if ($(this).hasClass('has-sub-menu')) {
				event.preventDefault();
				$(this).toggleClass('active-item').children('.sub-menu').slideToggle(200);
			}
		},
		/**
		 * 监视窗口大小改变，加载小菜单
		 * 其实这一步也可以不用，直接载入就行
		 */
		monitor: function() {
			// console.log('resize');
			if ($(window).width() < 720) {
				LabMenu.loadMenuPanel();
				$(window).off('resize', LabMenu.monitor);
			}
		},
		/**
		 * 初始化
		 */
		init: function() {
			this.showMenu();
			this.showSmallMenu();
			this.showSearch();
			this.showCurrentMenuItem();
			if (screen.width < 720) {
				this.loadMenuPanel();
			} else { // 屏幕尺寸大，才需要绑定resize
				if ($(window).width() < 720) {
					this.loadMenuPanel();
				} else {
					$(window).on('resize', LabMenu.monitor);
				}
			}
		}
	};

	LabMenu.init();

});
