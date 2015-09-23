/**
 * Created by tboursier on 23/09/2015.
 */
(function () {

    var mailtoCreation = (function () {

        // You can change the default subject
        var default_subject = 'This is a default subject';

        return {
            /**
             * @param {object} e - Event
             */
            init: function (e) {
                var recipient = e.target.getAttribute('data-recipient'),
                    subject = (!e.target.getAttribute('data-subject') || e.target.getAttribute('data-subject').length === 0) ? default_subject : e.target.getAttribute('data-subject');

                if (recipient.length !== 0) {
                    this.mailto(recipient, subject);
                }
            },

            /**
             * @param {string} recipient - Email of the recipient
             * @param {string} subject - Subject
             */
            mailto: function (recipient, subject) {
                window.location.href = 'mailto:' + recipient + '?subject=' + subject;
            }
        }
    })();

    /*
    Apply event on each element which has the class 'js_mailtoCreation'
     */
    var links = document.getElementsByClassName('js_mailtoCreation'),
        len = links.length,
        i = 0;

    for (i; i < len; i++) {

        links[i].onclick = function (e) {
            e.preventDefault();
            mailtoCreation.init(e);
        };
    }
})();