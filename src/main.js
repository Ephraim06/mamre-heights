// Resolve assets from the script itself so direct-file, dev-server and built
// deployments all point to the correct folder.
const scriptLocation = new URL(document.currentScript.src);
const normalizedScriptPath = decodeURIComponent(scriptLocation.pathname).replaceAll('\\', '/').toLowerCase();
const openedFromBuild = normalizedScriptPath.endsWith('/dist/src/main.js');
const A = new URL(location.protocol === 'file:' && !openedFromBuild ? '../public/assets/' : '../assets/', scriptLocation).href;
const BROCHURE = new URL(location.protocol === 'file:' && !openedFromBuild ? '../public/mamre-heights.pdf' : '../mamre-heights.pdf', scriptLocation).href;

document.querySelector('#app').innerHTML = `
  <div class="loader" aria-hidden="true"><div class="loader-mark">MH</div><div class="loader-line"><i></i></div></div>
  <div class="cursor-dot" aria-hidden="true"></div>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Mamre Heights home">
      <span class="brand-monogram">MH</span><span class="brand-rule"></span>
      <span class="brand-copy"><b>Mamre Heights</b><small>Live · Shop · Thrive</small></span>
    </a>
    <nav class="desktop-nav" aria-label="Primary navigation">
      <a href="#residences">Residences</a><a href="#lifestyle">Lifestyle</a><a href="#location">Location</a><a href="#investment">Invest</a>
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
      <a href="#investment"><span>04</span>Investment</a>
      <a href="#contact"><span>05</span>Enquire</a>
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
      <div class="location-map"><img src="${A}location-hd.jpg" alt="Location map showing Mamre Heights and nearby amenities"></div>
      <div class="location-copy">
        <div class="section-number light">06 / Perfectly positioned</div><p class="eyebrow reveal">In the heart of Mamre</p><h2 class="reveal">Close to what matters.<br><em>Connected to more.</em></h2>
        <p class="reveal">A peaceful community address with schools, shops, places of worship and public transport nearby—plus straightforward access to the R27, Atlantis and the West Coast.</p>
        <div class="location-pills reveal"><span>Nearby schools</span><span>Local shopping</span><span>Public transport</span><span>West Coast access</span></div>
        <a class="button outline" href="https://maps.google.com/?q=Mamre%2C+Western+Cape" target="_blank" rel="noreferrer">Open in Google Maps <span>↗</span></a>
      </div>
    </section>

    <section id="investment" class="investment section-pad">
      <div class="investment-head"><div><div class="section-number">07 / The opportunity</div><p class="eyebrow dark reveal">Built for growth</p><h2 class="reveal">A smart move today.<br><em>A stronger tomorrow.</em></h2></div><p class="reveal">Residential comfort meets commercial momentum in a growing node—creating an address designed for lasting demand and long-term value.</p></div>
      <div class="investment-image image-reveal"><img src="${A}investment-hd.jpg" alt="Mamre Heights mixed-use development illuminated at dusk"><button class="investment-cta open-enquiry" data-interest="Investment opportunity"><span>Request an<br>investment pack</span><b>↗</b></button></div>
      <div class="investment-points"><div><span>01</span><b>Multiple income streams</b><p>Residential, retail and garage opportunities.</p></div><div><span>02</span><b>High-demand area</b><p>Growth and infrastructure support demand.</p></div><div><span>03</span><b>Secure & low maintenance</b><p>Modern, efficient systems and finishes.</p></div><div><span>04</span><b>Long-term value</b><p>Quality construction in a growing node.</p></div></div>
    </section>

    <section class="masterplan">
      <div class="masterplan-copy"><div class="section-number light">08 / Development plan</div><p class="eyebrow reveal">Designed for community</p><h2 class="reveal">See the<br><em>bigger picture.</em></h2><p class="reveal">Explore how apartments, retail, parking and shared amenities come together in one considered plan.</p><button class="button gold open-plan">View masterplan <span>↗</span></button></div>
      <div class="masterplan-media image-reveal"><img src="${A}masterplan-hd.jpg" alt="Mamre Heights development masterplan"></div>
    </section>

    <section id="contact" class="contact section-pad">
      <div class="contact-top"><div><p class="eyebrow reveal">Your next chapter starts here</p><h2 class="reveal">Live. Shop.<br><em>Connect. Thrive.</em></h2></div><p class="reveal">Register your interest and let our property professionals help you take the next step with confidence.</p></div>
      <div class="contact-actions reveal"><button class="contact-choice open-enquiry" data-interest="Residential apartment"><span>01</span><b>I'm looking to live here</b><i>↗</i></button><button class="contact-choice open-enquiry" data-interest="Investment opportunity"><span>02</span><b>I'm looking to invest</b><i>↗</i></button><button class="contact-choice open-enquiry" data-interest="Retail leasing opportunity"><span>03</span><b>I'm looking for retail space</b><i>↗</i></button></div>
      <footer><a class="brand footer-brand" href="#top"><span class="brand-monogram">MH</span><span class="brand-copy"><b>Mamre Heights</b><small>Live · Shop · Thrive</small></span></a><div>Marceleno & Gaylin<br>Property Professionals</div><div><a href="${BROCHURE}" target="_blank">Download brochure ↗</a><button class="disclaimer-button">Disclaimer</button></div><small>© 2026 Mamre Heights. Artist's impressions are for illustrative purposes only.</small></footer>
    </section>
  </main>

  <div class="modal enquiry-modal" role="dialog" aria-modal="true" aria-labelledby="enquiry-title" aria-hidden="true">
    <div class="modal-panel"><button class="modal-close" aria-label="Close">×</button><div class="modal-kicker">Register your interest</div><h2 id="enquiry-title">Let's find your<br><em>place at Mamre Heights.</em></h2><p>Tell us a little about what you’re looking for and a property professional will be in touch.</p>
      <form id="lead-form"><label><span>Full name</span><input name="name" required placeholder="Your name"></label><label><span>Phone number</span><input name="phone" type="tel" required placeholder="e.g. 082 123 4567"></label><label><span>Email address</span><input name="email" type="email" required placeholder="you@example.com"></label><label><span>I'm interested in</span><select name="interest"><option>Residential apartment</option><option>Investment opportunity</option><option>Retail leasing opportunity</option><option>General enquiry</option></select></label><label class="consent"><input type="checkbox" required><span>I consent to being contacted about Mamre Heights.</span></label><button class="button gold" type="submit">Send my enquiry <span>↗</span></button></form>
      <div class="form-success"><span>✓</span><h3>Thank you.</h3><p>Your interest has been registered. A property professional will be in touch soon.</p><button class="button outline close-success">Continue exploring</button></div>
    </div>
  </div>
  <div class="modal gallery-modal" role="dialog" aria-modal="true" aria-label="Development gallery" aria-hidden="true"><button class="modal-close" aria-label="Close">×</button><div class="lightbox-stage"><button class="gallery-prev" aria-label="Previous image">←</button><img alt="Mamre Heights development view"><button class="gallery-next" aria-label="Next image">→</button></div><div class="gallery-caption"><span>01 / 06</span><p></p></div></div>
  <div class="modal plan-modal" role="dialog" aria-modal="true" aria-label="Development masterplan" aria-hidden="true"><button class="modal-close" aria-label="Close">×</button><div class="plan-wrap"><img src="${A}masterplan-large-hd.jpg" alt="Mamre Heights ground storey masterplan"><div><span>Development masterplan</span><p>Ground-storey plan showing retail, access, secure garages, play area, drying yard and vendor spaces.</p></div></div></div>
  <div class="modal disclaimer-modal" role="dialog" aria-modal="true" aria-label="Disclaimer" aria-hidden="true"><div class="modal-panel small"><button class="modal-close" aria-label="Close">×</button><div class="modal-kicker">Important information</div><h2>Disclaimer</h2><p>All images, renders and visual representations are for illustrative purposes only and are intended to provide a general idea of the proposed development.</p><p>The final design, finishes, landscaping and layout will be based on approved architectural plans and specifications. All details are subject to change and will be confirmed according to final plans.</p></div></div>
  <button class="floating-enquire open-enquiry" data-interest="General enquiry"><span>Enquire</span><b>↗</b></button>
`;

const $ = (s, scope = document) => scope.querySelector(s);
const $$ = (s, scope = document) => [...scope.querySelectorAll(s)];

window.addEventListener('load', () => setTimeout(() => document.body.classList.add('loaded'), 300));

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
$('.open-plan').onclick=()=>openModal($('.plan-modal')); $('.disclaimer-button').onclick=()=>openModal($('.disclaimer-modal'));
