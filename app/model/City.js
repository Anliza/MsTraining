Ext.define("MsTraining.model.City", {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'cityId', type: 'int' },
        { name: 'city', type: 'string' },
        { name: 'stateId', type: 'int' }
    ]
  });