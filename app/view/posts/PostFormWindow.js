Ext.define('MsTraining.view.posts.PostFormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'postformwindow',
    controller:'postformcontroller',
    title: "Add Post",
    height: 300,
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
               xtype: 'datefield',
               fieldLabel: 'Published Date',
               name: 'date',
               emptyText: 'date'
           },
       ],

    }],
    buttons: [
        {
            text: 'Clear',
            handler: 'onClearClick'
        },
        {
            text: 'Save',
            handler: 'onSaveClick'
        },
    ]
})