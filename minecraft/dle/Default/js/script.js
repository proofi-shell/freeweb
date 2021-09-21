window.N2PRO = 1;
window.N2GSAP = 1;
window.N2PLATFORM = "viadevelop";
(function() {
    var N = this;
    N.N2_ = N.N2_ || {
        r: [],
        d: []
    }, N.N2R = N.N2R || function() {
        N.N2_.r.push(arguments)
    }, N.N2D = N.N2D || function() {
        N.N2_.d.push(arguments)
    }
}).call(window);
if (!window.n2jQuery) {
    window.n2jQuery = {
        ready: function(cb) {
            console.error('n2jQuery will be deprecated!');
            N2R(['$'], cb);
        }
    }
}
window.nextend = {
    localization: {},
    ready: function(cb) {
        console.error('nextend.ready will be deprecated!');
        N2R('documentReady', function($) {
            cb.call(window, $)
        })
    }
};
window.N2SSPRO = 1;
window.N2SS3C = "smartslider3";
nextend.fontsLoaded = false;
nextend.fontsLoadedActive = function() {
    nextend.fontsLoaded = true;
};
var fontData = {
    google: {
        families: ["Roboto:300,400:latin"]
    },
    active: function() {
        nextend.fontsLoadedActive()
    },
    inactive: function() {
        nextend.fontsLoadedActive()
    }
};
if (typeof WebFontConfig !== 'undefined') {
    var _WebFontConfig = WebFontConfig;
    for (var k in WebFontConfig) {
        if (k == 'active') {
            fontData.active = function() {
                nextend.fontsLoadedActive();
                _WebFontConfig.active();
            }
        } else if (k == 'inactive') {
            fontData.inactive = function() {
                nextend.fontsLoadedActive();
                _WebFontConfig.inactive();
            }
        } else if (k == 'google') {
            if (typeof WebFontConfig.google.families !== 'undefined') {
                for (var i = 0; i < WebFontConfig.google.families.length; i++) {
                    fontData.google.families.push(WebFontConfig.google.families[i]);
                }
            }
        } else {
            fontData[k] = WebFontConfig[k];
        }
    }
}
if (typeof WebFont === 'undefined') {
    window.WebFontConfig = fontData;
} else {
    WebFont.load(fontData);
}

N2R('documentReady', function($) {

    nextend.fontsDeferred = $.Deferred();
    if (nextend.fontsLoaded) {
        nextend.fontsDeferred.resolve();
    } else {
        nextend.fontsLoadedActive = function() {
            nextend.fontsLoaded = true;
            nextend.fontsDeferred.resolve();
        };
        var intercalCounter = 0;
        nextend.fontInterval = setInterval(function() {
            if (intercalCounter > 3 || document.documentElement.className.indexOf('wf-active') !==
                -1) {
                nextend.fontsLoadedActive();
                clearInterval(nextend.fontInterval);
            }
            intercalCounter++;
        }, 1000);
    }
});

