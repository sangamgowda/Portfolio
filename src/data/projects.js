export const projects = [
  {
    id: 'evops',
    index: 'BUILD / OS-01',
    group: 'oss',
    title: 'EV Ops Copilot',
    tagline: 'Answers you can trace.',
    desc: 'Agentic RAG assistant for EV operations teams. Answers diagnostic and sales questions with every claim cited to its source, measured on held-out questions with significance testing.',
    tags: ['Agentic RAG', 'Hybrid Retrieval', 'LLM Evals'],
    modalTags: ['LangGraph', 'MCP', 'BM25 + pgvector', 'Cross-encoder Re-ranking', 'LLM-as-Judge', 'Langfuse', 'FastAPI', 'Docker'],
    eyebrow: 'BUILD / OS-01 · INDEPENDENT',
    scene: 'evops',
    hasIso: false,
    repo: 'https://github.com/sangamgowda/EV-Ops-Copilot',
    body: [
      'A LangGraph agent that answers EV diagnostic and sales questions by planning, querying and re-checking its evidence in up to 3 rounds, with every claim cited to its source. It runs on a 1.5M-row synthetic fleet dataset with planted faults as ground truth.',
      'It is measured on held-out questions with significance testing and traced end to end.'
    ],
    points: [
      { k: 'Evaluation', v: 'An evaluation pipeline (46 golden, 48 held-out, 8 trap questions) scored by code checks and an LLM judge that agrees with human labels 90% of the time; a paired significance test showed an apparent 56.5% to 65.2% gain was run-to-run noise (8 answers fixed, 8 broken), stopping a false improvement.' },
      { k: 'Hybrid Retrieval', v: 'Hybrid retrieval (BM25 + pgvector semantic search) with cross-encoder re-ranking and structure-aware chunking over service bulletins and manuals.' },
      { k: 'Safe SQL via MCP', v: 'Database access isolated behind an MCP server; SQL written by the LLM is validated before it runs (read-only, allow-listed tables, cost limit), and planner-prompt rules cut rejected queries from about 21 to 4 per run.' },
      { k: 'Observability & Cost', v: 'Langfuse tracing, p95 latency and cost-per-question dashboards, and cost-based model routing (20B model for routing, 120B for answers); served through FastAPI with streaming, in Docker.' }
    ]
  },
  {
    id: 'solar',
    index: 'BUILD / 01',
    group: 'work',
    title: 'Solar Intelligence Platform',
    tagline: 'Solar Management, Redefined.',
    desc: 'An LLM decision layer over LightGBM & LSTM solar forecasts (R-squared 0.89 / 0.80) and rule-based risk logic, returning structured JSON operational directives and risk alerts.',
    tags: ['LLM Decision Layer', 'LightGBM · LSTM', 'Drift Monitoring'],
    modalTags: ['LangChain Function Calling', 'Structured JSON', 'LightGBM · LSTM Forecasting', 'Risk Rules', 'Drift Monitoring'],
    eyebrow: 'BUILD / 01 · WORK',
    scene: 'solar',
    body: [
      'A forecasting and decision-support platform for solar operations. Operators get forecasted power output alongside rule-based risk analysis, so underperformance and operational risks surface early.',
      'Underneath, LightGBM and LSTM solar forecasters are trained on 12 years of location-based data (R-squared 0.89 / 0.80, time-based split), with performance-ratio drift monitoring and retraining triggers. An LLM decision layer uses LangChain function calling over the forecasts and rule-based risk logic, returning structured JSON operational directives and risk alerts.'
    ],
    points: [
      { k: 'Forecasting', v: 'LightGBM & LSTM solar forecasters trained on 12 years of location-based data (R-squared 0.89 / 0.80, time-based split), with performance-ratio drift monitoring and retraining triggers.' },
      { k: 'Risk Analysis', v: 'Rule-based risk logic flags operational risks and generates automated alerts for solar assets.' },
      { k: 'LLM Decision Layer', v: 'LangChain function calling over forecasts and rule-based risk logic, returning structured JSON operational directives and risk alerts.' }
    ]
  },
  {
    id: 'defense',
    index: 'BUILD / 02',
    group: 'work',
    title: 'Defense Surveillance',
    tagline: 'Vision hardened for the field.',
    desc: 'Real-time computer vision — face detection, distance estimation & object detection — built as a standalone system connected to STM32 hardware, together forming an end-to-end defense demo application.',
    tags: ['Computer Vision', 'STM32 Integration', 'IR Imaging'],
    modalTags: ['YOLOv8', 'InsightFace', 'FAISS', 'STM32', 'IR Detection'],
    eyebrow: 'BUILD / 02 · WORK',
    hasIso: false,
    body: [
      'A real-time computer vision system built as a defense demo application, integrating pretrained YOLOv8 for object and face detection, InsightFace for facial embeddings, and FAISS for fast similarity search — running face detection, distance estimation, and object detection, including against IR imagery, in a single pipeline.',
      'The vision stack runs as a standalone system connected to STM32 hardware; together they form an end-to-end defense demo application.'
    ],
    points: [
      { k: 'Detection', v: 'YOLOv8-based face and object detection, including on IR imagery.' },
      { k: 'Recognition', v: 'InsightFace embeddings matched via FAISS for fast identity search.' },
      { k: 'Distance Estimation', v: 'Estimates subject distance in real time alongside detection.' },
      { k: 'Hardware Integration', v: 'The standalone vision system is connected to STM32 hardware, together forming one end-to-end application.' }
    ]
  },
  {
    id: 'soil',
    index: 'BUILD / 03',
    group: 'work',
    title: 'Soil Intelligence Platform',
    tagline: 'Ground truth, intelligently.',
    desc: 'An Agri-Soil intelligence engine for IoT sensor data with no historical baseline, using cold-start threshold logic and climate API pipelines across 2 pilot locations.',
    tags: ['IoT', 'Threshold Engine', 'Climate Risk'],
    modalTags: ['IoT', 'GSM Ingestion', 'Threshold Rules', 'Climate Risk', 'Disease Risk'],
    eyebrow: 'BUILD / 03 · WORK',
    hasIso: false,
    body: [
      'An agricultural intelligence layer that ingests readings from GSM-connected IoT sensors deployed in the field — moisture, temperature, and other soil parameters — building a live profile for each pilot plot from the first reading.',
      'A threshold-based rule engine, layered with location and climate APIs, flags soil health issues, recommends crops, and estimates disease risk — turning raw sensor signal into a plain, actionable read across 2 pilot locations.'
    ],
    points: [
      { k: 'IoT Ingestion', v: 'Streams GSM-based sensor readings from distributed field nodes into a live soil profile.' },
      { k: 'Threshold Engine', v: 'Rule-based logic flags health issues and recommends crops from live thresholds.' },
      { k: 'Climate Risk', v: 'Overlays location and climate APIs to assess drought, water-logging and disease risk.' },
      { k: 'Pilot Scope', v: 'Cold-start threshold logic with no historical baseline, across 2 pilot locations.' }
    ]
  }
];
