Ext.define('TimezoneApp.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.layout.VBox'
    ],
    config: {
        items: [ 
                {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'TimeZone App'
                },
                {
                	xtype: 'container',
                	fullscreen: true,
                	layout:'vbox',
                	items: [
                	        {
                	        	html: '1st item',
                	        	style: 'background-color: #5E99CC;',
                	        	height: 100
                	        },
                	        {
                	        	html: '2nd item',
                	        	style: 'background-color: #759E60;',
                	        	height: 100
                	        }
                	        ]
                }
                ]
    }
});
