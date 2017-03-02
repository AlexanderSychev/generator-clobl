goog.provide('<%= BlockNamespace %>.<%= BlockName %>');

goog.require('cl.iControl.Control');
goog.require('goog.events');
goog.require('<%= BlockNamespace %>.<%= TemplateName %>');
goog.require('<%= BlockNamespace %>.<%= ViewName %>');
goog.require('<%= FactoryFullName %>');

goog.scope(function() {
    const CloblControl = cl.iControl.Control;
    const getUniqueId = goog.events.getUniqueId;
    const Template = <%= BlockNamespace %>.<%= TemplateName %>;
    const View = <%= BlockNamespace %>.<%= ViewName %>;
    const Factory = <%= FactoryFullName %>;

    /** @enum {string} */
    const Event = {
        CLICK: getUniqueId('click')
    };

    /**
     * Control
     */
    class <%= BlockName %> extends CloblControl {
        /**
         * @param {cl.iControl.View} view
         * @param {goog.dom.DomHelper=} opt_domHelper
         */
        constructor(view, opt_domHelper) {
            super(view, opt_domHelper);
        }

        /** @override */
        decorateInternal(element) {
            super.decorateInternal(element);
        }

        /** @override */
        enterDocument() {
            super.enterDocument();
            this.autoDispatch(View.Event.CLICK, Event.CLICK);
        }

        /**
         * @const
         * @type {string}
         * @return {string}
         */
        static get NAME() {
            return Template.NAME();
        }
    };

    // Register control in factory
    Factory.getInstance().register('<%= BlockName %>', {
        control: <%= BlockName %>,
        view: View
    });

    /** @constructor */
    <%= BlockNamespace %>.<%= BlockName %> = <%= BlockName %>;

    /**
     * @const
     * @enum {string}
     */
    <%= BlockNamespace %>.<%= BlockName %>.Event = Event;
});  // goog.scope
