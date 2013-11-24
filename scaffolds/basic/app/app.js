Ext.application({
    name: 'Basic',

    autoCreateViewport: false,

    controllers: ['Main'],


    launch: function () {
        var myApp = this;
        // Create a panel to hold the widget and some buttons to test it
        Ext.create('Ext.panel.Panel', {
            renderTo: 'mainWidget',
            layout: 'vbox',
            title: "Testbench ",
            titleAlign: 'left',

            items: [
                {
                    xtype: 'basicMain',  // This is the widget under test
                    text: 'Load data'
                }

            ],
            bbar: [
                {
                    xtype: 'button',    // For test only
                    text: 'Load data',
                    handler: function() {
                        myApp.fireEvent('loadData');
                    }
                },
                {
                    xtype: 'button',    // For test only
                    text: 'Reset',
                    handler: function() {
                        myApp.fireEvent('resetState');
                    }
                }
            ]
        });
    }
});
