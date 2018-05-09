
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
			{singleTile: false, buffer: 0, isBaseLayer: true, }
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




	
		
	
	new OpenLayers.Layer("None", {isBaseLayer: true, numZoomLevels: 30}),	
	
	
	
    /*
     * ==================================
     *       All Other Layers
     * ==================================
     */
		
	new OpenLayers.Layer.WMS(
		"Plan Area",
		'/geoserver/wms?',
		{layers: "solanohcp:planarea", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: true, noLegend: false, }
	),
		new OpenLayers.Layer.WMS(
		"County Divide",
		'/geoserver/wms?',
		{layers: "solanohcp:countydivide", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: true, }
	),
	new OpenLayers.Layer.WMS(
	"Natural Communities",
		'/geoserver/wms/?',
		{layers: "solanohcp:naturalcommunities", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853),visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
	"Steelhead Distribution: Central California Coast (CCC) and California Central Valley (CCV)",
		'/geoserver/wms/?',
		{layers: "solanohcp:ccc_ccv_distribution", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	


	new OpenLayers.Layer.WMS(
		"City Plan Participants",
		'/geoserver/wms?',
		{layers: "solanohcp:cities", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"All Watersheds",
		'/geoserver/wms?',
		{layers: "solanohcp:watersheds", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false,  maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Travis Reserve Boundary",
		'/geoserver/wms?',
		{layers: "solanohcp:travis_reserve", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false,  maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: true, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Potential Mitigation Banks",
		'/geoserver/wms?',
		{layers: "solanohcp:potmitlands", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13579771.6367, 4590800.29473, -13571179.3664, 4624964.5494), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	
	new OpenLayers.Layer.WMS(
		"Covered Species: Valley Floor Grassland and Vernal Pool",
		'/geoserver/wms?',
		{layers: "solanohcp:vfg_cs", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13611708.9594, 4585882.0959, -13539439.4477, 4656396.60513), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Key Corridors",
		'/geoserver/wms?',
		{layers: "solanohcp:corridors_linkages_lines", transparent: true, format: 'image/png', tiled: true},    
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601903.5012, 4606409.26512, -13567359.2427, 4645375.70888), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
		new OpenLayers.Layer.WMS(
		"Delta Region Marsh Conservation Area",
		'/geoserver/wms?',
		{layers: "solanohcp:delta_region_marshconsarea", transparent: true, format: 'image/png', tiled: true},    
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13564715.4743616, 4588106.09835662, -13547991.9018731, 4623061.62230363), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Protected Lands",
		'/geoserver/wms?',
		{layers: "solanohcp:protectedlands_final", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Travis Air Force Base - Not Part of the HCP",
		'/geoserver/wms?',
		{layers: "solanohcp:travis_afb_boundary", transparent: true, format: 'image/png', tiled: true, zoomOnRowDoubleClick: true, zoomOnFeatureSelect: true, zoomToDataExtent: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, visibility: true, maxExtent: new OpenLayers.Bounds(-13578264.4169, 4612969.67961, -13568953.7192, 4620019.49093), noLegend: false,  featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
		new OpenLayers.Layer.WMS(
		"Vegetation and Cover Types",
		'/geoserver/wms?',
		{layers: "solanohcp:vegetation", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
			new OpenLayers.Layer.WMS(
		"Special Management Species",
		'/geoserver/wms?',
		{layers: "solanohcp:sms", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	
	
			new OpenLayers.Layer.WMS(
		"San Pablo Bay and Napa Marsh Conservation Area",
		'/geoserver/wms?',
		{layers: "solanohcp:sanpablobayandnapamarshconsarea", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626310.1303544, 4587824.02695927, -13601372.9745264, 4601586.53802701), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	
				new OpenLayers.Layer.WMS(
		"Solano County General Plan Residential, Commercial, and Industrial Land Use Designations - Not part of the HCP",
		'/geoserver/wms?',
		{layers: "solanohcp:gp_urbanareas", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13608245.5126696, 4588117.4245198, -13537416.4143597, 4653489.07462447), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	
	

	
	
	new OpenLayers.Layer.WMS(
		"Streams",
		'/geoserver/wms?',
		{layers: "solanohcp:streamorder", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Suisun Marsh Conservation Areas",
		'/geoserver/wms?',
		{layers: "solanohcp:suisunmarsh_consarea", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13596937.1633, 4584961.6703, -13562058.8517, 4613994.73889), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	

	new OpenLayers.Layer.WMS(
		"Covered Activity Zones",
		'/geoserver/wms?',
		{layers: "solanohcp:zones", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Travis AFB Airport Land Use Planning Wildlife Hazard Areas",
		'/geoserver/wms?',
		{layers: "solanohcp:travis_afb_wha", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13587386.8602, 4603031.00508, -13558784.062, 4629898.95054), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	

	new OpenLayers.Layer.WMS(
		"Priority Drainages",
		'/geoserver/wms?',
		{layers: "solanohcp:priority_drainages", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13603751.2677, 4587966.83868, -13547005.2383, 4656020.25213),  visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	
	
	new OpenLayers.Layer.WMS(
		"Vernal Pool Conservation Areas with High Preservation Potential",
		'/geoserver/wms?',
		{layers: "solanohcp:vpconspreservation", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13572344.5601, 4613658.29052, -13555110.2047, 4623454.94596), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Potential Specialty Reserve Areas",
		'/geoserver/wms?',
		{layers: "solanohcp:vp_potentialspecialtyreserves", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	
	
	new OpenLayers.Layer.WMS(
		"Vernal Pool Conservation Areas with High Preservation and Restoration Potential",
		'/geoserver/wms?',
		{layers: "solanohcp:highrestorationvp", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13600036.6653, 4590153.819, -13544174.9844, 4650713.23927), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Priority Watersheds within Conservation Area RSM 1",
		'/geoserver/wms?',
		{layers: "solanohcp:priority_watersheds", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13604962.45, 4587456.44953, -13574157.9402, 4650085.93743), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
/*	new OpenLayers.Layer.WMS(
		"Priority Reserve Areas",
		'http://www.hcpmaps.com/geoserver/public/wms?',
		{layers: "public:priority_reserve_areas", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
*/
new OpenLayers.Layer.WMS(
		"California Tiger Salamander - Known Range",
		'/geoserver/wms?',
		{layers: "solanohcp:ctsrange_known_", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.9, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13580289.1439, 4601361.95733, -13555824.2803, 4625681.41177), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	new OpenLayers.Layer.WMS(
		"California Tiger Salamander - Potential Range",
		'/geoserver/wms?',
		{layers: "solanohcp:cts_potentialrange", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.9, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13584770.0026826, 4588085.0640865, -13542502.0246416, 4650329.50983062),  visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),

			new OpenLayers.Layer.WMS(
		"California Red-legged Frog Conservation Area",
		'/geoserver/wms?',
		{layers: "solanohcp:crlf_consarea", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.9, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13606850.8159, 4590876.93963, -13592211.4312, 4615171.28232), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	
			new OpenLayers.Layer.WMS(
		"Critical Habitat",
		'/geoserver/wms?',
		{layers: "solanohcp:criticalhabitat_all", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.9, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
				new OpenLayers.Layer.WMS(
		"Swainson\'s Hawk Conservation Areas",
		'/geoserver/wms?',
		{layers: "solanohcp:swhawk_conservationareas", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.9, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	
	
	
new OpenLayers.Layer.WMS(
		"Known Chinook Salmon or Steelhead Spawning Streams",
		'/geoserver/wms?',
		{layers: "solanohcp:known_steelhead_spstreams", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13603751.2677,4603303.22271, -13542921.109,4655862.73063), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),

	
	new OpenLayers.Layer.WMS(
		"Potential Specialty Reserve Areas",
		'/geoserver/wms?',
		{layers: "solanohcp:vp_potentialspecialtyreserves", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13583727.5494, 4617789.09958, -13545017.2465, 4650603.32947), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),

	
	new OpenLayers.Layer.WMS(
		"Wetlands",
		'/geoserver/wms?',
		{layers: "solanohcp:wetlandsvernalpools", transparent: true, format: 'image/png', tiled:true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13621707.1975, 4588572.2593, -13543865.2076, 4649602.51324),  visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
		new OpenLayers.Layer.WMS(
		"Vernal Pool Conservation Areas",
		'/geoserver/wms?',
		{layers: "solanohcp:vernalpoolconsareas", transparent: true, format: 'image/png', tiled:true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13609306.9654, 4587975.39339 ,-13543281.4817, 4651946.09393),  visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	
	new OpenLayers.Layer.WMS(
		"Inner Coast Range Natural Community",
		'/geoserver/wms?',
		{layers: "solanohcp:innercoastrange", transparent: true, format: 'image/png', tiled:true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13609306.9654, 4587975.39339 ,-13543281.4817, 4651946.09393),  visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	
	new OpenLayers.Layer.WMS(
		"Plan Participant Facilities",
		'/geoserver/wms?',
		{layers: "solanohcp:plan_participant_facilities", transparent: true, format: 'image/png', tiled:true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853),  visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	
/*	new OpenLayers.Layer.WMS(
		"Known Occurrences of Covered Plants: 1/4 Mi Buffer",
		'http://www.hcpmaps.com/geoserver/public/wms?',
		{layers: "public:knownoccurrencescovered_plants", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.7, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),		
*/		

new OpenLayers.Layer.WMS(
		"Irrigated Agricultural Habitat at High Risk",
		'/geoserver/wms?',
		{layers: "solanohcp:swhawk_habatrisk", transparent: true, format: 'image/png', tiled:true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	
	new OpenLayers.Layer.WMS(
		"Conservation Areas with High Preservation Potential",
		'/geoserver/wms?',
		{layers: "solanohcp:vpconspreservation", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	

	
		new OpenLayers.Layer.WMS(
		"Valley Floor Grassland and Vernal Pool Natural Community",
		'/geoserver/wms?',
		{layers: "solanohcp:vfg", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13611708.9594,4585882.0959, -13539439.4477,4656396.60513), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
		
		new OpenLayers.Layer.WMS(
		"Covered Species",
		'/geoserver/wms?',
		{layers: "solanohcp:covered_species", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13611708.9594,4585882.0959, -13539439.4477,4656396.60513), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
			new OpenLayers.Layer.WMS(
		"Foothill Yellow-legged Frog Suitable Habitat Range",
		'/geoserver/wms?',
		{layers: "solanohcp:fhylf", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13611708.9594,4585882.0959, -13539439.4477,4656396.60513), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	new OpenLayers.Layer.WMS(
		"Streams with Suitable Habitat for Foothill-Yellow Legged Frog",
		'/geoserver/wms?',
		{layers: "solanohcp:fhylf_streams", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13611708.9594,4585882.0959, -13539439.4477,4656396.60513), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	
	
			new OpenLayers.Layer.WMS(
		"Giant Garter Snake Conservation Area",
		'/geoserver/wms?',
		{layers: "solanohcp:ggs_consarea", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13563463.6304, 4603085.29652, -13535691.1272, 4653767.56414), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
			new OpenLayers.Layer.WMS(
		"California Red-legged Frog Conservation Area",
		'/geoserver/wms?',
		{layers: "solanohcp:crlf_crithab", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
				new OpenLayers.Layer.WMS(
		"Callippe Silverspot Butterfly Conservation Area",
		'/geoserver/wms?',
		{layers: "solanohcp:callipespotbuttfly_crithab", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13606850.8159, 4590876.93963, -13592211.4312, 4615256.95156), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
				
				new OpenLayers.Layer.WMS(
		"Contra Costa Goldfield Core Population Areas",
		'/geoserver/wms?',
		{layers: "solanohcp:ccf_corepop", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13594051.065, 4609258.34784, -13569435.4929, 4623166.66682), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
					new OpenLayers.Layer.WMS(
		"Contra Costa Goldfield Potential Habitat, Watershed, and Corridor Areas",
		'/geoserver/wms?',
		{layers: "solanohcp:ccg_potential", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13596370.0598, 4603653.98817, -13573012.5201, 4627133.32247), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	

	new OpenLayers.Layer.WMS(
		"Parcels",
		'/geoserver/wms/?',
		{layers: "solanohcp:parcels", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: true, noLegend: false, maxResolution: 18, numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	
	new OpenLayers.Layer.WMS(
		"Alkali Milk-Vetch",
		'/geoserver/wms/?',
		{layers: "solanohcp:alkali_milk_vetch", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
		new OpenLayers.Layer.WMS(
		"Boggs Lake Hedge-Hyssop",
		'/geoserver/wms/?',
		{layers: "solanohcp:boggs_lake_hedge_hyssop", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	
		
		new OpenLayers.Layer.WMS(
		"Burrowing Owl",
		'/geoserver/wms/?',
		{layers: "solanohcp:burrowing_owl", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
			
		new OpenLayers.Layer.WMS(
		"California Black Rail",
		'/geoserver/wms/?',
		{layers: "solanohcp:california_black_rail", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(
		"California Clapper Rail",
		'/geoserver/wms/?',
		{layers: "solanohcp:california_clapper_rail", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
		new OpenLayers.Layer.WMS(
		"California Tiger Salamander",
		'/geoserver/wms/?',
		{layers: "solanohcp:californiatigersalamander", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"California Red-Legged Frog",
		'/geoserver/wms/?',
		{layers: "solanohcp:california_red_legged_frog", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
			new OpenLayers.Layer.WMS(
		"Colusa Grass",
		'/geoserver/wms/?',
		{layers: "solanohcp:colusa_grass", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
				new OpenLayers.Layer.WMS(
		"Riparian, Stream, and Freshwater Marsh Natural Community",
		'/geoserver/wms/?',
		{layers: "solanohcp:riparian", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626748.3693,4583617.59906, -13535237.9591,4656252.18626), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	
	new OpenLayers.Layer.WMS(
		"Conservancy Fairy Shrimp",
		'/geoserver/wms/?',
		{layers: "solanohcp:conservancy_fairy_shrimp", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		
	new OpenLayers.Layer.WMS(
		"Contra Costa Goldfields",
		'/geoserver/wms/?',
		{layers: "solanohcp:contra_costa_goldfields", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Delta Green Ground Beetle",
		'/geoserver/wms/?',
		{layers: "solanohcp:delta_green_ground_beetle", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
			new OpenLayers.Layer.WMS(
		"Delta Smelt",
		'/geoserver/wms/?',
		{layers: "solanohcp:delta_smelt", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	new OpenLayers.Layer.WMS(
		"Ferris\'s Milk Vetch",
		'/geoserver/wms/?',
		{layers: "solanohcp:ferris_milk_vetch", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	new OpenLayers.Layer.WMS(
		"Giant Garter Snake",
		'/geoserver/wms/?',
		{layers: "solanohcp:giant_garter_snake", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Legenere",
		'/geoserver/wms/?',
		{layers: "solanohcp:legenere", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
			new OpenLayers.Layer.WMS(
		"Longfin Smelt",
		'/geoserver/wms/?',
		{layers: "solanohcp:longfin_smelt", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(
		"Mason\'s Lilaeopsis",
		'/geoserver/wms/?',
		{layers: "solanohcp:masons_lilaeopsis", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Sacramento Splittail",
		'/geoserver/wms/?',
		{layers: "solanohcp:sacramento_splittail", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
			new OpenLayers.Layer.WMS(
		"Salt Marsh Harvest Mouse",
		'/geoserver/wms/?',
		{layers: "solanohcp:salt_marsh_harvest_mouse", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
				new OpenLayers.Layer.WMS(
		"San Joaquin Valley Orcutt Grass",
		'/geoserver/wms/?',
		{layers: "solanohcp:san_joaquin_valley_orcutt_grass", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(
		"Soft Bird\'s Beak",
		'/geoserver/wms/?',
		{layers: "solanohcp:soft_salty_birds_beak", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Solano Grass",
		'/geoserver/wms/?',
		{layers: "solanohcp:solano_grass", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Suisun Thistle",
		'/geoserver/wms/?',
		{layers: "solanohcp:suisun_thistle", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
			new OpenLayers.Layer.WMS(
		"Swainson\'s Hawk",
		'/geoserver/wms/?',
		{layers: "solanohcp:swainsons_hawk", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(
		"Tricolored Blackbird",
		'/geoserver/wms/?',
		{layers: "solanohcp:tricolored_blackbird", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(
		"Valley Elderberry Longhorn Beetle",
		'/geoserver/wms/?',
		{layers: "solanohcp:valley_elderberry_longhorn_beetle", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Vernal Pool Fairy Shrimp",
		'/geoserver/wms/?',
		{layers: "solanohcp:vernal_pool_fairy_shrimp", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(
		"Vernal Pool Smallscale",
		'/geoserver/wms/?',
		{layers: "solanohcp:vernal_pool_smallscale", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	new OpenLayers.Layer.WMS(
		"Vernal Pool Tadpool Shrimp",
		'/geoserver/wms/?',
		{layers: "solanohcp:vernal_pool_tadpole_shrimp", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(
	"Baker\’s Navarretia",
		'/geoserver/wms/?',
		{layers: "solanohcp:bakersnavarretia", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
	"Bearded Popcorn-Flower",
		'/geoserver/wms/?',
		{layers: "solanohcp:beardedpopcornflower", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
	"Brittlescale",
		'/geoserver/wms/?',
		{layers: "solanohcp:brittlescale", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	
		new OpenLayers.Layer.WMS(	
		"Carquinez Goldenbush",
		'/geoserver/wms/?',
		{layers: "solanohcp:carquinezgoldenbush", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(	
		
		"Delta Mudwort",
		'/geoserver/wms/?',
		{layers: "solanohcp:deltamudwort", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(		
		"Delta Tule Pea",
		'/geoserver/wms/?',
		{layers: "solanohcp:deltatulepea", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
			"Dwarf Downingia",
		'/geoserver/wms/?',
		{layers: "solanohcp:dwarfdowningia", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
				"Ferris\'s Goldfields",
		'/geoserver/wms/?',
		{layers: "solanohcp:ferrisgoldfields", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
	"Foothill Yellow-legged Frog",
		'/geoserver/wms/?',
		{layers: "solanohcp:foothillyellowleggedfrog", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		
		new OpenLayers.Layer.WMS(	
	"Fragrant Fritillary",
		'/geoserver/wms/?',
		{layers: "solanohcp:fragrantfritillary", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Grasshopper Sparrow",
		'/geoserver/wms/?',
		{layers: "solanohcp:grasshoppersparrow", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'} 
	),
			new OpenLayers.Layer.WMS(
			"Heartscale",
		'/geoserver/wms/?',
		{layers: "solanohcp:heartscale", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
				"Heckard\'s Pepper-Grass",
		'/geoserver/wms/?',
		{layers: "solanohcp:heckardspeppergrass", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
	"Hispid Bird\’s-Beak",
		'/geoserver/wms/?',
		{layers: "solanohcp:hispidsbirdsbeak", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Hogwallow Starfish",
		'/geoserver/wms/?',
		{layers: "solanohcp:hogwallowstarfish", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
"Loggerhead Shrike",
		'/geoserver/wms/?',
		{layers: "solanohcp:loggerheadshrike", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
"Midvalley Fairy Shrimp",
		'/geoserver/wms/?',
		{layers: "solanohcp:midvalleyfairyshrimp", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
		new OpenLayers.Layer.WMS(
	"Northern Harrier",
		'/geoserver/wms/?',
		{layers: "solanohcp:northernharrier", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
			new OpenLayers.Layer.WMS(
	"Pappose Tarplant",
		'/geoserver/wms/?',
		{layers: "solanohcp:papposetarplant", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
			new OpenLayers.Layer.WMS(	
	"Recurved Larkspur",
		'/geoserver/wms/?',
		{layers: "solanohcp:recurvedlarkspur", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Ricksecker\'s Water Scavenger Beetle",
		'/geoserver/wms/?',
		{layers: "solanohcp:rickseckerswaterscavengerbeetle", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Saline Clover",
		'/geoserver/wms/?',
		{layers: "solanohcp:salineclover", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(
		"Irrigated Agriculture",
		'/geoserver/wms/?',
		{layers: "solanohcp:agriculture", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13605613.531,4588905.9717, -13535347.5188,4656380.31719), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Special Management Species: Valley Floor Grassland and Vernal Pool",
		'/geoserver/wms/?',
		{layers: "solanohcp:vfg_sms", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	
		new OpenLayers.Layer.WMS(
		"Salt Marsh Common Yellowthroat",
		'/geoserver/wms/?',
		{layers: "solanohcp:saltmarshcommonyellowthroat", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(	
		
	"San Joaqin Spearscale",
		'/geoserver/wms/?',
		{layers: "solanohcp:sanjoaquinspearscale", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
		new OpenLayers.Layer.WMS(
"San Pablo Song Sparrow",
		'/geoserver/wms/?',
		{layers: "solanohcp:sanpablosongsparrow", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,   visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
		new OpenLayers.Layer.WMS(
	"Short-Eared Owl",
		'/geoserver/wms/?',
		{layers: "solanohcp:shortearedowl", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),		

	new OpenLayers.Layer.WMS(	
		"Song Sparrow - \"Modesto\" Population",
		'/geoserver/wms/?',
		{layers: "solanohcp:modestosongsparrow", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),		
		new OpenLayers.Layer.WMS(
			"Suisun Marsh Aster",
		'/geoserver/wms/?',
		{layers: "solanohcp:suisuinmarshaster", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),		
		new OpenLayers.Layer.WMS(
				"Suisun Shrew",
		'/geoserver/wms/?',
		{layers: "solanohcp:suisunshrew", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
				"Coastal Marsh Natural Community",
		'/geoserver/wms/?',
		{layers: "solanohcp:coastal_marsh", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626578.5093,4584926.09431, -13547685.3045,4644372.83668), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
	new OpenLayers.Layer.WMS(
		"Covered Species: Riparian, Stream, and Freshwater Marsh Natural Community",
		'/geoserver/wms/?',
		{layers: "solanohcp:rip_cs", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
		"Special Management Species: Riparian, Stream, and Freshwater Marsh Natural Community",
		'/geoserver/wms/?',
		{layers: "solanohcp:rip_sms", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
		"Covered Species: Irrigated Agriculture",
		'/geoserver/wms/?',
		{layers: "solanohcp:iag_cs", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
		"Special Management Species: Irrigated Agriculture",
		'/geoserver/wms/?',
		{layers: "solanohcp:iag_sms", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
	
	
		new OpenLayers.Layer.WMS(
	"Suisun Song Sparrow",
		'/geoserver/wms/?',
		{layers: "solanohcp:suisunsongsparrow", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
	
		new OpenLayers.Layer.WMS(
	"Covered Species: Inner Coast Range",
		'/geoserver/wms/?',
		{layers: "solanohcp:icr_cs", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13611715.7538,4587233.48173, -13564114.1697,4652947.93949), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
			new OpenLayers.Layer.WMS(
	"Special Management Species: Inner Coast Range",
		'/geoserver/wms/?',
		{layers: "solanohcp:icr_sms", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
	"Covered Species: Coastal Marsh",
		'/geoserver/wms/?',
		{layers: "solanohcp:cm_cs", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
			new OpenLayers.Layer.WMS(
	"Special Management Species: Coastal Marsh",
		'/geoserver/wms/?',
		{layers: "solanohcp:cm_sms", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(	
	"Valley Needlegrass Grassland",
		'/geoserver/wms/?',
		{layers: "solanohcp:valleyneedlegrassgrassland", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(	
	"Western Pond Turtle",
		'/geoserver/wms/?',
		{layers: "solanohcp:westernpondturtle", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),		
		new OpenLayers.Layer.WMS(
	"Woolly Rose-Mallow",
		'/geoserver/wms/?',
		{layers: "solanohcp:woollyrosemallow", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
			new OpenLayers.Layer.WMS(
	"Existing and Potential Reserves",
		'/geoserver/wms/?',
		{layers: "solanohcp:vernal_pool_potential_preservereserves", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
	
		
	new OpenLayers.Layer.WMS(
	"Swainson\'s Hawk Conservation Area: Valley Floor Grassland",
		'/geoserver/wms/?',
		{layers: "solanohcp:swhawkpot_vpg", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13609654.5019,4585882.0959, -13539449.6393,4656396.60513), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	

	new OpenLayers.Layer.WMS(
	"Swainson\'s Hawk Conservation Area: Inner Coast Range",
		'/geoserver/wms/?',
		{layers: "solanohcp:swhawkpot_icr", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13611715.7538,4587233.48173, -13564114.1697,4652947.93949), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
	"Swainson\'s Hawk Conservation Area: Irrigated Agriculture",
		'/geoserver/wms/?',
		{layers: "solanohcp:swhawkpot_iag", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13605613.531,4588905.9717, -13535347.5188,4656380.31719), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
	"Swainson\'s Hawk Potential Reserve Area: Valley Floor Grassland",
		'/geoserver/wms/?',
		{layers: "solanohcp:potswhawk_vpg", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13588529.0058736, 4605536.64125984, -13549355.0288774, 4649629.56635739), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
		new OpenLayers.Layer.WMS(
	"Swainson\'s Hawk Potential Reserve Area: Irrigated Agriculture",
		'/geoserver/wms/?',
		{layers: "solanohcp:potswhawk_iag", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13605613.531,4588905.9717, -13535347.5188,4656380.31719), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	

		new OpenLayers.Layer.WMS(
	"Swainson\'s Hawk Potential Reserve Area: Inner Coast Range",
		'/geoserver/wms/?',
		{layers: "solanohcp:potswhawk_icr", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13612152.2941,4585923.07707, -13564111.6218,4653142.2455), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
			new OpenLayers.Layer.WMS(
	"Burrowing Owl Conservation Area: Valley Floor Grassland",
		'/geoserver/wms/?',
		{layers: "solanohcp:bocons_vpg", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13609654.5018911, 4585882.09590051, -13539449.639312, 4656396.605131), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
				new OpenLayers.Layer.WMS(
	"Burrowing Owl Conservation Areas",
		'/geoserver/wms/?',
		{layers: "solanohcp:bo_consareas", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
		
	
	
			new OpenLayers.Layer.WMS(
	"Burrowing Owl Conservation Area: Irrigated Agriculture",
		'/geoserver/wms/?',
		{layers: "solanohcp:bocons_ag", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13605613.5309957, 4588905.97169672, -13535347.5187941, 4656380.31718604), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
				new OpenLayers.Layer.WMS(
	"Burrowing Owl Conservation Area: Inner Coast Range",
		'/geoserver/wms/?',
		{layers: "solanohcp:bocons_icr", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13612152.2941153, 4585923.07707394, -13564111.6218381, 4653142.24550287), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
		new OpenLayers.Layer.WMS(
	"Yellow-Breasted Chat",
		'/geoserver/wms/?',
		{layers: "solanohcp:yellowbreastedchat", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
			new OpenLayers.Layer.WMS(
	"Streams with Suitable Habitat for Foothill-Yellow Legged Frog",
		'/geoserver/wms/?',
		{layers: "solanohcp:fhylf_streams", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13612152.2941153, 4585923.07707394, -13564111.6218381, 4653142.24550287), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
	
	new OpenLayers.Layer.WMS(
	"Planned Development within Zone 1",
		'/geoserver/wms/?',
		{layers: "solanohcp:zone1_planneddevelopment", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
	new OpenLayers.Layer.WMS(
	"Yellow-Headed Blackbird Breeding Range",
		'/geoserver/wms/?',
		{layers: "solanohcp:yellow_headed_blackbird", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
		new OpenLayers.Layer.WMS(
	"Foothill Yellow-Legged Frog Suitable Habitat Range",
		'/geoserver/wms/?',
		{layers: "solanohcp:fhylf", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13612152.2941153, 4585923.07707394, -13564111.6218381, 4653142.24550287), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
		new OpenLayers.Layer.WMS(
	"Irrigation and Reclamation Districts",
		'/geoserver/wms/?',
		{layers: "solanohcp:all_irr_dist_boundaries", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
	"Callippe Silverspot Butterfly",
		'/geoserver/wms/?',
		{layers: "solanohcp:callipesilverspotbutterfly", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
			new OpenLayers.Layer.WMS(
	"Facilities - Point Features",
		'/geoserver/wms/?',
		{layers: "solanohcp:facilities_points", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
			new OpenLayers.Layer.WMS(
	"Species - Generalized in Plan Area",
		'/geoserver/wms/?',
		{layers: "solanohcp:grid_5000m_allspecies", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
				new OpenLayers.Layer.WMS(
	"Facilities - Line Features",
		'/geoserver/wms/?',
		{layers: "solanohcp:facilities_lines", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
					new OpenLayers.Layer.WMS(
	"Facilities - Polygon Features",
		'/geoserver/wms/?',
		{layers: "solanohcp:facilities_polys", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
		"Solano Irrigation District Facilities",
	'/geoserver/wms/?',
		{layers: "solanohcp:SID_Facilities", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	//    new OpenLayers.Layer.WMS(
  //          "USA States (Boundless)",
  //          'http://demo.boundlessgeo.com/geoserver/ows?',
 //           {layers: "states", transparent: true, format: 'image/png'},
  //          {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
     //           wfs: {
    //                protocol: 'fromWMSLayer',
    ////                featurePrefix: 'topp',
       //             featureNS: 'http://www.openplans.org/topp',
       //             downloadFormats: Heron.options.wfs.downloadFormats
      //          }
     //       }
      //      }
	parcels = new OpenLayers.Layer.Vector("Parcel Search Results", {noLegend: true, featureInfoFormat: 'application/vnd.ogc.gml'}),
	markers = new OpenLayers.Layer.Vector("Search", {metadata: {legend: {hideInLegend: true}}})
    //Heron.App.map.addLayer(markers);
 ];
 
// Layers are organized in the application using the Layer Tree below:
var newLayertree = [

	{
		text:'Habitat Conservation Plan General Data Layers', nodeType: 'hr_cascader',  expanded: true, children:
			[	
				{nodeType: 'gx_layer', layer: 'Parcels'},	
				{nodeType: 'gx_layer', layer: 'Plan Area'},	
				{nodeType: 'gx_layer', layer: 'Covered Activity Zones'},	
				{nodeType: 'gx_layer', layer: 'City Plan Participants'},
				{nodeType: 'gx_layer', layer: 'Natural Communities'},
				{nodeType: 'gx_layer', layer: 'Vegetation and Cover Types'},				
				{nodeType: 'gx_layer', layer: 'Key Corridors'},		
				{nodeType: 'gx_layer', layer: 'Species - Generalized in Plan Area'},
				
				{nodeType: 'gx_layer', layer: 'Suisun Marsh Conservation Areas'},									
				{nodeType: 'gx_layer', layer: 'Travis Air Force Base - Not Part of the HCP'},	
				{nodeType: 'gx_layer', layer: 'Travis Reserve Boundary'},	
				{nodeType: 'gx_layer', layer: 'Travis AFB Airport Land Use Planning Wildlife Hazard Areas'},
					
							
				
						
						
				

			
			]
	},
	{
		text:'Covered Species', nodeType: 'hr_cascader', expanded: false, children:
[
				{nodeType: 'gx_layer', layer: 'Alkali Milk-Vetch'},
{nodeType: 'gx_layer', layer: 'Boggs Lake Hedge-Hyssop'},
{nodeType: 'gx_layer', layer: 'Burrowing Owl'},
{nodeType: 'gx_layer', layer: 'California Black Rail'},
{nodeType: 'gx_layer', layer: 'California Clapper Rail'},
{nodeType: 'gx_layer', layer: 'California Tiger Salamander'},
{nodeType: 'gx_layer', layer: 'California Red-Legged Frog'},
{nodeType: 'gx_layer', layer: 'Callippe Silverspot Butterfly'},
{nodeType: 'gx_layer', layer: 'Colusa Grass'},
{nodeType: 'gx_layer', layer: 'Conservancy Fairy Shrimp'},
{nodeType: 'gx_layer', layer: 'Contra Costa Goldfields'},
{nodeType: 'gx_layer', layer: 'Delta Green Ground Beetle'},
{nodeType: 'gx_layer', layer: 'Delta Smelt'},
{nodeType: 'gx_layer', layer: 'Ferris\'s Milk Vetch'},
{nodeType: 'gx_layer', layer: 'Foothill Yellow-legged Frog'},
{nodeType: 'gx_layer', layer: 'Giant Garter Snake'},
{nodeType: 'gx_layer', layer: 'Legenere'},
{nodeType: 'gx_layer', layer: 'Longfin Smelt'},
{nodeType: 'gx_layer', layer: 'Mason\'s Lilaeopsis'},
{nodeType: 'gx_layer', layer: 'Sacramento Splittail'},
{nodeType: 'gx_layer', layer: 'Salt Marsh Harvest Mouse'},
{nodeType: 'gx_layer', layer: 'San Joaquin Valley Orcutt Grass'},
{nodeType: 'gx_layer', layer: 'Soft Bird\'s Beak'},
{nodeType: 'gx_layer', layer: 'Solano Grass'},
{nodeType: 'gx_layer', layer: 'Suisun Thistle'},
{nodeType: 'gx_layer', layer: 'Swainson\'s Hawk'},
{nodeType: 'gx_layer', layer: 'Tricolored Blackbird'},
{nodeType: 'gx_layer', layer: 'Valley Elderberry Longhorn Beetle'},
{nodeType: 'gx_layer', layer: 'Vernal Pool Fairy Shrimp'},
{nodeType: 'gx_layer', layer: 'Vernal Pool Smallscale'},
{nodeType: 'gx_layer', layer: 'Vernal Pool Tadpool Shrimp'},

		]
	},
	{
		text:'Special Management Species', nodeType: 'hr_cascader',  expanded: false, children:
			[
{nodeType: 'gx_layer', layer: 'Baker\’s Navarretia'},
{nodeType: 'gx_layer', layer: 'Bearded Popcorn-Flower'},
{nodeType: 'gx_layer', layer: 'Brittlescale'},
{nodeType: 'gx_layer', layer: 'Carquinez Goldenbush'},
{nodeType: 'gx_layer', layer: 'Delta Mudwort'},
{nodeType: 'gx_layer', layer: 'Delta Tule Pea'},
{nodeType: 'gx_layer', layer: 'Dwarf Downingia'},
{nodeType: 'gx_layer', layer: 'Ferris\'s Goldfields'},
{nodeType: 'gx_layer', layer: 'Fragrant Fritillary'},
{nodeType: 'gx_layer', layer: 'Grasshopper Sparrow'},
{nodeType: 'gx_layer', layer: 'Heartscale'},
{nodeType: 'gx_layer', layer: 'Heckard\'s Pepper-Grass'},
{nodeType: 'gx_layer', layer: 'Hispid Bird\’s-Beak'},
{nodeType: 'gx_layer', layer: 'Hogwallow Starfish'},
{nodeType: 'gx_layer', layer: 'Loggerhead Shrike'},
{nodeType: 'gx_layer', layer: 'Midvalley Fairy Shrimp'},
{nodeType: 'gx_layer', layer: 'Northern Harrier'},
{nodeType: 'gx_layer', layer: 'Pappose Tarplant'},
{nodeType: 'gx_layer', layer: 'Recurved Larkspur'},
{nodeType: 'gx_layer', layer: 'Ricksecker\'s Water Scavenger Beetle'},
{nodeType: 'gx_layer', layer: 'Saline Clover'},
{nodeType: 'gx_layer', layer: 'Salt Marsh Common Yellowthroat'},
{nodeType: 'gx_layer', layer: 'San Joaqin Spearscale'},
{nodeType: 'gx_layer', layer: 'San Pablo Song Sparrow'},
{nodeType: 'gx_layer', layer: 'Short-Eared Owl'},
{nodeType: 'gx_layer', layer: 'Song Sparrow - \"Modesto\" Population'},
{nodeType: 'gx_layer', layer: 'Suisun Marsh Aster'},
{nodeType: 'gx_layer', layer: 'Suisun Shrew'},
{nodeType: 'gx_layer', layer: 'Suisun Song Sparrow'},
{nodeType: 'gx_layer', layer: 'Valley Needlegrass Grassland'},
{nodeType: 'gx_layer', layer: 'Western Pond Turtle'},
{nodeType: 'gx_layer', layer: 'Woolly Rose-Mallow'},
{nodeType: 'gx_layer', layer: 'Yellow-Breasted Chat'},
{nodeType: 'gx_layer', layer: 'Yellow-Headed Blackbird Breeding Range'},



		
			]
	},
	{
		
	text:'Valley Floor Grassland and Vernal Pool Natural Community Layers', nodeType: 'hr_cascader',  expanded: false, children:
[				{nodeType: 'gx_layer', layer: 'Valley Floor Grassland and Vernal Pool Natural Community'},		
				{nodeType: 'gx_layer', layer: 'Vernal Pool Conservation Areas'},	
				{nodeType: 'gx_layer', layer: 'Burrowing Owl Conservation Area: Valley Floor Grassland'},
				{nodeType: 'gx_layer', layer: 'California Tiger Salamander - Known Range'},
				{nodeType: 'gx_layer', layer: 'California Tiger Salamander - Potential Range'},
				{nodeType: 'gx_layer', layer: 'Contra Costa Goldfield Core Population Areas'},
				{nodeType: 'gx_layer', layer: 'Swainson\'s Hawk Conservation Area: Valley Floor Grassland'},
				{nodeType: 'gx_layer', layer: 'Swainson\'s Hawk Potential Reserve Area: Valley Floor Grassland'},
				{nodeType: 'gx_layer', layer: 'Giant Garter Snake Conservation Area'},	
			
				{nodeType: 'gx_layer', layer: 'Existing and Potential Reserves'},		
		//		{nodeType: 'gx_layer', layer: 'Covered Species: Valley Floor Grassland and Vernal Pool'},
		//		{nodeType: 'gx_layer', layer: 'Special Management Species: Valley Floor Grassland and Vernal Pool'},
			]
			
	},
	
	{
		
	text:'Inner Coast Range Natural Community Layers', nodeType: 'hr_cascader',  expanded: false, children:
[							
				{nodeType: 'gx_layer', layer: 'Inner Coast Range Natural Community'},
				{nodeType: 'gx_layer', layer: 'Burrowing Owl Conservation Area: Inner Coast Range'},
				{nodeType: 'gx_layer', layer: 'California Red-legged Frog Conservation Area'},
				{nodeType: 'gx_layer', layer: 'Callippe Silverspot Butterfly Conservation Area'},
				{nodeType: 'gx_layer', layer: 'Streams with Suitable Habitat for Foothill-Yellow Legged Frog'},
				{nodeType: 'gx_layer', layer: 'Swainson\'s Hawk Conservation Area: Inner Coast Range'},
				{nodeType: 'gx_layer', layer: 'Swainson\'s Hawk Potential Reserve Area: Inner Coast Range'},				
			//	{nodeType: 'gx_layer', layer: 'Covered Species: Inner Coast Range'},
			//	{nodeType: 'gx_layer', layer: 'Special Management Species: Inner Coast Range'},
			]
	},
	
		{
		
	text:'Riparian, Stream, and Freshwater Marsh Natural Community Layers', nodeType: 'hr_cascader',  expanded: false, children:
[							
				{nodeType: 'gx_layer', layer: 'Riparian, Stream, and Freshwater Marsh Natural Community'},
				{nodeType: 'gx_layer', layer: 'Streams'},
				{nodeType: 'gx_layer', layer: 'Known Chinook Salmon or Steelhead Spawning Streams'},	
				{nodeType: 'gx_layer', layer: 'Steelhead Distribution: Central California Coast (CCC) and California Central Valley (CCV)'},
				{nodeType: 'gx_layer', layer: 'Priority Watersheds within Conservation Area RSM 1'},	
						{nodeType: 'gx_layer', layer: 'Streams with Suitable Habitat for Foothill-Yellow Legged Frog'},		
				{nodeType: 'gx_layer', layer: 'Giant Garter Snake Conservation Area'},	
			//	{nodeType: 'gx_layer', layer: 'Covered Species: Riparian, Stream, and Freshwater Marsh Natural Community'},
			//	{nodeType: 'gx_layer', layer: 'Special Management Species: Riparian, Stream, and Freshwater Marsh Natural Community'},
				
			]
	},
	
			{
		
	text:'Coastal Marsh Natural Community Layers', nodeType: 'hr_cascader',  expanded: false, children:
[							
				{nodeType: 'gx_layer', layer: 'Coastal Marsh Natural Community'},
				{nodeType: 'gx_layer', layer: 'Suisun Marsh Conservation Areas'},
				{nodeType: 'gx_layer', layer: 'Delta Region Marsh Conservation Area'},			
				{nodeType: 'gx_layer', layer: 'San Pablo Bay and Napa Marsh Conservation Area'},					
		//		{nodeType: 'gx_layer', layer: 'Covered Species: Coastal Marsh'},
		//		{nodeType: 'gx_layer', layer: 'Special Management Species: Coastal Marsh'},
			]
	},
				{
		
	text:'Irrigated Agriculture Layers', nodeType: 'hr_cascader',  expanded: false, children:
[							
				{nodeType: 'gx_layer', layer: 'Irrigated Agriculture'},
				{nodeType: 'gx_layer', layer: 'Burrowing Owl Conservation Area: Irrigated Agriculture'},
				{nodeType: 'gx_layer', layer: 'Swainson\'s Hawk Conservation Area: Irrigated Agriculture'},
				{nodeType: 'gx_layer', layer: 'Swainson\'s Hawk Potential Reserve Area: Irrigated Agriculture'},
			
				{nodeType: 'gx_layer', layer: 'Giant Garter Snake Conservation Area'},					
		//		{nodeType: 'gx_layer', layer: 'Covered Species: Irrigated Agriculture'},
		//		{nodeType: 'gx_layer', layer: 'Special Management Species: Irrigated Agriculture'},
				
			]
	},
		{
		
	text:'HCP Conservation Areas', nodeType: 'hr_cascader',  expanded: false, children:
[				
				{nodeType: 'gx_layer', layer: 'Burrowing Owl Conservation Areas'},								
				{nodeType: 'gx_layer', layer: 'California Red-legged Frog Conservation Area'},
				{nodeType: 'gx_layer', layer: 'Callippe Silverspot Butterfly Conservation Area'},
				{nodeType: 'gx_layer', layer: 'Delta Region Marsh Conservation Area'},	
				
				
				{nodeType: 'gx_layer', layer: 'Foothill Yellow-Legged Frog Suitable Habitat Range'},	
				{nodeType: 'gx_layer', layer: 'Streams with Suitable Habitat for Foothill-Yellow Legged Frog'},		
	{nodeType: 'gx_layer', layer: 'Giant Garter Snake Conservation Area'},				
				{nodeType: 'gx_layer', layer: 'San Pablo Bay and Napa Marsh Conservation Area'},	
				{nodeType: 'gx_layer', layer: 'Suisun Marsh Conservation Areas'},
				{nodeType: 'gx_layer', layer: 'Swainson\'s Hawk Conservation Areas'},					
				{nodeType: 'gx_layer', layer: 'Vernal Pool Conservation Areas'},
				{nodeType: 'gx_layer', layer: 'Potential Specialty Reserve Areas'},	

			]
	},

		
	
	{
		
	text:'Critical Habitat', nodeType: 'hr_cascader',  expanded: false, children:
[
				{nodeType: 'gx_layer', layer: 'Critical Habitat'},					
		
					

			]
	},
		{
	text:'Wetlands, Streams, and Watersheds', nodeType: 'hr_cascader',  expanded: false, children:
		[
				{nodeType: 'gx_layer', layer: 'Wetlands'},	
				{nodeType: 'gx_layer', layer: 'Streams'},	
				{nodeType: 'gx_layer', layer: 'Known Chinook Salmon or Steelhead Spawning Streams'},
		{nodeType: 'gx_layer', layer: 'Streams with Suitable Habitat for Foothill-Yellow Legged Frog'},						
				{nodeType: 'gx_layer', layer: 'Priority Drainages'},	
				{nodeType: 'gx_layer', layer: 'Priority Watersheds within Conservation Area RSM 1'},							
				{nodeType: 'gx_layer', layer: 'All Watersheds'},
		
	]
	},
	
	
		
	{
		text:'Operation and Maintenance; Planned Development', nodeType: 'hr_cascader',  expanded: false, children:
			[
			{nodeType: 'gx_layer', layer: 'Planned Development within Zone 1'},
{nodeType: 'gx_layer', layer: 'Plan Participant Facilities'},
{nodeType: 'gx_layer', layer: 'Irrigation and Reclamation Districts'},
{nodeType: 'gx_layer', layer: 'Facilities - Point Features'},
{nodeType: 'gx_layer', layer: 'Facilities - Polygon Features'}, 

	
		
			]
	},
	
{
		text:'Facilities by Plan Participant (Draft)', nodeType: 'hr_cascader',  expanded: false, children:
			[	{nodeType: 'gx_layer', layer: 'Solano Irrigation District Facilities'},	
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
