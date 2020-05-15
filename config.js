var config = {
  style: 'mapbox://styles/dtparker/ck8q93kcp00jc1it3hpxijzym?fresh=true',
  accessToken: 'pk.eyJ1IjoiZHRwYXJrZXIiLCJhIjoiY2pua2ZjYWZrMTNhbDNycjd2OHYzcmN3ZyJ9.EOLmHAwjJB0_dCD7K9Dndg',
  showMarkers: false,
  theme: 'dark',
  alignment: 'left',
  title: '',
  subtitle: '',
  byline: '',
  chapters: [
    {
      id: 'Titulo',
      title: '',
      image: '',
      //description: "<div id='tableauViz1' class='tableauPlaceholderfixedone'> ",
      location: {
        center: [-50.885556, -37.793564],
        zoom: 4.50,
        pitch: 23.50,
        bearing: 16.19
      },
      onChapterEnter: [
        {
          layer: 'izquierdo-blanco-label',
          opacity: 1
        },
        {
          layer: 'derecho-blanco-label',
          opacity: 1
        },
        {
          layer: 'arica',
          opacity: 0
        },
        {
          layer: 'tarapaca',
          opacity: 0
        },
        {
          layer: 'tarapaca-comuna-label',
          opacity: 0
        },
        {
          layer: 'tarapaca-comuna-border',
          opacity: 0
        },
        {
          layer: 'arica-comuna-label',
          opacity: 0
        },
        {
          layer: 'arica-comuna-border',
          opacity: 0
        },
        {
          layer: 'antofagasta-comuna-label',
          opacity: 0
        },
        {
          layer: 'antofagasta-comuna-border',
          opacity: 0
        },
        {
          layer: 'antofagasta',
          opacity: 0
        },
        {
          layer: 'atacama-comuna-label',
          opacity: 0
        },
        {
          layer: 'atacama-comuna-border',
          opacity: 0
        },
        {
          layer: 'atacama',
          opacity: 0
        },
        {
          layer: 'coquimbo-comuna-label',
          opacity: 0
        },
        {
          layer: 'coquimbo-comuna-border',
          opacity: 0
        },
        {
          layer: 'coquimbo',
          opacity: 0
        },
        {
          layer: 'metropolitana-comuna-label',
          opacity: 0
        },
        {
          layer: 'metropolitana-comuna-border',
          opacity: 0
        },
        {
          layer: 'metropolitana',
          opacity: 0
        },
        {
          layer: 'valparaiso-comuna-label',
          opacity: 0
        },
        {
          layer: 'valparaiso-comuna-border',
          opacity: 0
        },
        {
          layer: 'valparaiso',
          opacity: 0
        },
        {
          layer: 'maule-comuna-label',
          opacity: 0
        },
        {
          layer: 'maule-comuna-border',
          opacity: 0
        },
        {
          layer: 'maule',
          opacity: 0
        },
        {
          layer: 'ohiggins-comuna-label',
          opacity: 0
        },
        {
          layer: 'ohiggins-comuna-border',
          opacity: 0
        },
        {
          layer: 'ohiggins',
          opacity: 0
        },
        {
          layer: 'biobio-comuna-label',
          opacity: 0
        },
        {
          layer: 'biobio-comuna-border',
          opacity: 0
        },
        {
          layer: 'biobio',
          opacity: 0
        },
        {
          layer: 'maule-comuna-label',
          opacity: 0
        },
        {
          layer: 'maule-comuna-border',
          opacity: 0
        },
        {
          layer: 'maule',
          opacity: 0
        },
        {
          layer: 'lagos-comuna-label',
          opacity: 0
        },
        {
          layer: 'lagos-comuna-border',
          opacity: 0
        },
        {
          layer: 'lagos',
          opacity: 0
        },
        {
          layer: 'rios-comuna-label',
          opacity: 0
        },
        {
          layer: 'rios-comuna-border',
          opacity: 0
        },
        {
          layer: 'rios',
          opacity: 0
        },
        {
          layer: 'araucania-comuna-label',
          opacity: 0
        },
        {
          layer: 'araucania-comuna-border',
          opacity: 0
        },
        {
          layer: 'araucania',
          opacity: 0
        },
        {
          layer: 'izquierdo-verde-label',
          opacity: 1
        },
        {
          layer: 'derecho-verde-label',
          opacity: 1
        },
        {
          layer: 'regiones-vino',
          opacity: 1
        },

      ],
      onChapterExit: [],
    },
    {
      id: 'Arica',
      title: '',
      image: '',
      //description: "<div id='tableauViz2' class='tableauPlaceholderfixedtwo'>",
      location: {
        center: [-67.743000, -18.728000],
        zoom: 7.88,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [
        {
          layer: 'arica',
          opacity: 1
        },
        {
          layer: 'arica-comuna-label',
          opacity: 0
        },
        {
          layer: 'arica-comuna-border',
          opacity: 1
        },
        {
          layer: 'tarapaca-comuna-label',
          opacity: 0
        },
        {
          layer: 'tarapaca-comuna-border',
          opacity: 0
        },
        {
          layer: 'tarapaca',
          opacity: 0
        },
        {
          layer: 'regiones-vino',
          opacity: 0
        },
        {
          layer: 'izquierdo-blanco-label',
          opacity: 0
        },
        {
          layer: 'derecho-blanco-label',
          opacity: 0
        },
        {
          layer: 'izquierdo-verde-label',
          opacity: 0
        },
        {
          layer: 'derecho-verde-label',
          opacity: 0
        },        
      ],
      onChapterExit: 
        [
          {
            layer: 'regiones-vino',
            opacity: 1
          },
        ],
    },
    {
      id: 'Tarapaca',
      title: '',
      image: '',
      //description: "<div id='tableauViz3' class='tableauPlaceholderfixedtwo'>",
      location: {
        center: [-67.343000, -20.586000],
        zoom: 7.88,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [
        {
          layer: 'regiones-vino',
          opacity: 0
        },
        {
          layer: 'tarapaca-comuna-label',
          opacity: 0
        },
        {
          layer: 'tarapaca-comuna-border',
          opacity: 1
        },
        {
          layer: 'tarapaca',
          opacity: 1
        },
        {
          layer: 'antofagasta-comuna-label',
          opacity: 0
        },
        {
          layer: 'antofagasta-comuna-border',
          opacity: 0
        },
        {
          layer: 'antofagasta',
          opacity: 0
        },
        {
          layer: 'arica',
          opacity: 0
        },
        {
          layer: 'izquierdo-blanco-label',
          opacity: 0
        },
        {
          layer: 'derecho-blanco-label',
          opacity: 0
        },
        {
          layer: 'izquierdo-verde-label',
          opacity: 0
        },
        {
          layer: 'derecho-verde-label',
          opacity: 0
        },
        {
          layer: 'arica-comuna-label',
          opacity: 0
        },
        {
          layer: 'arica-comuna-border',
          opacity: 0
        },


      ],
      onChapterExit: [],
    },
    {
      id: 'Antofagasta',
      title: '',
      image: '',
      //description: "<div id='tableauViz4' class='tableauPlaceholderfixedtwo'>",
      location: {
        center: [-66.236266, -23.621369],
        zoom: 7.20,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [
        {
          layer: 'regiones-vino',
          opacity: 0
        },
        {
          layer: 'antofagasta-comuna-label',
          opacity: 0
        },
        {
          layer: 'antofagasta-comuna-border',
          opacity: 1
        },
        {
          layer: 'antofagasta',
          opacity: 1
        },
        {
          layer: 'atacama-comuna-label',
          opacity: 0
        },
        {
          layer: 'atacama-comuna-border',
          opacity: 0
        },
        {
          layer: 'atacama',
          opacity: 0
        },
        {
          layer: 'tarapaca-comuna-label',
          opacity: 0
        },
        {
          layer: 'tarapaca-comuna-border',
          opacity: 0
        },
        {
          layer: 'tarapaca',
          opacity: 0
        },
        {
          layer: 'arica',
          opacity: 0
        },
        {
          layer: 'izquierdo-blanco-label',
          opacity: 0
        },
        {
          layer: 'derecho-blanco-label',
          opacity: 0
        },
        {
          layer: 'izquierdo-verde-label',
          opacity: 0
        },
        {
          layer: 'derecho-verde-label',
          opacity: 0
        },
        {
          layer: 'arica-comuna-label',
          opacity: 0
        },
        {
          layer: 'arica-comuna-border',
          opacity: 0
        },


      ],
      onChapterExit: [],
    },
    {
      id: 'Atacama',
      title: '',
      image: '',
    //  description: "<div id='tableauViz5' class='tableauPlaceholderfixedtwo'>",
      location: {
        center: [-67.557137, -28.153164],
        zoom: 7.31,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [
        {
          layer: 'regiones-vino',
          opacity: 0
        },
        {
          layer: 'atacama-comuna-label',
          opacity: 0
        },
        {
          layer: 'atacama-comuna-border',
          opacity: 1
        },
        {
          layer: 'atacama',
          opacity: 1
        },
        {
          layer: 'coquimbo-comuna-label',
          opacity: 0
        },
        {
          layer: 'coquimbo-comuna-border',
          opacity: 0
        },
        {
          layer: 'coquimbo',
          opacity: 0
        },
        {
          layer: 'antofagasta-comuna-label',
          opacity: 0
        },
        {
          layer: 'antofagasta-comuna-border',
          opacity: 0
        },
        {
          layer: 'antofagasta',
          opacity: 0
        },
        {
          layer: 'tarapaca-comuna-label',
          opacity: 0
        },
        {
          layer: 'tarapaca-comuna-border',
          opacity: 0
        },
        {
          layer: 'tarapaca',
          opacity: 0
        },
        {
          layer: 'arica',
          opacity: 0
        },
        {
          layer: 'izquierdo-blanco-label',
          opacity: 0
        },
        {
          layer: 'derecho-blanco-label',
          opacity: 0
        },
        {
          layer: 'izquierdo-verde-label',
          opacity: 0
        },
        {
          layer: 'derecho-verde-label',
          opacity: 0
        },
        {
          layer: 'arica-comuna-label',
          opacity: 0
        },
        {
          layer: 'arica-comuna-border',
          opacity: 0
        },


      ],
      onChapterExit: [],
    },
    {
      id: 'Coquimbo',
      title: '',
      image: '',
     // description: "<div id='tableauViz6' class='tableauPlaceholderfixedtwo'>",
      location: {
        center: [-69.103884, -30.828486],
        zoom: 7.59,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [
        {
          layer: 'regiones-vino',
          opacity: 0
        },
        {
          layer: 'coquimbo-comuna-label',
          opacity: 0
        },
        {
          layer: 'coquimbo-comuna-border',
          opacity: 1
        },
        {
          layer: 'coquimbo',
          opacity: 1
        },
        {
          layer: 'metropolitana-comuna-label',
          opacity: 0
        },
        {
          layer: 'metropolitana-comuna-border',
          opacity: 0
        },
        {
          layer: 'metropolitana',
          opacity: 0
        },
        {
          layer: 'valparaiso-comuna-label',
          opacity: 0
        },
        {
          layer: 'valparaiso-comuna-border',
          opacity: 0
        },
        {
          layer: 'valparaiso',
          opacity: 0
        },
        {
          layer: 'atacama-comuna-label',
          opacity: 0
        },
        {
          layer: 'atacama-comuna-border',
          opacity: 0
        },
        {
          layer: 'atacama',
          opacity: 0
        },
        {
          layer: 'antofagasta-comuna-label',
          opacity: 0
        },
        {
          layer: 'antofagasta-comuna-border',
          opacity: 0
        },
        {
          layer: 'antofagasta',
          opacity: 0
        },
        {
          layer: 'arica',
          opacity: 0
        },
        {
          layer: 'izquierdo-blanco-label',
          opacity: 0
        },
        {
          layer: 'derecho-blanco-label',
          opacity: 0
        },
        {
          layer: 'izquierdo-verde-label',
          opacity: 0
        },
        {
          layer: 'derecho-verde-label',
          opacity: 0
        },
        {
          layer: 'arica-comuna-label',
          opacity: 0
        },
        {
          layer: 'arica-comuna-border',
          opacity: 0
        },
        {
          layer: 'izquierdo-verde-label',
          opacity: 0
        },
        {
          layer: 'derecho-verde-label',
          opacity: 0
        },


      ],
      onChapterExit: [],
    },
    {
      id: 'Valparaiso',
      title: '',
      image: '',
      //description: "<div id='tableauViz7' class='tableauPlaceholderfixedtwo'>",
      location: {
        center: [-68.876946, -33.064509],
        zoom: 7.74,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [
        {
          layer: 'regiones-vino',
          opacity: 0
        },
        {
          layer: 'valparaiso-comuna-label',
          opacity: 0
        },
        {
          layer: 'valparaiso-comuna-border',
          opacity: 1
        },
        {
          layer: 'valparaiso',
          opacity: 1
        },
        {
          layer: 'metropolitana-comuna-label',
          opacity: 0
        },
        {
          layer: 'metropolitana-comuna-border',
          opacity: 0
        },
        {
          layer: 'metropolitana',
          opacity: 0
        },
        {
          layer: 'ohiggins-comuna-label',
          opacity: 0
        },
        {
          layer: 'ohiggins-comuna-border',
          opacity: 0
        },
        {
          layer: 'ohiggins',
          opacity: 0
        },
        {
          layer: 'coquimbo-comuna-label',
          opacity: 0
        },
        {
          layer: 'coquimbo-comuna-border',
          opacity: 0
        },
        {
          layer: 'coquimbo',
          opacity: 0
        },
        {
          layer: 'metropolitana-comuna-label',
          opacity: 0
        },
        {
          layer: 'metropolitana-comuna-border',
          opacity: 0
        },
        {
          layer: 'metropolitana',
          opacity: 0
        },
        {
          layer: 'tarapaca-comuna-label',
          opacity: 0
        },
        {
          layer: 'tarapaca-comuna-border',
          opacity: 0
        },
        {
          layer: 'tarapaca',
          opacity: 0
        },
        {
          layer: 'arica',
          opacity: 0
        },
        {
          layer: 'izquierdo-blanco-label',
          opacity: 0
        },
        {
          layer: 'derecho-blanco-label',
          opacity: 0
        },
        {
          layer: 'arica-comuna-label',
          opacity: 0
        },
        {
          layer: 'arica-comuna-border',
          opacity: 0
        },
        {
          layer: 'izquierdo-verde-label',
          opacity: 0
        },
        {
          layer: 'derecho-verde-label',
          opacity: 0
        },
      ],
      onChapterExit: [],
    },
    {
      id: 'RM',
      title: '',
      image: '',
    //  description: "<div id='tableauViz8' class='tableauPlaceholderfixedtwo'>",
      location: {
        center: [-68.629000, -33.772],
        zoom: 7.68,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [
        {
          layer: 'regiones-vino',
          opacity: 0
        },
        {
          layer: 'metropolitana-comuna-label',
          opacity: 0
        },
        {
          layer: 'metropolitana-comuna-border',
          opacity: 1
        },
        {
          layer: 'metropolitana',
          opacity: 1
        },
        {
          layer: 'ohiggins-comuna-label',
          opacity: 0
        },
        {
          layer: 'ohiggins-comuna-border',
          opacity: 0
        },
        {
          layer: 'ohiggins',
          opacity: 0
        },
        {
          layer: 'valparaiso-comuna-label',
          opacity: 0
        },
        {
          layer: 'valparaiso-comuna-border',
          opacity: 0
        },
        {
          layer: 'valparaiso',
          opacity: 0
        },
        {
          layer: 'izquierdo-verde-label',
          opacity: 0
        },
        {
          layer: 'derecho-verde-label',
          opacity: 0
        },
        {
          layer: 'tarapaca-comuna-label',
          opacity: 0
        },
        {
          layer: 'tarapaca-comuna-border',
          opacity: 0
        },
        {
          layer: 'tarapaca',
          opacity: 0
        },
        {
          layer: 'arica',
          opacity: 0
        },
        {
          layer: 'izquierdo-blanco-label',
          opacity: 0
        },
        {
          layer: 'derecho-blanco-label',
          opacity: 0
        },
        {
          layer: 'arica-comuna-label',
          opacity: 0
        },
        {
          layer: 'arica-comuna-border',
          opacity: 0
        },
      ],
      onChapterExit: [],
    },
    {
      id: 'OHiggins',
      title: '',
      image: '',
    //  description: "<div id='tableauViz9' class='tableauPlaceholderfixedtwo'>",
      location: {
        center: [-68.856890, -34.632041],
        zoom: 7.68,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [
        {
          layer: 'regiones-vino',
          opacity: 0
        },
        {
          layer: 'ohiggins-comuna-label',
          opacity: 0
        },
        {
          layer: 'ohiggins-comuna-border',
          opacity: 1
        },
        {
          layer: 'ohiggins',
          opacity: 1
        },
        {
          layer: 'metropolitana-comuna-label',
          opacity: 0
        },
        {
          layer: 'metropolitana-comuna-border',
          opacity: 0
        },
        {
          layer: 'metropolitana',
          opacity: 0
        },
        {
          layer: 'maule-comuna-label',
          opacity: 0
        },
        {
          layer: 'maule-comuna-border',
          opacity: 0
        },
        {
          layer: 'maule',
          opacity: 0
        },
        {
          layer: 'valparaiso-comuna-label',
          opacity: 0
        },
        {
          layer: 'valparaiso-comuna-border',
          opacity: 0
        },
        {
          layer: 'valparaiso',
          opacity: 0
        },
        {
          layer: 'izquierdo-blanco-label',
          opacity: 0
        },
        {
          layer: 'derecho-blanco-label',
          opacity: 0
        },
        {
          layer: 'izquierdo-verde-label',
          opacity: 0
        },
        {
          layer: 'derecho-verde-label',
          opacity: 0
        },
        {
          layer: 'izquierdo-verde-label',
          opacity: 0
        },
        {
          layer: 'derecho-verde-label',
          opacity: 0
        },
      ],
      onChapterExit: [],
    },
    {
      id: 'Maule',
      title: '',
      image: '',
    //  description: "<div id='tableauViz10' class='tableauPlaceholderfixedtwo'>",
      location: {
        center: [-69.586680, -35.867963],
        zoom: 7.60,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [
        {
          layer: 'regiones-vino',
          opacity: 0
        },
        {
          layer: 'maule-comuna-label',
          opacity: 0
        },
        {
          layer: 'maule-comuna-border',
          opacity: 1
        },
        {
          layer: 'maule',
          opacity: 1
        },
        {
          layer: 'biobio-comuna-label',
          opacity: 0
        },
        {
          layer: 'biobio-comuna-border',
          opacity: 0
        },
        {
          layer: 'biobio',
          opacity: 0
        },
        {
          layer: 'ohiggins-comuna-label',
          opacity: 0
        },
        {
          layer: 'ohiggins-comuna-border',
          opacity: 0
        },
        {
          layer: 'ohiggins',
          opacity: 0
        },
        {
          layer: 'metropolitana-comuna-label',
          opacity: 0
        },
        {
          layer: 'metropolitana-comuna-border',
          opacity: 0
        },
        {
          layer: 'metropolitana',
          opacity: 0
        },
        {
          layer: 'izquierdo-blanco-label',
          opacity: 0
        },
        {
          layer: 'derecho-blanco-label',
          opacity: 0
        },
        {
          layer: 'izquierdo-verde-label',
          opacity: 0
        },
        {
          layer: 'derecho-verde-label',
          opacity: 0
        },
        {
          layer: 'izquierdo-verde-label',
          opacity: 0
        },
        {
          layer: 'derecho-verde-label',
          opacity: 0
        },
      ],
      onChapterExit: [],
    },
    {
      id: 'Biobio',
      title: '',
      image: '',
     // description: "<div id='tableauViz11' class='tableauPlaceholderfixedtwo'>",
      location: {
        center: [-69.879351, -37.290672],
        zoom: 7.50,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [
        {
          layer: 'regiones-vino',
          opacity: 0
        },
        {
          layer: 'biobio-comuna-label',
          opacity: 0
        },
        {
          layer: 'biobio-comuna-border',
          opacity: 1
        },
        {
          layer: 'biobio',
          opacity: 1
        },
        {
          layer: 'maule-comuna-label',
          opacity: 0
        },
        {
          layer: 'maule-comuna-border',
          opacity: 0
        },
        {
          layer: 'maule',
          opacity: 0
        },
        {
          layer: 'ohiggins-comuna-label',
          opacity: 0
        },
        {
          layer: 'ohiggins-comuna-border',
          opacity: 0
        },
        {
          layer: 'ohiggins',
          opacity: 0
        },
        {
          layer: 'araucania-comuna-label',
          opacity: 0
        },
        {
          layer: 'araucania-comuna-border',
          opacity: 0
        },
        {
          layer: 'araucania',
          opacity: 0
        },
        {
          layer: 'rios-comuna-label',
          opacity: 0
        },
        {
          layer: 'rios-comuna-border',
          opacity: 0
        },
        {
          layer: 'rios',
          opacity: 0
        },
        {
          layer: 'izquierdo-blanco-label',
          opacity: 0
        },
        {
          layer: 'derecho-blanco-label',
          opacity: 0
        },
        {
          layer: 'izquierdo-verde-label',
          opacity: 0
        },
        {
          layer: 'derecho-verde-label',
          opacity: 0
        },
        {
          layer: 'izquierdo-verde-label',
          opacity: 0
        },
        {
          layer: 'derecho-verde-label',
          opacity: 0
        },
      ],
      onChapterExit: [],
    },
    {
      id: 'Araucania',
      title: '',
      image: '',
    //  description: "<div id='tableauViz12' class='tableauPlaceholderfixedtwo'>",
      location: {
        center: [-70.168000, -38.589445],
        zoom: 7.50,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [
        {
          layer: 'regiones-vino',
          opacity: 0
        },
        {
          layer: 'araucania-comuna-label',
          opacity: 0
        },
        {
          layer: 'araucania-comuna-border',
          opacity: 1
        },
        {
          layer: 'araucania',
          opacity: 1
        },
        {
          layer: 'biobio-comuna-label',
          opacity: 0
        },
        {
          layer: 'biobio-comuna-border',
          opacity: 0
        },
        {
          layer: 'biobio',
          opacity: 0
        },
        {
          layer: 'maule-comuna-label',
          opacity: 0
        },
        {
          layer: 'maule-comuna-border',
          opacity: 0
        },
        {
          layer: 'maule',
          opacity: 0
        },
        {
          layer: 'rios-comuna-label',
          opacity: 0
        },
        {
          layer: 'rios-comuna-border',
          opacity: 0
        },
        {
          layer: 'rios',
          opacity: 0
        },
        {
          layer: 'lagos-comuna-label',
          opacity: 0
        },
        {
          layer: 'lagos-comuna-border',
          opacity: 0
        },
        {
          layer: 'lagos',
          opacity: 0
        },
        {
          layer: 'izquierdo-blanco-label',
          opacity: 0
        },
        {
          layer: 'derecho-blanco-label',
          opacity: 0
        },
        {
          layer: 'izquierdo-verde-label',
          opacity: 0
        },
        {
          layer: 'derecho-verde-label',
          opacity: 0
        },
        {
          layer: 'izquierdo-verde-label',
          opacity: 0
        },
        {
          layer: 'derecho-verde-label',
          opacity: 0
        },
      ],
      onChapterExit: [],
    },
    {
      id: 'Los Rios',
      title: '',
      image: '',
     // description: "<div id='tableauViz13' class='tableauPlaceholderfixedtwo'>",
      location: {
        center: [-70.803000, -40.407000],
        zoom: 7.59,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [
        {
          layer: 'regiones-vino',
          opacity: 0
        },
        {
          layer: 'rios-comuna-label',
          opacity: 0
        },
        {
          layer: 'rios-comuna-border',
          opacity: 1
        },
        {
          layer: 'rios',
          opacity: 1
        },
        {
          layer: 'lagos-comuna-label',
          opacity: 0
        },
        {
          layer: 'lagos-comuna-border',
          opacity: 0
        },
        {
          layer: 'lagos',
          opacity: 0
        },
        {
          layer: 'araucania-comuna-label',
          opacity: 0
        },
        {
          layer: 'araucania-comuna-border',
          opacity: 0
        },
        {
          layer: 'araucania',
          opacity: 0
        },
        {
          layer: 'biobio-comuna-label',
          opacity: 0
        },
        {
          layer: 'biobio-comuna-border',
          opacity: 0
        },
        {
          layer: 'biobio',
          opacity: 0
        },
        {
          layer: 'izquierdo-blanco-label',
          opacity: 0
        },
        {
          layer: 'derecho-blanco-label',
          opacity: 0
        },
        {
          layer: 'izquierdo-verde-label',
          opacity: 0
        },
        {
          layer: 'derecho-verde-label',
          opacity: 0
        },
        {
          layer: 'izquierdo-verde-label',
          opacity: 0
        },
        {
          layer: 'derecho-verde-label',
          opacity: 0
        },
      ],
      onChapterExit: [],
    },

    {
      id: 'Los Lagos',
      title: '',
      image: '',
    //  description: "<div id='tableauViz14' class='tableauPlaceholderfixedtwo'>",
      location: {
        center: [-71.148973, -41.520265],
        zoom: 7.59,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [
        {
          layer: 'regiones-vino',
          opacity: 0
        },
        {
          layer: 'lagos-comuna-label',
          opacity: 0
        },
        {
          layer: 'lagos-comuna-border',
          opacity: 1
        },
        {
          layer: 'lagos',
          opacity: 1
        },
        {
          layer: 'rios-comuna-label',
          opacity: 0
        },
        {
          layer: 'rios-comuna-border',
          opacity: 0
        },
        {
          layer: 'rios',
          opacity: 0
        },
        {
          layer: 'araucania-comuna-label',
          opacity: 0
        },
        {
          layer: 'araucania-comuna-border',
          opacity: 0
        },
        {
          layer: 'araucania',
          opacity: 0
        },
        {
          layer: 'izquierdo-blanco-label',
          opacity: 0
        },
        {
          layer: 'derecho-blanco-label',
          opacity: 0
        },
        {
          layer: 'izquierdo-verde-label',
          opacity: 0
        },
        {
          layer: 'derecho-verde-label',
          opacity: 0
        },
        {
          layer: 'izquierdo-verde-label',
          opacity: 0
        },
        {
          layer: 'derecho-verde-label',
          opacity: 0
        },
      ],
      onChapterExit: [],
    },
    {
      id: 'Final',
      title: '',
      image: '',
   //   description: "<div id='tableauViz15' class='tableauPlaceholderfixedthree'>",
      location: {
        center: [-50.885556, -37.793564],
        zoom: 4.50,
        pitch: 23.50,
        bearing: 16.19
      },
      onChapterEnter: [
        {
          layer: 'arica',
          opacity: 0
        },
        {
          layer: 'tarapaca',
          opacity: 0
        },
        {
          layer: 'tarapaca-comuna-label',
          opacity: 0
        },
        {
          layer: 'tarapaca-comuna-border',
          opacity: 0
        },
        {
          layer: 'arica-comuna-label',
          opacity: 0
        },
        {
          layer: 'arica-comuna-border',
          opacity: 0
        },
        {
          layer: 'antofagasta-comuna-label',
          opacity: 0
        },
        {
          layer: 'antofagasta-comuna-border',
          opacity: 0
        },
        {
          layer: 'antofagasta',
          opacity: 0
        },
        {
          layer: 'atacama-comuna-label',
          opacity: 0
        },
        {
          layer: 'atacama-comuna-border',
          opacity: 0
        },
        {
          layer: 'atacama',
          opacity: 0
        },
        {
          layer: 'coquimbo-comuna-label',
          opacity: 0
        },
        {
          layer: 'coquimbo-comuna-border',
          opacity: 0
        },
        {
          layer: 'coquimbo',
          opacity: 0
        },
        {
          layer: 'metropolitana-comuna-label',
          opacity: 0
        },
        {
          layer: 'metropolitana-comuna-border',
          opacity: 0
        },
        {
          layer: 'metropolitana',
          opacity: 0
        },
        {
          layer: 'valparaiso-comuna-label',
          opacity: 0
        },
        {
          layer: 'valparaiso-comuna-border',
          opacity: 0
        },
        {
          layer: 'valparaiso',
          opacity: 0
        },
        {
          layer: 'maule-comuna-label',
          opacity: 0
        },
        {
          layer: 'maule-comuna-border',
          opacity: 0
        },
        {
          layer: 'maule',
          opacity: 0
        },
        {
          layer: 'ohiggins-comuna-label',
          opacity: 0
        },
        {
          layer: 'ohiggins-comuna-border',
          opacity: 0
        },
        {
          layer: 'ohiggins',
          opacity: 0
        },
        {
          layer: 'biobio-comuna-label',
          opacity: 0
        },
        {
          layer: 'biobio-comuna-border',
          opacity: 0
        },
        {
          layer: 'biobio',
          opacity: 0
        },
        {
          layer: 'maule-comuna-label',
          opacity: 0
        },
        {
          layer: 'maule-comuna-border',
          opacity: 0
        },
        {
          layer: 'maule',
          opacity: 0
        },
        {
          layer: 'lagos-comuna-label',
          opacity: 0
        },
        {
          layer: 'lagos-comuna-border',
          opacity: 0
        },
        {
          layer: 'lagos',
          opacity: 0
        },
        {
          layer: 'rios-comuna-label',
          opacity: 0
        },
        {
          layer: 'rios-comuna-border',
          opacity: 0
        },
        {
          layer: 'rios',
          opacity: 0
        },
        {
          layer: 'araucania-comuna-label',
          opacity: 0
        },
        {
          layer: 'araucania-comuna-border',
          opacity: 0
        },
        {
          layer: 'araucania',
          opacity: 0
        },
        {
          layer: 'izquierdo-blanco-label',
          opacity: 1
        },
        {
          layer: 'derecho-blanco-label',
          opacity: 1
        },
        {
          layer: 'regiones-vino',
          opacity: 1
        },

      ],
      onChapterExit: [],
    },
  ],
};