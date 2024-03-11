Ext.define("MsTraining.store.TestResults", {
    extend: 'Ext.data.Store',
    alias: 'store.testresults',
    model:'MsTraining.model.TestResult',
    fields: ['student', 'mark'],
    groupField: 'department',
    data: [
        { name: 'Michael Scott', seniority: 7, department: 'Management' },
        { name: 'Dwight Schrute', seniority: 2, department: 'Sales' },
        { name: 'Jim Halpert', seniority: 3, department: 'Sales' },
        { name: 'Kevin Malone', seniority: 4, department: 'Accounting' },
        { name: 'Angela Martin', seniority: 5, department: 'Accounting' }
    ]
});