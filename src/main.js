// Resolve assets from the script itself so direct-file, dev-server and built
// deployments all point to the correct folder.
const scriptLocation = new URL(document.currentScript.src);
const normalizedScriptPath = decodeURIComponent(scriptLocation.pathname).replaceAll('\\', '/').toLowerCase();
const openedFromBuild = normalizedScriptPath.endsWith('/dist/src/main.js');
const A = new URL(location.protocol === 'file:' && !openedFromBuild ? '../public/assets/' : '../assets/', scriptLocation).href;
const BROCHURE = new URL(location.protocol === 'file:' && !openedFromBuild ? '../public/mamre-heights.pdf' : '../mamre-heights.pdf', scriptLocation).href;
const APPROVED_PLANS = new URL('Plans/ERF611%20Mamre%20Municipal%20Approval%20plans.pdf', A).href;
const DEVELOPMENT_LOCATION = new URL('development-location/new/', A).href;
const LOCATION_SHOTS = [
  'WhatsApp Image 2026-08-25 at 20.45.39 (1).jpeg',
  'WhatsApp Image 2026-08-25 at 20.45.39.jpeg',
  'WhatsApp Image 2026-08-25 at 20.45.40 (1).jpeg',
  'WhatsApp Image 2026-08-25 at 20.45.40 (2).jpeg',
  'WhatsApp Image 2026-08-25 at 20.45.40.jpeg',
  'WhatsApp Image 2026-08-25 at 20.45.41.jpeg'
];
const locationShotUrl = index => DEVELOPMENT_LOCATION + encodeURIComponent(LOCATION_SHOTS[index]);

