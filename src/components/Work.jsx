export default function Work() {
  return (
    <section className="sec" id="work">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">03 // Log</div>
          <h2>Experience</h2>
        </div>

        <div className="timeline reveal">
          <div className="tl-item tl-group">
            <div className="tl-date">JUL 2025 — PRESENT</div>
            <div className="tl-role">EAGE Technologies India Pvt. Ltd. <span className="tl-badge">Intern → Full-Time</span>
            </div>
            <div className="tl-co">Bengaluru</div>

            <div className="tl-subtrack">
              <div className="tl-subitem">
                <div className="tl-subdate">FEB 2026 — PRESENT</div>
                <div className="tl-subrole">AI Software Engineer</div>
                <ul className="tl-list">
                  <li>Solar Intelligence Platform — LightGBM &amp; LSTM forecasting on 12 years of historical data, reaching 89% / 80% evaluation scores with drift-monitored retraining triggers</li>
                  <li>Rule-based risk logic + LLM summarization layer turning forecast &amp; sensor data into natural-language operational recommendations</li>
                  <li>Real-time CV pipeline (YOLOv8, InsightFace, FAISS) for face detection, distance estimation &amp; object detection — integrated into an STM32 hardware pipeline for a client defense application</li>
                  <li>Agri-Soil Intelligence — GSM-based IoT ingestion with a threshold-based soil health &amp; crop advisory engine across two pilot sites, no historical data required</li>
                </ul>
              </div>

              <div className="tl-subitem">
                <div className="tl-subdate">JUL 2025 — JAN 2026</div>
                <div className="tl-subrole">R&amp;D Intern</div>
                <ul className="tl-list">
                  <li>ML/DL R&amp;D across predictive analytics, computer vision &amp; forecasting</li>
                  <li>Model evaluation through structured experimentation &amp; performance validation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-date">SEP 2024 — JUN 2025</div>
            <div className="tl-role">AI &amp; Frontend Intern</div>
            <div className="tl-co">Code Nimbus Solutions Pvt. Ltd. · Bengaluru</div>
            <ul className="tl-list">
              <li>Facial recognition pipelines — deep learning + embeddings</li>
              <li>UI for AI model output visualization &amp; workflows</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}