var AUTHOR_CLASSNAME = '.dzuq1e';
var AUTHOR_NAME_CLASSNAME = 'nMlfCf';

var YOUR_NAME = 'Jirachai Chansivanon';
var YOUR_PROFILE_IMG = 'https://lh3.googleusercontent.com/-bXMJ22mKdL0/AAAAAAAAAAI/AAAAAAAAAAA/AFiYof3_tRXMtm69uV3gvUXGo7MzY21Ztg/s32-c-mo/photo.jpg';

function startInject() {
  document.querySelectorAll(AUTHOR_CLASSNAME).forEach((e) => installEventListener(e));
}

function installEventListener(el) {
	el.addEventListener('click', () => {
		changeContent(el);
  });
}

function changeContent(el) {
	el.childNodes.forEach((ele) => {
		if (ele.nodeName === 'A') {
			ele.firstChild.src = YOUR_PROFILE_IMG;
    }
		if (ele.className === AUTHOR_NAME_CLASSNAME) {
			ele.firstChild.firstChild.firstChild.innerHTML = YOUR_NAME;
    }
  });
}

function collectionInfomation() {
  AUTHOR_CLASSNAME = prompt('AUTHOR_CLASSNAME', AUTHOR_CLASSNAME);
  AUTHOR_NAME_CLASSNAME = prompt('AUTHOR_NAME_CLASSNAME', AUTHOR_NAME_CLASSNAME);

  YOUR_NAME = prompt('YOUR_NAME', YOUR_NAME);
  YOUR_PROFILE_IMG = prompt('YOUR_PROFILE_IMG', YOUR_PROFILE_IMG);
  startInject();
}

(function() {
  collectionInfomation();
})();
