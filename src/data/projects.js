export const projects = [
  {
    id: 'solar',
    index: 'BUILD / 01',
    group: 'work',
    title: 'Solar Intelligence Platform',
    tagline: 'Solar Management, Redefined.',
    desc: 'LightGBM & LSTM forecasting (89% / 80% eval) with rule-based risk analysis and an LLM advisory layer for operational decision support.',
    tags: ['LightGBM · LSTM', 'Drift Monitoring', 'LLM Advisory'],
    modalTags: ['LightGBM · LSTM Forecasting', 'Risk Rules', 'LLM Advisory', 'Drift Monitoring'],
    eyebrow: 'BUILD / 01 · WORK',
    scene: 'solar',
    body: [
      'A forecasting and decision-support platform for solar operations. Operators get forecasted power output alongside rule-based risk analysis, so underperformance and operational risks surface early.',
      'Underneath, LightGBM and LSTM models forecast power output from twelve years of location-based historical data — reaching 89% and 80% evaluation scores respectively — with drift-monitored retraining triggers keeping accuracy steady over time. A rule-based risk layer and an LLM-generated advisory layer turn the forecasts into plain-language operational guidance.'
    ],
    points: [
      { k: 'Forecasting', v: 'LightGBM & LSTM models trained on 12 years of historical data forecast power output at 89% / 80% evaluation scores, with drift-monitored retraining triggers.' },
      { k: 'Risk Analysis', v: 'Rule-based risk logic flags operational risks and generates automated alerts for solar assets.' },
      { k: 'LLM Advisory', v: 'An LLM layer with function calling turns forecasts and risk output into natural-language operational directives.' }
    ]
  },
  {
    id: 'soil',
    index: 'BUILD / 02',
    group: 'work',
    title: 'Soil Intelligence Platform',
    tagline: 'Ground truth, intelligently.',
    desc: 'GSM-based IoT ingestion with a threshold-based rule engine for soil health, crop recommendation & disease risk — across two pilot sites.',
    tags: ['IoT', 'Threshold Engine', 'Climate Risk'],
    modalTags: ['IoT', 'GSM Ingestion', 'Threshold Rules', 'Climate Risk', 'Disease Risk'],
    eyebrow: 'BUILD / 02 · WORK',
    hasIso: false,
    body: [
      'An agricultural intelligence layer that ingests readings from GSM-connected IoT sensors deployed in the field — moisture, temperature, and other soil parameters — building a live profile for each pilot plot from the first reading.',
      'A threshold-based rule engine, layered with location and climate APIs, flags soil health issues, recommends crops, and estimates disease risk — turning raw sensor signal into a plain, actionable read across two active pilot locations.'
    ],
    points: [
      { k: 'IoT Ingestion', v: 'Streams GSM-based sensor readings from distributed field nodes into a live soil profile.' },
      { k: 'Threshold Engine', v: 'Rule-based logic flags health issues and recommends crops from live thresholds.' },
      { k: 'Climate Risk', v: 'Overlays location and climate APIs to assess drought, water-logging and disease risk.' },
      { k: 'Pilot Deployment', v: 'Running across two pilot locations.' }
    ]
  },
  {
    id: 'defense',
    index: 'BUILD / 03',
    group: 'work',
    title: 'Defense Surveillance',
    tagline: 'Vision hardened for the field.',
    desc: 'Real-time computer vision — face detection, distance estimation & object detection — built as a standalone software pipeline with STM32 hardware connected, for a client defense application.',
    tags: ['Computer Vision', 'STM32 Integration', 'IR Imaging'],
    modalTags: ['YOLOv8', 'InsightFace', 'FAISS', 'STM32', 'IR Detection'],
    eyebrow: 'BUILD / 03 · WORK',
    hasIso: false,
    body: [
      'A real-time computer vision system built for a client defense application, integrating pretrained YOLOv8 for object and face detection, InsightFace for facial embeddings, and FAISS for fast similarity search — running face detection, distance estimation, and object detection, including against IR imagery, in a single pipeline.',
      'The vision stack is engineered as an independent software pipeline, with STM32 embedded hardware connected to the system to complete the end-to-end hardware-software pipeline.'
    ],
    points: [
      { k: 'Detection', v: 'YOLOv8-based face and object detection, including on IR imagery.' },
      { k: 'Recognition', v: 'InsightFace embeddings matched via FAISS for fast identity search.' },
      { k: 'Distance Estimation', v: 'Estimates subject distance in real time alongside detection.' },
      { k: 'Hardware Integration', v: 'STM32 embedded hardware is connected to the software pipeline to complete the hardware-software system.' }
    ]
  },
  {
    id: 'evops',
    index: 'BUILD / OS-01',
    group: 'oss',
    title: 'EV Ops Copilot',
    tagline: 'Answers you can trace.',
    desc: 'Agentic RAG assistant for EV ops teams. It diagnoses vehicle issues and answers sales questions from telemetry and documents, with cited answers and validated queries.',
    tags: ['Agentic RAG', 'SQL Validation', 'LLM Evals'],
    modalTags: ['LangGraph', 'MCP', 'Hybrid Search', 'PostgreSQL · pgvector', 'Langfuse', 'LLM-as-Judge', 'FastAPI', 'Docker'],
    eyebrow: 'BUILD / OS-01 · INDEPENDENT',
    scene: 'evops',
    hasIso: false,
    body: [
      "Diagnosing why an EV underperforms usually means digging through telemetry, service records and documents by hand. EV Ops Copilot works through it in steps. It understands the question, plans, looks up data, reviews whether it has enough, and digs further (up to three rounds) before answering.",
      "It compares live telemetry against model baselines, explains likely causes from service bulletins through hybrid search with re-ranking, and cites each point to its source. When data is missing, it names what's missing."
    ],
    points: [
      { k: 'Grounded Answers', v: 'Each claim links to the query or document passage behind it, and partial answers are labelled.' },
      { k: 'SQL Validation', v: 'AST validation, a cost gate, and a read-only role with a timeout on every generated query.' },
      { k: 'Evaluation', v: 'A golden dataset with hallucination test cases, LLM-as-judge scoring, and regression comparison between runs.' },
      { k: 'Reliability & Cost', v: 'Model tiering with a fallback behind a circuit breaker, rate-paced calls, Langfuse tracing, and Docker/CI deployment.' }
    ]
  }
];
