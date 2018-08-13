var boilerplate = {};

boilerplate.loadFunction = function () {
	if (Enabler.isInitialized()) {
		init();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, init)
	}
}

function init() {
	if (Enabler.isPageLoaded()) {
		boilerplate.processAd ();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, boilerplate.processAd);
	}
}

boilerplate.processAd = function () {
	document.getElementById("banner").className = "show"; //show banner
	boilerplate.DynamicContentElements();
	boilerplate.imgsLoading();
}

boilerplate.DynamicContentElements = function () {

	// Dynamic Content variables
	Enabler.setProfileId(10141934);
    var devDynamicContent = {};

    devDynamicContent.CPACongressDynamicBanners2018_728x90= [{}];
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0]._id = 0;
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].unique_id = 2;
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].ad_name = "CPA-Congress1";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].frame1 = "option2";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].frame2 = "option3";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].frame3 = "option7";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].frame4 = "option1";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].f1_image1 = {};
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].f1_image1.Type = "file";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].f1_image1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20180806230423959_f1_logo.png";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].f1_text = "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing.";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].f2_image1 = {};
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].f2_image1.Type = "file";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].f2_image1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20180806212533962_quote.png";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].f2_text1 = "\u201CAmazing day with minds exploding with new information. lots of opportunity.\u201D";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].f2_text2 = "";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].f2_text3 = "";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].f3_image1 = {};
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].f3_image1.Type = "file";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].f3_image1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20180806212524490_f6_text_bg.png";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].f3_text1 = "KUALA LUMPUR";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].f3_text2 = "6 September";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].f3_text3 = "";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].f4_image1 = {};
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].f4_image1.Type = "file";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].f4_image1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20180806212519713_f6_logo.png";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].f4_text1 = "KUALA LUMPUR | 6 Sept";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].f4_text2 = "";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].logo = {};
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].logo.Type = "file";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].logo.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20180806212529188_logo.png";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].cta_button_text = "Find Out More";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].ctaTextColour = "#ffffff";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].cta_backgroundColor = "none";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].exitUrl = "";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].bg_image = {};
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].bg_image.Type = "file";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].bg_image.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20180802165052096_background.png";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].bg_transparent = "background: linear-gradient(322deg, rgb(0, 155, 199) 0%, rgba(255, 255, 255, 0) 73%);";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].bg_color = "#99a233";
    devDynamicContent.CPACongressDynamicBanners2018_728x90[0].isDefault = false;
    Enabler.setDevDynamicContent(devDynamicContent);
	
	// End Dynamic Content variables

	//Define contents and styles
	frame1 = document.getElementById('frame1');
	frame2 = document.getElementById('frame2');
	frame3 = document.getElementById('frame3');
	frame4 = document.getElementById('frame4');
	
	f1_option = dynamicContent.CPACongressDynamicBanners2018_728x90[0].frame1;
	f2_option = dynamicContent.CPACongressDynamicBanners2018_728x90[0].frame2;
	f3_option = dynamicContent.CPACongressDynamicBanners2018_728x90[0].frame3;
	f4_option = dynamicContent.CPACongressDynamicBanners2018_728x90[0].frame4;
	
	//console.log(f1_option+f2_option+f3_option+f4_option);

	content_formats = [
		'<div id="text1"></div>', //1 text
		'<div id="text1"></div><div id="text2"></div>', //2 texts
		'<img id="image1">', //1 image
		'<img id="image1"><div id="text1"></div>', //1 image and 1 text
		'<img id="image1"><div id="text1"></div><div id="text2"></div><div id="text3"></div>', //1 image and 3 texts
		'<img id="image1"><img id="image2"><div id="text1"></div><div id="text2"></div><div id="text3"></div>', //2 image and 3 texts
		'<img id="image1"><div id="text1"></div><div id="text2"></div>' //1 image and 2 text
	];

	switch (f1_option) {
		case 'option1':
			frame1.classList.add('option1');
			frame1.classList.add('hide');
			frame1.innerHTML = content_formats[2];
			break;
		case 'option2':
			frame1.classList.add('option2');
			frame1.classList.add('hide');
			frame1.innerHTML = content_formats[0];
			break;
	}

	switch (f2_option) {
		case 'option1':
			frame2.classList.add('option1');
			frame2.classList.add('hide');
			frame2.innerHTML = content_formats[4];
			break;
		case 'option2':
			frame2.classList.add('option2');
			frame2.classList.add('hide');
			frame2.innerHTML = content_formats[4];
			break;
		case 'option3':
			frame2.classList.add('option3');
			frame2.classList.add('hide');
			frame2.innerHTML = content_formats[6];
			break;
		case 'option4':
			frame2.classList.add('option4');
			frame2.classList.add('hide');
			frame2.innerHTML = content_formats[3];
			break;
		case 'option5':
			frame2.classList.add('option5');
			frame2.classList.add('hide');
			frame2.innerHTML = content_formats[0];
			break;
		case 'option6':
			frame2.classList.add('option6');
			frame2.classList.add('hide');
			frame2.innerHTML = content_formats[0];
			break;
		case 'option7':
			frame2.classList.add('option7');
			frame2.classList.add('hide');
			frame2.innerHTML = content_formats[6];
			break;
	}

	switch (f3_option) {
		case 'option1':
			frame3.classList.add('option1');
			frame3.classList.add('hide');
			frame3.innerHTML = content_formats[4];
			break;
		case 'option2':
			frame3.classList.add('option2');
			frame3.classList.add('hide');
			frame3.innerHTML = content_formats[4];
			break;
		case 'option3':
			frame3.classList.add('option3');
			frame3.classList.add('hide');
			frame3.innerHTML = content_formats[6];
			break;
		case 'option4':
			frame3.classList.add('option4');
			frame3.classList.add('hide');
			frame3.innerHTML = content_formats[3];
			break;
		case 'option5':
			frame3.classList.add('option5');
			frame3.classList.add('hide');
			frame3.innerHTML = content_formats[0];
			break;
		case 'option6':
			frame3.classList.add('option6');
			frame3.classList.add('hide');
			frame3.innerHTML = content_formats[0];
			break;
		case 'option7':
			frame3.classList.add('option7');
			frame3.classList.add('hide');
			frame3.innerHTML = content_formats[6];
			break;
	}

	switch (f4_option) {
		case 'option1':
			frame4.classList.add('option1');
			frame4.classList.add('hide');
			frame4.innerHTML = content_formats[3];
			break;
		case 'option2':
			frame4.classList.add('option2');
			frame4.classList.add('hide');
			frame4.innerHTML = content_formats[1];
			break;
	}
	
	//Apply feed after contents formats loaded
	logo = document.getElementById('logo');
	banner = document.getElementById('banner');
	cta = document.getElementById('cta');
	bgImage = document.getElementById('bgImage');
	trasparentBg = document.getElementById('trasparentBg');
	
	f1_image1 = document.getElementById('frame1').getElementsByTagName( 'img' )[0];
	f2_image1 = document.getElementById('frame2').getElementsByTagName( 'img' )[0];
	//f2_image2 = document.getElementById('frame2').getElementsByTagName( 'img' )[1];
	f3_image1 = document.getElementById('frame3').getElementsByTagName( 'img' )[0];
	//f3_image2 = document.getElementById('frame3').getElementsByTagName( 'img' )[1];
	f4_image1 = document.getElementById('frame4').getElementsByTagName( 'img' )[0];
	f1_text1 = document.getElementById('frame1').getElementsByTagName( 'div' )[0];
	f2_text1 = document.getElementById('frame2').getElementsByTagName( 'div' )[0];
	f2_text2 = document.getElementById('frame2').getElementsByTagName( 'div' )[1];
	f2_text3 = document.getElementById('frame2').getElementsByTagName( 'div' )[2];
	f3_text1 = document.getElementById('frame3').getElementsByTagName( 'div' )[0];
	f3_text2 = document.getElementById('frame3').getElementsByTagName( 'div' )[1];
	f3_text3 = document.getElementById('frame3').getElementsByTagName( 'div' )[2];
	f4_text1 = document.getElementById('frame4').getElementsByTagName( 'div' )[0];
	f4_text2 = document.getElementById('frame4').getElementsByTagName( 'div' )[1];
		
	banner.style.cssText = "background-color:" + dynamicContent.CPACongressDynamicBanners2018_728x90[0].bg_color + ";";
	bgImage.src = dynamicContent.CPACongressDynamicBanners2018_728x90[0].bg_image.Url;
	trasparentBg.style.cssText = dynamicContent.CPACongressDynamicBanners2018_728x90[0].bg_transparent;
	logo.src = dynamicContent.CPACongressDynamicBanners2018_728x90[0].logo.Url;
	cta.innerHTML = dynamicContent.CPACongressDynamicBanners2018_728x90[0].cta_button_text;
	cta.style.cssText = "color:" + dynamicContent.CPACongressDynamicBanners2018_728x90[0].ctaTextColour + ";" + "background-color:" + dynamicContent.CPACongressDynamicBanners2018_728x90[0].cta_backgroundColor + ";";
	exitUrl = dynamicContent.CPACongressDynamicBanners2018_728x90[0].exitUrl;
	
	var imgElems = [f1_image1, f2_image1, f3_image1, f4_image1];
	var imgSrcs = [
		dynamicContent.CPACongressDynamicBanners2018_728x90[0].f1_image1.Url,
		dynamicContent.CPACongressDynamicBanners2018_728x90[0].f2_image1.Url,
		dynamicContent.CPACongressDynamicBanners2018_728x90[0].f3_image1.Url,
		dynamicContent.CPACongressDynamicBanners2018_728x90[0].f4_image1.Url
	];
	
	var textElems = [f1_text1, f2_text1, f2_text2, f2_text3, f3_text1, f3_text2, f3_text3, f4_text1, f4_text2];
	var textSrcs = [
		dynamicContent.CPACongressDynamicBanners2018_728x90[0].f1_text,
		dynamicContent.CPACongressDynamicBanners2018_728x90[0].f2_text1,
		dynamicContent.CPACongressDynamicBanners2018_728x90[0].f2_text2,
		dynamicContent.CPACongressDynamicBanners2018_728x90[0].f2_text3,
		dynamicContent.CPACongressDynamicBanners2018_728x90[0].f3_text1,
		dynamicContent.CPACongressDynamicBanners2018_728x90[0].f3_text2,
		dynamicContent.CPACongressDynamicBanners2018_728x90[0].f3_text3,
		dynamicContent.CPACongressDynamicBanners2018_728x90[0].f4_text1,
		dynamicContent.CPACongressDynamicBanners2018_728x90[0].f4_text2
	];
	
	for (i=0; i<imgElems.length; i++) {
		if(typeof imgElems[i] !== "undefined") {
			//console.log(imgSrcs[i]+i)
			imgElems[i].src = imgSrcs[i];
		}
	}
	
	for (i=0; i<textSrcs.length; i++) {
		var val = textSrcs[i];
		if (val !== '') {
			//console.log(textSrcs[i]+i)
			textElems[i].innerHTML = textSrcs[i];
		}
	}
	
	boilerplate.clickTag();
}

