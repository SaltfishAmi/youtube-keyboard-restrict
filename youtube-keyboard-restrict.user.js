// ==UserScript==
// @name         youtube-keyboard-restrict
// @namespace    http://saltfish.moe/
// @version      0.1
// @description  disables the all keyboard player control shortcuts on YouTube, except Space, Left Arrow, and Right Arrow.
// @author       SaltfishAmi
// @match        *://*.youtube.com/*
// @grant        none
// ==/UserScript==

/* 
 * Inspired by https://github.com/timmontague/youtube-disable-number-seek
 *
 * YouTube keyboard shortcuts:
 * https://support.google.com/youtube/answer/7631406?hl=en
 *
 * Here's a javascript keyboard event library that is helpful to look at:
 * https://github.com/ccampbell/mousetrap/blob/master/mousetrap.js
 */

(function() {
    'use strict';

    const allowlist = [
        ' ',
        'ArrowLeft',
        'ArrowRight'
    ];

    function keyboard_event_handler(e) {
        // Don't prevent entering in input areas
        if (e.target.tagName == 'INPUT' ||
    	    e.target.tagName == 'SELECT' ||
    	    e.target.tagName == 'TEXTAREA' ||
    	    e.target.isContentEditable) {
    	    return;
        }
        // Trap keys
        if (!allowlist.includes(e.key)) {
            // console.log(`Prevented keydown event for ${e.key}`);
    	    e.stopImmediatePropagation();
        }
    }
    window.addEventListener('keydown', keyboard_event_handler, true);
})();
