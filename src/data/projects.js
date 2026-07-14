export const projects = [
  {
    id: 'solar',
    index: 'BUILD / 01',
    group: 'work',
    title: 'Solar Intelligence Platform',
    tagline: 'Solar Management, Redefined.',
    desc: 'Forecasting models, digital twin simulation & LLM-assisted reasoning for operational decision support.',
    tags: ['Forecasting', 'Digital Twin', 'LLM Reasoning'],
    modalTags: ['Forecasting', 'Digital Twin', 'LLM Reasoning · SIYA', 'Grid Management', 'Battery Storage'],
    eyebrow: 'BUILD / 01 · WORK',
    hasIso: true,
    body: [
      'Urja Setu is a solar operations platform that gives plant operators a live digital twin of the site — every panel row, inverter and battery bank mirrored in a 3D model that updates as sensor data streams in, so problems like an underperforming row or an overheating inverter surface immediately instead of during the next manual inspection.',
      'On top of the twin sits SIYA, an LLM-based assistant that turns raw telemetry into plain-language guidance — yield outlooks, storage optimization suggestions, and early warnings ahead of peak demand — so decisions that used to need a spreadsheet and a specialist take seconds instead.'
    ],
    points: [
      { k: 'Forecasting', v: 'Time-series models project short-term power output and flag deviations early.' },
      { k: 'Digital Twin', v: "A live 3D mirror of the plant's panels, inverters and grid nodes for at-a-glance health." },
      { k: 'LLM Decision Support', v: 'SIYA answers operational questions and recommends actions in natural language.' },
      { k: 'Grid & Storage', v: 'Live load balancing across grid nodes plus battery charge / discharge tracking.' }
    ]
  },
  {
    id: 'soil',
    index: 'BUILD / 02',
    group: 'work',
    title: 'Soil Intelligence Platform',
    tagline: 'Ground truth, intelligently.',
    desc: 'IoT sensor ingestion, climate risk assessment & LLM-powered advisory for agricultural decisions.',
    tags: ['IoT', 'Predictive Analytics', 'LLM Advisory'],
    modalTags: ['IoT', 'Predictive Analytics', 'LLM Advisory', 'Climate Risk'],
    eyebrow: 'BUILD / 02 · WORK',
    hasIso: false,
    body: [
      'An agricultural intelligence layer that continuously ingests readings from in-field IoT sensor arrays — moisture, temperature, nutrients and micro-climate — to build a live soil health profile for each plot.',
      'A climate-risk model overlays short-term weather forecasts to surface drought or water-logging risk early, while an LLM advisory turns the combined signal into plain-language recommendations on irrigation, fertilization and crop rotation timing.'
    ],
    points: [
      { k: 'IoT Ingestion', v: 'Streams sensor data from distributed field nodes into a unified soil profile.' },
      { k: 'Predictive Analytics', v: 'Models soil health trends and forecasts yield-limiting conditions.' },
      { k: 'Climate Risk', v: 'Flags drought and water-logging exposure ahead of weather shifts.' },
      { k: 'LLM Advisory', v: 'Converts telemetry into actionable farming guidance.' }
    ]
  },
  {
    id: 'helm',
    index: 'BUILD / 03',
    group: 'work',
    title: 'HelmSecure',
    tagline: 'Vision that guards the gate.',
    desc: 'Real-time computer vision system for helmet detection & rider authentication.',
    tags: ['Computer Vision', 'Deep Learning', 'Real-time'],
    modalTags: ['Computer Vision', 'Deep Learning', 'Real-time', 'Object Detection'],
    eyebrow: 'BUILD / 03 · WORK',
    hasIso: false,
    body: [
      'HelmSecure is an edge-deployed computer vision pipeline that monitors entry points in real time, detecting whether riders are wearing helmets and authenticating them against a registered roster.',
      'A detection model localizes riders and helmets frame-by-frame, while a lightweight embedding head matches identities — all running with low latency so alerts and gate actions fire within the moment, not after the fact.'
    ],
    points: [
      { k: 'Detection', v: 'Real-time localization of riders and helmet state per frame.' },
      { k: 'Deep Learning', v: 'Trained detection + embedding models for robust inference.' },
      { k: 'Authentication', v: 'Matches detected riders to a trusted roster.' },
      { k: 'Edge Ready', v: 'Low-latency inference suitable for on-site deployment.' }
    ]
  },
  {
    id: 'oss',
    index: 'BUILD / OS-01',
    group: 'oss',
    title: 'Your Next Open-Source Build',
    tagline: '',
    desc: "This slot is reserved for a public repository — a library, tool, or experiment you've built and maintained in the open. Share the repo name, description, and stack, and it goes straight in here.",
    tags: ['Add Repo'],
    modalTags: [],
    eyebrow: 'BUILD / OS-01 · OPEN SOURCE',
    empty: true,
    hasIso: false,
    body: [
      "This slot is reserved for a public repository — a library, tool, or experiment you've built and maintained in the open. Share the repo name, description, and stack, and it goes straight in here."
    ],
    points: []
  }
];
