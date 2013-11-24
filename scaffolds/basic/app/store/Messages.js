Ext.define('Basic.store.Messages', {
    extend: 'Ext.data.Store',

    model: 'Basic.model.Message',
    data : [
        {message: 'Hello there'},
        {message: 'Another message'},
        {message: 'A third message'},
    ]
});