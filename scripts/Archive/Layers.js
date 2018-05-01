
//Feature selection style
OpenLayers.Feature.Vector.style={
	"default":{
		fillColor:"#ee9900",
		fillOpacity:0.0,
		hoverFillColor:"white",
		hoverFillOpacity:0.8,
		strokeColor:"#FFFF00",
		strokeOpacity:0.8,
		strokeWidth:2,
		strokeLinecap:"round",
		strokeDashstyle:"solid",
		hoverStrokeColor:"red",
		hoverStrokeOpacity:1,
		hoverStrokeWidth:0.2,
		pointRadius:6,
		hoverPointRadius:1,
		hoverPointUnit:"%",
		pointerEvents:"visiblePainted",
		cursor:"inherit",
		fontColor:"#000000",
		labelAlign:"cm",
		labelOutlineColor:"white",
		labelOutlineWidth:3
		},

	select:{
		fillColor:"blue",
		fillOpacity:0.0,
		hoverFillColor:"white",
		hoverFillOpacity:0.8,
		strokeColor:"#FF0000",
		strokeOpacity:1,
		strokeWidth:3,
		strokeLinecap:"round",
		strokeDashstyle:"solid",
		hoverStrokeColor:"red",
		hoverStrokeOpacity:1,
		hoverStrokeWidth:0.2,
		pointRadius:6,
		hoverPointRadius:1,
		hoverPointUnit:"%",
		pointerEvents:"visiblePainted",
		cursor:"pointer",
		fontColor:"#000000",
		labelAlign:"cm",
		labelOutlineColor:"white",
		labelOutlineWidth:3},
		
	temporary:{
		fillColor:"#66cccc",
		fillOpacity:0.2,
		hoverFillColor:"white",
		hoverFillOpacity:0.8,
		strokeColor:"#66cccc",
		strokeOpacity:1,
		strokeLinecap:"round",
		strokeWidth:2,
		strokeDashstyle:"solid",
		hoverStrokeColor:"red",
		hoverStrokeOpacity:1,
		hoverStrokeWidth:0.2,
		pointRadius:6,
		hoverPointRadius:1,
		hoverPointUnit:"%",
		pointerEvents:"visiblePainted",
		cursor:"inherit",
		fontColor:"#000000",
		labelAlign:"cm",
		labelOutlineColor:"white",
		labelOutlineWidth:3},
		
	"delete":{
		display:"none"}
	};

