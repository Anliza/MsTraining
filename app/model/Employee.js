Ext.define("MsTraining.model.Employee", {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'name', type: 'string' },
        { name: 'seniority', type: 'int' },
        { name: 'department', type: 'string' }
    ]
  });