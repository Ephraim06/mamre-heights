// Resolve assets from the script itself so direct-file, dev-server and built
// deployments all point to the correct folder.
const scriptLocation = new URL(document.currentScript.src);
const normalizedScriptPath = decodeURIComponent(scriptLocation.pathname).replaceAll('\\', '/').toLowerCase();
const openedFromBuild = normalizedScriptPath.endsWith('/dist/src/main.js');
const A = new URL(location.protocol === 'file:' && !openedFromBuild ? '../public/assets/' : '../assets/', scriptLocation).href;
const BROCHURE = new URL(location.protocol === 'file:' && !openedFromBuild ? '../public/mamre-heights.pdf' : '../mamre-heights.pdf', scriptLocation).href;
const APPROVED_PLANS = new URL('Plans/ERF611%20Mamre%20Municipal%20Approval%20plans.pdf', A).href;
const DEVELOPMENT_LOCATION = new URL('development-location/', A).href;
const LOCATION_SHOTS = [
  'WhatsApp Image 2026-08-19 at 09.10.23 (1).jpeg', 'WhatsApp Image 2026-08-19 at 09.10.23.jpeg',
  'WhatsApp Image 2026-08-19 at 09.10.24 (1).jpeg', 'WhatsApp Image 2026-08-19 at 09.10.24 (2).jpeg', 'WhatsApp Image 2026-08-19 at 09.10.24.jpeg',
  'WhatsApp Image 2026-08-19 at 09.10.25 (1).jpeg', 'WhatsApp Image 2026-08-19 at 09.10.25 (2).jpeg', 'WhatsApp Image 2026-08-19 at 09.10.25.jpeg',
  'WhatsApp Image 2026-08-19 at 09.10.26 (1).jpeg', 'WhatsApp Image 2026-08-19 at 09.10.26 (2).jpeg', 'WhatsApp Image 2026-08-19 at 09.10.26.jpeg',
  'WhatsApp Image 2026-08-19 at 09.10.27 (1).jpeg', 'WhatsApp Image 2026-08-19 at 09.10.27 (2).jpeg', 'WhatsApp Image 2026-08-19 at 09.10.27.jpeg'
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
      <a href="#residences">Residences</a><a href="#lifestyle">Lifestyle</a><a href="#location">Location</a><a href="#approved-plans">Plans</a><a href="#partners">Partners</a>
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
      <a href="#approved-plans"><span>06</span>Approved plans</a>
      <a href="#partners"><span>07</span>Development partners</a>
      <a href="#contact"><span>08</span>Enquire</a>
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
        <div><strong data-count="20">0</strong><span>Modern apartments</span></div>
        <div><strong data-count="10">0</strong><span>Retail spaces</span></div>
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
          <div><strong>20</strong><span>exclusive homes</span></div><div><strong>50m²</strong><span>well-planned unit</span></div><div><strong>Up to 10m²</strong><span>private balcony</span></div><div><strong>10</strong><span>secure garages</span></div>
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
      <div class="lifestyle-media image-reveal"><img src="${A}amenities-hd.jpg" alt="Landscaped children's play area at Mamre Heights"></div>
      <div class="lifestyle-card reveal">
        <div class="section-number light">04 / Life at Mamre</div>
        <p class="eyebrow">Spaces to live well</p><h2>Made for more<br><em>every day.</em></h2>
        <div class="amenity-list">
          <div><span>01</span><p><b>Children's play area</b>Safe, open space for little ones to play.</p></div>
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
        <p class="reveal">Ten street-facing retail spaces create a lively, convenient place for residents and the wider Mamre community—from coffee and daily essentials to local services.</p>
        <button class="button dark open-enquiry" data-interest="Retail leasing opportunity">Explore a retail opportunity <span>↗</span></button>
      </div>
      <div class="retail-image image-reveal"><img src="${A}retail-hd.jpg" alt="Artist's impression of Mamre Heights retail promenade"><span class="floating-note"><b>10</b> retail spaces<br>for local enterprise</span></div>
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
        <div><div class="section-number">07 / Development location</div><p class="eyebrow dark reveal">The real setting, from above</p><h2 class="reveal">See the site.<br><em>Know the neighbourhood.</em></h2></div>
        <div class="site-gallery-intro reveal"><p>Recent aerial photography places Mamre Heights in its real context—from the existing road network and surrounding homes to community facilities and the wider landscape.</p><button class="arrow-link open-site-gallery" data-site-index="13">Explore all 14 aerial views <span>↗</span></button></div>
      </div>
      <div class="site-gallery-mosaic">
        <button class="site-shot site-shot-main image-reveal open-site-gallery" data-site-index="13" aria-label="Open full aerial gallery">
          <img src="${locationShotUrl(13)}" alt="Aerial view of the Mamre Heights development site and surrounding neighbourhood">
          <span class="site-shot-caption"><small>01 / Actual site</small><b>The development in context</b><i>Open gallery ↗</i></span>
        </button>
        <button class="site-shot image-reveal open-site-gallery" data-site-index="9" aria-label="View main road connection aerial image">
          <img src="${locationShotUrl(9)}" alt="Aerial view of the main road connection near Mamre Heights">
          <span class="site-shot-caption"><small>02 / Connection</small><b>Linked to the neighbourhood</b></span>
        </button>
        <button class="site-shot image-reveal open-site-gallery" data-site-index="0" aria-label="View wider Mamre neighbourhood aerial image">
          <img src="${locationShotUrl(0)}" alt="Wide aerial view across Mamre and the development location">
          <span class="site-shot-caption"><small>03 / Wider setting</small><b>Part of an established community</b></span>
        </button>
      </div>
      <div class="site-gallery-facts reveal"><span>14 aerial perspectives</span><i>◆</i><span>Existing road access</span><i>◆</i><span>Established community</span><i>◆</i><span>Real site photography</span></div>
    </section>

    <section id="investment" class="investment section-pad">
      <div class="investment-head"><div><div class="section-number">08 / The opportunity</div><p class="eyebrow dark reveal">Built for growth</p><h2 class="reveal">A smart move today.<br><em>A stronger tomorrow.</em></h2></div><p class="reveal">Residential comfort meets commercial momentum in a growing node—creating an address designed for lasting demand and long-term value.</p></div>
      <div class="investment-image image-reveal"><img src="${A}investment-hd.jpg" alt="Mamre Heights mixed-use development illuminated at dusk"><button class="investment-cta open-enquiry" data-interest="Investment opportunity"><span>Request an<br>investment pack</span><b>↗</b></button></div>
      <div class="investment-points"><div><span>01</span><b>Multiple income streams</b><p>Residential, retail and garage opportunities.</p></div><div><span>02</span><b>High-demand area</b><p>Growth and infrastructure support demand.</p></div><div><span>03</span><b>Secure & low maintenance</b><p>Modern, efficient systems and finishes.</p></div><div><span>04</span><b>Long-term value</b><p>Quality construction in a growing node.</p></div></div>
    </section>

    <section id="approved-plans" class="approved-plans section-pad">
      <div class="approved-plans-copy">
        <div class="section-number">09 / Municipal approval</div>
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
        <div class="section-number light">10 / Development partners</div>
        <p class="eyebrow reveal">The team behind Mamre Heights</p>
        <h2 class="reveal">Built together.<br><em>Delivered with purpose.</em></h2>
        <p class="reveal">A trusted team of property, professional and finance partners working together to bring this landmark Mamre development to life.</p>
      </div>
      <div class="partner-grid reveal" aria-label="Mamre Heights development partners">
        <article class="partner-card partner-azaria">
          <div class="partner-logo"><img src="${A}partners/azaria-property-developments.png" alt="Azaria Property Developers"></div>
          <div class="partner-meta"><span>01</span><div><b>Azaria Property Developers</b><small>Property development</small></div></div>
        </article>
        <article class="partner-card partner-adriaans">
          <div class="partner-logo"><img src="${A}partners/adriaans.jpg" alt="Adriaans"></div>
          <div class="partner-meta"><span>02</span><div><b>Adriaans</b><small>Development partner</small></div></div>
        </article>
        <article class="partner-card partner-betterbond">
          <div class="partner-logo"><img src="${A}partners/betterbond.jpg" alt="BetterBond"></div>
          <div class="partner-meta"><span>03</span><div><b>BetterBond</b><small>Home finance partner</small></div></div>
        </article>
      </div>
    </section>

    <section id="contact" class="contact section-pad">
      <div class="contact-top"><div><p class="eyebrow reveal">Your next chapter starts here</p><h2 class="reveal">Live. Shop.<br><em>Connect. Thrive.</em></h2></div><p class="reveal">Register your interest and let our property professionals help you take the next step with confidence.</p></div>
      <div class="contact-actions reveal"><button class="contact-choice open-enquiry" data-interest="Residential apartment"><span>01</span><b>I'm looking to live here</b><i>↗</i></button><button class="contact-choice open-enquiry" data-interest="Investment opportunity"><span>02</span><b>I'm looking to invest</b><i>↗</i></button><button class="contact-choice open-enquiry" data-interest="Retail leasing opportunity"><span>03</span><b>I'm looking for retail space</b><i>↗</i></button></div>
      <footer><a class="brand footer-brand" href="#top"><span class="brand-monogram">MH</span><span class="brand-copy"><b>Mamre Heights</b><small>Live · Shop · Thrive</small></span></a><div>Marceleno & Gaylin<br>Property Professionals</div><div><a href="${BROCHURE}" target="_blank">Download brochure ↗</a><a href="${APPROVED_PLANS}" download>Download approved plans ↓</a><button class="disclaimer-button">Disclaimer</button></div><small>© 2026 Mamre Heights. Artist's impressions are for illustrative purposes only.</small></footer>
    </section>
  </main>

  <div class="modal enquiry-modal" role="dialog" aria-modal="true" aria-labelledby="enquiry-title" aria-hidden="true">
    <div class="modal-panel"><button class="modal-close" aria-label="Close">×</button><div class="modal-kicker">Register your interest</div><h2 id="enquiry-title">Let's find your<br><em>place at Mamre Heights.</em></h2><p>Tell us a little about what you’re looking for and a property professional will be in touch.</p>
      <form id="lead-form"><label><span>Full name</span><input name="name" required placeholder="Your name"></label><label><span>Phone number</span><input name="phone" type="tel" required placeholder="e.g. 082 123 4567"></label><label><span>Email address</span><input name="email" type="email" required placeholder="you@example.com"></label><label><span>I'm interested in</span><select name="interest"><option>Residential apartment</option><option>Investment opportunity</option><option>Retail leasing opportunity</option><option>General enquiry</option></select></label><label class="consent"><input type="checkbox" required><span>I consent to being contacted about Mamre Heights.</span></label><button class="button gold" type="submit">Send my enquiry <span>↗</span></button></form>
      <div class="form-success"><span>✓</span><h3>Thank you.</h3><p>Your interest has been registered. A property professional will be in touch soon.</p><button class="button outline close-success">Continue exploring</button></div>
    </div>
  </div>
  <div class="modal gallery-modal" role="dialog" aria-modal="true" aria-label="Development gallery" aria-hidden="true"><button class="modal-close" aria-label="Close">×</button><div class="lightbox-stage"><button class="gallery-prev" aria-label="Previous image">←</button><img alt="Mamre Heights development view"><button class="gallery-next" aria-label="Next image">→</button></div><div class="gallery-caption"><span>01 / 06</span><p></p></div></div>
  <div class="modal site-gallery-modal" role="dialog" aria-modal="true" aria-labelledby="site-gallery-title" aria-hidden="true">
    <header class="site-viewer-header"><div><span>Actual site · Mamre, Western Cape</span><h2 id="site-gallery-title">Development location</h2></div><div><button class="site-gallery-fullscreen" aria-label="View gallery fullscreen">⛶</button><button class="modal-close" aria-label="Close">×</button></div></header>
    <div class="site-viewer-stage">
      <button class="site-viewer-prev" aria-label="Previous aerial image">←</button>
      <figure><img alt="Aerial photograph of the Mamre Heights development location"><figcaption><span class="site-viewer-count">01 / 14</span><b class="site-viewer-caption">Development site and surrounding Mamre neighbourhood</b></figcaption></figure>
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
if (location.hash) setTimeout(() => document.querySelector(location.hash)?.scrollIntoView(), 50);

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

function openModal(modal) { modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('no-scroll'); }
function closeModal(modal) { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.classList.remove('no-scroll'); }
$$('.modal-close').forEach(b => b.onclick = () => closeModal(b.closest('.modal')));
$$('.modal').forEach(m => m.addEventListener('click', e => { if(e.target===m) closeModal(m); }));
document.addEventListener('keydown', e => { if(e.key==='Escape') { const m=$('.modal.open'); if(m) closeModal(m); else toggleMenu(false); } });

const enquiry=$('.enquiry-modal');
$$('.open-enquiry').forEach(b=>b.onclick=()=>{ const interest=b.dataset.interest||'General enquiry'; $(`select[name="interest"]`,enquiry).value=interest; openModal(enquiry); });
$('#lead-form').onsubmit=e=>{e.preventDefault(); e.currentTarget.style.display='none'; $('.form-success',enquiry).classList.add('show');};
$('.close-success').onclick=()=>{ closeModal(enquiry); setTimeout(()=>{ $('#lead-form').reset(); $('#lead-form').style.display='grid'; $('.form-success',enquiry).classList.remove('show'); },350); };

const galleryItems=[['hero-hd.jpg','Modern community living'],['interior-hd.jpg','Bright open-plan interiors'],['retail-hd.jpg','Everyday convenience below'],['amenities-hd.jpg','Spaces for families'],['investment-hd.jpg','Built for long-term value'],['balcony-hd.jpg','Private outdoor living']];
let galleryIndex=0; const gm=$('.gallery-modal');
function renderGallery(){const [src,cap]=galleryItems[galleryIndex]; $('img',gm).src=A+src; $('.gallery-caption span',gm).textContent=`${String(galleryIndex+1).padStart(2,'0')} / ${String(galleryItems.length).padStart(2,'0')}`; $('.gallery-caption p',gm).textContent=cap;}
$('.open-gallery').onclick=()=>{renderGallery();openModal(gm)}; $('.gallery-prev').onclick=()=>{galleryIndex=(galleryIndex-1+galleryItems.length)%galleryItems.length;renderGallery()}; $('.gallery-next').onclick=()=>{galleryIndex=(galleryIndex+1)%galleryItems.length;renderGallery()};
$('.disclaimer-button').onclick=()=>openModal($('.disclaimer-modal'));

const siteGalleryModal = $('.site-gallery-modal');
const siteGalleryCaptions = [
  'Established neighbourhood, community fields and the development surrounds',
  'The development site within the wider Mamre landscape',
  'Existing site roads and the adjoining residential community',
  'Neighbourhood edge and wider development land',
  'Southern approach across the site toward Mamre',
  'Internal road network and surrounding residential fabric',
  'Western site edge and natural landscape',
  'Wider landscape connection beyond the neighbourhood',
  'Development roads, plots and established community context',
  'Main-road connection into the Mamre neighbourhood',
  'Existing intersection and local movement network',
  'Mamre main route and surrounding homes',
  'Development land and completed internal road infrastructure',
  'Complete aerial overview of the Mamre Heights location'
];
let siteGalleryIndex = 13;

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
