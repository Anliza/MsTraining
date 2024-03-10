Ext.define('MsTraining.view.todos.TodoFormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'todoformwindow',
    title: "Add Todo",
    height: 250,
    width: 520,
    autoShow: true,
    closable: true,
    modal: true,
    items:[{
       xtype: 'form',
       reference: 'postform',
       itemId:'postform',
       jsonSubmit:true,
       bodyPadding: 10,
       modelValidation: true,
       layout: 'form',
       items:[
           {
               allowBlank: false,
               xtype:'textfield',
               fieldLabel: 'Post ID',
               name: 'id',
               emptyText: 'Post id'
           },
           {
               allowBlank: false,
               xtype: 'textfield',
               fieldLabel: 'User ID',
               name: 'userId',
               emptyText: 'user id'
           },
           {
               allowBlank: false,
               xtype: 'textfield',
               fieldLabel: 'Title',
               name: 'title',
               emptyText: 'title'
           },
           {
            allowBlank: false,
            xtype: 'textfield',
            fieldLabel: 'Completed',
            name: 'completed',
            emptyText: 'completed'
            },
           {
               allowBlank: false,
               xtype: 'datefield',
               fieldLabel: 'Published Date',
               name: 'date',
               emptyText: 'date'
           },
       ],

    }],
    buttons: [
        { text: 'Cancel' },
        { text: 'Save' },
    ]
})