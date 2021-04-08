function initMap() {


	const VILA_MARIA_BOUNDS = {
		north: -23.5028771,
		south: -23.5278258,
		west: -46.5970637,
		east: -46.5802838,
	  };	
	// Update MAP_ID with custom map ID
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: -23.5181363,
			lng: -46.5918817,
		},
		restriction: {
			latLngBounds: VILA_MARIA_BOUNDS,
			strictBounds: false,
		  },		
		zoom: 15,
		mapId: '13405a2f7f91f0f4',
		mapTypeControl: false,
		fullscreenControl: false,
		streetViewControl: false,
	});

	// Name
	// Latitude, Longitude
	// Image URL
	// scaledSize width, height
	const markers = [
		[
			"St. Eduardo",
			-23.5150988,
			-46.5873104,
			'yoshi_house.svg',
			38,
			31,
		],
		[
			"Candelária",
			-23.5122232,
			-46.5847873,
			'castle.svg',
			40,
			53,
		],	
		[
			'Pq. Trote',
			-23.5128006,
			-46.5971313,
			'hill_with_eyes.svg',
			50,
			60.7,
		],	
		[
			'Pq. Trote',
			-23.513657908198986, -46.59826127961405,
			'hill_with_eyes.svg',
			50,
			60.7,
		],
		[
			'Pq. Trote',
			-23.513319775900293, -46.5959499851439,
			'hill_with_eyes.svg',
			50,
			60.7,
		],		
		[
			'Unidos de Vila Maria',
			-23.5084428,
			-46.576997,
			'star.svg',
			38,
			38,
		],			
		[
			'Palácio do Transporte',
			-23.517299,
			-46.5816571,
			'ghosthouse.svg',
			40,
			48,
		],
		['Tatuapé', -23.526461, -46.5861631, 'pipe.svg', 38, 42.5],			
		['Belém', -23.528636240097157, -46.59162970192729, 'pipe.svg', 38, 42.5],	
		
		[
			'You Are Here',
			34.66767112713121,
			135.4297887322531,
			'pointer.svg',
			30,
			47.8,
		],

		['Warp Pipe', 34.66739738878135, 135.43225049775214, 'pipe.svg', 38, 42.5],
		['Star World', 34.667959023359266, 135.42866400953733, 'star.svg', 38, 38],


	];

	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		const marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			icon: {
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
			},
			animation: google.maps.Animation.DROP,
		});

		const infowindow = new google.maps.InfoWindow({
			content: currMarker[0],
		});

		marker.addListener('click', () => {
			infowindow.open(map, marker);
		});
	}
}