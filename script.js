var AUTHOR_CLASSNAME = 'dzuq1e';
var AUTHOR_NAME_CLASSNAME = 'nMlfCf';

var YOUR_NAME = 'Jirachai Chansivanon';
var YOUR_PROFILE_IMG = 'https://lh3.googleusercontent.com/-bXMJ22mKdL0/AAAAAAAAAAI/AAAAAAAAAAA/AFiYof3_tRXMtm69uV3gvUXGo7MzY21Ztg/s32-c-mo/photo.jpg';

var COMMENT_ENABLE = false;

var COMMENT_CLASSNAME = 'OnSI9b';
var COMMNET_AUTHOR_CLASSNAME = 'PGAhe';

function startInject() {
  document.querySelectorAll(AUTHOR_CLASSNAME).forEach(function(e) {iE(e)});
  if (COMMENT_ENABLE) {
    document.querySelectorAll(COMMENT_CLASSNAME).forEach(function(e) {iE(e)});
  }
}

function iEt(el) {
	el.addEventListener('click', function() {
		cC(el);
  });
}

function cC(el) {
	el.childNodes.forEach(function (ele) {
		if (ele.nodeName === 'A') {
			ele.firstChild.src = YOUR_PROFILE_IMG;
    }
		if (ele.className === AUTHOR_NAME_CLASSNAME) {
			ele.firstChild.firstChild.firstChild.innerHTML = YOUR_NAME;
    }
		if (ele.className === COMMNET_AUTHOR_CLASSNAME) {
			ele.firstChild.firstChild.innerHTML = YOUR_NAME;
    }
  });
}

function collectInformation() {
  AUTHOR_CLASSNAME = '.' + prompt('AUTHOR_CLASSNAME', AUTHOR_CLASSNAME) || AUTHOR_CLASSNAME;
  AUTHOR_NAME_CLASSNAME = prompt('AUTHOR_NAME_CLASSNAME', AUTHOR_NAME_CLASSNAME) || AUTHOR_NAME_CLASSNAME;

  YOUR_NAME = prompt('YOUR_NAME', YOUR_NAME) || YOUR_NAME;
  YOUR_PROFILE_IMG = prompt('YOUR_PROFILE_IMG', YOUR_PROFILE_IMG) || YOUR_PROFILE_IMG;

  COMMENT_ENABLE = confirm('COMMENT_ENABLE');

  if (COMMENT_ENABLE) {
    COMMENT_CLASSNAME = '.' + prompt('COMMENT_CLASSNAME', COMMENT_CLASSNAME) || COMMENT_CLASSNAME;
    COMMNET_AUTHOR_CLASSNAME = prompt('COMMNET_AUTHOR_CLASSNAME', COMMNET_AUTHOR_CLASSNAME);
  }
  startInject();
}

(function() {
  collectInformation();
})();
