/**
 * 
 * Magnifico 
 * 
 * Version 0.1.2
 * 
 * Defaults: 
 * --- scale: 1.5
 * --- background: white
 * --- padding: 10px
 * --- border radius: 5px
 * 
 * Override defaults by passing an object when requiring the magnify:
 *    var magnify = require('magnify') ( {scale:1.9, background: "#aaa",padding:"0px", borderRadius:"0px"})
 * 
 */
var Magnifico = function (options) {
    'use strict';

    var CONFIG = {
        style: {
            scale: 1.5,
            padding: "10px",
            borderRadius: "5px",
            background: "#fff"
        }
    };

    function forClassName(className) {
        applyRule(document.getElementsByClassName(className));
    }

    function forTagName(tagName) {
        applyRule(document.getElementsByTagName(tagName));
    }

    function forSelector(selector) {
        applyRule(document.querySelectorAll(selector));
    }

    /**
     * Private
     */
    function applyRule(elements) {
        Array.from(elements).forEach(function (e) {
            e.addEventListener("mouseover", function (element) {
                var target = element.target;
                target.classList.add("magnify");
            });

            e.addEventListener("mouseleave", function (element) {
                var target = element.target;
                target.classList.remove("magnify");
            });
        });
    }

    /** 
     * Initialization
     */
    function initMagnifyStyles() {

        options = options || {};

        CONFIG.style.scale = options.scale || CONFIG.style.scale;
        CONFIG.style.padding = options.padding || CONFIG.style.padding;
        CONFIG.style.borderRadius = options.borderRadius || CONFIG.style.borderRadius;
        CONFIG.style.background = options.background || CONFIG.style.background;

        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '.magnify { transform: scale(' + CONFIG.style.scale + ')' +
            '; padding: ' + CONFIG.style.padding +
            '; border-radius: ' + CONFIG.style.borderRadius +
            '; background: ' + CONFIG.style.background + '; }';

        document.getElementsByTagName('head')[0].appendChild(style);
    }

    initMagnifyStyles();

    return {
        forClassName: forClassName,
        forTagName: forTagName,
        forSelector: forSelector
    };
};

module.exports = Magnifico;