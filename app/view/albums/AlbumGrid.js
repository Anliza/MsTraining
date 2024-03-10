Ext.define('MsTraining.view.Posts.AlbumGrid',{
    extend: 'Ext.grid.Panel',
    xtype: 'albumgrid',
    store:{
        type: 'albums'
    },
    columns: [
        { dataIndex: '_id', text: 'ID' },
        { dataIndex: 'title', text: 'Title',flex: 1},
        { dataIndex: 'userId', text: 'User ID'}
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