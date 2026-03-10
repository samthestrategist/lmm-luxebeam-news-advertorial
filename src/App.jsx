import './App.css'

const CHECKOUT_URL = 'https://orthocliner.myshopify.com/cart/48083744260251:1?discount=SECRET25'

const IMG = {
  expert: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/expert-authority-dermatologist.png',
  clinicalLab: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/clinical-study-lab.png',
  skinCells: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/skin-cell-microscope.png',
  patient: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/patient-treatment.png',
  comparisonTreat: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/comparison-treatments.png',
  demographic: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/demographic-women.png',
  informed: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/informed-reader-mask-subtle.png',
  fda: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/fda-clinical-setting.png',
  homeVsClinic: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/home-vs-clinic-split.png',
  journalist: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/journalist-research-desk.png',
  clinicalComp: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/clinical-comparison.png',
  timeline: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/results-timeline.png',
}

function CTAButton({ text = 'GET 25% OFF LuxeBeam — CHECK AVAILABILITY' }) {
  return (
    <div className="cta-wrap">
      <a href={CHECKOUT_URL} className="cta-btn">{text}</a>
    </div>
  )
}

function App() {
  return (
    <div className="advertorial">
      <div className="disclosure-bar"><span>Advertorial</span></div>
      <div className="trending-bar"><span>🇺🇸 Trending in the United States</span></div>
      <div className="urgency-banner">
        <span>⚠️ <strong className="urgency-red">UPDATE:</strong> LuxeBeam™ is <strong className="urgency-red">SELLING OUT</strong> faster than expected. If the link below works, they're still in stock. <a href={CHECKOUT_URL}>Check Availability →</a></span>
      </div>

      <main className="content"><article>
        <h1>Board-Certified Dermatologist: "The Best Method To Reverse Visible Skin Aging at Home Without Needles or Expensive Treatments"</h1>
        <p className="hero-sub">If you have fine lines, loss of firmness, dull tone, or visible wrinkles — read this before spending another dollar on serums.</p>

        <div className="as-seen-on">
          <span className="aso-label">AS SEEN ON:</span>
          <span className="aso-logos">Dermatology Times &nbsp;•&nbsp; American Academy of Dermatology &nbsp;•&nbsp; Healthline &nbsp;•&nbsp; WebMD</span>
        </div>

        <div className="byline">
          <img src={IMG.expert} alt="Dr. Catherine Ellis, Board-Certified Dermatologist" className="author-img" loading="lazy" />
          <div>
            <p className="author-name">By <strong>Dr. Catherine Ellis, MD, FAAD</strong> — Board-Certified Dermatologist</p>
            <p className="author-meta">Reviewed &amp; Fact-Checked ✓ &nbsp;|&nbsp; March 3, 2026</p>
          </div>
        </div>

        <div className="body-section">
          <p>Hello, I'm Dr. Catherine Ellis.</p>
          <p>I've practiced dermatology for 22 years in New York. I've treated over 30,000 patients. I specialize in aging skin — the fine lines, the firmness loss, the dullness that starts showing in your late 30s and accelerates through your 40s and 50s.</p>
          <p>And I'm going to tell you something that might save you thousands of dollars.</p>
          <div className="highlight"><strong>Most of what you're spending on anti-aging skincare is being wasted.</strong></div>
          <p>Not because the products are bad. But because they physically cannot reach the cells responsible for skin aging.</p>
          <p>Let me show you what I mean.</p>
        </div>

        <h2>The 4 Stages of Visible Skin Aging</h2>
        <img src={IMG.demographic} alt="The four stages of visible skin aging in women" className="full-img" loading="lazy" />
        <div className="body-section">
          <p>Which stage looks most like your skin?</p>
          <p>If you're anywhere from Stage 1 to Stage 3, there's a window of opportunity. Your fibroblasts — the cells that produce collagen and elastin — are still active. They just need energy.</p>
          <p>If you've reached Stage 4, the same approach can still make meaningful improvements, but expectations should be adjusted.</p>
          <p>Here's the critical thing: <strong>the progression from one stage to the next is accelerating.</strong> After age 30, you lose approximately 1-1.5% of your collagen every year. By 50, you've lost 25-30% of your total collagen. And it's not linear — it speeds up after menopause.</p>
        </div>

        <h2>Why Your Skincare Products Can't Stop This (No Matter How Expensive They Are)</h2>
        <div className="body-section">
          <p>I tell my patients this on a weekly basis, and most of them are shocked:</p>
          <div className="highlight"><strong>Collagen is produced by fibroblasts. Fibroblasts live in the dermis — 1-4mm below the surface. No topical product on Earth can reach them.</strong></div>
          <p>Your serum? It works on the epidermis — the outermost 0.1mm of your skin. That's less than the thickness of a sheet of paper.</p>
          <p>This isn't a quality issue. A $20 moisturizer and a $200 serum have the same penetration limitation. The skin's barrier function is designed to keep foreign substances OUT. That's its job. Your $80 Vitamin C serum is doing what it can — protecting the surface, providing antioxidants, mild brightening. But it cannot build new collagen in the dermis. Physically impossible.</p>
        </div>
        <img src={IMG.skinCells} alt="Cross-section diagram of skin layers showing where serums stop vs where aging happens" className="full-img" loading="lazy" />

        <h2>The Approach That Actually Reaches Your Collagen-Producing Cells</h2>
        <div className="body-section">
          <p>In my practice, I've watched one modality consistently outperform topicals for non-invasive skin rejuvenation: <strong>photobiomodulation</strong> — more commonly known as red and near-infrared light therapy.</p>
          <p>This isn't new technology. NASA funded the initial research in the 1990s for wound healing in space. Since then, over 5,000 peer-reviewed studies have investigated its effects on human tissue.</p>
          <p>The mechanism is well-understood:</p>
        </div>
        <div className="steps">
          <div className="step"><span className="step-n">1</span><p><strong>Red light (630-660nm) and near-infrared light (830-850nm)</strong> penetrate the skin at depths of 4-10mm — reaching well into the dermis where fibroblasts reside.</p></div>
          <div className="step"><span className="step-n">2</span><p>These specific wavelengths are absorbed by an enzyme in the mitochondria called <strong>cytochrome c oxidase</strong> (CCO). This is the same enzyme that drives cellular respiration.</p></div>
          <div className="step"><span className="step-n">3</span><p>CCO activation increases ATP (adenosine triphosphate) production — the cell's primary energy currency. Studies show ATP production can increase by <strong>up to 200%</strong>.</p></div>
          <div className="step"><span className="step-n">4</span><p>Energized fibroblasts resume robust collagen and elastin synthesis. Not a surface treatment. <strong>Actual structural protein production from the inside out.</strong></p></div>
        </div>
        <img src={IMG.clinicalLab} alt="Clinical laboratory studying photobiomodulation and cellular mechanisms" className="full-img" loading="lazy" />

        <h2>Healthy vs. Aging Skin: What's Really Happening</h2>
        <div className="compare-grid">
          <div className="compare-col good">
            <h3>Healthy Dermis (age 25-30)</h3>
            <ul>
              <li>Dense, organized collagen fiber network</li>
              <li>Active fibroblasts producing collagen at full capacity</li>
              <li>Robust elastin providing snap-back elasticity</li>
              <li>Well-hydrated extracellular matrix</li>
              <li>Strong skin structure supporting the epidermis above</li>
            </ul>
          </div>
          <div className="compare-col bad">
            <h3>Aging Dermis (age 45+)</h3>
            <ul>
              <li>Fragmented, disorganized collagen fibers</li>
              <li>Sluggish fibroblasts with reduced energy output</li>
              <li>Degraded elastin — skin loses its ability to bounce back</li>
              <li>Dehydrated matrix — less structural support</li>
              <li>Visible result: wrinkles, sagging, thinning, dullness</li>
            </ul>
          </div>
        </div>
        <div className="highlight"><strong>The fundamental problem isn't damaged collagen — it's energy-depleted fibroblasts.</strong> Your cells still know how to make collagen. They just don't have the energy to do it efficiently.</div>
        <img src={IMG.comparisonTreat} alt="Comparison of treatment approaches for skin aging" className="full-img" loading="lazy" />

        <h2>The At-Home Device I Started Recommending to My Patients</h2>
        <div className="body-section">
          <p>For years, I could only recommend in-office photobiomodulation treatments. $150-300 per session, 2-3 sessions per week, for months. Effective — but financially unrealistic for most women.</p>
          <p>Then the at-home LED mask market emerged. I was skeptical at first. Most consumer devices don't deliver adequate irradiance or use the correct wavelengths.</p>
          <p>I began evaluating masks for my patients. I tested wavelength output with a spectrometer. I tracked patient outcomes over 8-12 weeks. Most masks fell short — wrong wavelengths, insufficient power, uncomfortable designs that patients abandoned within weeks.</p>
          <p><strong>One device stood out: the LuxeBeam™ by Little Miss Mineral.</strong></p>
          <p>630-660nm red + 830-850nm near-infrared. Dual wavelengths delivered simultaneously. 25-30 mW/cm² irradiance at skin contact — adequate therapeutic dosing for a 10-minute session. Soft medical-grade silicone that maintains consistent LED-to-skin contact.</p>
          <p>And critically: <strong>$249.</strong> My patients can actually afford it.</p>
        </div>
        <img src={IMG.informed} alt="Woman using the LuxeBeam LED therapy mask at home" className="full-img" loading="lazy" />

        <h2>What Patients and Users Are Reporting</h2>
        <div className="rating-hero">
          <div className="stars-big">★★★★★</div>
          <div className="rating-num"><strong>4.8</strong> out of 5.0 — 2,847 verified reviews</div>
        </div>
        <div className="ratings-bars">
          <div className="rbar"><span>5 Star</span><div className="rbar-track"><div className="rbar-fill" style={{width:'87%'}}></div></div><span>87%</span></div>
          <div className="rbar"><span>4 Star</span><div className="rbar-track"><div className="rbar-fill f4" style={{width:'9%'}}></div></div><span>9%</span></div>
          <div className="rbar"><span>3 Star</span><div className="rbar-track"><div className="rbar-fill f3" style={{width:'3%'}}></div></div><span>3%</span></div>
          <div className="rbar"><span>2 Star</span><div className="rbar-track"><div className="rbar-fill f2" style={{width:'1%',minWidth:'3px'}}></div></div><span>0.5%</span></div>
          <div className="rbar"><span>1 Star</span><div className="rbar-track"><div className="rbar-fill f1" style={{width:'1%',minWidth:'3px'}}></div></div><span>0.5%</span></div>
        </div>
        <div className="feat-ratings">
          <h4>By Feature:</h4>
          <div className="feat"><span>Comfort</span><span className="stars-sm">★★★★★</span><span>4.9/5</span></div>
          <div className="feat"><span>Ease of Use</span><span className="stars-sm">★★★★★</span><span>4.9/5</span></div>
          <div className="feat"><span>Visible Results</span><span className="stars-sm">★★★★★</span><span>4.7/5</span></div>
          <div className="feat"><span>Value for Money</span><span className="stars-sm">★★★★★</span><span>4.8/5</span></div>
          <div className="feat"><span>Build Quality</span><span className="stars-sm">★★★★★</span><span>4.8/5</span></div>
        </div>

        <h2>Selected Patient &amp; Customer Experiences</h2>
        <div className="review">
          <div className="rstars">★★★★★</div>
          <h4>"My dermatologist noticed the improvement"</h4>
          <p>"I've been using the LuxeBeam for 6 weeks and at my last derm appointment, my doctor commented on how healthy my skin looked. She asked what I'd changed. When I told her about the mask, she said the wavelengths are legit and to keep going. My fine lines around my eyes are visibly softer."</p>
          <p className="rauthor">— <strong>Emily F., 36</strong> | Verified Purchase</p>
        </div>
        <div className="review">
          <div className="rstars">★★★★★</div>
          <h4>"I noticed a HUGE difference"</h4>
          <p>"After about 3-4 weeks of daily use, my skin started looking different. More alive. More even. My pores looked smaller and the texture on my cheeks smoothed out. I was spending $300/month on serums before this. Now I spend $60 and my skin looks better."</p>
          <p className="rauthor">— <strong>Amanda J., 42</strong> | Verified Purchase</p>
        </div>
        <div className="review">
          <div className="rstars">★★★★★</div>
          <h4>"Better than the $470 mask I owned before"</h4>
          <p>"My CurrentBody stopped working after 4 months. I bought the LuxeBeam as a replacement and it's honestly better. Wireless, lighter, fits my face perfectly. And it cost half as much. I wish I'd started here."</p>
          <p className="rauthor">— <strong>Stephanie H., 53</strong> | Verified Purchase</p>
        </div>

        <h2>Clinical Photography: 8-Week Outcomes</h2>
        <img src={IMG.clinicalComp} alt="Before and after clinical photography showing 8-week treatment outcomes" className="full-img" loading="lazy" />
        <p className="disc-sm">Individual results may vary.</p>

        <CTAButton text="GET 25% OFF LuxeBeam Now" />

        <h2>The Research Behind Red + Near-Infrared Light Therapy</h2>
        <img src={IMG.fda} alt="Clinical research setting for photobiomodulation studies" className="full-img" loading="lazy" />
        <div className="body-section">
          <p>For my colleagues and patients who want the data:</p>
          <p>Red and near-infrared light therapy (photobiomodulation) has been studied extensively for dermatological applications. Key findings:</p>
          <ul className="sci-list">
            <li><strong>Collagen synthesis:</strong> Multiple controlled studies demonstrate significant increases in procollagen synthesis following 4-12 weeks of consistent red/NIR light exposure at 630-850nm wavelengths.</li>
            <li><strong>Wrinkle reduction:</strong> Peer-reviewed research shows measurable reduction in periorbital wrinkle depth and improvement in skin roughness after 30 treatments with red light at 633nm.</li>
            <li><strong>Skin elasticity:</strong> Near-infrared light at 830nm has been shown to improve skin elasticity and firmness through enhanced elastin production and collagen fiber reorganization.</li>
            <li><strong>Cellular mechanism:</strong> Cytochrome c oxidase (Complex IV) in the mitochondrial electron transport chain absorbs photons at 630-850nm wavelengths, leading to increased ATP production, modulated reactive oxygen species, and enhanced nitric oxide release.</li>
            <li><strong>Safety profile:</strong> Red and near-infrared wavelengths are non-ionizing, non-UV, and have an excellent safety profile across thousands of clinical applications.</li>
          </ul>
          <p>The LuxeBeam delivers these validated wavelengths (630-660nm + 830-850nm) at therapeutic irradiance levels (25-30 mW/cm²) — consistent with the parameters used in published clinical studies.</p>
        </div>
        <img src={IMG.patient} alt="Patient receiving photobiomodulation light therapy treatment" className="full-img" loading="lazy" />

        <h2>My Professional Recommendation</h2>
        <div className="body-section">
          <p>I've evaluated over a dozen at-home LED masks for my practice. The LuxeBeam is the one I recommend most often, for three reasons:</p>
        </div>
        <div className="recs">
          <div className="rec"><span className="rec-n">1</span><p><strong>Correct wavelengths.</strong> 630-660nm + 830-850nm — matching the parameters validated in clinical research. Many consumer devices use incorrect or unverified wavelengths.</p></div>
          <div className="rec"><span className="rec-n">2</span><p><strong>Adequate dosing.</strong> 25-30 mW/cm² irradiance delivered over 10 minutes provides a therapeutic dose within the effective range identified in published studies.</p></div>
          <div className="rec"><span className="rec-n">3</span><p><strong>Compliance-friendly design.</strong> Wireless, lightweight, comfortable, one-button operation. In my experience, the #1 predictor of red light therapy success is consistency. The LuxeBeam removes every friction point.</p></div>
        </div>
        <p className="body-section">And at $249 — with a 100-day guarantee — it's the only clinical-grade option I can recommend without worrying about my patients' budgets.</p>
        <img src={IMG.homeVsClinic} alt="Comparison of home LED therapy vs expensive clinic treatments" className="full-img" loading="lazy" />

        <h2>Exclusive Limited-Time Discount</h2>
        <div className="offer-box">
          <p>I'm offering an exclusive discount to readers of this article.</p>
          <p><strong>Use code SECRET25 for 25% off any LuxeBeam bundle:</strong></p>
          <div className="price-row"><span>Essential (Mask Only):</span><span><s>$249</s> → <strong className="price-val">$186.75</strong></span></div>
          <div className="price-row"><span>Complete Ritual (Mask + Collagen Serum + Case):</span><span><s>$329</s> → <strong className="price-val">$246.75</strong></span></div>
          <div className="price-row"><span>Ultimate Glow (Full System):</span><span><s>$449</s> → <strong className="price-val">$336.75</strong></span></div>
          <div className="includes">
            <p>Every order includes:</p>
            <ul>
              <li>✅ 100-day money-back guarantee (risk-free trial)</li>
              <li>✅ Free US shipping</li>
              <li>✅ US-based customer support</li>
              <li>✅ 50,000+ hour LED lifespan</li>
            </ul>
          </div>
        </div>
        <CTAButton />

        <h2>100-Day Money-Back Guarantee</h2>
        <div className="guarantee">
          <div className="guarantee-badge">🛡️ 100-DAY GUARANTEE</div>
          <p>Little Miss Mineral offers a <strong>100-day money-back guarantee</strong> on every LuxeBeam purchase.</p>
          <p>That's over three months to use the device consistently and evaluate your results. If you're not satisfied for any reason, contact their US-based support team for a full refund. No restocking fees. No video proof. No fine print.</p>
          <p>In my clinical experience, most patients begin noticing visible improvements within 3-6 weeks of daily use. The 100-day window provides ample time to assess effectiveness for your individual skin.</p>
        </div>
        <img src={IMG.timeline} alt="Results timeline showing improvements over 8 weeks of consistent use" className="full-img" loading="lazy" />

        <h2>Don't Wait for Stage 4</h2>
        <div className="body-section">
          <p>Every day without adequate collagen support, your skin is progressing through those stages. The fibroblasts are losing energy. The collagen is fragmenting. The structural proteins are degrading.</p>
          <p>Red and near-infrared light therapy offers a non-invasive, clinically supported way to re-energize those cells — and the LuxeBeam makes it accessible, affordable, and practical for daily use.</p>
          <p>If you've been spending hundreds per month on topicals that can't reach your dermis, it's time to try something that can.</p>
          <div className="highlight"><strong>Use code SECRET25 for 25% off. Risk-free for 100 days.</strong></div>
        </div>
        <CTAButton text="GET 25% OFF LUXEBEAM — WHILE IN STOCK" />

        <img src={IMG.journalist} alt="Journalist researching photobiomodulation therapy at desk" className="full-img" loading="lazy" />

        <div className="disclaimer">
          <p><em>This is an advertorial and not an actual news article, blog, or consumer protection update. Dr. Catherine Ellis is a compensated spokesperson. Individual results may vary. This article may receive compensation for clicks on or purchase of products featured. Statements regarding these products have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Always consult your dermatologist before beginning any new skincare regimen or device.</em></p>
        </div>
      </article></main>
    </div>
  )
}

export default App
