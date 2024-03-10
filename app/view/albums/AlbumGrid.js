Ext.define('MsTraining.view.albums.AlbumGrid',{
    extend: 'Ext.grid.Panel',
    xtype: 'albumgrid',
    controller: 'albumgridviewcontroller',
    store:{
        type: 'albums'
    },
    tbar:[{
        text: 'Add Album',
        listeners:{
            click: 'onAddAlbumClicked'
        }
    },
    {
        text: 'Form fields',
        listeners: {
            click: 'onFormFieldsClicked'
        }
    },
    {
        text: 'Layouts',
        listeners: {
            click: 'onLayoutsClicked'
        }
    }],
    columns: [
        { dataIndex: '_id', text: 'ID' },
        { dataIndex: 'title', text: 'Title',flex: 1},
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
    height: 600
})