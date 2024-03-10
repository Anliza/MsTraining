Ext.define('MyApp.view.todos.TodoGridViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.todogridviewcontroller',

    onAddTodoClicked:function(btn,e,eOpts){
        console.log(btn.getText() + " was clicked");
        // Ext.create("MsTraining.view.demo.CustomWindow");
        var wd = Ext.create({
            xtype: "todoformwindow",
        });
        wd.show();
    }, 
    onFormFieldsClicked:function(btn,e,eOpts){
      Ext.create({
            xtype: "formfieldsdemo",
        });
    }, 
    onLayoutsClicked:function(btn,e,eOpts){
      Ext.create({
          xtype: "accordionlayout", // or "borderlayout",
        });
    }
})