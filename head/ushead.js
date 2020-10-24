// ==UserScript==
// @name         MCBBS Lint
// @namespace    Ponyville
// @version      0.1
// @description  A better editor for MCBBS.
// @author       Ponyville
// @match        http*://www.mcbbs.net/*
// @run-at       document-idle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        unsafeWindow
// @grant        window.close
// @grant        window.focus
// @grant        GM_setClipboard
// @grant        GM_deleteValue
// @grant        GM_addValueChangeListener
// @grant        GM_removeValueChangeListener
// @grant        GM_openInTab
// @require      https://cdn.staticfile.org/jquery/3.5.1/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/toastr/toastr.min.js
// ==/UserScript==
const ML_VERSION = "0.1";
