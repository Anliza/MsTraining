Ext.define('MsTraining.model.Todo',{
    extend: 'Ext.data.Model',
    idProperty: '_id',
    fields:[
        '_id','userId','title','completed'
    ],
    proxy: {
        type: 'rest', // type of call
        url: 'https://jsonplaceholder.typicode.com/todos',
        reader: {
            type: 'json',
        }
    }
   
})