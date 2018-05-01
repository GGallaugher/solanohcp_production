/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

OpenLayers.Util.onImageLoadErrorColor = "transparent";
Ext.BLANK_IMAGE_URL = 'http://extjs.cachefly.net/ext-3.4.0/resources/images/default/s.gif';

// Settings for main map
Ext.namespace("Heron.options.map");
OpenLayers.ProxyHost = "/cgi-bin/proxy.cgi?url=";
Heron.globals.serviceUrl = '/cgi-bin/heron.cgi';
Heron.options.map.settings = {
						projection: 'EPSG:900913',
						displayProjection: new OpenLayers.Projection("EPSG:4326"),
						units: 'm',
						resolutions: [156543.03390625, 78271.516953125, 39135.7584765625, 19567.87923828125, 
						9783.939619140625, 4891.9698095703125, 2445.9849047851562, 1222.9924523925781, 611.4962261962891, 
						305.74811309814453, 152.87405654907226, 76.43702827453613, 38.218514137268066, 19.109257068634033, 15,
						9.554628534317017, 4.777314267158508, 2.388657133579254, 1.194328566789627, 0.5971642833948135, 
						0.29858214169740677, 0.14929107084870338, 0.07464553542435169, 0.037322767712175846, 0.018661383856087923, 
						0.009330691928043961, 0.004665345964021981, 0.0023326729820109904, 0.0011663364910054952, 5.831682455027476E-4, 
						2.915841227513738E-4, 1.457920613756869E-4, 0.457920613756869E-4],					
						maxExtent: new OpenLayers.Bounds(-13625922.878899999, 4584961.457699999, -13535758.854700001, 4655864.1854),
						restrictedExtent: new OpenLayers.Bounds(-13625922.878899999, 4584961.457699999, -13535758.854700001, 4655864.1854),

						center:(-13573952.809878, 4617592.273233),
						//maxExtent: 'auto',
						//maxResolution: 'auto',
						xy_precision: 8,
						zoom: 10,
						maxZoomLevel: 30,
						theme: null,
						numZoomLevels: 30,
						zoomOnRowDoubleClick: true
};
//Heron.options.searchPanelConfig = {
//	xtype: 'hr_searchcenterpanel',
//	hropts: {
//		searchPanel: {
//		xtype: 'hr_searchbydrawpanel',
//			id: 'hr-searchbydrawpanel',
//			header: false,
 //           border: false,
//			style: {
//				fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
//				fontSize: '12px'
//			}
//		},
//		resultPanel: {
//			xtype: 'hr_featuregridpanel',
//			id: 'hr-featuregridpanel',
//			header: false,
 //           border: false,
//			autoConfig: true,
 //           exportFormats: ['CSV', 'XLS', 'GMLv2', 'GeoJSON', 'WellKnownText', 'Shapefile'],
//			hropts: {
//				zoomOnRowDoubleClick: true,
//				zoomOnFeatureSelect: false,
//				zoomLevelPointSelect: 8,
//				zoomToDataExtent: false
//			}
//		}
//	}
//};


