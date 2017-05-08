/**
 * Created by tboursier on 23/09/2015.
 */
(function () {
    'use strict';

    /**
     * @constructor
     */

    class Mailto {
        constructor({
            defaultSubject = 'This is a default subject',
            selector = '.js_mailto'
        }) {
            this.options = {
                defaultSubject,
                selector
            };
        }

        /**
         * Initialization
         */
        init() {
            const links = document.querySelectorAll(this.options.selector);

            links.forEach(link => {
                link.addEventListener('click', e => {
                    e.preventDefault();

                    this.mail(e.target);
                });
            });
        }

        /**
         * Open mail client
         * @param {HTMLElement} link
         * @returns {{init: (function(Object)), mailto: (function(string, string))}}
         */
        mail(link) {
            const recipient = link.getAttribute('data-recipient');
            const subject = link.getAttribute('data-subject') || this.options.defaultSubject;

            if (!recipient) return;

            window.location.href = `mailto:${recipient}?subject=${subject}`;
        }
    }

    // if the module has no dependencies, the above pattern can be simplified to
    (function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD. Register as an anonymous module.
            define([], factory);
        } else if (typeof module === 'object' && module.exports) {
            // Node. Does not work with strict CommonJS, but
            // only CommonJS-like environments that support module.exports,
            // like Node.
            module.exports = factory();
        } else {
            // Browser globals (root is window)
            root.Mailto = factory();
        }
    })(this || window, function () {

        // Just return a value to define the module export.
        // This example returns an object, but the module
        // can return a function as the exported value.
        return Mailto;
    });
})();

