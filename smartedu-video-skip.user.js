// ==UserScript==
// @name             智慧教育平台视频跳过
// @name:en          Smartedu Video Skip
// @namespace        https://github.com/mike-unk/smartedu-video-skip
// @version          1.0.2
// @description      跳过国家中小学智慧教育平台的视频
// @description:en   A user.js that skips basic.smartedu.cn videos
// @author           mike-unk
// @match            https://basic.smartedu.cn/*
// @license          MIT
// @icon             https://basic.smartedu.cn/favicon.ico
// @grant            none
// @downloadURL      https://github.com/mike-unk/smartedu-video-skip/raw/main/smartedu-video-skip.user.js
// @updateURL        https://github.com/mike-unk/smartedu-video-skip/raw/main/smartedu-video-skip.user.js
// ==/UserScript==

(function() {
    'use strict';
    setInterval(()=>{ let v = document.getElementsByTagName('video')[0]; v.currentTime = v.duration; }, 800);
})();