Heron.options.map.layers = [

    /*
     * ==================================
     *            BaseLayers
     * ==================================
     */
		new OpenLayers.Layer.Google(
			"Google Satellite",
			{type: google.maps.MapTypeId.HYBRID, visibility: true},
			{singleTile: false, buffer: 0, isBaseLayer: true}
	), 
	gHyb = 	new OpenLayers.Layer.Google(
			"Google Terrain",
			{type: google.maps.MapTypeId.TERRAIN, visibility: false},
			{singleTile: false, buffer: 0, isBaseLayer: true}
	),

	new OpenLayers.Layer.Google(
			"Google Streets", // the default
			{type: google.maps.MapTypeId.ROADMAP, visibility: false},
			{singleTile: false, buffer: 0, isBaseLayer: true}
	),


/* 	new OpenLayers.Layer.WMS(
		"<a href='http://www.fsa.usda.gov/FSA/apfoapp?area=home&subject=prog&topic=nai' target='_blank'>NAIP Imagery, 2012</a>",
		'http://www.hcpmaps.com/geoserver/HCP/wms?',
		{layers: "HCP:NAIP2012", tiled: true},
		{singleTile: false, isBaseLayer: true, visibility: false, noLegend: false, numZoomLevels: 21}
	), */

	new OpenLayers.Layer.WMS(
		"NAIP Imagery",
		'http://www.hcpmaps.com/geoserver/HCP/wms?',
		{layers: "HCP:nat_raster", format: 'image/png'},
		{singleTile: false, opacity: 1.0, isBaseLayer: true, maxResolution: 19.109257068634033, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	
	new OpenLayers.Layer("None", {isBaseLayer: true, numZoomLevels: 21}),	
	
	
    /*
     * ==================================
     *       All Other Layers
     * ==================================
     */
		
	new OpenLayers.Layer.WMS(
		"Habitat Plan Permit Area",
		'http://localhost/geoserver/geoserver/wms?',
		{layers: "solcty:PlanArea", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 1, isBaseLayer: false, visibility: true, noLegend: false}
	),
	


	new OpenLayers.Layer.WMS(
		"City Limits",
		'http://localhost/geoserver/geoserver/wms?',
		{layers: "solcty:Zone1_Cities", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	



	new OpenLayers.Layer.WMS(
		"Habitat Plan Zones",
		'http://localhost/geoserver/geoserver/wms?',
		{layers: "solcty:zones", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	


	
/*	new OpenLayers.Layer.WMS(
		"Priority Reserve Areas",
		'http://www.hcpmaps.com/geoserver/public/wms?',
		{layers: "public:priority_reserve_areas", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
*/

		new OpenLayers.Layer.WMS(
		"Valley Floor Grassland/Vernal Pool Natural Community",
		'http://localhost/geoserver/geoserver/wms?',
		{layers: "solcty:vpg", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	
	new OpenLayers.Layer.WMS(
		"Potential Specialty Reserve Areas",
		'http://localhost/geoserver/geoserver/wms?',
		{layers: "solcty:potentialspecialtyreserves", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	new OpenLayers.Layer.WMS(
		"Critical Habitats",
		'http://localhost/geoserver/geoserver/wms?',
		{layers: "solcty:criticalhabitatpolys", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 1, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	
	new OpenLayers.Layer.WMS(
		"Wetlands",
		'http://localhost/geoserver/geoserver/wms?',
		{layers: "solcty:wetlands", transparent: true, format: 'image/png', tiled:true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
/*	new OpenLayers.Layer.WMS(
		"Known Occurrences of Covered Plants: 1/4 Mi Buffer",
		'http://www.hcpmaps.com/geoserver/public/wms?',
		{layers: "public:knownoccurrencescovered_plants", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.7, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),		
*/		
	
	
	new OpenLayers.Layer.WMS(
		"Contra Costa Goldfield Potential Reserve Areas",
		'http://localhost/geoserver/geoserver/wms?',
		{layers: "solcty:ccgpotentialhabitat", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.7, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Conservation Areas with High Preservation and Restoration Potential",
		'http://localhost/geoserver/geoserver/wms?',
		{layers: "solcty:highrestorationvp", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	
	
	new OpenLayers.Layer.WMS(
		"Conservation Areas with High Preservation Potential",
		'http://localhost/geoserver/geoserver/wms?',
		{layers: "solcty:highpreservationvalue", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 1, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Existing Reserves",
		'http://localhost/geoserver/geoserver/wms?',
		{layers: "solcty:existingreserves", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 1, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),		
	new OpenLayers.Layer.WMS(
		"Special Status Species Polygons",
		'http://localhost/geoserver/geoserver/wms?',
		{layers: "solcty:allspeciespolys", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Special Status Species Polygons - CNDDB",
		'http://localhost/geoserver/geoserver/wms?',
		{layers: "solcty:cnddbpolys", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Special Status Species Points",
		'http://localhost/geoserver/geoserver/wms?',
		{layers: "solcty:allspeciespts", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Appendix C Species Points",
		'http://localhost/geoserver/geoserver/wms?',
		{layers: "solcty:appendixcpts", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Vernal Pool Conservation Areas",
		'http://localhost/geoserver/geoserver/wms?',
		{layers: "solcty:vernalpools", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
		new OpenLayers.Layer.WMS(
		"Parcels",
		'http://localhost/geoserver/geoserver/wms/?',
		{layers: "solcty:parcels", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, visibility: false, noLegend: false, maxResolution: 18, numZoomLevels: 40,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	parcels = new OpenLayers.Layer.Vector("Parcel Search Results", {noLegend: true, featureInfoFormat: 'application/vnd.ogc.gml'}),
	markers = new OpenLayers.Layer.Vector("Search", {metadata: {legend: {hideInLegend: true}}})
    //Heron.App.map.addLayer(markers);
 ];
 
// Layers are organized in the application using the Layer Tree below:
var newLayertree = [
	{
		text:'HCP Data', expanded: true, children:
			[
				{nodeType: 'gx_layer', layer: 'Habitat Plan Permit Area'},
				{nodeType: 'gx_layer', layer: 'Habitat Plan Zones'},
				{nodeType: 'gx_layer', layer: 'Valley Floor Grassland/Vernal Pool Natural Community'},
				{nodeType: 'gx_layer', layer: 'Special Status Species Polygons'},
				{nodeType: 'gx_layer', layer: 'Special Status Species Polygons - CNDDB'},			
				{nodeType: 'gx_layer', layer: 'Special Status Species Points'},
				{nodeType: 'gx_layer', layer: 'Appendix C Species Points'},				
				{nodeType: 'gx_layer', layer: 'Critical Habitats'},	

				
				{text: 'Preserve and Reserve Areas', expanded: true, children:
					[
						{nodeType: 'gx_layer', layer: 'Existing Reserves'},
						{nodeType: 'gx_layer', layer: 'Conservation Areas with High Preservation Potential'},
						{nodeType: 'gx_layer', layer: 'Conservation Areas with High Preservation and Restoration Potential'},		
						{nodeType: 'gx_layer', layer: 'Contra Costa Goldfield Potential Reserve Areas'},	
						{nodeType: 'gx_layer', layer: 'Potential Specialty Reserve Areas'},	
						{nodeType: 'gx_layer', layer: 'Wetlands'},								
					]
				},
			
				
				//{nodeType: 'gx_layer', layer: 'Priority Reserve Areas'},					
			]
	},
	{
		text:'General Data', expanded: true, children:
			[
				{nodeType: 'gx_layer', layer: 'Parcels'},					
				{nodeType: 'gx_layer', layer: 'City Limits'},			
			]
	},
	{
		text:'Base Layers', nodeType: "gx_baselayercontainer", expanded: true
	}	
];




// Replace default layer browser DefaultConfig.js
// Pass our theme tree config as an option
Ext.namespace("Heron.options.layertree");
Heron.options.layertree.tree = newLayertree;
