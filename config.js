/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.language = 'en';
   config.height = 600; 
   config.allowedContent=true;
   config.fillEmptyBlocks = false;


   config.entities  = false;
   config.basicEntities = false;
   config.entities_greek = false;
   config.entities_latin = false;
   // config.tabSpaces = 0;
   // config.entities = false;
   // config.contentsCss = 'mystylesheet.css';
	config.extraPlugins = 'slideshow';

   config.stylesSet= [
      { name: 'Image decoration', type: 'widget', widget: 'image', attributes: { 'class': 'testStyle' } }
      ];

   config.format_img = { element: 'img', attributes: { 'class': 'editorTitle1' } };


   config.slideshowDoNotLoadJquery = true;
	config.toolbar= [['Source', '-', 'NewPage', 'Preview', '-', 'Templates'],
                           ['Undo', 'Redo', '-', 'SelectAll', 'RemoveFormat'],
                           ['Styles', 'Format'],
                           ['TextColor', 'BGColor'],
                           ['Maximize', 'ShowBlocks', '-', 'About'], '/',
                           ['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript'],
                           ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote', 'CreateDiv'],
                           ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
                           ['Link', 'Unlink', 'Anchor'],
                           ['Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak','Slideshow'],
                           ['Code']]; 
};
