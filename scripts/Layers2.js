
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
	

new OpenLayers.Layer.OSM(	
		"Open Street Map",
		{isBaseLayer: true, singleTile: false, visibility: false,  buffer: 0,  numZoomLevels: 30,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}
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
		{layers: "solcty:planarea", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: true, noLegend: false, }
	),
		new OpenLayers.Layer.WMS(
		"County Divide",
		'/geoserver/wms?',
		{layers: "solcty:countydivide", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: true, noLegend: true, }
	),
	new OpenLayers.Layer.WMS(
	"Natural Communities",
		'/geoserver/wms/?',
		{layers: "solcty:natcom_nodev", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853),visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
	"Steelhead Distribution: Central California Coast (CCC) and California Central Valley (CCV)",
		'/geoserver/wms/?',
		{layers: "solcty:ccc_ccv_distribution", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	


	new OpenLayers.Layer.WMS(
		"City Urban Growth Boundaries",
		'/geoserver/wms?',
		{layers: "solcty:citylimits", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"All Watersheds",
		'/geoserver/wms?',
		{layers: "solcty:watersheds", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false,  maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Potential Mitigation Banks",
		'/geoserver/wms?',
		{layers: "solcty:potmitlands", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13579771.6367, 4590800.29473, -13571179.3664, 4624964.5494), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	
		new OpenLayers.Layer.WMS(
		"Covered Species: Valley Floor Grassland and Vernal Pool",
		'/geoserver/wms?',
		{layers: "solcty:vfg_cs", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13611708.9594, 4585882.0959, -13539439.4477, 4656396.60513), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Key Corridors",
		'/geoserver/wms?',
		{layers: "solcty:corridors_linkages_lines", transparent: true, format: 'image/png', tiled: true},    
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601903.5012, 4606409.26512, -13567359.2427, 4645375.70888), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
		new OpenLayers.Layer.WMS(
		"Delta Region Marsh Conservation Area",
		'/geoserver/wms?',
		{layers: "solcty:delta_region_marshconsarea", transparent: true, format: 'image/png', tiled: true},    
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13564715.4743616, 4588106.09835662, -13547991.9018731, 4623061.62230363), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Protected Lands",
		'/geoserver/wms?',
		{layers: "solcty:protectedlands_final", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Travis Air Force Base - Not Part of the HCP",
		'/geoserver/wms?',
		{layers: "solcty:travisafb", transparent: true, format: 'image/png', tiled: true, zoomOnRowDoubleClick: true, zoomOnFeatureSelect: true, zoomToDataExtent: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, visibility: false, maxExtent: new OpenLayers.Bounds(-13578264.4169, 4612969.67961, -13568953.7192, 4620019.49093), noLegend: false,  featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
		new OpenLayers.Layer.WMS(
		"Vegetation and Cover Types",
		'/geoserver/wms?',
		{layers: "solcty:vegetationcover", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
			new OpenLayers.Layer.WMS(
		"San Pablo Bay and Napa Marsh Conservation Area",
		'/geoserver/wms?',
		{layers: "solcty:sanpablobayandnapamarshconsarea", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626310.1303544, 4587824.02695927, -13601372.9745264, 4601586.53802701), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	
				new OpenLayers.Layer.WMS(
		"Solano County General Plan Residential, Commercial, and Industrial Land Use Designations - Not part of the HCP",
		'/geoserver/wms?',
		{layers: "solcty:gp_urbanareas", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13608245.5126696, 4588117.4245198, -13537416.4143597, 4653489.07462447), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	
	

	
	
	new OpenLayers.Layer.WMS(
		"Streams",
		'/geoserver/wms?',
		{layers: "solcty:streamorder", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Suisun Marsh Conservation Areas",
		'/geoserver/wms?',
		{layers: "solcty:suisunmarsh_consarea", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13596937.1633, 4584961.6703, -13562058.8517, 4613994.73889), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	

	new OpenLayers.Layer.WMS(
		"Covered Activity Zones",
		'/geoserver/wms?',
		{layers: "solcty:zones", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Travis AFB Airport Land Use Planning Wildlife Hazard Areas",
		'/geoserver/wms?',
		{layers: "solcty:travis_afb_wha", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13587386.8602, 4603031.00508, -13558784.062, 4629898.95054), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	

	new OpenLayers.Layer.WMS(
		"Priority Drainages",
		'/geoserver/wms?',
		{layers: "solcty:priority_drainages", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13603751.2677, 4587966.83868, -13547005.2383, 4656020.25213),  visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	
	
	new OpenLayers.Layer.WMS(
		"Vernal Pool Conservation Areas with High Preservation Potential",
		'/geoserver/wms?',
		{layers: "solcty:vpconspreservation", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13572344.5601, 4613658.29052, -13555110.2047, 4623454.94596), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Potential Specialty Reserve Areas",
		'/geoserver/wms?',
		{layers: "solcty:vp_potentialspecialtyreserves", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	
	
	new OpenLayers.Layer.WMS(
		"Vernal Pool Conservation Areas with High Preservation and Restoration Potential",
		'/geoserver/wms?',
		{layers: "solcty:highrestorationvp", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13600036.6653, 4590153.819, -13544174.9844, 4650713.23927), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Priority Watersheds within Conservation Area RSM 1",
		'/geoserver/wms?',
		{layers: "solcty:priority_watersheds", transparent: true, format: 'image/png', tiled: true},
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
		{layers: "solcty:ctsrange_known_", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.9, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13580289.1439, 4601361.95733, -13555824.2803, 4625681.41177), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	new OpenLayers.Layer.WMS(
		"California Tiger Salamander - Potential Range",
		'/geoserver/wms?',
		{layers: "solcty:cts_potentialrange", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.9, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13584770.0026826, 4588085.0640865, -13542502.0246416, 4650329.50983062),  visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),

			new OpenLayers.Layer.WMS(
		"California Red-legged Frog Conservation Area",
		'/geoserver/wms?',
		{layers: "solcty:crlf_consarea", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.9, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13606850.8159, 4590876.93963, -13592211.4312, 4615171.28232), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	
			new OpenLayers.Layer.WMS(
		"Critical Habitat",
		'/geoserver/wms?',
		{layers: "solcty:crithab", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.9, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
				new OpenLayers.Layer.WMS(
		"Swainson\'s Hawk Conservation Areas",
		'/geoserver/wms?',
		{layers: "solcty:swhawk_conservationareas", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.9, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	
	
	
new OpenLayers.Layer.WMS(
		"Known Chinook Salmon or Steelhead Spawning Streams",
		'/geoserver/wms?',
		{layers: "solcty:known_steelhead_spstreams", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13603751.2677,4603303.22271, -13542921.109,4655862.73063), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),

	
	new OpenLayers.Layer.WMS(
		"Potential Specialty Reserve Areas",
		'/geoserver/wms?',
		{layers: "solcty:vp_potentialspecialtyreserves", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13583727.5494, 4617789.09958, -13545017.2465, 4650603.32947), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	new OpenLayers.Layer.WMS(
		"Critical Habitats",
		'/geoserver/wms?',
		{layers: "solcty:crithab", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479, 4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	
	new OpenLayers.Layer.WMS(
		"Wetlands",
		'/geoserver/wms?',
		{layers: "solcty:wetlandsvernalpools", transparent: true, format: 'image/png', tiled:true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13621707.1975, 4588572.2593, -13543865.2076, 4649602.51324),  visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
		new OpenLayers.Layer.WMS(
		"Vernal Pool Conservation Areas",
		'/geoserver/wms?',
		{layers: "solcty:vernalpoolconsareas", transparent: true, format: 'image/png', tiled:true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13609306.9654, 4587975.39339 ,-13543281.4817, 4651946.09393),  visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	
	new OpenLayers.Layer.WMS(
		"Inner Coast Range Natural Community",
		'/geoserver/wms?',
		{layers: "solcty:innercoastrange", transparent: true, format: 'image/png', tiled:true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13609306.9654, 4587975.39339 ,-13543281.4817, 4651946.09393),  visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
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
		{layers: "solcty:swhawk_habatrisk", transparent: true, format: 'image/png', tiled:true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	
	new OpenLayers.Layer.WMS(
		"Conservation Areas with High Preservation Potential",
		'/geoserver/wms?',
		{layers: "solcty:vpconspreservation", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	

	
		new OpenLayers.Layer.WMS(
		"Valley Floor Grassland and Vernal Pool Natural Community",
		'/geoserver/wms?',
		{layers: "solcty:vfg", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13611708.9594,4585882.0959, -13539439.4477,4656396.60513), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	
	
	
	
			new OpenLayers.Layer.WMS(
		"Giant Garter Snake Conservation Area",
		'/geoserver/wms?',
		{layers: "solcty:ggs_conservationarea", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13563463.6304, 4603085.29652, -13535691.1272, 4653767.56414), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
			new OpenLayers.Layer.WMS(
		"California Red-legged Frog Conservation Area",
		'/geoserver/wms?',
		{layers: "solcty:crlf_crithab", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
				new OpenLayers.Layer.WMS(
		"Callippe Silverspot Butterfly Conservation Area",
		'/geoserver/wms?',
		{layers: "solcty:callipespotbuttfly_crithab", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13606850.8159, 4590876.93963, -13592211.4312, 4615256.95156), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
				
				new OpenLayers.Layer.WMS(
		"Contra Costa Goldfield Core Population Areas",
		'/geoserver/wms?',
		{layers: "solcty:ccf_corepop", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13594051.065, 4609258.34784, -13569435.4929, 4623166.66682), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
					new OpenLayers.Layer.WMS(
		"Contra Costa Goldfield Potential Habitat, Watershed, and Corridor Areas",
		'/geoserver/wms?',
		{layers: "solcty:ccg_potential", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13596370.0598, 4603653.98817, -13573012.5201, 4627133.32247), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	

	new OpenLayers.Layer.WMS(
		"Parcels",
		'/geoserver/wms/?',
		{layers: "solcty:parcels", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: true, noLegend: false, maxResolution: 18, numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	
	new OpenLayers.Layer.WMS(
		"Alkali Milk-Vetch",
		'/geoserver/wms/?',
		{layers: "solcty:alkaligroup", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13588375.2825167, 4610702.19876063, -13557019.9642139, 4622233.66363698), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
		new OpenLayers.Layer.WMS(
		"Boggs Lake Hedge-Hyssop",
		'/geoserver/wms/?',
		{layers: "solcty:boggslakegroup", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13565815.3182686, 4615597.78964853, -13558389.8856208, 4621377.09416148), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	
		
		new OpenLayers.Layer.WMS(
		"Burrowing Owl",
		'/geoserver/wms/?',
		{layers: "solcty:burrowing_owl", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13608956.3770327, 4591738.1176079, -13541937.2399326, 4656097.99692472), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
			
		new OpenLayers.Layer.WMS(
		"California Black Rail",
		'/geoserver/wms/?',
		{layers: "solcty:california_black_rail", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13621677.19714, 4587866.63380919, -13570523.8392109, 4611708.70019722),  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(
		"California Clapper Rail",
		'/geoserver/wms/?',
		{layers: "solcty:california_clapper_rail", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13625964.4651265, 4588723.12264134, -13579409.2190989, 4611515.71674273),  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
		new OpenLayers.Layer.WMS(
		"California Tiger Salamander",
		'/geoserver/wms/?',
		{layers: "solcty:california_tiger_salamander", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13577799.7950033, 4603961.92825656, -13558389.8856208, 4624133.73836415), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"California Red-Legged Frog",
		'/geoserver/wms/?',
		{layers: "solcty:california_redlegged_frog", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13604558.7000053, 4592375.32245725, -13594439.2867607, 4609722.8190891), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
			new OpenLayers.Layer.WMS(
		"Colusa Grass",
		'/geoserver/wms/?',
		{layers: "solcty:colusagrassgroup", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13566765.6853202, 4615304.15082201, -13544909.7910326, 4649942.63593855), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
				new OpenLayers.Layer.WMS(
		"Riparian, Stream, and Freshwater Marsh Natural Community",
		'/geoserver/wms/?',
		{layers: "solcty:riparian", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626748.3693,4583617.59906, -13535237.9591,4656252.18626), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	
	new OpenLayers.Layer.WMS(
		"Conservancy Fairy Shrimp",
		'/geoserver/wms/?',
		{layers: "solcty:consfairyshrimpgroup", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13578773.0931635, 4592198.34714617, -13558260.791973, 4621920.35547702), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		
	new OpenLayers.Layer.WMS(
		"Contra Costa Goldfields",
		'/geoserver/wms/?',
		{layers: "solcty:ccggroup", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13594258.3857937, 4609333.14697938, -13571757.0232672, 4623832.82020564), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Delta Green Ground Beetle",
		'/geoserver/wms/?',
		{layers: "solcty:deltagreenbeetlegroup", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13570601.9748399, 4614258.36707706, -13563083.9684578, 4621413.88784722), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
			new OpenLayers.Layer.WMS(
		"Delta Smelt",
		'/geoserver/wms/?',
		{layers: "solcty:delta_smelt", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13620314.0701355, 4589128.19967856, -13547906.9718417, 4618541.67057281), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	new OpenLayers.Layer.WMS(
		"Ferris\'s Milk Vetch",
		'/geoserver/wms/?',
		{layers: "solcty:ferrismilkvetchgroup", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13554541.7058968, 4629159.18200569, -13542681.2270079, 4644612.5339331), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	new OpenLayers.Layer.WMS(
		"Giant Garter Snake",
		'/geoserver/wms/?',
		{layers: "solcty:giant_garter_snake", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13553913.2236643, 4627348.59158884, -13549007.6650489, 4652863.81372184), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Legenere",
		'/geoserver/wms/?',
		{layers: "solcty:legeneregroup", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13568114.3742193, 4610021.70379385, -13557153.3043632, 4621559.981721), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
			new OpenLayers.Layer.WMS(
		"Longfin Smelt",
		'/geoserver/wms/?',
		{layers: "solcty:longfin_smelt", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13614870.055121, 4583469.34571107, -13540658.1936592, 4617725.97496832), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(
		"Mason\'s Lilaeopsis",
		'/geoserver/wms/?',
		{layers: "solcty:masonsgroup", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13612120.8700037, 4586000.18682705, -13541715.5725506, 4624892.56748179), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Sacramento Splittail",
		'/geoserver/wms/?',
		{layers: "solcty:sacramento_splittail", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13616773.3371254, 4590026.86928666, -13570393.8962629, 4609139.12710708), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
			new OpenLayers.Layer.WMS(
		"Salt Marsh Harvest Mouse",
		'/geoserver/wms/?',
		{layers: "solcty:salt_marsh_harvest_mouse", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13618837.9861893, 4587049.04437331, -13561243.5346768, 4613581.96266724), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
				new OpenLayers.Layer.WMS(
		"San Joaquin Valley Orcutt Grass",
		'/geoserver/wms/?',
		{layers: "solcty:sjvorcuttgroup", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13568582.3386924, 4617121.27682949, -13568375.9587161, 4617328.42791802), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(
		"Soft Bird\'s Beak",
		'/geoserver/wms/?',
		{layers: "solcty:soft_salty_birds_beak", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13618244.3252697, 4583313.54720697, -13569385.7767898, 4612398.49692939), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Solano Grass",
		'/geoserver/wms/?',
		{layers: "solcty:solanograssgroup", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13566739.3570105, 4615317.12915689, -13545544.2183673, 4649758.15703817), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Suisun Thistle",
		'/geoserver/wms/?',
		{layers: "solcty:suisun_thistle", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13586068.5828631, 4607111.05431132, -13579299.6593583, 4611647.07483588), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
			new OpenLayers.Layer.WMS(
		"Swainson\'s Hawk",
		'/geoserver/wms/?',
		{layers: "solcty:swainsons_hawk", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13583715.1716923, 4599315.89942583, -13536422.7329919, 4656204.95195372), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(
		"Tricolored Blackbird",
		'/geoserver/wms/?',
		{layers: "solcty:tricolored_blackbird", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13606158.7817975, 4590771.32461419, -13558999.6832464, 4654888.99417983), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(
		"Valley Elderberry Longhorn Beetle",
		'/geoserver/wms/?',
		{layers: "solcty:valley_elderberry_longhorn_beetle", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13596602.4546611, 4610193.03943943, -13558893.5207072, 4655644.12913289), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Vernal Pool Fairy Shrimp",
		'/geoserver/wms/?',
		{layers: "solcty:vernalpoolfairyshrimpgroup", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13582126.1308043, 4609213.16768609, -13545045.6790828, 4641897.0158852), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(
		"Vernal Pool Smallscale",
		'/geoserver/wms/?',
		{layers: "solcty:vernalpoolsmallscalegroup", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13588120.4924225, 4611920.60776026, -13560567.4916266, 4617444.71560321), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	new OpenLayers.Layer.WMS(
		"Vernal Pool Tadpool Shrimp",
		'/geoserver/wms/?',
		{layers: "solcty:vernalpooltadpolegroup", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13579828.7734541, 4610685.44258663, -13556826.3237422, 4630698.75958687), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(
	"Baker\’s Navarretia",
		'/geoserver/wms/?',
		{layers: "solcty:bakers_navarretia", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13572514.5991476, 4616835.16638148, -13558324.4894966, 4628044.85148578), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
	"Bearded Popcorn-Flower",
		'/geoserver/wms/?',
		{layers: "solcty:bearded_popcornflower", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13575381.8370086, 4597099.74082967, -13557127.8253537, 4637458.19291819), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
	"Brittlescale",
		'/geoserver/wms/?',
		{layers: "solcty:brittlescale", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13572884.0447843, 4613763.08979074, -13558456.9803456, 4621707.15986864), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	
		new OpenLayers.Layer.WMS(	
		"Carquinez Goldenbush",
		'/geoserver/wms/?',
		{layers: "solcty:carquinez_goldenbush", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601355.1392199, 4586841.42145838, -13559185.6800153, 4627483.40028319), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(	
		
		"Delta Mudwort",
		'/geoserver/wms/?',
		{layers: "solcty:delta_mudwort", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13582204.2664332, 4589626.07241427, -13544018.0257025, 4617582.63990892), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(		
		"Delta Tule Pea",
		'/geoserver/wms/?',
		{layers: "solcty:delta_tule_pea", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13617909.7009458, 4585247.98684576, -13542212.4132344, 4622116.78072086), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
			"Dwarf Downingia",
		'/geoserver/wms/?',
		{layers: "solcty:dwarf_downingia", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13578835.9413867, 4609729.84521238, -13558006.0018788, 4621589.74183844), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
				"Ferris\'s Goldfields",
		'/geoserver/wms/?',
		{layers: "solcty:ferris_goldfields", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13580664.4849634, 4617974.78773348, -13579800.7465438, 4618979.29517988), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
	"Foothill Yellow-legged Frog",
		'/geoserver/wms/?',
		{layers: "solcty:foothill_yellow_legged_frog", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13592118.9983021, 4619776.69612165, -13586358.1942703, 4650681.12738602), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		
		new OpenLayers.Layer.WMS(	
	"Fragrant Fritillary",
		'/geoserver/wms/?',
		{layers: "solcty:fragrant_fritillary", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13611410.8549409, 4592788.63635482, -13560086.7876487, 4619332.00493949), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Grasshopper Sparrow",
		'/geoserver/wms/?',
		{layers: "solcty:grasshopper_sparrow", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601315.2221051, 4606434.03805802, -13550747.8813929, 4633155.62978032), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'} 
	),
			new OpenLayers.Layer.WMS(
			"Heartscale",
		'/geoserver/wms/?',
		{layers: "solcty:heartscale", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13577840.5614185, 4602222.1903016, -13558402.6251255, 4626020.63091677), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
				"Heckard\'s Pepper-Grass",
		'/geoserver/wms/?',
		{layers: "solcty:heckards_pepper_grass", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13569400.2148951, 4616704.28296609, -13544198.0773692, 4644630.43010683), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
	"Hispid Bird\’s-Beak",
		'/geoserver/wms/?',
		{layers: "solcty:hispid_salty_birds_beak", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Hogwallow Starfish",
		'/geoserver/wms/?',
		{layers: "solcty:hogwallow_starfish", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13583154.6334849, 4608990.5071115, -13558271.8328771, 4632658.35863115), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
"Loggerhead Shrike",
		'/geoserver/wms/?',
		{layers: "solcty:loggerhead_shrike", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
"Midvalley Fairy Shrimp",
		'/geoserver/wms/?',
		{layers: "solcty:midvalley_fairy_shrimp", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13567588.6573248, 4600941.74469649, -13558079.8910061, 4630412.81286116), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
		new OpenLayers.Layer.WMS(
	"Northern Harrier",
		'/geoserver/wms/?',
		{layers: "solcty:northern_harrier", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
			new OpenLayers.Layer.WMS(
	"Pappose Tarplant",
		'/geoserver/wms/?',
		{layers: "solcty:pappose_tarplant", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13591461.6398589, 4603020.45650115, -13570356.527049, 4625548.06337303), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
			new OpenLayers.Layer.WMS(	
	"Recurved Larkspur",
		'/geoserver/wms/?',
		{layers: "solcty:recurved_larkspur", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Ricksecker\'s Water Scavenger Beetle",
		'/geoserver/wms/?',
		{layers: "solcty:rickseckers_water_scavenger_beetle", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13566374.1578753, 4617475.54558182, -13561331.8619094, 4619953.06315132), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Saline Clover",
		'/geoserver/wms/?',
		{layers: "solcty:saline_clover", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13588313.2835938, 4610761.65637204, -13552905.1041912, 4630235.72484423), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(
		"Irrigated Agriculture",
		'/geoserver/wms/?',
		{layers: "solcty:agriculture", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13605613.531,4588905.9717, -13535347.5188,4656380.31719), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Special Management Species: Valley Floor Grassland and Vernal Pool",
		'/geoserver/wms/?',
		{layers: "solcty:vfg_sms", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	
		new OpenLayers.Layer.WMS(
		"Salt Marsh Common Yellowthroat",
		'/geoserver/wms/?',
		{layers: "solcty:saltmarsh_common_yellowthroat", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13625797.1529645, 4589457.77472379, -13570391.3483619, 4613371.1022655), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(	
		
	"San Joaqin Spearscale",
		'/geoserver/wms/?',
		{layers: "solcty:san_joaqin_spearscale", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
		new OpenLayers.Layer.WMS(
"San Pablo Song Sparrow",
		'/geoserver/wms/?',
		{layers: "solcty:san_pablo_song_sparrow", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13625357.2154018, 4588668.10674392, -13605782.5417583, 4601395.36394525),  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
		new OpenLayers.Layer.WMS(
	"Short-Eared Owl",
		'/geoserver/wms/?',
		{layers: "solcty:short_eared_owl", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),		

	new OpenLayers.Layer.WMS(	
		"Song Sparrow - \"Modesto\" Population",
		'/geoserver/wms/?',
		{layers: "solcty:song_sparrow_modesto_population", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13548874.3248996, 4593557.5736693, -13541039.5295004, 4620538.99126642), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),		
		new OpenLayers.Layer.WMS(
			"Suisun Marsh Aster",
		'/geoserver/wms/?',
		{layers: "solcty:suisun_marsh_aster", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13602982.398622, 4586571.24826642, -13539705.2787066, 4624774.030571), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),		
		new OpenLayers.Layer.WMS(
				"Suisun Shrew",
		'/geoserver/wms/?',
		{layers: "solcty:suisun_shrew", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13625495.651353, 4589705.3674675, -13577956.9155614, 4613075.36430497), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
				"Coastal Marsh Natural Community",
		'/geoserver/wms/?',
		{layers: "solcty:coastal_marsh", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626578.5093,4584926.09431, -13547685.3045,4644372.83668), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
	new OpenLayers.Layer.WMS(
		"Covered Species: Riparian, Stream, and Freshwater Marsh Natural Community",
		'/geoserver/wms/?',
		{layers: "solcty:rip_cs", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
		"Special Management Species: Riparian, Stream, and Freshwater Marsh Natural Community",
		'/geoserver/wms/?',
		{layers: "solcty:rip_sms", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
		"Covered Species: Irrigated Agriculture",
		'/geoserver/wms/?',
		{layers: "solcty:iag_cs", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
		"Special Management Species: Irrigated Agriculture",
		'/geoserver/wms/?',
		{layers: "solcty:iag_sms", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
	
	
		new OpenLayers.Layer.WMS(
	"Suisun Song Sparrow",
		'/geoserver/wms/?',
		{layers: "solcty:suisun_song_sparrow", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13602699.5816174, 4585308.91570554, -13570618.1115458, 4613391.64744825), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
	
		new OpenLayers.Layer.WMS(
	"Covered Species: Inner Coast Range",
		'/geoserver/wms/?',
		{layers: "solcty:icr_cs", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13611715.7538,4587233.48173, -13564114.1697,4652947.93949), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
			new OpenLayers.Layer.WMS(
	"Special Management Species: Inner Coast Range",
		'/geoserver/wms/?',
		{layers: "solcty:icr_sms", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
	"Covered Species: Coastal Marsh",
		'/geoserver/wms/?',
		{layers: "solcty:cm_cs", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
			new OpenLayers.Layer.WMS(
	"Special Management Species: Coastal Marsh",
		'/geoserver/wms/?',
		{layers: "solcty:cm_sms", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(	
	"Valley Needlegrass Grassland",
		'/geoserver/wms/?',
		{layers: "solcty:valley_needlegrass_grassland", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13575364.8510023, 4607413.10542612, -13560460.479787, 4623932.9448748), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(	
	"Western Pond Turtle",
		'/geoserver/wms/?',
		{layers: "solcty:western_pond_turtle", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),		
		new OpenLayers.Layer.WMS(
	"Woolly Rose-Mallow",
		'/geoserver/wms/?',
		{layers: "solcty:woolly_rose_mallow", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13556308.2505505, 4600465.46593374, -13546788.4433277, 4624649.54122205), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
			new OpenLayers.Layer.WMS(
	"Existing and Potential Reserves",
		'/geoserver/wms/?',
		{layers: "solcty:vernal_pool_potential_preservereserves", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
	
		
	new OpenLayers.Layer.WMS(
	"Swainson\'s Hawk Conservation Area: Valley Floor Grassland",
		'/geoserver/wms/?',
		{layers: "solcty:swhawkpot_vpg", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13609654.5019,4585882.0959, -13539449.6393,4656396.60513), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	

	new OpenLayers.Layer.WMS(
	"Swainson\'s Hawk Conservation Area: Inner Coast Range",
		'/geoserver/wms/?',
		{layers: "solcty:swhawkpot_icr", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13611715.7538,4587233.48173, -13564114.1697,4652947.93949), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
	"Swainson\'s Hawk Conservation Area: Irrigated Agriculture",
		'/geoserver/wms/?',
		{layers: "solcty:swhawkpot_iag", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13605613.531,4588905.9717, -13535347.5188,4656380.31719), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
	"Swainson\'s Hawk Potential Reserve Area: Valley Floor Grassland",
		'/geoserver/wms/?',
		{layers: "solcty:potswhawk_vpg", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13588529.0058736, 4605536.64125984, -13549355.0288774, 4649629.56635739), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
		new OpenLayers.Layer.WMS(
	"Swainson\'s Hawk Potential Reserve Area: Irrigated Agriculture",
		'/geoserver/wms/?',
		{layers: "solcty:potswhawk_iag", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13605613.531,4588905.9717, -13535347.5188,4656380.31719), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	

		new OpenLayers.Layer.WMS(
	"Swainson\'s Hawk Potential Reserve Area: Inner Coast Range",
		'/geoserver/wms/?',
		{layers: "solcty:potswhawk_icr", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13612152.2941,4585923.07707, -13564111.6218,4653142.2455), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
			new OpenLayers.Layer.WMS(
	"Burrowing Owl Conservation Area: Valley Floor Grassland",
		'/geoserver/wms/?',
		{layers: "solcty:bocons_vpg", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13609654.5018911, 4585882.09590051, -13539449.639312, 4656396.605131), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
				new OpenLayers.Layer.WMS(
	"Burrowing Owl Conservation Areas",
		'/geoserver/wms/?',
		{layers: "solcty:bo_consareas", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
		
	
	
			new OpenLayers.Layer.WMS(
	"Burrowing Owl Conservation Area: Irrigated Agriculture",
		'/geoserver/wms/?',
		{layers: "solcty:bocons_ag", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13605613.5309957, 4588905.97169672, -13535347.5187941, 4656380.31718604), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
				new OpenLayers.Layer.WMS(
	"Burrowing Owl Conservation Area: Inner Coast Range",
		'/geoserver/wms/?',
		{layers: "solcty:bocons_icr", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13612152.2941153, 4585923.07707394, -13564111.6218381, 4653142.24550287), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
		new OpenLayers.Layer.WMS(
	"Yellow-Breasted Chat",
		'/geoserver/wms/?',
		{layers: "solcty:yellow_breasted_chat", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13593956.0348819, 4616943.87659842, -13545111.0752071, 4647713.91906685), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
	"Yellow-Headed Blackbird Breeding Range",
		'/geoserver/wms/?',
		{layers: "solcty:yellow_headed_blackbird", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
		new OpenLayers.Layer.WMS(
	"Irrigation and Reclamation Districts",
		'/geoserver/wms/?',
		{layers: "solcty:all_irr_dist_boundaries", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
	"Callippe Silverspot Butterfly",
		'/geoserver/wms/?',
		{layers: "solcty:callipe_silverspot_butterfly", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13605484.4373479, 4593047.64043044, -13594038.4170124, 4601518.49260908), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
			new OpenLayers.Layer.WMS(
	"Facilities - Point Features",
		'/geoserver/wms/?',
		{layers: "solcty:facilities_points", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
				new OpenLayers.Layer.WMS(
	"Facilities - Line Features",
		'/geoserver/wms/?',
		{layers: "solcty:facilities_lines", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
					new OpenLayers.Layer.WMS(
	"Facilities - Polygon Features",
		'/geoserver/wms/?',
		{layers: "solcty:facilities_polys", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
	
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
				{nodeType: 'gx_layer', layer: 'City Urban Growth Boundaries'},
				{nodeType: 'gx_layer', layer: 'Natural Communities'},
				{nodeType: 'gx_layer', layer: 'Vegetation and Cover Types'},				
				{nodeType: 'gx_layer', layer: 'Key Corridors'},				
				{nodeType: 'gx_layer', layer: 'Protected Lands'},
				{nodeType: 'gx_layer', layer: 'Suisun Marsh Conservation Areas'},									
				{nodeType: 'gx_layer', layer: 'Travis Air Force Base - Not Part of the HCP'},	
				{nodeType: 'gx_layer', layer: 'Travis AFB Airport Land Use Planning Wildlife Hazard Areas'},
					
							
				
						
						
				

			
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
				{nodeType: 'gx_layer', layer: 'Covered Species: Valley Floor Grassland and Vernal Pool'},
				{nodeType: 'gx_layer', layer: 'Special Management Species: Valley Floor Grassland and Vernal Pool'},
			]
			
	},
	
	{
		
	text:'Inner Coast Range Natural Community Layers', nodeType: 'hr_cascader',  expanded: false, children:
[							
				{nodeType: 'gx_layer', layer: 'Inner Coast Range Natural Community'},
				{nodeType: 'gx_layer', layer: 'Burrowing Owl Conservation Area: Inner Coast Range'},
				{nodeType: 'gx_layer', layer: 'California Red-legged Frog Conservation Area'},
				{nodeType: 'gx_layer', layer: 'Callippe Silverspot Butterfly Conservation Area'},
				{nodeType: 'gx_layer', layer: 'Swainson\'s Hawk Conservation Area: Inner Coast Range'},
				{nodeType: 'gx_layer', layer: 'Swainson\'s Hawk Potential Reserve Area: Inner Coast Range'},				
				{nodeType: 'gx_layer', layer: 'Covered Species: Inner Coast Range'},
				{nodeType: 'gx_layer', layer: 'Special Management Species: Inner Coast Range'},
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
				{nodeType: 'gx_layer', layer: 'Giant Garter Snake Conservation Area'},	
				{nodeType: 'gx_layer', layer: 'Covered Species: Riparian, Stream, and Freshwater Marsh Natural Community'},
				{nodeType: 'gx_layer', layer: 'Special Management Species: Riparian, Stream, and Freshwater Marsh Natural Community'},
				
			]
	},
	
			{
		
	text:'Coastal Marsh Natural Community Layers', nodeType: 'hr_cascader',  expanded: false, children:
[							
				{nodeType: 'gx_layer', layer: 'Coastal Marsh Natural Community'},
				{nodeType: 'gx_layer', layer: 'Suisun Marsh Conservation Areas'},
				{nodeType: 'gx_layer', layer: 'Delta Region Marsh Conservation Area'},			
				{nodeType: 'gx_layer', layer: 'San Pablo Bay and Napa Marsh Conservation Area'},					
				{nodeType: 'gx_layer', layer: 'Covered Species: Coastal Marsh'},
				{nodeType: 'gx_layer', layer: 'Special Management Species: Coastal Marsh'},
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
				{nodeType: 'gx_layer', layer: 'Covered Species: Irrigated Agriculture'},
				{nodeType: 'gx_layer', layer: 'Special Management Species: Irrigated Agriculture'},
				
			]
	},
		{
		
	text:'HCP Conservation Areas', nodeType: 'hr_cascader',  expanded: false, children:
[				
				{nodeType: 'gx_layer', layer: 'Burrowing Owl Conservation Areas'},								
				{nodeType: 'gx_layer', layer: 'California Red-legged Frog Conservation Area'},
				{nodeType: 'gx_layer', layer: 'Callippe Silverspot Butterfly Conservation Area'},
				{nodeType: 'gx_layer', layer: 'Delta Region Marsh Conservation Area'},	
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
				{nodeType: 'gx_layer', layer: 'Critical Habitats'},					
		
					

			]
	},
		{
	text:'Wetlands, Streams, and Watersheds', nodeType: 'hr_cascader',  expanded: false, children:
		[
				{nodeType: 'gx_layer', layer: 'Wetlands'},	
				{nodeType: 'gx_layer', layer: 'Streams'},	
				{nodeType: 'gx_layer', layer: 'Known Chinook Salmon or Steelhead Spawning Streams'},	
				{nodeType: 'gx_layer', layer: 'Priority Drainages'},	
				{nodeType: 'gx_layer', layer: 'Priority Watersheds within Conservation Area RSM 1'},							
				{nodeType: 'gx_layer', layer: 'All Watersheds'},
		
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
{nodeType: 'gx_layer', layer: 'Foothill Yellow-legged Frog'},
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
		text:'Appendix A/Facilities', nodeType: 'hr_cascader',  expanded: false, children:
			[
{nodeType: 'gx_layer', layer: 'Irrigation and Reclamation Districts'},
{nodeType: 'gx_layer', layer: 'Facilities - Point Features'},
{nodeType: 'gx_layer', layer: 'Facilities - Line Features'},
{nodeType: 'gx_layer', layer: 'Facilities - Polygon Features'},
	
	
		
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
