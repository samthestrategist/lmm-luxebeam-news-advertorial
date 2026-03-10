import React from 'react'

const IMG = {
  expert: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/expert-authority-dermatologist.png',
  lab: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/clinical-study-lab.png',
  skinCells: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/skin-cell-microscope.png',
  patient: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/patient-treatment.png',
  compTreatments: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/comparison-treatments.png',
  demographic: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/demographic-women.png',
  informed: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/informed-reader-mask-subtle.png',
  fda: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/fda-clinical-setting.png',
  homeVsClinic: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/home-vs-clinic-split.png',
  journalist: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/journalist-research-desk.png',
  clinicalComp: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/clinical-comparison.png',
  timeline: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/results-timeline.png',
}

const CTA_E = 'https://orthocliner.myshopify.com/cart/48083744260251:1?discount=SECRET25'
const CTA_C = 'https://orthocliner.myshopify.com/cart/48083744293019:1?discount=SECRET25'

export default function App() {
  return (
    <>
      <div className="bar-disclosure">Advertorial</div>
      <div className="bar-trending">🇺🇸 Trending in the United States</div>
      <div className="bar-urgency">⚠️ UPDATE: LuxeBeam™ is SELLING OUT faster than expected. <a href={CTA_E} style={{textDecoration:'underline'}}>Check Availability →</a></div>

      <div className="wrap article">
        <div className="header">
          <h1>Board-Certified Dermatologist: "The Best Method To Reverse Visible Skin Aging at Home Without Needles or Expensive Treatments"</h1>
          <p className="sub">If you have fine lines, loss of firmness, dull tone, or visible wrinkles — read this before spending another dollar on serums.</p>
          <div className="byline">By <strong>Dr. Catherine Ellis, MD, FAAD</strong> — Board-Certified Dermatologist<br/>Reviewed & Fact-Checked ✓ | March 3, 2026</div>
          <div className="as-seen">AS SEEN ON: Dermatology Times · American Academy of Dermatology · Healthline · WebMD</div>
        </div>

        <img src={IMG.expert} alt="Dr. Catherine Ellis, Board-Certified Dermatologist" className="article-img" />

        <p>Hello, I'm Dr. Catherine Ellis. I've practiced dermatology for 22 years in New York. I've treated over 30,000 patients. I specialize in aging skin.</p>
        <p><strong>Most of what you're spending on anti-aging skincare is being wasted.</strong> Not because the products are bad. But because they physically cannot reach the cells responsible for skin aging.</p>

        <h2>Why Your Skincare Products Can't Stop This</h2>
        <p><strong>Collagen is produced by fibroblasts. Fibroblasts live in the dermis — 1-4mm below the surface. No topical product on Earth can reach them.</strong></p>
        <p>Your serum works on the epidermis — the outermost 0.1mm. A $20 moisturizer and a $200 serum have the same penetration limitation.</p>

        <img src={IMG.skinCells} alt="Skin cell microscope view" className="article-img" />

        <h2>The Approach That Actually Reaches Your Collagen-Producing Cells</h2>
        <p>In my practice, one modality consistently outperforms topicals: <strong>photobiomodulation</strong> — red and near-infrared light therapy.</p>
        <p>NASA funded the initial research in the 1990s. Since then, over 5,000 peer-reviewed studies have investigated its effects.</p>

        <img src={IMG.lab} alt="Clinical study laboratory" className="article-img" />

        <p><strong>Step 1:</strong> Red light (630-660nm) and NIR (830-850nm) penetrate 4-10mm into the dermis.</p>
        <p><strong>Step 2:</strong> These wavelengths are absorbed by cytochrome c oxidase (CCO) in the mitochondria.</p>
        <p><strong>Step 3:</strong> CCO activation increases ATP production by up to 200%.</p>
        <p><strong>Step 4:</strong> Energized fibroblasts resume robust collagen and elastin synthesis.</p>

        <img src={IMG.patient} alt="Patient receiving light treatment" className="article-img" />

        <h2>Healthy vs. Aging Skin</h2>
        <p><strong>Healthy dermis (age 25-30):</strong> Dense collagen, active fibroblasts, robust elastin. <strong>Aging dermis (age 45+):</strong> Fragmented collagen, sluggish fibroblasts, degraded elastin.</p>
        <p>The fundamental problem isn't damaged collagen — it's <strong>energy-depleted fibroblasts</strong>. Red and NIR light re-energizes the cells that make collagen naturally.</p>

        <img src={IMG.compTreatments} alt="Comparison of treatment approaches" className="article-img" />

        <h2>The At-Home Device I Started Recommending</h2>
        <p>I began evaluating masks for patients. I tested wavelength output with a spectrometer. Most fell short.</p>
        <p><strong>One device stood out: the LuxeBeam™ by Little Miss Mineral.</strong></p>
        <p>630-660nm red + 830-850nm NIR. 25-30 mW/cm² irradiance. Soft medical-grade silicone. And critically: <strong>$249</strong>.</p>

        <img src={IMG.informed} alt="Woman using LuxeBeam mask" className="article-img" />

        <div className="cta-center">
          <a href={CTA_E} className="cta-btn">GET 25% OFF LuxeBeam Now</a>
        </div>

        {/* Ratings */}
        <div className="ratings-box">
          <h3><span className="stars">★★★★★</span> 4.8 out of 5.0</h3>
          <p style={{fontSize:13,color:'var(--text2)'}}>from 2,847 verified reviews</p>
          <div className="rating-bars">
            {[['5 Star',87],['4 Star',9],['3 Star',3],['2 Star',0.5],['1 Star',0.5]].map(([label,pct],i) => (
              <div key={i} className="rating-bar"><span style={{width:50}}>{label}</span><div className="bar"><div className="fill" style={{width:`${pct}%`}}/></div><span>{pct}%</span></div>
            ))}
          </div>
          <div className="feature-ratings">
            <span>Comfort: 4.9/5</span><span>Ease of Use: 4.9/5</span><span>Visible Results: 4.7/5</span><span>Value: 4.8/5</span>
          </div>
        </div>

        {/* Reviews */}
        <h2>Selected Patient & Customer Experiences</h2>
        {[
          ['★★★★★','"My dermatologist noticed the improvement"','I\'ve been using the LuxeBeam for 6 weeks and at my last derm appointment, my doctor commented on how healthy my skin looked. My fine lines around my eyes are visibly softer.','Emily F., 36'],
          ['★★★★★','"I noticed a HUGE difference"','After 3-4 weeks, my skin started looking different. More alive. My pores looked smaller. I was spending $300/month on serums. Now I spend $60 and my skin looks better.','Amanda J., 42'],
          ['★★★★★','"Better than the $470 mask I owned before"','My CurrentBody stopped working after 4 months. LuxeBeam is honestly better. Wireless, lighter, fits my face perfectly. And half the cost.','Stephanie H., 53'],
        ].map(([stars,title,body,name],i) => (
          <div key={i} className="review-card">
            <div className="stars">{stars}</div>
            <h4>{title}</h4>
            <p>{body}</p>
            <div className="reviewer">— {name} | Verified Purchase</div>
          </div>
        ))}

        <img src={IMG.fda} alt="Clinical setting" className="article-img" />
        <img src={IMG.homeVsClinic} alt="Home vs clinic comparison" className="article-img" />

        <h2>The Research</h2>
        <p>Red and near-infrared light therapy has been studied extensively. Multiple controlled studies demonstrate significant increases in procollagen synthesis. Peer-reviewed research shows measurable wrinkle reduction. Cytochrome c oxidase absorbs photons at 630-850nm, leading to increased ATP and enhanced nitric oxide release.</p>

        <img src={IMG.clinicalComp} alt="Clinical comparison data" className="article-img" />

        <h2>My Professional Recommendation</h2>
        <p><strong>1. Correct wavelengths.</strong> 630-660nm + 830-850nm — matching validated clinical parameters.</p>
        <p><strong>2. Adequate dosing.</strong> 25-30 mW/cm² over 10 minutes provides therapeutic dose.</p>
        <p><strong>3. Compliance-friendly design.</strong> Wireless, lightweight, one-button. The #1 predictor of success is consistency.</p>

        <img src={IMG.journalist} alt="Research desk" className="article-img" />
        <img src={IMG.timeline} alt="Results timeline" className="article-img" />
        <img src={IMG.demographic} alt="Demographic of women users" className="article-img" />

        {/* Offer */}
        <div className="offer-box">
          <h2>Exclusive Limited-Time Discount</h2>
          <p>Use code <strong>SECRET25</strong> for 25% off any bundle:</p>
          <p>Essential: <s>$249</s> → <strong>$186.75</strong> · Complete Ritual: <s>$329</s> → <strong>$246.75</strong> · Ultimate Glow: <s>$449</s> → <strong>$336.75</strong></p>
          <p>✅ 100-day guarantee · ✅ Free US shipping · ✅ US-based support · ✅ 50,000+ hour LEDs</p>
          <div style={{marginTop:16}}>
            <a href={CTA_C} className="cta-btn">GET 25% OFF LuxeBeam — CHECK AVAILABILITY</a>
          </div>
        </div>

        {/* Guarantee */}
        <div className="guarantee">
          <h2>100-Day Money-Back Guarantee</h2>
          <p>Over three months to evaluate your results. No restocking fees. No video proof. No fine print.</p>
        </div>

        {/* Final CTA */}
        <div className="final">
          <h2>Don't Wait for Stage 4</h2>
          <p>Every day without adequate collagen support, your skin is progressing. Red and near-infrared light therapy offers a non-invasive, clinically supported way to re-energize those cells.</p>
          <p><strong>Use code SECRET25 for 25% off. Risk-free for 100 days.</strong></p>
          <a href={CTA_E} className="cta-btn">GET 25% OFF LUXEBEAM — WHILE IN STOCK</a>
        </div>

        <div className="disclaimer">
          This is an advertorial and not an actual news article, blog, or consumer protection update. Dr. Catherine Ellis is a compensated spokesperson. Individual results may vary. This article may receive compensation for clicks on or purchase of products featured. Statements regarding these products have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Always consult your dermatologist before beginning any new skincare regimen or device.
        </div>
      </div>
    </>
  )
}
