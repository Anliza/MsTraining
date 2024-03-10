Ext.define('MsTraining.model.Album',{
    extend: 'Ext.data.Model',
    idProperty: '_id',
    fields:[
        '_id','userId','title'
    ],
    proxy: {
        type: 'rest', // type of call
        url: 'https://jsonplaceholder.typicode.com/albums',
        reader: {
            type: 'json',
        }
    }
   
})