N2R(["nextend-frontend", "smartslider-frontend", "nextend-gsap", "nextend-webfontloader", "smartslider-simple-type-frontend"], function() {
    new N2Classes.SmartSliderSimple('#n2-ss-4', {
        "admin": false,
        "translate3d": 1,
        "callbacks": "",
        "background.video.mobile": 1,
        "randomize": {
            "randomize": 0,
            "randomizeFirst": 0
        },
        "align": "normal",
        "isDelayed": 0,
        "load": {
            "fade": 1,
            "scroll": 0
        },
        "playWhenVisible": 1,
        "playWhenVisibleAt": 0.5,
        "responsive": {
            "desktop": 1,
            "tablet": 1,
            "mobile": 1,
            "onResizeEnabled": true,
            "type": "fullpage",
            "downscale": 1,
            "upscale": 1,
            "minimumHeight": -1,
            "maximumHeight": -1,
            "maximumSlideWidth": 3000,
            "maximumSlideWidthLandscape": 3000,
            "maximumSlideWidthTablet": 3000,
            "maximumSlideWidthTabletLandscape": 3000,
            "maximumSlideWidthMobile": 3000,
            "maximumSlideWidthMobileLandscape": 3000,
            "maximumSlideWidthConstrainHeight": 0,
            "forceFull": 1,
            "forceFullOverflowX": "body",
            "forceFullHorizontalSelector": "body",
            "constrainRatio": 1,
            "verticalOffsetSelectors": "#adminbar",
            "decreaseSliderHeight": 0,
            "focusUser": 0,
            "focusAutoplay": 0,
            "deviceModes": {
                "desktopPortrait": 1,
                "desktopLandscape": 0,
                "tabletPortrait": 1,
                "tabletLandscape": 0,
                "mobilePortrait": 1,
                "mobileLandscape": 0
            },
            "normalizedDeviceModes": {
                "unknownUnknown": ["unknown", "Unknown"],
                "desktopPortrait": ["desktop", "Portrait"],
                "desktopLandscape": ["desktop", "Portrait"],
                "tabletPortrait": ["tablet", "Portrait"],
                "tabletLandscape": ["tablet", "Portrait"],
                "mobilePortrait": ["mobile", "Portrait"],
                "mobileLandscape": ["mobile", "Portrait"]
            },
            "verticalRatioModifiers": {
                "unknownUnknown": 1,
                "desktopPortrait": 1,
                "desktopLandscape": 1,
                "tabletPortrait": 1,
                "tabletLandscape": 1,
                "mobilePortrait": 1,
                "mobileLandscape": 1
            },
            "minimumFontSizes": {
                "desktopPortrait": 1,
                "desktopLandscape": 1,
                "tabletPortrait": 1,
                "tabletLandscape": 1,
                "mobilePortrait": 1,
                "mobileLandscape": 1
            },
            "ratioToDevice": {
                "Portrait": {
                    "tablet": 0.7,
                    "mobile": 0.5
                },
                "Landscape": {
                    "tablet": 0,
                    "mobile": 0
                }
            },
            "sliderWidthToDevice": {
                "desktopPortrait": 1200,
                "desktopLandscape": 1200,
                "tabletPortrait": 840,
                "tabletLandscape": 0,
                "mobilePortrait": 600,
                "mobileLandscape": 0
            },
            "basedOn": "combined",
            "orientationMode": "width_and_height",
            "scrollFix": 0,
            "overflowHiddenPage": 0,
            "desktopPortraitScreenWidth": 1200,
            "tabletPortraitScreenWidth": 800,
            "mobilePortraitScreenWidth": 440,
            "tabletLandscapeScreenWidth": 800,
            "mobileLandscapeScreenWidth": 440
        },
        "controls": {
            "scroll": 0,
            "drag": 1,
            "touch": "horizontal",
            "keyboard": 1,
            "tilt": 0
        },
        "lazyLoad": 0,
        "lazyLoadNeighbor": 0,
        "blockrightclick": 0,
        "maintainSession": 0,
        "autoplay": {
            "enabled": 1,
            "start": 1,
            "duration": 8000,
            "autoplayToSlide": -1,
            "autoplayToSlideIndex": -1,
            "allowReStart": 0,
            "pause": {
                "click": 1,
                "mouse": "0",
                "mediaStarted": 1
            },
            "resume": {
                "click": 0,
                "mouse": "0",
                "mediaEnded": 1,
                "slidechanged": 0
            }
        },
        "perspective": 1000,
        "layerMode": {
            "playOnce": 0,
            "playFirstLayer": 1,
            "mode": "skippable",
            "inAnimation": "mainInEnd"
        },
        "parallax": {
            "enabled": 1,
            "mobile": 0,
            "is3D": 0,
            "animate": 1,
            "horizontal": "mouse",
            "vertical": "mouse",
            "origin": "slider",
            "scrollmove": "both"
        },
        "background.parallax.tablet": 0,
        "background.parallax.mobile": 0,
        "postBackgroundAnimations": 0,
        "initCallbacks": [
            "N2D(\"SmartSliderWidgetBulletTransition\",function(t,i){function e(i,e){this.slider=i,this.slider.started(t.proxy(this.start,this,e))}return e.prototype.start=function(i){if(this.slider.sliderElement.data(\"bullet\"))return!1;this.slider.sliderElement.data(\"bullet\",this),this.axis=\"horizontal\",this.offset=0,this.parameters=i,this.bar=this.slider.sliderElement.find(\".nextend-bullet-bar\");var e=\"universalclick\";if(\"mouseenter\"==i.action&&(e=\"mouseenter\"),this.originalDots=this.dots=this.bar.find(\"div\").on(e,t.proxy(this.onDotClick,this)),this.slider.isShuffled){for(var s=[],o=[],a=0;this.slider.realSlides.length>a;a++){var r=this.slider.realSlides[a];s.push(this.dots.get(r.originalIndex)),o.push(this.parameters.thumbnails[r.originalIndex]),i.numeric&&this.dots.eq(r.originalIndex).html(a+1)}this.originalDots=this.dots=t(s).appendTo(this.dots.parent()),this.parameters.thumbnails=o}if(this.slider.sliderElement.on({slideCountChanged:t.proxy(this.onSlideCountChanged,this),sliderSwitchTo:t.proxy(this.onSlideSwitch,this)}),this.slider.firstSlideReady.done(t.proxy(this.onFirstSlideSet,this)),0==i.overlay){var n=!1;switch(i.area){case 1:n=\"Top\";break;case 12:n=\"Bottom\";break;case 5:n=\"Left\",this.axis=\"vertical\";break;case 8:n=\"Right\",this.axis=\"vertical\"}n&&(this.offset=parseFloat(this.bar.data(\"offset\")),this.slider.responsive.addStaticMargin(n,this))}this.initThumbnails()},e.prototype.onFirstSlideSet=function(t){this.dots.eq(t.index).addClass(\"n2-active\")},e.prototype.onDotClick=function(i){this.slider.directionalChangeToReal(this.originalDots.index(i.currentTarget)),t(i.target).blur()},e.prototype.onSlideSwitch=function(t,i){this.dots.filter(\".n2-active\").removeClass(\"n2-active\"),this.dots.eq(i).addClass(\"n2-active\")},e.prototype.isVisible=function(){return this.bar.is(\":visible\")},e.prototype.getSize=function(){return\"horizontal\"==this.axis?this.bar.height()+this.offset:this.bar.width()+this.offset},e.prototype.initThumbnails=function(){this.parameters.thumbnails.length>0&&this.dots.each(t.proxy(function(i,e){\"\"!=this.parameters.thumbnails[i]&&t(e).on({universalenter:t.proxy(this.showThumbnail,this,i)},{leaveOnSecond:!0})},this))},e.prototype.showThumbnail=function(i,e){var s=this.getThumbnail(i);NextendTween.to(s,.3,{opacity:1}).play(),this.originalDots.eq(i).on(\"universalleave.thumbnailleave\",t.proxy(this.hideThumbnail,this,i,s))},e.prototype.hideThumbnail=function(t,i,e){e.stopPropagation(),this.originalDots.eq(t).off(\"universalleave.thumbnailleave\"),NextendTween.to(i,.3,{opacity:0,onComplete:function(){i.remove()}}).play()},e.prototype.getThumbnail=function(i){var e=this.originalDots.eq(i),s=this.slider.sliderElement.offset(),o=e.offset(),a=e.outerWidth(),r=e.outerHeight(),n=t(\"<div\/>\").append(t(\"<div\/>\").css({width:this.parameters.thumbnailWidth,height:this.parameters.thumbnailHeight,backgroundImage:'url(\"'+this.parameters.thumbnails[i]+'\")'}).addClass(\"n2-ss-bullet-thumbnail\")).addClass(this.parameters.thumbnailStyle).addClass(\"n2-ss-bullet-thumbnail-container\").appendTo(this.slider.sliderElement);switch(this.parameters.thumbnailPosition){case\"right\":n.css({left:o.left-s.left+a,top:o.top-s.top+r\/2-n.outerHeight(!0)\/2});break;case\"left\":n.css({left:o.left-s.left-n.outerWidth(!0),top:o.top-s.top+r\/2-n.outerHeight(!0)\/2});break;case\"top\":n.css({left:o.left-s.left+a\/2-n.outerWidth(!0)\/2,top:o.top-s.top-n.outerHeight(!0)});break;case\"bottom\":n.css({left:o.left-s.left+a\/2-n.outerWidth(!0)\/2,top:o.top-s.top+r})}return e.data(\"thumbnail\",n),n},e.prototype.onSlideCountChanged=function(i,e,s){this.dots=t();for(var o=0;this.originalDots.length>o;o++)o%s==0?this.dots=this.dots.add(this.originalDots.eq(o).css(\"display\",\"\")):this.originalDots.eq(o).css(\"display\",\"none\");this.parameters.numeric&&this.dots.each(function(t,i){i.innerHTML=t+1})},e});",
            "new N2Classes.SmartSliderWidgetBulletTransition(this, {\"overlay\":true,\"area\":6,\"thumbnails\":[],\"action\":\"click\",\"numeric\":1});"
        ],
        "allowBGImageAttachmentFixed": false,
        "bgAnimationsColor": "RGBA(51,51,51,1)",
        "bgAnimations": 0,
        "mainanimation": {
            "type": "horizontal",
            "duration": 800,
            "delay": 0,
            "ease": "easeOutQuad",
            "parallax": 0,
            "shiftedBackgroundAnimation": "auto"
        },
        "carousel": 1,
        "dynamicHeight": 0
    });
});

