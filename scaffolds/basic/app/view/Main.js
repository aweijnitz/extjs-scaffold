Ext.define('Basic.view.Main', {
    extend: 'Ext.form.FieldSet',
    alias: 'widget.basicMain',
    layout: 'vbox',

    initComponent: function () {
        // Put view initialization code here

        this.callParent(); // And don't forget to call parent
    },


    items: [
        {
            xtype: 'label',
            text: 'Hello there!'
        },{
            xtype: 'button',
            text: 'Hello!',
            action: 'greet'
        }
    ]

});