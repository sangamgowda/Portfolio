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
              <li>Built an LLM decision layer for a solar forecasting platform: LangChain function calling over LightGBM/LSTM forecasts and rule-based risk logic, returning structured JSON operational directives and risk alerts.</li>
              <li>Trained LightGBM and LSTM solar forecasters on 12 years of location-based data (R-squared 0.89 / 0.80, time-based split), with performance-ratio drift monitoring and retraining triggers.</li>
              <li>Built a real-time computer vision pipeline (YOLOv8, InsightFace, FAISS) as a standalone system connected to STM32 hardware, together forming an end-to-end defense demo application.</li>
              <li>Designed an Agri-Soil intelligence engine for IoT sensor data with no historical baseline, using cold-start threshold logic and climate API pipelines across 2 pilot locations.</li>
              <li>Presented project benefits, technical specifications and pilot demos to the business team to show each project's value.</li>
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