//Define elements of toolbar
Heron.options.map.toolbar = [
//    {type: "scale", options: {width: 110}},

    {type: "-"} ,
	{
		// Instead of an internal "type", or using the "any" type
		// provide a create factory function.
		// MapPanel and options (see below) are always passed
		create: function (mapPanel, options) {

			// A trivial handler
			options.handler = function () {
					win.show(this);
			};

			// Provide an ExtJS Action object
			// If you use an OpenLayers control, you need to provide a GeoExt Action object.
			return new Ext.Action(options);
		},

		/* Options to be passed to your create function. */
		options: {
			tooltip: 'Show Help',
			iconCls: "icon-instructions",
			id: "myitem",
			text: "Instructions"
		}
	},
    {type: "-"} ,	
    {type: "pan"},
    {type: "zoomin"},
    {type: "zoomout"},
    {type: "zoomvisible"},
    {type: "coordinatesearch", options: {iconCls: "icon-coordinatesearch", projEpsg: 'EPSG:900913', onSearchCompleteZoom: 5, fieldLabelX: 'lon (X)', fieldLabelY: 'lat (Y)', fieldEmptyTextX: 'Enter'}},
    {type: "-"} ,
    {type: "zoomprevious"},
    {type: "zoomnext"},
    {type: "-"},
	
    {type: "measurelength", options: {geodesic: true,
            control: new OpenLayers.Control.Measure(OpenLayers.Handler.Path, {
                persist: true,
                immediate: true,
                displayClass: "olControlMeasureDistance", // css-Cursor
                displaySystem: 'english',
                handlerOptions: {
                    layerOptions: {styleMap: new OpenLayers.StyleMap({
                        "default": new OpenLayers.Style(null, {
                            rules: [new OpenLayers.Rule({
                                symbolizer: {
                                    "Point": {
                                        pointRadius: 10,
                                        graphicName: "square",
                                        fillColor: "white",
                                        fillOpacity: 0.25,
                                        strokeWidth: 1,
                                        strokeOpacity: 1,
                                        strokeColor: "#333333"
                                    },
                                    "Line": {
                                        strokeWidth: 1,
                                        strokeOpacity: 1,
                                        strokeColor: "#FF0000",
                                        strokeDashstyle: "solid"
                                    }
                                }
                            })]
                        })
                    })}
                }
            })
    }},
    {type: "measurearea", options: {geodesic: true,
			control: new OpenLayers.Control.Measure(OpenLayers.Handler.Polygon, {
				persist: true,
				immediate: true,
				displayClass: "olControlMeasureArea", // css-Cursor
                displaySystem: 'english',
				handlerOptions: {
					layerOptions: {styleMap: new OpenLayers.StyleMap({
						"default": new OpenLayers.Style(null, {
							rules: [new OpenLayers.Rule({
								symbolizer: {
									"Point": {
										pointRadius: 10,
										graphicName: "square",
										fillColor: "white",
										fillOpacity: 0.25,
										strokeWidth: 1,
										strokeOpacity: 1,
										strokeColor: "#333333"
									},
									"Polygon": {
										strokeWidth: 1,
										strokeOpacity: 1,
										strokeColor: "#FF0000",
										strokeDashstyle: "solid",
										fillColor: "#FFFFFF",
										fillOpacity: 0.5
                                    }
                                }
                            })]
                        })
                    })}
                }
            })
    }},
	// Old Drawing Editor
	{type: "-"},
{type: "oleditor", options: {
					pressed: true,

					// Options for OLEditor
					olEditorOptions: {
						activeControls: ['UploadFeature', 'DownloadFeature', 'Separator', 'Navigation', 'SnappingSettings', 'CADTools', 'Separator', 'DeleteAllFeatures', 'DeleteFeature', 'DragFeature', 'SelectFeature', 'Separator', 'DrawHole', 'ModifyFeature', 'Separator'],
						featureTypes: ['text', 'regular', 'polygon', 'path', 'point'],
						language: 'en',
						DownloadFeature: {
							url: Heron.globals.serviceUrl,
							formats: [
								
                                {name: 'Keyhole Markup Language (KML)', fileExt: '.kml', mimeType: 'text/xml', formatter: 'OpenLayers.Format.KML', fileProjection: new OpenLayers.Projection('EPSG:4326')}
                               

							],
							// For custom projections use Proj4.js
							fileProjection: new OpenLayers.Projection('EPSG:4326')
						},
						UploadFeature: {
							url: Heron.globals.serviceUrl,
							formats: [
							
                                {name: 'Keyhole Markup Language (KML)', fileExt: '.kml', mimeType: 'text/xml', formatter: 'OpenLayers.Format.KML', fileProjection: new OpenLayers.Projection('EPSG:4326')}
                            
                               

                            ],
							// For custom projections use Proj4.js
fileProjection: new OpenLayers.Projection('EPSG:4326')
							// For custom projections use Proj4.js
	//						fileProjection: new OpenLayers.Projection('EPSG:4326')
				}
			}
			}
		},
	

    {type: "-"} ,
	
    {type: "featureinfo", options: {
        popupWindow: {
			title: 'Feature Information',
            width: 600,
            height: 200,
           zoomOnRowDoubleClick: true,
		   featureInfoPanel: {
				
				xtype: 'hr_featuregridpanel',
                                id: 'hr-featureInfoPanel',
								layout: 'fit',
                exportFormats: ['CSV', 'XLS'],
                maxFeatures: 75,
                                header: false,
                                border: false,
                                autoConfig: true,
                                exportFormats: ['CSV', 'XLS', 'GMLv2', 'GeoJSON', 'WellKnownText', 'GeoPackage', 'Shapefile'],
                                hropts: {
									xy_precision: 3,
                                    zoomOnRowDoubleClick: true,
                                    zoomOnFeatureSelect: true,
                                    zoomLevelPointSelect: 17,
                                    zoomToDataExtent: false,
									  // Optional: make these layers visible when search completes
//srsName: "EPSG:900913",
                          
								
            }
        }
    }}}, 
 //   {type: "printdirect", options: {url: '/geoserver/prining', mapTitle: 'My Title - Direct Print'
        // , mapTitleYAML: "mapTitle"		// MapFish - field name in config.yaml - default is: 'mapTitle'
        // , mapComment: 'My Comment - Direct Print'
        // , mapCommentYAML: "mapComment"	// MapFish - field name in config.yaml - default is: 'mapComment'
        // , mapFooter: 'My Footer - Direct Print'
        // , mapFooterYAML: "mapFooter"	    // MapFish - field name in config.yaml - default is: 'mapFooter'
		// , printAttribution: true         // Flag for printing the attribution
		// , mapAttribution: null           // Attribution text or null = visible layer attributions
		// , mapAttributionYAML: "mapAttribution" // MapFish - field name in config.yaml - default is: 'mapAttribution'
        // , mapPrintLayout: "A4"			// MapFish - 'name' entry of the 'layouts' array or Null (=> MapFish default)
        // , mapPrintDPI: "75"				// MapFish - 'value' entry of the 'dpis' array or Null (=> MapFish default)
        // , mapPrintLegend: true
        // , legendDefaults: {
        //     useScaleParameter : false,
        //     baseParams: {FORMAT: "image/png"}
        //   }
 //   }},
	{
		create: function (mapPanel, options) {
			return new GeoExt.Action({
				text: "Parcel Report",
				iconCls: "icon-report-parcel",	
			
				control: new OpenLayers.Control({
				    type: OpenLayers.Control.TYPE_TOOL,

				    /**
				     * Constructor: OpenLayers.Control.Identify 
				     * Fires a user defined function with the mouse position
				     *
				     * Parameters:
				     * options - {userFunction} An optional object whose properties will be used
				     *     to extend the control.
				     */
				    initialize: function(userFunction, options) {
				        OpenLayers.Control.prototype.initialize.apply(this, [options]);
				    },
   
				    draw: function() {
				        this.handler = new OpenLayers.Handler.Point(this,
						 			{done: this.identify});
				    },

					identify: function(thePoint) {
						//reportWin.show(this);
						var content;
						var theURL = "getallparcels.php?longitude=" + thePoint.x + "&latitude=" + thePoint.y; 
						$.blockUI({ message: '<p style="font-family: trebuchet ms; font-weight: bold; padding: 25px;"><img src="busy.gif" /> Running Analysis...</h1>' }); 
						//get the file
						$.ajax({
						  type: "GET",
						  url: theURL,
						  dataType: "html",
						  success : function(data) {
						  				$.unblockUI();
						                content = data;
										Ext.fly("report-content").update(content);
										reportWin.show(this);
										reportMapInit();
										//Grab passed parcel extent from hidden div and zoom to it.  There is probably a more elegant way of doing this.
										split = $("#extent").text().split(",");
										var bounds = new OpenLayers.Bounds();
										bounds.extend(new OpenLayers.LonLat(split[0], split[1]));
										bounds.extend(new OpenLayers.LonLat(split[2], split[3]));
										reportmap.zoomToExtent(bounds);

						            }
						});
						theExtent = Heron.App.map.getExtent();
						reportmap.zoomToExtent(theExtent);
						reportmap.zoomIn();
				    }											
				}),
				map: mapPanel.getMap(),
				// button options
				enableToggle: true,
				pressed: false,
            	toggleGroup: "toolGroup",
				allowDepress: false,
				tooltip: "Click on parcel to generate report",
				// check item options
				group: "draw"
			})
		}
	},
//	{
//		type: "searchcenter",
//		// Options for SearchPanel window
//		options: {
 //           show: true,
//			searchWindow: {
//				title: __('Find out which species are in an area drawn on the map'),
//				x: 100,
//				y: undefined,
//				width: 360,
//				height: 400,
//				items: [
//					Heron.options.searchPanelConfig
//				]
//			}
//		}
//	},

	
	
	{
		create: function (mapPanel, options) {
			return new GeoExt.Action({
				text: "Area Report",
				iconCls: "icon-report-polygon",	
			
				control: new OpenLayers.Control({
				    type: OpenLayers.Control.TYPE_TOOL,
				    initialize: function(userFunction, options) {
				        OpenLayers.Control.prototype.initialize.apply(this, [options]);
				    }, 
				    draw: function() {
				        this.handler = new OpenLayers.Handler.Polygon(this,
						 			{done: this.identify});
				    },
					identify: function(aPoly) {
						GUID = 'xxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
											var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
											return v.toString(16);
										});
						vertCount = aPoly.getVertices().length;
 						theURL = "polygon_process.php?poly=" + aPoly + "&guid=" + GUID + "&vertcount=" + vertCount;
						$.blockUI({ message: '<p style="font-family: trebuchet ms; font-weight: bold; padding: 25px;"><img src="busy.gif" /> Running Analysis...</h1>' }); 
						setTimeout(function(){}, 1000);
						//get the file
						$.ajax({
						  type: "GET",
						  url: theURL,
						  dataType: "html",
						  success : function(data) {
										$.unblockUI();
						                content = data;
										Ext.fly("report-content").update(content);
										reportWin.show(this);
										reportMapInit();
										polyFeature = new OpenLayers.Feature.Vector(aPoly);
										polyExtent = aPoly.getBounds();
										polyLayer = new OpenLayers.Layer.Vector("Poly Layer");
										polyLayer.addFeatures(polyFeature);
										reportmap.addLayer(polyLayer);
										reportmap.zoomToExtent(polyExtent);
						            }
						});	 
				    }										
				}),
				
				map: mapPanel.getMap(),
				// button options
				enableToggle: true,
				pressed: false,
            	toggleGroup: "toolGroup",
				allowDepress: false,
				tooltip: "Draw out area to generate report",
				// check item options
				group: "draw"
			})
		}
	}	
];



Ext.namespace("Heron.options.bookmarks");
Heron.options.bookmarks =
    [
        
    ];