document.querySelector('#app').innerHTML = `
  <div class="loader" aria-hidden="true"><div class="loader-mark">MH</div><div class="loader-line"><i></i></div></div>
  <div class="cursor-dot" aria-hidden="true"></div>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Mamre Heights home">
      <span class="brand-monogram">MH</span><span class="brand-rule"></span>
      <span class="brand-copy"><b>Mamre Heights</b><small>Live · Shop · Thrive</small></span>
    </a>
    <nav class="desktop-nav" aria-label="Primary navigation">
      <a href="#residences">Residences</a><a href="#lifestyle">Lifestyle</a><a href="#location">Location</a><a href="#pricing">Pricing</a><a href="#approved-plans">Plans</a><a href="#partners">Partners</a>
    </nav>
    <div class="header-actions">
      <button class="text-button open-enquiry" data-interest="General enquiry">Register interest</button>
      <button class="menu-button" aria-label="Open menu"><span></span><span></span></button>
    </div>
  </header>

  <aside class="menu-drawer" aria-hidden="true">
    <button class="close-menu" aria-label="Close menu">×</button>
    <div class="drawer-index">Explore</div>
    <nav>
      <a href="#residences"><span>01</span>Residences</a>
      <a href="#lifestyle"><span>02</span>Lifestyle</a>
      <a href="#location"><span>03</span>Location</a>
      <a href="#site-gallery"><span>04</span>Actual site</a>
      <a href="#investment"><span>05</span>Investment</a>
      <a href="#pricing"><span>06</span>Price index</a>
      <a href="#approved-plans"><span>07</span>Approved plans</a>
      <a href="#partners"><span>08</span>Development partners</a>
      <a href="#contact"><span>09</span>Enquire</a>
    </nav>
    <div class="drawer-foot">Modern community living<br>in the heart of Mamre.</div>
  </aside><div class="drawer-backdrop"></div>

  <main id="top">
    <section class="hero">
      <div class="hero-media"><img src="${A}hero-hd.jpg" alt="Artist's impression of Mamre Heights at sunset"><div class="hero-shade"></div></div>
      <div class="hero-content">
        <p class="eyebrow reveal">A new way to live in Mamre</p>
        <h1 class="reveal">Live well.<br><em>Right here.</em></h1>
        <p class="hero-copy reveal">Modern homes, everyday convenience and a connected community—all in one thoughtfully planned address.</p>
        <div class="hero-ctas reveal">
          <button class="button gold open-enquiry" data-interest="Residential apartment">Find your apartment <span>↗</span></button>
          <button class="button ghost open-gallery">Explore the development <span>→</span></button>
        </div>
      </div>
      <div class="hero-rail"><span>Scroll to discover</span><i></i></div>
      <div class="hero-stats">
        <div><strong data-count="10">0</strong><span>Modern apartments</span></div>
        <div><strong data-count="11">0</strong><span>Retail spaces</span></div>
        <div><strong>50m²</strong><span>Thoughtful layouts</span></div>
        <div><strong>10m²</strong><span>Balconies up to</span></div>
      </div>
    </section>

    <section class="manifesto section-pad">
      <div class="section-number">01 / The vision</div>
      <div class="manifesto-grid">
        <p class="eyebrow dark reveal">More than a development</p>
        <h2 class="reveal">Everything you need,<br><em>right where you live.</em></h2>
        <div class="manifesto-copy reveal"><p>Mamre Heights brings together considered apartments, neighbourhood retail and welcoming shared spaces in one secure, future-focused community.</p><a class="arrow-link" href="#lifestyle">Discover the lifestyle <span>↗</span></a></div>
      </div>
      <div class="feature-ticker" aria-label="Development highlights"><div>Secure living <i>◆</i> Fibre ready <i>◆</i> Private balconies <i>◆</i> Family friendly <i>◆</i> Everyday retail <i>◆</i> West Coast access <i>◆</i></div></div>
    </section>

    <section id="residences" class="residences">
      <div class="residence-image image-reveal"><img src="${A}interior-hd.jpg" alt="Bright open-plan apartment living room and kitchen"><span class="image-label">Artist's impression</span></div>
      <div class="residence-copy section-pad">
        <div class="section-number light">02 / The residences</div>
        <p class="eyebrow reveal">Bright. Modern. Made for living.</p>
        <h2 class="reveal">Room to arrive.<br><em>Space to become.</em></h2>
        <p class="reveal">Each 50m² apartment is shaped around natural light and easy everyday living, with quality finishes, an open-plan heart and a private balcony that extends your home outdoors.</p>
        <div class="spec-grid reveal">
          <div><strong>10</strong><span>exclusive homes</span></div><div><strong>50m²</strong><span>well-planned unit</span></div><div><strong>Up to 10m²</strong><span>private balcony</span></div><div><strong>7</strong><span>secure garages</span></div>
        </div>
        <button class="button outline open-enquiry" data-interest="Residential apartment">Request apartment details <span>↗</span></button>
      </div>
    </section>

    <section class="gallery section-pad">
      <div class="gallery-head"><div><div class="section-number">03 / Inside your home</div><h2 class="reveal">Designed around<br><em>the way you live.</em></h2></div><p class="reveal">A calm, neutral palette. Durable contemporary finishes. Thoughtful spaces that feel generous, bright and entirely yours.</p></div>
      <div class="gallery-track">
        <figure class="image-reveal"><img src="${A}bedroom-hd.jpg" alt="Calm, light-filled bedroom"><figcaption><b>01</b><span>Rest easy</span><small>Comfortable bedroom</small></figcaption></figure>
        <figure class="image-reveal"><img src="${A}bathroom-hd.jpg" alt="Contemporary bathroom"><figcaption><b>02</b><span>Refresh daily</span><small>Stylish bathroom</small></figcaption></figure>
        <figure class="image-reveal"><img src="${A}balcony-hd.jpg" alt="Private balcony with neighbourhood views"><figcaption><b>03</b><span>Breathe out</span><small>Private balcony</small></figcaption></figure>
      </div>
    </section>

    <section id="lifestyle" class="lifestyle">
      <div class="lifestyle-media image-reveal"><img src="${A}amenities-car-wash-hd.png" alt="Covered two-bay car wash amenity at Mamre Heights"></div>
      <div class="lifestyle-card reveal">
        <div class="section-number light">04 / Life at Mamre</div>
        <p class="eyebrow">Spaces to live well</p><h2>Made for more<br><em>every day.</em></h2>
        <div class="amenity-list">
          <div><span>01</span><p><b>On-site car wash</b>Two covered bays for convenient resident car care.</p></div>
          <div><span>02</span><p><b>Secure living</b>Controlled access and a protected boundary.</p></div>
          <div><span>03</span><p><b>Fibre ready</b>Fast connectivity from the day you arrive.</p></div>
          <div><span>04</span><p><b>Landscaped commons</b>Places to pause, meet and reconnect.</p></div>
        </div>
      </div>
    </section>

    <section class="retail section-pad">
      <div class="retail-copy">
        <div class="section-number">05 / On your doorstep</div><p class="eyebrow dark reveal">Shop. Connect. Belong.</p>
        <h2 class="reveal">A neighbourhood<br><em>with a heartbeat.</em></h2>
        <p class="reveal">Eleven street-facing retail spaces create a lively, convenient place for residents and the wider Mamre community—from coffee and daily essentials to local services.</p>
        <button class="button dark open-enquiry" data-interest="Retail shop purchase">Explore a retail opportunity <span>↗</span></button>
      </div>
      <div class="retail-image image-reveal"><img src="${A}retail-hd.jpg" alt="Artist's impression of Mamre Heights retail promenade"><span class="floating-note"><b>11</b> retail spaces<br>for local enterprise</span></div>
    </section>

    <section id="location" class="location">
      <div class="location-map"><img src="${A}section-6-img.jpeg" alt="Aerial location map showing Mamre Heights and nearby schools, shops, churches, transport, clinic and sports fields"></div>
      <div class="location-copy">
        <div class="section-number light">06 / Perfectly positioned</div><p class="eyebrow reveal">In the heart of Mamre</p><h2 class="reveal">Close to what matters.<br><em>Connected to more.</em></h2>
        <p class="reveal">A peaceful community address with schools, shops, places of worship and public transport nearby—plus straightforward access to the R27, Atlantis and the West Coast.</p>
        <div class="location-pills reveal"><span>Nearby schools</span><span>Local shopping</span><span>Public transport</span><span>West Coast access</span></div>
        <a class="button outline" href="https://maps.google.com/?q=Mamre%2C+Western+Cape" target="_blank" rel="noreferrer">Open in Google Maps <span>↗</span></a>
      </div>
    </section>

    <section id="site-gallery" class="site-gallery section-pad">
      <div class="site-gallery-head">
        <div><div class="section-number">07 / Development location</div><p class="eyebrow dark reveal">The character of Mamre</p><h2 class="reveal">Rooted in place.<br><em>Rich in character.</em></h2></div>
        <div class="site-gallery-intro reveal"><p>Whitewashed walls, historic gables, mature gardens and a distinct village character reveal the sense of place surrounding Mamre Heights—an address shaped by heritage and community.</p><button class="arrow-link open-site-gallery" data-site-index="1">Explore all 6 location views <span>↗</span></button></div>
      </div>
      <div class="site-gallery-mosaic">
        <button class="site-shot site-shot-main image-reveal open-site-gallery" data-site-index="1" aria-label="Open full development location gallery">
          <img src="${locationShotUrl(1)}" alt="Historic whitewashed building and landscaped gardens in Mamre">
          <span class="site-shot-caption"><small>01 / Sense of place</small><b>Mamre's living character</b><i>Open gallery ↗</i></span>
        </button>
        <button class="site-shot image-reveal open-site-gallery" data-site-index="4" aria-label="View historic Winkel building">
          <img src="${locationShotUrl(4)}" alt="Historic Winkel building, lawn and gardens in Mamre">
          <span class="site-shot-caption"><small>02 / Heritage</small><b>Architecture shaped by time</b></span>
        </button>
        <button class="site-shot image-reveal open-site-gallery" data-site-index="0" aria-label="View historic gabled building">
          <img src="${locationShotUrl(0)}" alt="Historic gabled building and timber veranda in Mamre">
          <span class="site-shot-caption"><small>03 / Detail</small><b>A story in every facade</b></span>
        </button>
      </div>
      <div class="site-gallery-facts reveal"><span>6 location perspectives</span><i>◆</i><span>Historic character</span><i>◆</i><span>Established landscape</span><i>◆</i><span>Real location photography</span></div>
    </section>

    <section id="investment" class="investment section-pad">
      <div class="investment-head"><div><div class="section-number">08 / The opportunity</div><p class="eyebrow dark reveal">Built for growth</p><h2 class="reveal">A smart move today.<br><em>A stronger tomorrow.</em></h2></div><p class="reveal">Residential comfort meets commercial momentum in a growing node—creating an address designed for lasting demand and long-term value.</p></div>
      <div class="investment-image image-reveal"><img src="${A}investment-hd.jpg" alt="Mamre Heights mixed-use development illuminated at dusk"><button class="investment-cta open-enquiry" data-interest="Investment opportunity"><span>Request an<br>investment pack</span><b>↗</b></button></div>
      <div class="investment-points"><div><span>01</span><b>Multiple income streams</b><p>Residential, retail and garage opportunities.</p></div><div><span>02</span><b>High-demand area</b><p>Growth and infrastructure support demand.</p></div><div><span>03</span><b>Secure & low maintenance</b><p>Modern, efficient systems and finishes.</p></div><div><span>04</span><b>Long-term value</b><p>Quality construction in a growing node.</p></div></div>
    </section>

    <section id="pricing" class="price-index section-pad">
      <div class="price-index-head">
        <div>
          <div class="section-number light">09 / Price index</div>
          <p class="eyebrow reveal">Choose your opportunity</p>
          <h2 class="reveal">A place to live.<br><em>A chance to grow.</em></h2>
        </div>
        <div class="price-index-intro reveal">
          <p>Compare the complete Mamre Heights release, then tick one or more opportunities to request current availability.</p>
          <div class="currency-switcher">
            <label for="price-currency">View prices in</label>
            <select id="price-currency" aria-describedby="currency-status">
              <option value="ZAR">ZAR · South African Rand</option>
              <option value="USD">USD · US Dollar</option>
              <option value="EUR">EUR · Euro</option>
              <option value="GBP">GBP · Pound Sterling</option>
              <option value="AED">AED · UAE Dirham</option>
              <option value="AUD">AUD · Australian Dollar</option>
              <option value="CAD">CAD · Canadian Dollar</option>
              <option value="NAD">NAD · Namibian Dollar</option>
            </select>
            <small id="currency-status" aria-live="polite">Base prices shown in ZAR</small>
          </div>
          <span><b>28</b> opportunities across the development</span>
        </div>
      </div>

      <div class="price-selector reveal" aria-label="Mamre Heights price index">
        <div class="price-table-head" aria-hidden="true"><span>Select</span><span>Property type</span><span>Release</span><span>Unit size</span><span>Price</span></div>
        <label class="price-option" data-interest="Residential apartment">
          <input type="checkbox" value="Residential apartment">
          <span class="price-check" aria-hidden="true"><i>✓</i></span>
          <span class="price-product"><small>01 / Residential</small><b>Apartments</b></span>
          <span class="price-detail" data-label="Release"><strong>10</strong><small>apartments</small></span>
          <span class="price-detail" data-label="Unit size"><strong>50m²</strong><small>per apartment</small></span>
          <span class="price-amount" data-label="Price"><small>From</small><strong data-price-zar="995000">R995 000</strong></span>
        </label>
        <label class="price-option" data-interest="Retail shop purchase">
          <input type="checkbox" value="Retail shop purchase">
          <span class="price-check" aria-hidden="true"><i>✓</i></span>
          <span class="price-product"><small>02 / Commercial</small><b>Retail shops</b></span>
          <span class="price-detail" data-label="Release"><strong>11</strong><small>retail shops</small></span>
          <span class="price-detail" data-label="Unit size"><strong>50m²</strong><small>per shop</small></span>
          <span class="price-amount" data-label="Price"><small>From</small><strong data-price-zar="995000">R995 000</strong></span>
        </label>
        <label class="price-option" data-interest="Garage purchase">
          <input type="checkbox" value="Garage purchase">
          <span class="price-check" aria-hidden="true"><i>✓</i></span>
          <span class="price-product"><small>03 / Secure parking</small><b>Garages</b></span>
          <span class="price-detail" data-label="Release"><strong>7</strong><small>garages</small></span>
          <span class="price-detail" data-label="Unit size"><strong>18m²</strong><small>per garage</small></span>
          <span class="price-amount" data-label="Price"><small>Per garage</small><strong data-price-zar="200000">R200 000</strong></span>
        </label>
        <div class="price-selection-bar">
          <p aria-live="polite"><span class="price-selected-count">0</span><b>No opportunities selected</b><small>Tick the options you would like to discuss.</small></p>
          <button class="button gold open-enquiry price-enquiry" data-interest="General enquiry" disabled>Enquire about selected <span>↗</span></button>
        </div>
      </div>
      <p class="price-disclaimer reveal">Base prices are in South African rand and may change without notice. Converted values use indicative mid-market rates and are provided for guidance only. Availability, specifications and final purchase terms are subject to confirmation. Rates by <a href="https://www.exchangerate-api.com" target="_blank" rel="noopener noreferrer">ExchangeRate-API</a>.</p>
    </section>

    <section id="approved-plans" class="approved-plans section-pad">
      <div class="approved-plans-copy">
        <div class="section-number">10 / Municipal approval</div>
        <p class="eyebrow dark reveal">The vision, officially approved</p>
        <h2 class="reveal">Explore every detail.<br><em>See what is taking shape.</em></h2>
        <p class="approved-plans-lead reveal">View the complete approved drawing set in exceptional detail. Move through all 36 sheets, zoom into technical notes and layouts, or download the signed plan pack for your records.</p>
        <div class="approved-plan-facts reveal">
          <div><strong>36</strong><span>approved drawing sheets</span></div>
          <div><strong>9K</strong><span>ultra-HD source detail</span></div>
          <div><strong>PDF</strong><span>complete plan pack</span></div>
        </div>
        <div class="approved-plan-actions reveal">
          <button class="button dark open-approved-plans">Explore approved plans <span>↗</span></button>
          <a class="arrow-link" href="${APPROVED_PLANS}" download>Download complete PDF <span>↓</span></a>
        </div>
      </div>
      <button class="approved-plan-preview image-reveal open-approved-plans" aria-label="Open interactive approved plans viewer">
        <img src="${A}approved-plans-preview.jpg" alt="Preview of the municipally approved Mamre Heights site plan">
        <span class="approval-stamp"><i>✓</i><b>Municipally<br>approved</b></span>
        <span class="plan-explore"><b>Explore the plans</b><i>Drag · zoom · inspect</i><em>↗</em></span>
        <span class="plan-grid-lines" aria-hidden="true"></span>
      </button>
    </section>

    <section id="partners" class="partners section-pad">
      <div class="partners-intro">
        <div class="section-number light">11 / Development partners</div>
        <p class="eyebrow reveal">The team behind Mamre Heights</p>
        <h2 class="reveal">Built together.<br><em>Delivered with purpose.</em></h2>
        <p class="reveal">A trusted team spanning property development, law, home finance and lighting—working together to bring Mamre Heights to life.</p>
      </div>
      <div class="partner-grid reveal" aria-label="Mamre Heights development partners">
        <article class="partner-card partner-adriaans partner-feature">
          <div class="partner-team-photo">
            <img src="${A}partners/Adriaans_attorneys_team-og.png" alt="The Adriaans Attorneys team" loading="lazy">
          </div>
          <div class="partner-feature-brand">
            <span class="partner-kicker">Legal insight · Development support</span>
            <img src="${A}partners/adriaans.jpg" alt="Adriaans Attorneys" loading="lazy">
            <p>Keeping the development journey clear, considered and lawfully sound.</p>
            <a href="https://adriaansattorneys.com/our-team/" target="_blank" rel="noopener noreferrer">Meet the team <span aria-hidden="true">↗</span></a>
          </div>
          <div class="partner-meta"><span>01</span><div><b>Adriaans Attorneys</b><small>Legal partner</small></div></div>
        </article>
        <article class="partner-card partner-azaria">
          <div class="partner-logo"><img src="${A}partners/azaria-property-developments.png" alt="Azaria Property Developers"></div>
          <div class="partner-meta"><span>02</span><div><b>Azaria Property Developers</b><small>Property development</small></div></div>
        </article>
        <article class="partner-card partner-betterbond">
          <div class="partner-logo"><img src="${A}partners/betterbond.jpg" alt="BetterBond"></div>
          <div class="partner-meta"><span>03</span><div><b>BetterBond</b><small>Home finance partner</small></div></div>
        </article>
        <article class="partner-card partner-eurolux">
          <a class="partner-logo" href="https://www.eurolux.co.za/" target="_blank" rel="noopener noreferrer" aria-label="Visit the Eurolux website">
            <img src="${A}partners/eurolux-logo.jpg" alt="Eurolux" loading="lazy">
          </a>
          <div class="partner-meta"><span>04</span><div><b>Eurolux</b><small>Lighting partner</small></div></div>
        </article>
      </div>
    </section>

    <section id="contact" class="contact section-pad">
      <div class="contact-top"><div><p class="eyebrow reveal">Your next chapter starts here</p><h2 class="reveal">Live. Shop.<br><em>Connect. Thrive.</em></h2></div><p class="reveal">Register your interest and let our property professionals help you take the next step with confidence.</p></div>
      <div class="contact-actions reveal"><button class="contact-choice open-enquiry" data-interest="Residential apartment"><span>01</span><b>I'm looking to live here</b><i>↗</i></button><button class="contact-choice open-enquiry" data-interest="Investment opportunity"><span>02</span><b>I'm looking to invest</b><i>↗</i></button><button class="contact-choice open-enquiry" data-interest="Retail shop purchase"><span>03</span><b>I'm looking for retail space</b><i>↗</i></button></div>
      <footer><a class="brand footer-brand" href="#top"><span class="brand-monogram">MH</span><span class="brand-copy"><b>Mamre Heights</b><small>Live · Shop · Thrive</small></span></a><div>Marceleno & Gaylin<br>Property Professionals</div><div><a href="${BROCHURE}" target="_blank">Download brochure ↗</a><a href="${APPROVED_PLANS}" download>Download approved plans ↓</a><button class="disclaimer-button">Disclaimer</button></div><small>© 2026 Mamre Heights. Artist's impressions are for illustrative purposes only.</small></footer>
    </section>
  </main>

  <div class="modal enquiry-modal" role="dialog" aria-modal="true" aria-labelledby="enquiry-title" aria-hidden="true">
    <div class="modal-panel"><button class="modal-close" aria-label="Close">×</button><div class="modal-kicker">Register your interest</div><h2 id="enquiry-title">Let's find your<br><em>place at Mamre Heights.</em></h2><p>Tell us a little about what you’re looking for and a property professional will be in touch.</p>
      <form id="lead-form"><label><span>Full name</span><input name="name" autocomplete="name" required placeholder="Your name"></label><label><span>Phone number</span><input name="phone" type="tel" autocomplete="tel" required placeholder="e.g. 082 123 4567"></label><label><span>Email address</span><input name="email" type="email" autocomplete="email" required placeholder="you@example.com"></label><label><span>I'm interested in</span><select name="interest"><option>Residential apartment</option><option>Investment opportunity</option><option>Retail shop purchase</option><option>Garage purchase</option><option>Multiple property opportunities</option><option>General enquiry</option></select></label><label class="consent"><input type="checkbox" required><span>I consent to being contacted about Mamre Heights.</span></label><button class="button gold" type="submit">Send my enquiry <span>↗</span></button></form>
      <div class="form-success"><span>✓</span><h3>Thank you.</h3><p>Your interest has been registered. A property professional will be in touch soon.</p><button class="button outline close-success">Continue exploring</button></div>
    </div>
  </div>
  <div class="modal gallery-modal" role="dialog" aria-modal="true" aria-label="Development gallery" aria-hidden="true"><button class="modal-close" aria-label="Close">×</button><div class="lightbox-stage"><button class="gallery-prev" aria-label="Previous image">←</button><img alt="Mamre Heights development view"><button class="gallery-next" aria-label="Next image">→</button></div><div class="gallery-caption"><span>01 / 06</span><p></p></div></div>
  <div class="modal site-gallery-modal" role="dialog" aria-modal="true" aria-labelledby="site-gallery-title" aria-hidden="true">
    <header class="site-viewer-header"><div><span>Local character · Mamre, Western Cape</span><h2 id="site-gallery-title">Development location</h2></div><div><button class="site-gallery-fullscreen" aria-label="View gallery fullscreen">⛶</button><button class="modal-close" aria-label="Close">×</button></div></header>
    <div class="site-viewer-stage">
      <button class="site-viewer-prev" aria-label="Previous aerial image">←</button>
      <figure><img alt="Photograph showing the character of Mamre"><figcaption><span class="site-viewer-count">01 / 06</span><b class="site-viewer-caption">Historic architecture and local character</b></figcaption></figure>
      <button class="site-viewer-next" aria-label="Next aerial image">→</button>
    </div>
    <div class="site-viewer-thumbs" aria-label="Aerial image thumbnails"></div>
  </div>
  <div class="modal approved-plans-modal" role="dialog" aria-modal="true" aria-labelledby="approved-plans-title" aria-hidden="true">
    <header class="plans-viewer-header">
      <div><span class="plans-viewer-kicker">Municipally approved · Mamre Heights</span><h2 id="approved-plans-title">Approved plans</h2></div>
      <div class="plans-viewer-actions"><a href="${APPROVED_PLANS}" download>Download PDF <span>↓</span></a><button class="plans-fullscreen" aria-label="View plans fullscreen" title="Fullscreen">⛶</button><button class="modal-close" aria-label="Close">×</button></div>
    </header>
    <div class="plans-viewer-body">
      <aside class="plan-sheet-rail"><div class="plan-sheet-rail-head"><b>Drawing register</b><span>36 sheets</span></div><div class="plan-sheet-list" tabindex="0" aria-label="Scrollable drawing register"></div></aside>
      <div class="approved-plan-canvas">
        <div class="approved-plan-stage" aria-label="Zoomable approved plan drawing">
          <div class="plan-loading"><i></i><span>Loading full-resolution sheet</span></div>
          <img class="approved-plan-image" alt="Approved Mamre Heights plan sheet" draggable="false">
          <div class="plan-stage-hint">Scroll to zoom · drag to move</div>
          <div class="plan-mobile-hint">Pinch to zoom · swipe to change sheet</div>
        </div>
        <div class="plan-toolbar">
          <div class="plan-sheet-status"><span class="current-plan-count">24 / 36</span><b class="current-plan-name">Architectural approval</b><select class="mobile-plan-select" aria-label="Choose a plan sheet"></select></div>
          <div class="plan-nav"><button class="plan-prev" aria-label="Previous plan sheet">←</button><button class="plan-next" aria-label="Next plan sheet">→</button></div>
          <div class="plan-zoom"><button class="plan-zoom-out" aria-label="Zoom out">−</button><button class="plan-zoom-reset" aria-label="Fit full plan sheet" title="Fit full sheet">Fit</button><button class="plan-zoom-in" aria-label="Zoom in">+</button></div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal disclaimer-modal" role="dialog" aria-modal="true" aria-label="Disclaimer" aria-hidden="true"><div class="modal-panel small"><button class="modal-close" aria-label="Close">×</button><div class="modal-kicker">Important information</div><h2>Disclaimer</h2><p>All images, renders and visual representations are for illustrative purposes only and are intended to provide a general idea of the proposed development.</p><p>The final design, finishes, landscaping and layout will be based on approved architectural plans and specifications. All details are subject to change and will be confirmed according to final plans.</p></div></div>
  <button class="floating-enquire open-enquiry" data-interest="General enquiry"><span>Enquire</span><b>↗</b></button>
`;