"use strict";

// JavaScript Document

( function( $ )
{
	var winObj = $( window ),
		bodyObj = $( 'body' ),
		headerObj = $( 'header' );

		winObj.on( 'load', function()
		{
			var $preloader = $( '.loader-wrapper' );
				
			$preloader.find( '.cssload-loader' ).fadeOut();
			$preloader.delay( 350 ).fadeOut( 'slow' );
		} );
		
 	/*----------------------------------------------------*/
	/* Adaptive Menu Width
	/*----------------------------------------------------*/

	var ulMenu1 = $( 'ul.menu' );
	winObj.on( 'resize', function()
	{		
		if( $( this ).width() > 992 )
		{
			ulMenu1.flexMenu();
		}
	} );

	if( winObj.width() > 992 )
	{
		ulMenu1.flexMenu();
	}

	headerObj.on( 'click', '.flexMenu-viewMore', function()
	{
		$( this ).toggleClass( 'active' );
	} );

	/*----------------------------------------------------*/
	/* DataTables Initialize
	/*----------------------------------------------------*/
	var dTables = $( '.dTables' );
	if( dTables.length )
	{
		dTables.DataTable(
		{
			responsive: true,
			info: false,
			language: {
				search: '',
				searchPlaceholder: 'Search here...',
				paginate: {
					previous: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
					next: '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
				}
			}
		} );
	}

	/*----------------------------------------------------*/
	/* FormStyler Modern Initialize
	/*----------------------------------------------------*/
	var styledControls = $( 'select' );
	if( styledControls.length )
	{
		styledControls.styler( 
		{
			select: {
				search: {
					limit: 10
				},
				smartPosition: false
			}
		} );
	}

	/*----------------------------------------------------*/
	/* WOW Initialize
	/*----------------------------------------------------*/
	new WOW().init();

	/*----------------------------------------------------*/
	/*	Animated Scroll To Top
	/*----------------------------------------------------*/
	var toTop = $( '#toTop' );
	toTop.on( 'click', function()
	{
		$( 'html, body' ).animate( {
			scrollTop: 0
		}, 600 );
		return false;
	} );

	winObj.on( 'scroll', function()
	{
		if( $( this ).scrollTop() != 0 )
		{
			toTop.fadeIn();
		}
		else
		{
			toTop.fadeOut();
		}
	} );

	/*----------------------------------------------------*/
	/* Toggle menu
	/*----------------------------------------------------*/
	headerObj.on( 'click', '.toggle_menu', function()
	{
		$( this ).toggleClass( 'open' );
		if( $( this ).hasClass( 'open' ) )
		{
			$( '.menu' ).addClass( 'open' );
			bodyObj.addClass('no-scroll');
		}
		else
		{
			$( '.menu' ).removeClass( 'open' );
			$( '.menu-item-has-children' ).removeClass( 'open-list' );
			bodyObj.removeClass( 'no-scroll' );
		}
	} );

	/*----------------------------------------------------*/
	/* Mobile Sub Menu
	/*----------------------------------------------------*/
	headerObj.on( 'click', '.menu.open a', function( e )
	{
		if( $( this ).siblings().length )
		{
			if( !$( this ).parent().hasClass( 'open-list' ) )
			{
				$( this ).parent().addClass( 'open-list' );
				e.preventDefault();
			}
			else
			{
				$( this ).parent().removeClass( 'open-list' );
			}
		}
	} );

	/*----------------------------------------------------*/
	/* Equal height
	/*----------------------------------------------------*/
	$( '.equal-height' ).matchHeight();

	/*----------------------------------------------------*/
	/* Sliders Settings
	/*----------------------------------------------------*/
	$( '.tabs-slider' ).slick( {
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<i class="fa fa-angle-left slick-arrow"></i>',
		nextArrow: '<i class="fa fa-angle-right slick-arrow"></i>',
		responsive: [{
			breakpoint: 1120,
			settings: {
				autoplay: true
			}
		},
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}
	]
	} );

	$('.tabs-slider').on( 'click', 'li', function() {
		$( this ).addClass( 'active' );
		if( $( this ).hasClass( 'active' ) ) {
			$('.tabs-slider li').removeClass( 'active' );
		}
	} );

	$( '.testimonial-slider' ).slick( {
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		infinite: true,
		dots: true,
		prevArrow: '<i class="fa fa-angle-left slick-arrow"></i>',
		nextArrow: '<i class="fa fa-angle-right slick-arrow"></i>',
		adaptiveHeight: true,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
		}
	]
	} );

	$( '.game-img-slider' ).slick( {
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		infinite: true,
		dots: false,
		prevArrow: '<i class="fa fa-angle-left slick-arrow"></i>',
		nextArrow: '<i class="fa fa-angle-right slick-arrow"></i>',
		adaptiveHeight: true,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
	]
	} );

	$( '.top-slider-bl' ).slick( {
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		infinite: true,
		dots: false,
		prevArrow: '<i class="fa fa-angle-left slick-arrow"></i>',
		nextArrow: '<i class="fa fa-angle-right slick-arrow"></i>'
	} );

	$( '.post-slider' ).slick( {
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		infinite: true,
		dots: true,
		prevArrow: '<i class="fa fa-angle-left slick-arrow"></i>',
		nextArrow: '<i class="fa fa-angle-right slick-arrow"></i>'
	} );

	/*----------------------------------------------------*/
	/* LightBox Initialize
	/*----------------------------------------------------*/

	lightbox.option( {
		showImageNumberLabel: false,
		disableScrolling: true
	} );

	/*----------------------------------------------------*/
	/*	Trimming
	/*----------------------------------------------------*/

	// Trimming string
		var dataTrim = $( '[data-trim]' );
		dataTrim.each( function()
		{
			var stringLength = $( this ).attr( 'data-trim' ),
				string = $( this ).text().trim();
			if( string.length > stringLength )
			{
				$( this ).text( string.slice( 0, stringLength - 3 ) + '...' );
			}
	} );

	// Trimming text
	var dataTrimText = $( '[data-trim-text]' );
	dataTrimText.each( function()
	{
		var stringLength = $( this ).attr( 'data-trim-text' ),
			string = $( this ).text().trim();
		if( string.length > stringLength )
		{
			$( this ).text( string.slice( 0, stringLength - 3 ) ).append( '<span class="more_btn inline-block uppercase pointer fsize-14 fweight-700 ml5 color-5">Подробнее <i class="fa fa-level-down text-gradient" aria-hidden="true"></i></span>' );
		}

		bodyObj.on( 'click', '.more_btn', function()
		{
			$( this ).attr( 'style', 'display: none' );
			$( this ).parent().text( string.slice() );
			$( '.read-more-wrap' ).closest( '.post-content' ).addClass( 'read-open' );
		} );
	} );

	/*----------------------------------------------------*/
	/*	Video Settings
	/*----------------------------------------------------*/
	$( '.buttonbar' ).on( 'click', '.play', function()
	{
		var video = $( '.stream-bl video' ),
			button = $( '.play' );
		if( video[ 0 ].paused )
		{
			video[ 0 ].play();
			$( this ).addClass( 'pause-show' );
			$( this ).removeClass( 'play-show' );
		}
		else
		{
			video[ 0 ].pause();
			$( this ).addClass( 'play-show' );
			$( this ).removeClass( 'pause-show' );
		}
	} );

	/*----------------------------------------------------*/
	/* Fixed Menu
	/*----------------------------------------------------*/
	var nav = $( '.header-line-wrapper' ),
		navHide = $( '.header-wrapper' );
		
	winObj.on( 'scroll', function()
	{		
		if( $( this ).scrollTop() > navHide.height() - 20 )
		{
			nav.addClass( 'affix-top' );
		}
		else
		{
			nav.removeClass( 'affix-top' );
		}
	} );

	winObj.on( 'load', function()
	{
	/*----------------------------------------------------*/
	/* Muuri Settings
	/*----------------------------------------------------*/

	$( '.gallery' ).on( 'click', '.filter_container > div', function()
		{
			$( '.filter_container > div' ).removeClass( 'active' );
			$( this ).addClass( 'active' );
		} );

		if( $( '.item_container' ).length )
		{
			var itemGrid = new Muuri( '.item_container', {
				showDuration: 200,
				hideDuration: 100,
				showEasing: 'ease-out',
				layout: {
					rounding: false
				}
			} );

			$( '.filter_container .filter-item' ).on( 'click', function()
			{
				var filterClass = $( this ).data( 'filter' );
				if( filterClass === 'all' )
				{
					itemGrid.filter( '.item' );
				}
				else
				{
					itemGrid.filter( '.' + filterClass );
				}
			} );
		}
	} );

	/*----------------------------------------------------*/
	/* Parallax Initialize
	/*----------------------------------------------------*/
	$( '.parallax' ).paroller();

	/*----------------------------------------------------*/
	/*	Progress Bar
	/*----------------------------------------------------*/
	function progressBarCreator( count, animate )
	{
		var bar = new ProgressBar.Line( count, {
			strokeWidth: 1,
			color: '#1e1d32',
			trailColor: '#1e1d32',
			trailWidth: 1,
			easing: 'easeInOut',
			duration: 10000,
			svgStyle: null,
			text: {
				value: '',
				alignToBottom: false
			},
			from: {
				color: '#00cbd6'
			},
			to: {
				color: '#7c69e3'
			},
			// Set default step function for all animate calls
			step: function( state, bar )
			{
				bar.path.setAttribute( 'stroke', state.color );
				var value = ( Math.round( bar.value() * 100 ) + '%' );
				if( value === 0 )
				{
					bar.setText( '' );
				}
				else
				{
					bar.setText( value );
				}

				bar.text.style.color = state.color;
			}
		} );

		bar.text.style.fontFamily = '"Roboto"';
		bar.text.style.fontSize = '14px';

		bar.animate( animate, {
			duration: 2500
		}, function() {} );
	}

	var mainLine = $( '.skills' );
	if( mainLine.length )
	{
		mainLine.on( 'inview', function ( event, isInView )
		{
			if( isInView )
			{
				if( !$( this ).hasClass( 'visible' ) )
				{
					$( this ).addClass( 'visible' );
					
					progressBarCreator( progressline69, 0.69 );
					progressBarCreator( progressline80, 0.80 );
					progressBarCreator( progressline52, 0.52 );
					progressBarCreator( progressline90, 0.90 );
				}
			}
		} );
	}

	var gamesChar = $( '.game-char' );
	if( gamesChar.length )
	{
		gamesChar.on( 'inview', function ( event, isInView )
		{
			if( isInView )
			{
				if( !$( this ).hasClass( 'visible' ) )
				{
					$( this ).addClass( 'visible' );
					
					progressBarCreator( progressline69, 0.69 );
					progressBarCreator( progressline80, 0.80 );
					progressBarCreator( progressline52, 0.52 );
					progressBarCreator( progressline90, 0.90 );
					progressBarCreator( progressline30, 0.30 );
				}
			}
		} );
	}

	/*----------------------------------------------------*/
	/*	Add class to each element
	/*----------------------------------------------------*/	
	var itemChar = $( '.each-element' );
	if( itemChar.length )
	{
		var classes = ['first', 'second', 'third'];

		$(function() 
		{
			var target = $('.item, .vertical-item');
			target.each(function(index) 
			{
				$(this).addClass(classes[index % 3]);
			});
		});
	}

	/*----------------------------------------------------*/
	/* Calendar Settings
	/*----------------------------------------------------*/

	var calendarBl = $( '.calendar-bl' );
	if( calendarBl.length )
	{
		calendarBl.dateRangePicker( {
			inline: true,
			container: '.calendar-container',
			alwaysOpen: true,
			singleDate: true,
			singleMonth: true,
			showTopbar: false,
			customArrowPrevSymbol: '<i class="fa fa-angle-left fsize-14"></i>',
			customArrowNextSymbol: '<i class="fa fa-angle-right fsize-14"></i>'
		} );
	}

	/*----------------------------------------------------*/
	/*	Google maps
	/*----------------------------------------------------*/
	if( $( '#map' ).length )
	{
		function initialize()
		{
			var mapOptions = {
				center: {
					lat: 40.7143528,
					lng: -74.0059731
				},
				zoom: 15,
				styles: [
					{elementType: 'geometry', stylers: [{color: '#242f3e'}]},
					{elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
					{elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
					{
					  featureType: 'administrative.locality',
					  elementType: 'labels.text.fill',
					  stylers: [{color: '#d59563'}]
					},
					{
					  featureType: 'poi',
					  elementType: 'labels.text.fill',
					  stylers: [{color: '#d59563'}]
					},
					{
					  featureType: 'poi.park',
					  elementType: 'geometry',
					  stylers: [{color: '#263c3f'}]
					},
					{
					  featureType: 'poi.park',
					  elementType: 'labels.text.fill',
					  stylers: [{color: '#6b9a76'}]
					},
					{
					  featureType: 'road',
					  elementType: 'geometry',
					  stylers: [{color: '#38414e'}]
					},
					{
					  featureType: 'road',
					  elementType: 'geometry.stroke',
					  stylers: [{color: '#212a37'}]
					},
					{
					  featureType: 'road',
					  elementType: 'labels.text.fill',
					  stylers: [{color: '#9ca5b3'}]
					},
					{
					  featureType: 'road.highway',
					  elementType: 'geometry',
					  stylers: [{color: '#746855'}]
					},
					{
					  featureType: 'road.highway',
					  elementType: 'geometry.stroke',
					  stylers: [{color: '#1f2835'}]
					},
					{
					  featureType: 'road.highway',
					  elementType: 'labels.text.fill',
					  stylers: [{color: '#f3d19c'}]
					},
					{
					  featureType: 'transit',
					  elementType: 'geometry',
					  stylers: [{color: '#2f3948'}]
					},
					{
					  featureType: 'transit.station',
					  elementType: 'labels.text.fill',
					  stylers: [{color: '#d59563'}]
					},
					{
					  featureType: 'water',
					  elementType: 'geometry',
					  stylers: [{color: '#17263c'}]
					},
					{
					  featureType: 'water',
					  elementType: 'labels.text.fill',
					  stylers: [{color: '#515c6d'}]
					},
					{
					  featureType: 'water',
					  elementType: 'labels.text.stroke',
					  stylers: [{color: '#17263c'}]
					}
				],
				disableDefaultUI: true,
				scrollwheel: false,
				draggable: true
			};

			var map = new google.maps.Map( document.getElementById( 'map' ), mapOptions );

			// Create marker
			var marker = new google.maps.Marker( {
				position: {
					lat: 40.7143528,
					lng: -74.0059731
				},
				map: map,
				title: 'INDIEGA',
				animation: google.maps.Animation.DROP,
				icon: '../assets/images/marker.png'
			} );

			// Marker animation
			marker.setAnimation( google.maps.Animation.BOUNCE );
		}

		google.maps.event.addDomListener( window, 'load', initialize );
	}

}( jQuery ) );