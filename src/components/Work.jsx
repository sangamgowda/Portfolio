export default function Work() {
  return (
    <section className="sec" id="work">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">03 // Log</div>
          <h2>Experience</h2>
        </div>

        <div className="timeline reveal">
          <div className="tl-item">
            <div className="tl-date">JUL 2025 — OCT 2026</div>
            <div className="tl-role">AI Software Engineer</div>
            <div className="tl-co">EAGE Technologies India Pvt. Ltd. · Bengaluru, KA</div>
            <ul className="tl-list">
              <li>Architected an agentic decision pipeline integrating LightGBM/LSTM forecasts with rule-based risk logic and LLM function calling, generating operational directives and automated risk alerts for solar assets.</li>
              <li>Built a LangChain reasoning pipeline that queries forecast data stored in a database and answers user questions with structured JSON outputs.</li>
              <li>Built and benchmarked LightGBM and LSTM forecasting models for solar power output using 12 years of location-based historical data, reaching evaluation scores of 89% and 80% (R²) respectively, and designed retraining triggers and performance-ratio-based drift monitoring.</li>
              <li>Designed an IoT-to-cloud Agri-Soil Intelligence engine under zero-historical-data constraints, engineering cold-start threshold logic and location-based climate API pipelines for 2 pilot locations.</li>
              <li>Presented operations workflows, technical specifications, and pilot demos to stakeholders and engineering leads.</li>
              <li>Built a real-time computer vision pipeline (YOLOv8, InsightFace, FAISS) for face detection, distance estimation, and object detection as an independent software pipeline, connected to STM32 hardware to complete the end-to-end hardware-software system for a defense demo application.</li>
            </ul>
          </div>

          <div className="tl-item">
            <div className="tl-date">SEP 2024 — JUN 2025</div>
            <div className="tl-role">AI &amp; Frontend Intern</div>
            <div className="tl-co">Code Nimbus Solutions Pvt. Ltd. · Bengaluru, KA</div>
            <ul className="tl-list">
              <li>Built AI-powered facial recognition pipelines using deep learning and embedding extraction techniques.</li>
              <li>Developed user interfaces for AI applications, enabling visualization of model outputs and operational workflows.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}