const $ = (s, scope = document) => scope.querySelector(s);
const $$ = (s, scope = document) => [...scope.querySelectorAll(s)];

// The interface should never wait on every large marketing image before it
// becomes usable, especially now that the approved drawing set is available.
setTimeout(() => document.body.classList.add('loaded'), 300);
if (location.hash) setTimeout(() => {
  const target = document.querySelector(location.hash);
  if (!target) return;
  const priorScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = 'auto';
  target.scrollIntoView({ block: 'start' });
  requestAnimationFrame(() => { document.documentElement.style.scrollBehavior = priorScrollBehavior; });
}, 700);

const header = $('.site-header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 50), { passive: true });

const drawer = $('.menu-drawer');
const backdrop = $('.drawer-backdrop');
function toggleMenu(open) { drawer.classList.toggle('open', open); backdrop.classList.toggle('open', open); drawer.setAttribute('aria-hidden', String(!open)); document.body.classList.toggle('no-scroll', open); }
$('.menu-button').onclick = () => toggleMenu(true); $('.close-menu').onclick = () => toggleMenu(false); backdrop.onclick = () => toggleMenu(false); $$('.menu-drawer a').forEach(a => a.onclick = () => toggleMenu(false));

const revealObserver = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); } }), { threshold: .14 });
$$('.reveal,.image-reveal').forEach(el => revealObserver.observe(el));

