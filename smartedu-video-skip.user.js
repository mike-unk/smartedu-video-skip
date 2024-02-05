// ==UserScript==
// @name         智慧教育平台视频跳过
// @namespace    https://github.com/mike-unk/smartedu-video-skip
// @version      1.0.1
// @description  跳过国家中小学智慧教育平台的视频
// @updateURL    https://github.com/mike-unk/smartedu-video-skip/raw/main/smartedu-video-skip.user.js
// @downloadURL  https://github.com/mike-unk/smartedu-video-skip/raw/main/smartedu-video-skip.user.js
// @author       mike-unk
// @match        https://basic.smartedu.cn/*
// @license      MIT
// @icon         https://basic.smartedu.cn/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(()=>{ let v = document.getElementsByTagName('video')[0]; v.currentTime = v.duration; }, 800);
})();
