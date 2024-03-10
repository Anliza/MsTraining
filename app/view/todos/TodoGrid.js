Ext.define('MsTraining.view.Posts.TodoGrid',{
    extend: 'Ext.grid.Panel',
    xtype: 'todogrid',
    store:{
        type: 'albums'
    },
    columns: [
        { dataIndex: '_id', text: 'ID' },
        { dataIndex: 'title', text: 'Title',flex: 1},
        { dataIndex: 'userId', text: 'User ID'},
        { dataIndex: 'completed', text: 'Completed'}
    ],
    selModel: {
        selType: 'checkboxmodel',
        mode: 'SINGLE'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    scrollable: true,
    height: 800
})