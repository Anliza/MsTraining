Ext.define('MsTraining.store.Menu',{
    extend:'Ext.data.TreeStore',
    alias:'store.menu',
    root: {
        text: 'Root',
        expanded: true,
        children: [
            {
                text: 'Summary',
                iconCls:'fas fa-users-cog',
                children:[
                    {
                        text: 'Employee grouping',
                        iconCls: 'fa fa-users',
                        className: 'employeegrid',
                        leaf: true
                    },
                    {
                        text: 'Student Results ',
                        iconCls: 'fa fa-users',
                        className: 'testresultgrid',
                        leaf: true
                    }

                ]
              
            },
            {
                text: 'Static Data',
                iconCls:'fa fa-database fa-lg',
                children: [
                    {
                        text: 'Posts',
                        iconCls: 'fa fa-users',
                        className: 'postgrid',
                        leaf: true
                    },
                    // {
                    //     text: 'Personnel',
                    //     iconCls: 'fa fa-users',
                    //     leaf:true,
                    //     className: 'mainlist',
                    // }

                    {
                        text:'Users',
                        iconCls:'fa fa-users',
                        className:'parentpanel',
                        leaf:true
                    },
                    {
                        text: 'Todos',
                        iconCls: 'fas fa-user-secret',
                        className: 'todogrid',
                        leaf: true
                    },
                    {
                        text: 'Albums',
                        iconCls: 'fas fa-user-secret',
                        className: 'albumgrid',
                        leaf: true
                    }
                ]

            },
            
        ]
    }
})