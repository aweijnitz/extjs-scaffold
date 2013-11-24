Ext.define('Basic.controller.Main', {
    extend: 'Ext.app.Controller',

    stores: ['Messages'],
    views: ['Main'],


    refs: [
        {ref: 'mainView', selector: 'basicMain'},
        {ref: 'greetLabel', selector: 'basicMain > label'},
        {ref: 'greetLabel', selector: 'basicMain > label'}

    ],

    /** Setup events handling for child views, application and stores here
     */
    init: function () {
        controller = this;

        this.control({
            'button[action=greet]': {
                click: controller.onGreet
            }
        });

        this.application.on({
            loadData: function () {
                controller.getGreetLabel().setText('Data loaded');
            },
            resetState: function () {
                controller.getGreetLabel().setText('Hello there!');
            }
        });

        console.log('Basic.controller.Main:: Controller initialized');
    },

    /** Example of responding to view events and using auto-generated getters for view refs
     */
    onGreet: function () {
        this.getGreetLabel().setText('Nice to see you!');
    }

});
