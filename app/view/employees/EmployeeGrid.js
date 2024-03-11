Ext.define('MsTraining.view.employees.EmployeeGrid',{
    extend: 'Ext.grid.Panel',
    xtype: 'employeegrid',
    title: 'Employees',
    store:{
        type: 'employees'
    },
    columns: [
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Seniority', dataIndex: 'seniority', flex: 1 }
    ],
    features: [{ftype:'grouping'}]
});

