Ext.define("MsTraining.store.Cities", {
    extend: 'Ext.data.Store',
    alias: 'store.cities',
    model: "MsTraining.model.City",
    data: [
        { id: 1, name: "Nairobi", phone: "254725364645", age: 100 },
        { id: 2, name: "Nakuru", phone: "254725364563", age: 3 },
    ],
});