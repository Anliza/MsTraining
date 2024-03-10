Ext.define('MsTraining.view.todos.TodoGrid',{
    extend: 'Ext.grid.Panel',
    xtype: 'todogrid',
    controller: 'todogridviewcontroller',
    store:{
        type: 'todos'
    },
    tbar:[{
        text: 'Add Todo',
        listeners:{
            click: 'onAddTodoClicked'
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
    height: 300
})