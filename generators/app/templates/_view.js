goog.provide('<%= BlockNamespace %>.<%= ViewName %>');

goog.require('cl.iControl.View');
goog.require('goog.dom.classlist');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('<%= BlockNamespace %>.Params');

goog.scope(function () {
    const CloblView = cl.iControl.View;
    const getUniqueId = goog.events.getUniqueId;
    const EventType = goog.events.EventType;
    const classlist = goog.dom.classlist;

    /** @enum {string} */
    const CssClass = {
        ROOT: '<%= RootCssClass %>'
    };

    /** @enum {string} */
    const Event = {
        CLICK: getUniqueId('click')
    };

    /**
     * View
     */
    class <%= ViewName %> extends CloblView {
        /**
         * @param {<%= BlockNamespace %>.Params=} opt_params
         * @param {string=} opt_type
         * @param {String=} opt_modifier
         */
        constructor(opt_params, opt_type, opt_modifier) {
            super(opt_params, opt_type, opt_modifier);
        }

        /** @override */
        decorateInternal(element) {
            super.decorateInternal(element);
        }

        /** @override */
        enterDocument() {
            super.enterDocument();

            this.getHandler().listen(
                this.getElement(),
                EventType.CLICK,
                this.emitClick_
            );
        }

        /** @private */
        emitClick_() {
            this.dispatchEvent(Event.CLICK);
        }
    };

    /** @constructor */
    <%= BlockNamespace %>.<%= ViewName %> = <%= ViewName %>

    /**
     * @const
     * @enum {string}
     */
    <%= BlockNamespace %>.<%= ViewName %>.CssClass = CssClass;

    /**
     * @const
     * @enum {string}
     */
    <%= BlockNamespace %>.<%= ViewName %>.Event = Event;
});  // goog.scope
