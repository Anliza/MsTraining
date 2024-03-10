Ext.define('MsTraining.view.Posts.PostGrid',{
    extend: 'Ext.grid.Panel',
    xtype: 'postgrid',
    store:{
        type: 'posts'
    },
    tbar:[{
        text: 'Add Post'
    }],
    columns: [
        { dataIndex: '_id', text: 'ID' },
        { dataIndex: 'title', text: 'Title',flex: 1},
        { dataIndex: 'body', text: 'Body', flex: 2, sortable: false},
        { dataIndex: 'userId', text: 'User ID', sortable: false, hidden: true}
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