const countObserver = new IntersectionObserver(entries => entries.forEach(e => { if (!e.isIntersecting) return; const el=e.target, end=+el.dataset.count; let n=0; const timer=setInterval(()=>{ n=Math.min(end,n+1); el.textContent=n; if(n===end)clearInterval(timer); },45); countObserver.unobserve(el); }), {threshold:.8});
$$('[data-count]').forEach(el => countObserver.observe(el));

if (matchMedia('(pointer:fine)').matches) { const dot=$('.cursor-dot'); document.addEventListener('mousemove',e=>{dot.style.transform=`translate(${e.clientX}px,${e.clientY}px)`}); $$('a,button').forEach(el=>{el.onmouseenter=()=>dot.classList.add('active'); el.onmouseleave=()=>dot.classList.remove('active')}); }

const priceOptions = $$('.price-option');
const priceEnquiry = $('.price-enquiry');
const priceCount = $('.price-selected-count');
const priceSummary = $('.price-selection-bar b');
function updatePriceSelection() {
  const selected = priceOptions.filter(option => $('input', option).checked);
  priceOptions.forEach(option => option.classList.toggle('selected', $('input', option).checked));
  priceCount.textContent = selected.length;
  priceSummary.textContent = selected.length ? `${selected.length} ${selected.length === 1 ? 'opportunity' : 'opportunities'} selected` : 'No opportunities selected';
  priceEnquiry.disabled = selected.length === 0;
  priceEnquiry.dataset.interest = selected.length === 1 ? $('input', selected[0]).value : selected.length > 1 ? 'Multiple property opportunities' : 'General enquiry';
}
priceOptions.forEach(option => $('input', option).addEventListener('change', updatePriceSelection));
updatePriceSelection();

