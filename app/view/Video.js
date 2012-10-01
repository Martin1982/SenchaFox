/**
 * Demonstrates the Ext.Video component
 */
Ext.define('Kitchensink.view.Video', {
    extend: 'Ext.Container',
    requires: [
        'Ext.Video'
    ],
    config: {
        layout: 'fit',
        items: [{
            xtype: 'video',
            url: [
                'resources/media/BigBuck.m4v',
                'video/resources/media/BigBuck.webm',
                'video/resources/media/BigBuck.ogv'
            ],
            loop: true,
            posterUrl: 'resources/images/cover.jpg'
        }]
    }
});
