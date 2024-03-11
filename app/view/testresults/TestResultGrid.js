Ext.define('MsTraining.view.testresults.TestResultGrid',{
    extend: 'Ext.grid.Panel',
    xtype: 'testresultgrid',
    width: 400,
    height: 300,
    title: 'Summary Test',
    style: 'padding: 20px',
    renderTo: document.body,
    features: [{
        ftype: 'summary'
    }],
    store: {
        model: 'TestResult',
        data: [{
            student: 'Mark Mambo',mark: 84
        },{
            student: 'Jane Doe',mark: 72
        },{
            student: 'Joe Collins',mark: 96
        },{
            student: 'Hannah Stevens',mark: 68
        },{
            student: 'Felicity Simpson',mark: 50
        }]
    },
    columns: [{
        dataIndex: 'student',
        text: 'Name',
        summaryType: 'count',
        summaryRenderer: function(value, summaryData, dataIndex) {
            return Ext.String.format('{0} student{1}', value, value !== 1 ? 's' : '');
        }
    }, {
        dataIndex: 'mark',
        text: 'Mark',
        summaryType: 'max'
    }]
});