const currencySelect = $('#price-currency');
const currencyStatus = $('#currency-status');
const priceValues = $$('[data-price-zar]');
const ratesCacheKey = 'mamre-heights-zar-rates-v1';
const currencyPreferenceKey = 'mamre-heights-price-currency';
const ratesCacheLifetime = 12 * 60 * 60 * 1000;
let exchangeRates = { ZAR: 1 };

function formatConvertedPrice(zarValue, currency) {
  const converted = Math.round(zarValue * (exchangeRates[currency] || 1));
  const amount = converted.toLocaleString('en-ZA', { maximumFractionDigits: 0 });
  return currency === 'ZAR' ? `R${amount}` : `${currency} ${amount}`;
}

function renderCurrency(currency) {
  priceValues.forEach(value => { value.textContent = formatConvertedPrice(+value.dataset.priceZar, currency); });
}

function readCachedRates() {
  try {
    const cached = JSON.parse(localStorage.getItem(ratesCacheKey));
    if (cached?.rates && Date.now() - cached.savedAt < ratesCacheLifetime) return cached;
  } catch { /* A blocked or malformed cache should never break pricing. */ }
  return null;
}

async function loadExchangeRates() {
  const cached = readCachedRates();
  if (cached) return cached;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch('https://open.er-api.com/v6/latest/ZAR', { signal: controller.signal });
    if (!response.ok) throw new Error('Rate service unavailable');
    const data = await response.json();
    if (data.result !== 'success' || !data.rates) throw new Error('Invalid rate response');
    const fresh = { rates: data.rates, updatedAt: data.time_last_update_unix * 1000, savedAt: Date.now() };
    try { localStorage.setItem(ratesCacheKey, JSON.stringify(fresh)); } catch { /* Caching is optional. */ }
    return fresh;
  } finally { clearTimeout(timeout); }
}