//Clicktag
boilerplate.clickTag = function () {
	click_through.onclick = function () {
		Enabler.exitOverride('Background Exit', exitUrl);
	};		
};

//Calculate images loading timing

boilerplate.imgsLoading = function() {
	var imgs = document.getElementsByTagName('img');
	for(i=0; i<imgs.length; i++) {		
		if(i == (imgs.length-1)) {
			boilerplate.executeAnimation ();
		}
	}
}

//Animate contents
boilerplate.executeAnimation = function (){
	
	var tl = new TimelineMax({repeat:0, repeatDelay:10});
	var tl = new TimelineMax({onComplete:completeHandler});
	var tl1 = new TimelineMax({repeat:0, repeatDelay:10}); //tl1
	var tl2 = new TimelineMax({repeat:0, repeatDelay:10}); //tl2
		
	tl.to('#frame1',.50,{opacity:1, ease: Power0.easeNone},'+=0.2')
	.to('#frame1',.50,{opacity:0, ease: Power0.easeNone},'+=2.5')
	.to('#frame2',.50,{opacity:1, ease: Power0.easeNone},'+=0.5')
	.to('#frame2',.50,{opacity:0, ease: Power0.easeNone},'+=3.0')
	.to('#frame3',.50,{opacity:1, ease: Power0.easeNone},'+=0.5')
	.to('#frame3',.50,{opacity:0, ease: Power0.easeNone},'+=3.0')
	.to('#frame4',.50,{opacity:1, ease: Power0.easeNone},'+=0.5')
	
	tl1.to('#trasparentBg',7.20,{rotation:-75, ease: Power1.easeOut},'-=0.5')
		.to('#trasparentBg',7.20,{rotation:0, ease: Power1.easeOut},'-=0.5')
	tl2.to('#bgImage',7.20,{rotation:-75, ease: Power1.easeOut},'-=0.5')
		.to('#bgImage',7.20,{rotation:0, ease: Power1.easeOut},'-=0.5')
	
	//Cta Button Effect
	function completeHandler () {
		document.getElementById('click_through').onmouseover = function() {
			TweenMax.to('#cta', 0.3, {opacity:0.8, ease: Power3.easeOut});
		}

		document.getElementById('click_through').onmouseout = function() {
			TweenMax.to('#cta', 0.3, {opacity:1, ease: Power3.easeOut});
		}
	}
}

window.onload = function() {
	boilerplate.loadFunction ();
}