export const projects = [
  {
    id: 'solar',
    index: 'BUILD / 01',
    group: 'work',
    title: 'Solar Intelligence Platform',
    tagline: 'Solar Management, Redefined.',
    desc: 'LightGBM & LSTM forecasting (89% / 80% eval) plus a digital twin & LLM-assisted reasoning for operational decision support.',
    tags: ['LightGBM · LSTM', 'Digital Twin', 'LLM Reasoning'],
    modalTags: ['LightGBM · LSTM Forecasting', 'Digital Twin', 'LLM Reasoning · SIYA', 'Grid Management', 'Battery Storage'],
    eyebrow: 'BUILD / 01 · WORK',
    scene: 'solar',
    body: [
      'Urja Setu is a solar operations platform that gives plant operators a live digital twin of the site — every panel row, inverter and battery bank mirrored in a 3D model that updates as sensor data streams in, so problems like an underperforming row or an overheating inverter surface immediately instead of during the next manual inspection.',
      'Underneath, LightGBM and LSTM models forecast power output from twelve years of location-based historical data — reaching 89% and 80% evaluation scores respectively — with drift-monitored retraining triggers keeping accuracy steady over time. A rule-based risk layer combines with SIYA, an LLM summarization assistant, to turn that forecast and live sensor data into plain-language operational guidance instead of a spreadsheet only a specialist could read.'
    ],
    points: [
      { k: 'Forecasting', v: 'LightGBM & LSTM models trained on 12 years of historical data forecast power output at 89% / 80% evaluation scores, with drift-monitored retraining triggers.' },
      { k: 'Digital Twin', v: "A live 3D mirror of the plant's panels, inverters and grid nodes for at-a-glance health." },
      { k: 'LLM Decision Support', v: "Rule-based risk logic + SIYA's LLM summarization turn forecast & sensor data into natural-language operational recommendations." },
      { k: 'Grid & Storage', v: 'Live load balancing across grid nodes plus battery charge / discharge tracking.' }
    ]
  },
  {
    id: 'soil',
    index: 'BUILD / 02',
    group: 'work',
    title: 'Soil Intelligence Platform',
    tagline: 'Ground truth, intelligently.',
    desc: 'GSM-based IoT ingestion with a threshold-based rule engine for soil health, crop recommendation & disease risk — across two pilot sites, no historical data required.',
    tags: ['IoT', 'Threshold Engine', 'Climate Risk'],
    modalTags: ['IoT', 'GSM Ingestion', 'Threshold Rules', 'Climate Risk', 'Disease Risk'],
    eyebrow: 'BUILD / 02 · WORK',
    hasIso: false,
    body: [
      'An agricultural intelligence layer that ingests readings from GSM-connected IoT sensors deployed in the field — moisture, temperature, and other soil parameters — building a live profile for each pilot plot without relying on any historical training data.',
      'A threshold-based rule engine, layered with location and climate APIs, flags soil health issues, recommends crops, and estimates disease risk — turning raw sensor signal into a plain, actionable read across two active pilot locations.'
    ],
    points: [
      { k: 'IoT Ingestion', v: 'Streams GSM-based sensor readings from distributed field nodes into a live soil profile.' },
      { k: 'Threshold Engine', v: 'Rule-based logic — not a trained model — flags health issues and recommends crops from live thresholds.' },
      { k: 'Climate Risk', v: 'Overlays location and climate APIs to assess drought, water-logging and disease risk.' },
      { k: 'Pilot Deployment', v: 'Running across two pilot locations, built without historical training data.' }
    ]
  },
  {
    id: 'defense',
    index: 'BUILD / 03',
    group: 'work',
    title: 'Defense Surveillance',
    tagline: 'Vision hardened for the field.',
    desc: 'Real-time computer vision — face detection, distance estimation & object detection — deployed on STM32 hardware for a client defense application.',
    tags: ['Computer Vision', 'Embedded · STM32', 'IR Imaging'],
    modalTags: ['YOLOv8', 'InsightFace', 'FAISS', 'STM32', 'IR Detection'],
    eyebrow: 'BUILD / 03 · WORK',
    hasIso: false,
    body: [
      'A real-time computer vision system built for a client defense application, integrating pretrained YOLOv8 for object and face detection, InsightFace for facial embeddings, and FAISS for fast similarity search — running face detection, distance estimation, and object detection, including against IR imagery, in a single pipeline.',
      'The vision stack is deployed on STM32 embedded hardware as part of a full hardware-software integration pipeline, so detection and distance estimation run directly on the target device rather than on a separate compute layer.'
    ],
    points: [
      { k: 'Detection', v: 'YOLOv8-based face and object detection, including on IR imagery.' },
      { k: 'Recognition', v: 'InsightFace embeddings matched via FAISS for fast identity search.' },
      { k: 'Distance Estimation', v: 'Estimates subject distance in real time alongside detection.' },
      { k: 'Embedded Deployment', v: 'Runs on STM32 hardware as part of an integrated hardware-software pipeline.' }
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