async function selectCurrency(currency) {
  if (currency === 'ZAR') {
    exchangeRates = { ...exchangeRates, ZAR: 1 };
    renderCurrency('ZAR');
    currencyStatus.textContent = 'Base prices shown in ZAR';
    return;
  }
  currencySelect.disabled = true;
  currencyStatus.textContent = `Loading live ${currency} rate…`;
  try {
    const data = await loadExchangeRates();
    if (!data.rates[currency]) throw new Error('Currency unavailable');
    exchangeRates = data.rates;
    renderCurrency(currency);
    const updateDate = data.updatedAt ? new Date(data.updatedAt).toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' }) : 'recently';
    currencyStatus.textContent = `Indicative rate updated ${updateDate}`;
  } catch {
    currencySelect.value = 'ZAR';
    renderCurrency('ZAR');
    currencyStatus.textContent = 'Live rates unavailable · Showing ZAR';
  } finally { currencySelect.disabled = false; }
}

currencySelect.addEventListener('change', () => {
  try { localStorage.setItem(currencyPreferenceKey, currencySelect.value); } catch { /* Preference storage is optional. */ }
  selectCurrency(currencySelect.value);
});
try {
  const savedCurrency = localStorage.getItem(currencyPreferenceKey);
  if ([...currencySelect.options].some(option => option.value === savedCurrency)) currencySelect.value = savedCurrency;
} catch { /* Default to ZAR when storage is unavailable. */ }
selectCurrency(currencySelect.value);

function openModal(modal) { modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('no-scroll'); }
function closeModal(modal) { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.classList.remove('no-scroll'); }
$$('.modal-close').forEach(b => b.onclick = () => closeModal(b.closest('.modal')));
$$('.modal').forEach(m => m.addEventListener('click', e => { if(e.target===m) closeModal(m); }));
document.addEventListener('keydown', e => { if(e.key==='Escape') { const m=$('.modal.open'); if(m) closeModal(m); else toggleMenu(false); } });

const enquiry=$('.enquiry-modal');
$$('.open-enquiry').forEach(b=>b.onclick=()=>{ const interest=b.dataset.interest||'General enquiry'; $(`select[name="interest"]`,enquiry).value=interest; openModal(enquiry); });
$('#lead-form').onsubmit=e=>{e.preventDefault(); e.currentTarget.style.display='none'; $('.form-success',enquiry).classList.add('show');};
$('.close-success').onclick=()=>{ closeModal(enquiry); setTimeout(()=>{ $('#lead-form').reset(); $('#lead-form').style.display='grid'; $('.form-success',enquiry).classList.remove('show'); },350); };

const galleryItems=[['hero-hd.jpg','Modern community living'],['interior-hd.jpg','Bright open-plan interiors'],['retail-hd.jpg','Everyday convenience below'],['amenities-car-wash-hd.png','Convenient on-site car care'],['investment-hd.jpg','Built for long-term value'],['balcony-hd.jpg','Private outdoor living']];
let galleryIndex=0; const gm=$('.gallery-modal');
function renderGallery(){const [src,cap]=galleryItems[galleryIndex]; $('img',gm).src=A+src; $('.gallery-caption span',gm).textContent=`${String(galleryIndex+1).padStart(2,'0')} / ${String(galleryItems.length).padStart(2,'0')}`; $('.gallery-caption p',gm).textContent=cap;}
$('.open-gallery').onclick=()=>{renderGallery();openModal(gm)}; $('.gallery-prev').onclick=()=>{galleryIndex=(galleryIndex-1+galleryItems.length)%galleryItems.length;renderGallery()}; $('.gallery-next').onclick=()=>{galleryIndex=(galleryIndex+1)%galleryItems.length;renderGallery()};
$('.disclaimer-button').onclick=()=>openModal($('.disclaimer-modal'));

const siteGalleryModal = $('.site-gallery-modal');
const siteGalleryCaptions = [
  'Historic gabled facade and timber veranda detail',
  'Whitewashed heritage building set within mature gardens',
  'Cape-style building, garden court and established trees',
  'Historic facade, thatched gables and landscaped frontage',
  'The Winkel building and its garden setting',
  'Tree-lined public realm and local architectural character'
];
let siteGalleryIndex = 1;

LOCATION_SHOTS.forEach((name, index) => {
  const button = document.createElement('button');
  button.className = 'site-thumb';
  button.setAttribute('aria-label', `View aerial image ${index + 1}`);
  button.innerHTML = `<img loading="lazy" src="${locationShotUrl(index)}" alt=""><span>${String(index + 1).padStart(2, '0')}</span>`;
  button.onclick = () => renderSiteGallery(index);
  $('.site-viewer-thumbs', siteGalleryModal).append(button);
});

