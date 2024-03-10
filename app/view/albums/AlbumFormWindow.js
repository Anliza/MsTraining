Ext.define('MsTraining.view.albums.AlbumFormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'albumformwindow',
    controller:'albumformcontroller',
    title: "Add Album",
    height: 250,
    width: 520,
    autoShow: true,
    closable: true,
    modal: true,
    items: [{
        xtype: "form",
        reference: 'albumform',
        itemId:'albumform',
        jsonSubmit:true,
        bodyPadding: 10,
        modelValidation: true,
        items: [
            {
            allowBlank: true,
            readOnly: true,
            xtype: "textfield",
            reference: "albumId",
            fieldLabel: "Album ID",
            name: "_id",
            emptyText: "Album id",
            },
            {
            allowBlank: false,
            xtype: "textfield",
            fieldLabel: "User ID",
            name: "userId",
            emptyText: "user id",
            },
            {
            allowBlank: false,
            xtype: "textfield",
            fieldLabel: "Title",
            name: "title",
            emptyText: "title",
            },
        ],
        },
    ],
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
    });