function renderSiteGallery(index) {
  siteGalleryIndex = (index + LOCATION_SHOTS.length) % LOCATION_SHOTS.length;
  const image = $('.site-viewer-stage figure>img', siteGalleryModal);
  image.classList.add('switching');
  const nextSource = locationShotUrl(siteGalleryIndex);
  const revealImage = () => image.classList.remove('switching');
  if (image.src === nextSource) revealImage();
  else { image.onload = revealImage; image.src = nextSource; }
  image.alt = siteGalleryCaptions[siteGalleryIndex];
  $('.site-viewer-count', siteGalleryModal).textContent = `${String(siteGalleryIndex + 1).padStart(2, '0')} / ${LOCATION_SHOTS.length}`;
  $('.site-viewer-caption', siteGalleryModal).textContent = siteGalleryCaptions[siteGalleryIndex];
  $$('.site-thumb', siteGalleryModal).forEach((thumb, thumbIndex) => thumb.classList.toggle('active', thumbIndex === siteGalleryIndex));
  if (siteGalleryModal.classList.contains('open')) $('.site-thumb.active', siteGalleryModal)?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
}

function previousSiteImage() { renderSiteGallery(siteGalleryIndex - 1); }
function nextSiteImage() { renderSiteGallery(siteGalleryIndex + 1); }
$$('.open-site-gallery').forEach(button => button.onclick = () => {
  renderSiteGallery(+(button.dataset.siteIndex || 0));
  openModal(siteGalleryModal);
  requestAnimationFrame(() => $('.site-thumb.active', siteGalleryModal)?.scrollIntoView({ inline: 'center', block: 'nearest' }));
});
$('.site-viewer-prev', siteGalleryModal).onclick = previousSiteImage;
$('.site-viewer-next', siteGalleryModal).onclick = nextSiteImage;
$('.site-gallery-fullscreen', siteGalleryModal).onclick = () => document.fullscreenElement ? document.exitFullscreen?.() : siteGalleryModal.requestFullscreen?.();
let siteSwipeStartX = 0;
let siteSwipeStartY = 0;
$('.site-viewer-stage', siteGalleryModal).addEventListener('pointerdown', event => { if (event.pointerType !== 'mouse') { siteSwipeStartX = event.clientX; siteSwipeStartY = event.clientY; } });
$('.site-viewer-stage', siteGalleryModal).addEventListener('pointerup', event => {
  if (event.pointerType === 'mouse') return;
  const deltaX = event.clientX - siteSwipeStartX;
  const deltaY = event.clientY - siteSwipeStartY;
  if (Math.abs(deltaX) > 55 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) deltaX < 0 ? nextSiteImage() : previousSiteImage();
});

const approvedPlansModal = $('.approved-plans-modal');
const approvedPlanImage = $('.approved-plan-image', approvedPlansModal);
const approvedPlanStage = $('.approved-plan-stage', approvedPlansModal);
const planSheetList = $('.plan-sheet-list', approvedPlansModal);
const mobilePlanSelect = $('.mobile-plan-select', approvedPlansModal);
const planState = { sheet: 24, scale: 1, x: 0, y: 0, dragging: false, startX: 0, startY: 0 };

function planGroup(sheet) {
  if (sheet === 1 || sheet === 13) return 'Civil engineering';
  if (sheet < 24) return 'Consultant & compliance';
  return 'Architectural approval';
}

for (let sheet = 1; sheet <= 36; sheet += 1) {
  const button = document.createElement('button');
  button.className = 'plan-sheet-button';
  button.dataset.sheet = sheet;
  button.innerHTML = `<span>${String(sheet).padStart(2, '0')}</span><span><b>Sheet ${String(sheet).padStart(2, '0')}</b><small>${planGroup(sheet)}</small></span><i>↗</i>`;
  button.onclick = () => renderApprovedPlan(sheet);
  planSheetList.append(button);
  const option = document.createElement('option');
  option.value = sheet;
  option.textContent = `Sheet ${String(sheet).padStart(2, '0')} · ${planGroup(sheet)}`;
  mobilePlanSelect.append(option);
}

function applyPlanTransform() {
  approvedPlanImage.style.transform = `translate3d(${planState.x}px, ${planState.y}px, 0) scale(${planState.scale})`;
  $('.plan-zoom-reset', approvedPlansModal).textContent = planState.scale === 1 ? 'Fit' : `${Math.round(planState.scale * 100)}%`;
  approvedPlanStage.classList.add('can-pan');
}

function resetPlanView() {
  planState.scale = 1;
  planState.x = 0;
  planState.y = 0;
  applyPlanTransform();
}

function renderApprovedPlan(sheet) {
  planState.sheet = Math.min(36, Math.max(1, sheet));
  approvedPlanStage.classList.add('is-loading');
  approvedPlanImage.onload = () => approvedPlanStage.classList.remove('is-loading');
  approvedPlanImage.onerror = () => approvedPlanStage.classList.remove('is-loading');
  approvedPlanImage.src = `${A}Plans/${planState.sheet}.jpg`;
  approvedPlanImage.alt = `Approved Mamre Heights plan sheet ${planState.sheet} of 36`;
  $('.current-plan-count', approvedPlansModal).textContent = `${String(planState.sheet).padStart(2, '0')} / 36`;
  $('.current-plan-name', approvedPlansModal).textContent = planGroup(planState.sheet);
  mobilePlanSelect.value = planState.sheet;
  $$('.plan-sheet-button', approvedPlansModal).forEach(button => button.classList.toggle('active', +button.dataset.sheet === planState.sheet));
  const active = $('.plan-sheet-button.active', approvedPlansModal);
  if (approvedPlansModal.classList.contains('open')) active?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  resetPlanView();
}

function zoomPlan(amount) {
  planState.scale = Math.min(5, Math.max(1, planState.scale + amount));
  if (planState.scale === 1) { planState.x = 0; planState.y = 0; }
  applyPlanTransform();
}

$$('.open-approved-plans').forEach(button => button.onclick = () => { renderApprovedPlan(planState.sheet); openModal(approvedPlansModal); });
function previousPlan() { renderApprovedPlan(planState.sheet === 1 ? 36 : planState.sheet - 1); }
function nextPlan() { renderApprovedPlan(planState.sheet === 36 ? 1 : planState.sheet + 1); }
$('.plan-prev', approvedPlansModal).onclick = previousPlan;
$('.plan-next', approvedPlansModal).onclick = nextPlan;
mobilePlanSelect.onchange = event => renderApprovedPlan(+event.target.value);
planSheetList.addEventListener('wheel', event => {
  event.preventDefault();
  event.stopPropagation();
  planSheetList.scrollTop += event.deltaY;
}, { passive: false });
planSheetList.addEventListener('keydown', event => {
  if (event.key === 'ArrowDown') planSheetList.scrollTop += 62;
  else if (event.key === 'ArrowUp') planSheetList.scrollTop -= 62;
  else if (event.key === 'PageDown') planSheetList.scrollTop += planSheetList.clientHeight * .8;
  else if (event.key === 'PageUp') planSheetList.scrollTop -= planSheetList.clientHeight * .8;
  else return;
  event.preventDefault();
});
$('.plan-zoom-in', approvedPlansModal).onclick = () => zoomPlan(.25);
$('.plan-zoom-out', approvedPlansModal).onclick = () => zoomPlan(-.25);
$('.plan-zoom-reset', approvedPlansModal).onclick = resetPlanView;
$('.plans-fullscreen', approvedPlansModal).onclick = () => {
  if (!document.fullscreenElement) approvedPlansModal.requestFullscreen?.();
  else document.exitFullscreen?.();
};
approvedPlanStage.addEventListener('wheel', event => { event.preventDefault(); zoomPlan(event.deltaY < 0 ? .2 : -.2); }, { passive: false });
approvedPlanStage.addEventListener('dblclick', () => { planState.scale = planState.scale > 1 ? 1 : 2; if (planState.scale === 1) { planState.x = 0; planState.y = 0; } applyPlanTransform(); });
const planPointers = new Map();
const planGesture = { startClientX: 0, startClientY: 0, startTime: 0, startDistance: 0, startScale: 1, startCenterX: 0, startCenterY: 0, originX: 0, originY: 0, pointerType: '', pinched: false };

function pointerPair() { return [...planPointers.values()].slice(0, 2); }
function pairDistance(pair) { return Math.hypot(pair[1].x - pair[0].x, pair[1].y - pair[0].y); }
function pairCenter(pair) { return { x: (pair[0].x + pair[1].x) / 2, y: (pair[0].y + pair[1].y) / 2 }; }

approvedPlanStage.addEventListener('pointerdown', event => {
  if (event.pointerType === 'mouse' && event.button !== 0) return;
  event.preventDefault();
  planPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  approvedPlanStage.setPointerCapture(event.pointerId);
  if (planPointers.size === 1) {
    planState.dragging = true;
    planState.startX = event.clientX - planState.x;
    planState.startY = event.clientY - planState.y;
    planGesture.startClientX = event.clientX;
    planGesture.startClientY = event.clientY;
    planGesture.startTime = performance.now();
    planGesture.pointerType = event.pointerType;
    planGesture.pinched = false;
    if (event.pointerType === 'mouse' || planState.scale > 1) approvedPlanStage.classList.add('is-panning');
  } else if (planPointers.size === 2) {
    const pair = pointerPair();
    const center = pairCenter(pair);
    const rect = approvedPlanStage.getBoundingClientRect();
    planGesture.startDistance = Math.max(1, pairDistance(pair));
    planGesture.startScale = planState.scale;
    planGesture.startCenterX = center.x - (rect.left + rect.width / 2);
    planGesture.startCenterY = center.y - (rect.top + rect.height / 2);
    planGesture.originX = planState.x;
    planGesture.originY = planState.y;
    planGesture.pinched = true;
    approvedPlanStage.classList.add('is-panning', 'is-pinching');
  }
});
approvedPlanStage.addEventListener('pointermove', event => {
  if (!planPointers.has(event.pointerId)) return;
  event.preventDefault();
  planPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  if (planPointers.size >= 2) {
    const pair = pointerPair();
    const center = pairCenter(pair);
    const rect = approvedPlanStage.getBoundingClientRect();
    const nextScale = Math.min(5, Math.max(1, planGesture.startScale * pairDistance(pair) / planGesture.startDistance));
    const ratio = nextScale / planGesture.startScale;
    const centerX = center.x - (rect.left + rect.width / 2);
    const centerY = center.y - (rect.top + rect.height / 2);
    planState.scale = nextScale;
    planState.x = centerX - (planGesture.startCenterX - planGesture.originX) * ratio;
    planState.y = centerY - (planGesture.startCenterY - planGesture.originY) * ratio;
    applyPlanTransform();
    return;
  }
  if (!planState.dragging) return;
  if (planGesture.pointerType === 'mouse' || planState.scale > 1) {
    planState.x = event.clientX - planState.startX;
    planState.y = event.clientY - planState.startY;
    approvedPlanStage.classList.add('is-panning');
    applyPlanTransform();
  }
});
function endPlanPointer(event, cancelled = false) {
  const wasLastPointer = planPointers.size === 1;
  const deltaX = event.clientX - planGesture.startClientX;
  const deltaY = event.clientY - planGesture.startClientY;
  const elapsed = performance.now() - planGesture.startTime;
  if (!cancelled && wasLastPointer && planGesture.pointerType === 'touch' && !planGesture.pinched && planState.scale === 1 && elapsed < 850 && Math.abs(deltaX) > 55 && Math.abs(deltaX) > Math.abs(deltaY) * 1.25) {
    if (deltaX < 0) nextPlan(); else previousPlan();
  }
  planPointers.delete(event.pointerId);
  if (planPointers.size === 1) {
    const remaining = [...planPointers.values()][0];
    planState.startX = remaining.x - planState.x;
    planState.startY = remaining.y - planState.y;
  } else if (planPointers.size === 0) {
    planState.dragging = false;
    approvedPlanStage.classList.remove('is-panning', 'is-pinching');
  }
}
approvedPlanStage.addEventListener('pointerup', event => endPlanPointer(event));
approvedPlanStage.addEventListener('pointercancel', event => endPlanPointer(event, true));
document.addEventListener('keydown', event => {
  if (siteGalleryModal.classList.contains('open')) {
    if (event.key === 'ArrowLeft') previousSiteImage();
    if (event.key === 'ArrowRight') nextSiteImage();
    return;
  }
  if (!approvedPlansModal.classList.contains('open')) return;
  if (event.key === 'ArrowLeft') previousPlan();
  if (event.key === 'ArrowRight') nextPlan();
  if (event.key === '+' || event.key === '=') zoomPlan(.25);
  if (event.key === '-') zoomPlan(-.25);
  if (event.key === '0') resetPlanView();
});
