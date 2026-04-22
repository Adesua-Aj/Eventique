
let VB = [];

async function loadVendors() {
    const response = await fetch('http://localhost:3000/api/vendors');
    VB = await response.json();
    console.log("Vendors loaded from SQLite:", VB);
   
    if (window.renderListingVendors) renderListingVendors();
}

loadVendors();const IMGS={
  wLux1:['https://i.postimg.cc/c4jq5Ssy/IMG-5638.jpg','https://i.postimg.cc/43kDsQ7r/IMG-5639.jpg','https://i.postimg.cc/25Rsr7LR/IMG-5642.jpg','https://i.postimg.cc/85Txrkb6/IMG-5657.jpg','https://i.postimg.cc/9fdvMwyc/IMG-5648.jpg'],
  wMin: ['https://i.postimg.cc/sX3bZfJQ/IMG-5655.jpg','https://i.postimg.cc/qRpWCBGt/IMG-5654.jpg','https://i.postimg.cc/SK6wsYC3/IMG-5646.jpg','https://i.postimg.cc/TPMzfJ5X/IMG-5643.jpg','https://i.postimg.cc/QMG2hJ9v/IMG-5640.jpg'],
  wTrad:['https://i.postimg.cc/YSK5MzL7/IMG-5644.jpg','https://i.postimg.cc/vmrpBx5M/IMG-5649.jpg','https://i.postimg.cc/5tBZ0Q8t/IMG-5651.jpg','https://i.postimg.cc/d02z1ZGV/IMG-5650.jpg'],
  wLux2:['https://i.postimg.cc/Dzk9nP4F/IMG-5645.jpg','https://i.postimg.cc/Zq81Rv6z/IMG-5647.jpg','https://i.postimg.cc/rp1vmR5s/IMG-5652.jpg','https://i.postimg.cc/Pxd08fMD/IMG-5656.jpg'],
  bday: ['https://i.postimg.cc/T14sSVvB/IMG-5691.jpg','https://i.postimg.cc/Wz3KX9C1/IMG-5676.jpg','https://i.postimg.cc/FzRqDP8Y/IMG-5677.jpg','https://i.postimg.cc/8c53ty9F/IMG-5678.jpg','https://i.postimg.cc/zvBM0d6b/IMG-5679.jpg','https://i.postimg.cc/4ydMB8qt/IMG-5680.jpg','https://i.postimg.cc/Y09VbXZ1/IMG-5681.jpg','https://i.postimg.cc/SRs5DZ36/IMG-5682.jpg','https://i.postimg.cc/7hWRc3rf/IMG-5683.jpg','https://i.postimg.cc/fyrPFcQ9/IMG-5684.jpg','https://i.postimg.cc/j2F19HYH/IMG-5685.jpg','https://i.postimg.cc/6qmPSrxL/IMG-5686.jpg','https://i.postimg.cc/L5bW7tFV/IMG-5687.jpg','https://i.postimg.cc/1XjdTG1J/IMG-5688.jpg','https://i.postimg.cc/D0MNDr3C/IMG-5689.jpg','https://i.postimg.cc/7hWRc3rW/IMG-5690.jpg'],
  corp: ['https://i.postimg.cc/WpWxhvqT/IMG-5692.jpg','https://i.postimg.cc/NGJZ5c2g/IMG-5693.jpg','https://i.postimg.cc/05WhbsKy/IMG-5694.jpg','https://i.postimg.cc/QN4vH3KT/IMG-5695.jpg','https://i.postimg.cc/3rSzdT0D/IMG-5696.jpg','https://i.postimg.cc/8zWYKfK5/IMG-5697.jpg','https://i.postimg.cc/NjTnJ2JK/IMG-5698.jpg','https://i.postimg.cc/52vr7Q7F/IMG-5699.jpg','https://i.postimg.cc/nh7WR9RY/IMG-5700.jpg','https://i.postimg.cc/FHc6WkWP/IMG-5701.jpg','https://i.postimg.cc/pL8SG5G6/IMG-5702.jpg','https://i.postimg.cc/FK4B2F8G/IMG-5703.jpg'],
  funeral:['https://i.postimg.cc/QCtP06wx/IMG-5675.jpg','https://i.postimg.cc/Bb6yMhk3/IMG-5674.jpg','https://i.postimg.cc/Vv6TD7p1/IMG-5673.jpg','https://i.postimg.cc/rmg3G6nM/IMG-5670.jpg','https://i.postimg.cc/Hx3R0GZY/IMG-5671.jpg','https://i.postimg.cc/zBp6wmt5/IMG-5669.jpg','https://i.postimg.cc/Y98ZNcXZ/IMG-5668.jpg','https://i.postimg.cc/RFGy1rPj/IMG-5667.jpg','https://i.postimg.cc/B6Nk5Why/IMG-5666.jpg','https://i.postimg.cc/KzQw7X9p/IMG-5665.jpg','https://i.postimg.cc/W3SCmR98/IMG-5664.jpg','https://i.postimg.cc/zBp6wmdF/IMG-5663.jpg','https://i.postimg.cc/DZ7RbfcM/IMG-5662.jpg','https://i.postimg.cc/1tybNRKW/IMG-5661.jpg','https://i.postimg.cc/gJG16cKN/IMG-5660.jpg','https://i.postimg.cc/4dXjh411/IMG-5659.jpg','https://i.postimg.cc/vBGC68vW/IMG-5658.jpg']
};

VB=[
  {id:1, name:'Grace & Gold Events',   style:'luxury',     location:'Lagos',        phone:'08011234567',email:'info@gracegold.ng',       desc:'Premium luxury wedding planning with full-service floral design, tablescaping, and elegant venue coordination.',     photos:IMGS.wLux1,               eventTypes:['wedding']},
  {id:2, name:'Bloom & Co.',           style:'minimalist', location:'Abuja',         phone:'08022345678',email:'hello@bloomco.ng',         desc:'Clean, modern wedding styling focused on elegant simplicity and understated ceremony design.',                      photos:IMGS.wMin,                eventTypes:['wedding']},
  {id:5, name:'The Golden Arch',       style:'luxury',     location:'Abuja',         phone:'08055678901',email:'bookings@goldenarch.ng',   desc:'Opulent wedding design with signature arch installations, large-scale florals, and premium ivory and gold dressing.', photos:IMGS.wLux2,               eventTypes:['wedding']},
  {id:10,name:'Pearl & Ivory',         style:'minimalist', location:'Port Harcourt', phone:'07011123456',email:'pearl@ivory.ng',           desc:'Understated wedding elegance with delicate floral arrangements and softly lit ceremony backdrops.',                   photos:[...IMGS.wMin.slice(2),...IMGS.wLux1.slice(3)],eventTypes:['wedding']},
  {id:4, name:'Heritage Planners',     style:'traditional',location:'Port Harcourt', phone:'08044567890',email:'heritage@planners.ng',     desc:'Culturally rich wedding and burial ceremonies with traditional décor carefully curated for every occasion.',         photos:IMGS.wTrad,               eventTypes:['wedding']}, 
  {id:3, name:'Vibrant Touch NG',      style:'vibrant',    location:'Benin City',    phone:'08033456789',email:'contact@vibranttouch.ng',  desc:'Bold birthday event design with balloon installations, themed table setups, and high-energy party décor.',            photos:IMGS.bday.slice(0,6),     eventTypes:['birthday']},
  {id:7, name:'Colour Carnival',       style:'vibrant',    location:'Ibadan',        phone:'08077890123',email:'hello@colourcarnival.ng',  desc:'Festive birthday decoration specialists: balloon arches, colourful dessert tables, and large-scale party setups.',    photos:IMGS.bday.slice(6,12),    eventTypes:['birthday']},
  {id:11,name:'Festive Forge',         style:'vibrant',    location:'Abuja',         phone:'07022234567',email:'forge@festive.ng',         desc:'Creative event builders with bold colour, energy, and bespoke thematic décor packages for every celebration.',        photos:IMGS.bday.slice(12,16),   eventTypes:['birthday']},
  {id:9, name:'Executive Gatherings',  style:'luxury',     location:'Lagos',         phone:'08099012345',email:'exec@gatherings.ng',       desc:'Corporate event specialists delivering excellence from boardroom conferences to large-scale award nights.',             photos:IMGS.corp.slice(0,4),     eventTypes:['corporate']},
  {id:13,name:'Premier Corporate NG',  style:'luxury',     location:'Abuja',         phone:'07044456789',email:'info@premiercorp.ng',       desc:'End-to-end luxury corporate event management — branded stage design, gala evenings, and high-profile conferences.',   photos:IMGS.corp.slice(4,8),    eventTypes:['corporate']},
  {id:14,name:'The Event Canvas',      style:'minimalist', location:'Lagos',         phone:'07055567890',email:'canvas@theeventcanvas.ng',  desc:'Minimalist styling for discerning clients — modern corporate setups, clean receptions, muted palettes.',              photos:IMGS.corp.slice(8,12),  eventTypes:['corporate']},
  {id:8, name:'Ancestral Rites NG',    style:'traditional',location:'Benin City',    phone:'08088901234',email:'ancestral@rites.ng',        desc:'Expert coordinators for traditional burial ceremonies ensuring cultural protocols are observed with full dignity.',     photos:IMGS.funeral.slice(0,6),  eventTypes:['burial']},
  {id:15,name:'Serene Farewell Events',style:'minimalist', location:'Lagos',         phone:'08113456789',email:'serene@farewell.ng',        desc:'Calm, respectful burial event coordination with neutral décor, dignified floral arrangements, and quiet seating.',    photos:IMGS.funeral.slice(6,12), eventTypes:['burial']},
  {id:16,name:'Final Honours NG',      style:'traditional',location:'Abuja',         phone:'08124567890',email:'info@finalhonours.ng',       desc:'Dignified farewell ceremonies blending cultural tradition with solemn, respectful décor and seating coordination.',    photos:IMGS.funeral.slice(12,18),eventTypes:['burial']}
];

const PALETTES={
  wedding:[{n:'Gold',h:'#C9A84C'},{n:'White',h:'#FFFFFF'},{n:'Champagne',h:'#F7E7CE'},{n:'Ivory',h:'#FFFFF0'},{n:'Blush Pink',h:'#F4A7B9'},{n:'Rose Gold',h:'#B76E79'},{n:'Sage Green',h:'#8FAF8F'},{n:'Dusty Blue',h:'#7CA7AD'},{n:'Burgundy',h:'#800020'},{n:'Peach',h:'#FFCBA4'},{n:'Nude',h:'#D4B896'},{n:'Silver',h:'#C0C0C0'},{n:'Emerald Green',h:'#50C878'},{n:'Cream',h:'#FFFDD0'},{n:'Lavender',h:'#C9A4D1'}],
  birthday:[{n:'Pink',h:'#F48FB1'},{n:'Blue',h:'#64B5F6'},{n:'Purple',h:'#CE93D8'},{n:'Yellow',h:'#FFF176'},{n:'Red',h:'#E57373'},{n:'Green',h:'#81C784'},{n:'Orange',h:'#FFB74D'},{n:'White',h:'#FFFFFF'},{n:'Gold',h:'#C9A84C'},{n:'Black',h:'#212121'},{n:'Silver',h:'#C0C0C0'},{n:'Peach',h:'#FFCBA4'},{n:'Turquoise',h:'#40E0D0'},{n:'Mint Green',h:'#98FF98'},{n:'Rainbow Mix',h:'linear-gradient(135deg,#F48FB1,#CE93D8,#64B5F6,#81C784,#FFF176)'}],
  burial:[{n:'Black',h:'#212121'},{n:'White',h:'#FFFFFF'},{n:'Grey',h:'#9E9E9E'},{n:'Silver',h:'#C0C0C0'},{n:'Navy Blue',h:'#1A3560'},{n:'Dark Brown',h:'#4E342E'},{n:'Burgundy',h:'#800020'},{n:'Ash',h:'#B2B2B2'},{n:'Beige',h:'#D4B896'},{n:'Charcoal',h:'#444444'},{n:'Olive',h:'#808000'},{n:'Cream',h:'#FFFDD0'},{n:'Gold',h:'#C9A84C'},{n:'Dark Green',h:'#1B5E20'},{n:'Maroon',h:'#800000'}],
  corporate:[{n:'Navy Blue',h:'#1A3560'},{n:'White',h:'#FFFFFF'},{n:'Black',h:'#212121'},{n:'Grey',h:'#9E9E9E'},{n:'Silver',h:'#C0C0C0'},{n:'Gold',h:'#C9A84C'},{n:'Beige',h:'#D4B896'},{n:'Dark Blue',h:'#0D2137'},{n:'Charcoal',h:'#444444'},{n:'Steel Blue',h:'#4682B4'},{n:'Indigo',h:'#3949AB'},{n:'Dark Green',h:'#1B5E20'},{n:'Ash Grey',h:'#B2B2B2'},{n:'Brown',h:'#795548'},{n:'Slate',h:'#607D8B'}]
};
const MATCHES={
  wedding:{'Gold':['White','Ivory','Champagne','Nude','Black','Burgundy'],'White':['Gold','Silver','Champagne','Blush Pink','Sage Green'],'Champagne':['Gold','Ivory','Nude','White','Rose Gold'],'Ivory':['Gold','Nude','Champagne','Blush Pink','Sage Green'],'Blush Pink':['White','Gold','Nude','Peach','Rose Gold'],'Rose Gold':['White','Champagne','Nude','Blush Pink','Gold'],'Sage Green':['White','Ivory','Gold','Cream','Nude'],'Dusty Blue':['White','Silver','Grey','Champagne','Nude'],'Burgundy':['Gold','White','Black','Nude','Cream'],'Peach':['White','Nude','Gold','Blush Pink','Cream'],'Nude':['White','Gold','Champagne','Blush Pink','Brown'],'Silver':['White','Black','Grey','Navy Blue','Gold'],'Emerald Green':['Gold','White','Black','Cream','Beige'],'Cream':['Gold','Nude','White','Sage Green','Beige'],'Lavender':['White','Silver','Nude','Blush Pink','Grey']},
  birthday:{'Pink':['White','Purple','Blue','Gold','Peach'],'Blue':['White','Pink','Purple','Silver','Yellow'],'Purple':['Pink','Blue','White','Silver','Yellow'],'Yellow':['Blue','White','Orange','Pink','Gold'],'Red':['White','Gold','Blue','Yellow','Black'],'Green':['Pink','White','Blue','Yellow','Orange'],'Orange':['White','Pink','Yellow','Red','Gold'],'White':['Pink','Blue','Purple','Gold','Silver'],'Gold':['White','Black','Pink','Purple','Red'],'Black':['Gold','White','Red','Silver','Purple'],'Silver':['Blue','White','Pink','Purple','Gold'],'Peach':['White','Pink','Gold','Yellow','Nude'],'Turquoise':['White','Pink','Purple','Yellow','Silver'],'Mint Green':['Pink','White','Blue','Yellow','Peach'],'Rainbow Mix':['White','Black','Gold','Silver','Blue']},
  burial:{'Black':['White','Grey','Silver','Gold','Beige'],'White':['Black','Grey','Silver','Brown','Gold'],'Grey':['White','Black','Silver','Beige','Brown'],'Silver':['Black','White','Grey','Gold','Navy Blue'],'Navy Blue':['White','Grey','Silver','Black','Gold'],'Dark Brown':['White','Beige','Grey','Black','Gold'],'Burgundy':['White','Black','Grey','Gold','Beige'],'Ash':['Black','White','Silver','Grey','Brown'],'Beige':['White','Black','Brown','Gold','Grey'],'Charcoal':['White','Black','Grey','Silver','Beige'],'Olive':['White','Black','Grey','Brown','Beige'],'Cream':['Black','Brown','Grey','Gold','White'],'Gold':['White','Black','Brown','Grey','Burgundy'],'Dark Green':['White','Black','Gold','Grey','Beige'],'Maroon':['White','Black','Gold','Grey','Beige']},
  corporate:{'Navy Blue':['White','Grey','Silver','Gold','Black'],'White':['Navy Blue','Black','Grey','Silver','Beige'],'Black':['White','Grey','Silver','Gold','Navy Blue'],'Grey':['White','Black','Navy Blue','Silver','Beige'],'Silver':['Navy Blue','White','Black','Grey','Gold'],'Gold':['White','Navy Blue','Black','Grey','Silver'],'Beige':['White','Black','Navy Blue','Grey','Brown'],'Dark Blue':['White','Grey','Silver','Black','Gold'],'Charcoal':['White','Grey','Silver','Black','Beige'],'Steel Blue':['White','Grey','Navy Blue','Silver','Black'],'Indigo':['White','Gold','Grey','Navy Blue','Black'],'Dark Green':['White','Black','Gold','Grey','Navy Blue'],'Ash Grey':['White','Black','Silver','Beige','Grey'],'Brown':['White','Beige','Grey','Black','Gold'],'Slate':['White','Black','Grey','Silver','Beige']}
};

let currentUser=null,selectedEventType=null,detailStyleFilter='all',detailLocFilter='all',listStyleFilter='all',listLocFilter='all',activeChatId=null;
function getVendors(){return[...VB,...JSON.parse(localStorage.getItem('eventique_vendors')||'[]')];}
const LHEX=new Set(['#FFFFFF','#FFFFF0','#FFFDD0','#FFF176','#F7E7CE','#F4A7B9','#FFCBA4','#C0C0C0','#B2B2B2','#D4B896','#98FF98','#C9A4D1','#7CA7AD','#8FAF8F','#64B5F6','#CE93D8','#40E0D0']);
function sb(h){return(LHEX.has(h)||h.startsWith('linear'))?'border:1.5px solid #D0CCC5;':'';}
function hbn(name,type){
  const f=(PALETTES[type]||[]).find(x=>x.n===name);if(f)return f.h;
  const m={'Black':'#212121','White':'#FFFFFF','Grey':'#9E9E9E','Gold':'#C9A84C','Silver':'#C0C0C0','Brown':'#795548','Beige':'#D4B896','Nude':'#D4B896','Champagne':'#F7E7CE','Ivory':'#FFFFF0','Cream':'#FFFDD0','Sage Green':'#8FAF8F','Navy Blue':'#1A3560','Peach':'#FFCBA4','Blush Pink':'#F4A7B9','Rose Gold':'#B76E79','Burgundy':'#800020','Blue':'#64B5F6','Pink':'#F48FB1','Purple':'#CE93D8','Yellow':'#FFF176','Red':'#E57373','Green':'#81C784','Orange':'#FFB74D','Turquoise':'#40E0D0','Mint Green':'#98FF98','Dark Green':'#1B5E20','Dark Brown':'#4E342E','Ash':'#B2B2B2','Charcoal':'#444444','Maroon':'#800000','Olive':'#808000','Dark Blue':'#0D2137','Steel Blue':'#4682B4','Indigo':'#3949AB','Ash Grey':'#B2B2B2','Slate':'#607D8B','Lavender':'#C9A4D1','Dusty Blue':'#7CA7AD','Emerald Green':'#50C878'};
  return m[name]||'#CCCCCC';
}

async function login() {
    const e = document.getElementById('loginEmail').value.trim();
    const p = document.getElementById('loginPass').value;
    const err = document.getElementById('loginError');

    // This part talks to REAL database now
    const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: e, password: p })
    });

    const data = await response.json();

    if (response.ok) {
        err.classList.remove('show');
        currentUser = data.user;
        // Save only the active session so it stays logged in on refresh
        localStorage.setItem('eventique_session', JSON.stringify(data.user));
        
        // This part switches the screen to your dashboard
        document.getElementById('loginPage').classList.remove('active');
        document.getElementById('dashPage').classList.add('active');
        document.getElementById('userNameDisplay').textContent = data.user.name;
        afterLogin(); 
    } else {
        err.classList.add('show');
    }
}
async function register() {
    const n = document.getElementById('regName').value.trim();
    const e = document.getElementById('regEmail').value.trim();
    const p = document.getElementById('regPass').value;
    const err = document.getElementById('regError');

    if (!n || !e || p.length < 6) {
        err.textContent = 'Please fill in all fields correctly.';
        err.classList.add('show');
        return;
    }

    // This talks to server.js
    const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: n, email: e, password: p })
    });

    if (response.ok) {
        alert("Account created successfully! You can now log in.");
        // Switch to login screen
        document.getElementById('registerPage').classList.remove('active');
        document.getElementById('loginPage').classList.add('active');
    } else {
        err.textContent = 'Registration failed. Email might already exist.';
        err.classList.add('show');
    }
}
function afterLogin(){
  document.getElementById('navAvatar').textContent=currentUser.name.charAt(0).toUpperCase();
  document.getElementById('navName').textContent=currentUser.name.split(' ')[0];
  document.getElementById('mainNav').style.display='flex';goPage('dashPage');
}
function logout(){
  localStorage.removeItem('eventique_session');currentUser=null;selectedEventType=null;
  document.getElementById('mainNav').style.display='none';
  document.querySelectorAll('.event-card').forEach(c=>c.classList.remove('selected'));
  document.getElementById('startBtn').disabled=true;goPage('loginPage');
}
function goPage(id){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.getElementById(id).classList.add('active');window.scrollTo(0,0);if(id==='listingPage')renderListingVendors();}
function selectEvent(type,el){document.querySelectorAll('.event-card').forEach(c=>c.classList.remove('selected'));el.classList.add('selected');selectedEventType=type;document.getElementById('startBtn').disabled=false;}
function startPlanning(){if(!selectedEventType)return;renderDetailsPage(selectedEventType);goPage('detailsPage');}

function renderDetailsPage(type){
  const L={wedding:'Wedding',birthday:'Birthday',burial:'Burial',corporate:'Corporate'};
  document.getElementById('detailsTitle').textContent=L[type]+' Planning';
  const badge=document.getElementById('detailsBadge');badge.textContent=L[type];badge.className='event-badge badge-'+type;
  const sw=document.getElementById('themeSwatches');sw.innerHTML='';
  PALETTES[type].forEach(c=>{sw.innerHTML+=`<div class="swatch-item" onclick="showMatch('${c.n}','${type}',this)"><div class="swatch-circle" style="background:${c.h};${sb(c.h)}"></div><span class="swatch-label">${c.n}</span></div>`;});
  document.getElementById('matchResult').style.display='none';
  detailStyleFilter='all';detailLocFilter='all';
  document.querySelectorAll('#dStyleFilters .filter-btn').forEach((b,i)=>b.classList.toggle('active',i===0));
  document.querySelectorAll('#dLocFilters .filter-btn').forEach((b,i)=>b.classList.toggle('active',i===0));
  renderDetailVendors();
}
function showMatch(name,type,el){
  document.querySelectorAll('#themeSwatches .swatch-item').forEach(s=>s.classList.remove('active'));el.classList.add('active');
  const list=MATCHES[type][name];if(!list)return;
  document.getElementById('matchBaseName').textContent=name;
  const ms=document.getElementById('matchSwatches');ms.innerHTML='';
  list.forEach(mName=>{const h=hbn(mName,type);ms.innerHTML+=`<div class="swatch-item"><div class="swatch-circle" style="background:${h};${sb(h)}"></div><span class="swatch-label">${mName}</span></div>`;});
  document.getElementById('matchResult').style.display='block';
}
function filterVendors(type,val,btn){
  if(type==='style')detailStyleFilter=val;else detailLocFilter=val;
  btn.closest('.vendor-filters').querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderDetailVendors();
}
function renderDetailVendors(){
  const grid=document.getElementById('detailVendorGrid');
  let v=getVendors().filter(x=>x.eventTypes&&x.eventTypes.includes(selectedEventType));
  if(detailStyleFilter!=='all')v=v.filter(x=>x.style===detailStyleFilter);
  if(detailLocFilter!=='all')v=v.filter(x=>x.location===detailLocFilter);
  grid.innerHTML=v.length?v.map(vendorCard).join(''):`<div class="no-vendors"><p>No vendors found for this combination.</p></div>`;
}
function filterListingVendors(type,val,btn){
  if(type==='style')listStyleFilter=val;else listLocFilter=val;
  btn.closest('.vendor-filters').querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderListingVendors();
}
function renderListingVendors(){
  const grid=document.getElementById('listingVendorGrid');
  let v=getVendors();
  if(listStyleFilter!=='all')v=v.filter(x=>x.style===listStyleFilter);
  if(listLocFilter!=='all')v=v.filter(x=>x.location===listLocFilter);
  grid.innerHTML=v.length?v.map(vendorCard).join(''):`<div class="no-vendors"><p>No vendors match these filters.</p></div>`;
}
function vendorCard(v){
  const src=v.photos&&v.photos.length?v.photos[0]:'';
  return `<div class="vendor-card"><div class="v-thumb"><img src="${src}" alt="${v.name}" loading="lazy"></div><div class="vendor-body"><h3 class="vendor-name">${v.name}</h3><div class="vendor-meta"><span class="vendor-tag tag-style">${v.style}</span><span class="vendor-tag tag-location">${v.location}</span></div><p class="vendor-desc">${v.desc}</p><button class="btn-view" onclick="openModal(${v.id})">View Profile</button></div></div>`;
}
function openModal(id){
  const v=getVendors().find(x=>x.id===id);if(!v)return;activeChatId=id;
  document.getElementById('modalBizName').textContent=v.name;
  document.getElementById('modalContact').innerHTML=`<span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>${v.phone||'N/A'}</span><span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>${v.email||'N/A'}</span>`;
  document.getElementById('modalTags').innerHTML=`<span class="vendor-tag tag-style">${v.style}</span><span class="vendor-tag tag-location">${v.location}</span>`;
  document.getElementById('modalDesc').textContent=v.desc;
  const pg=document.getElementById('modalPortfolio');const photos=v.photos||[];
  pg.innerHTML=photos.length?photos.map(src=>`<div class="p-thumb" onclick="openImg('${src}')"><img src="${src}" alt="Portfolio" loading="lazy"></div>`).join(''):`<p style="font-size:13px;color:var(--muted);">No portfolio images available.</p>`;
  const history=JSON.parse(localStorage.getItem('chat_'+id)||'[]');
  const ce=document.getElementById('chatMessages');ce.innerHTML='';history.forEach(m=>addBubble(m.t,m.s,false));
  document.getElementById('chatInput').value='';document.getElementById('vendorModal').classList.add('open');
}
function closeVendorModal(){document.getElementById('vendorModal').classList.remove('open');activeChatId=null;}
function openImg(src){document.getElementById('imgPreviewSrc').src=src;document.getElementById('imgPreview').classList.add('open');}
function closeImgPreview(){document.getElementById('imgPreview').classList.remove('open');}
function sendChat(){
  const inp=document.getElementById('chatInput'),t=inp.value.trim();if(!t)return;inp.value='';
  addBubble(t,'user',true);setTimeout(()=>addBubble('Thanks for contacting us. We will respond shortly.','vendor',true),900);
}
function addBubble(t,s,save){
  const ce=document.getElementById('chatMessages');
  const now=new Date(),time=now.getHours().toString().padStart(2,'0')+':'+now.getMinutes().toString().padStart(2,'0');
  const d=document.createElement('div');d.className='chat-msg '+s;d.innerHTML=t+'<div class="msg-time">'+time+'</div>';ce.appendChild(d);ce.scrollTop=ce.scrollHeight;
  if(save&&activeChatId){const k='chat_'+activeChatId;const h=JSON.parse(localStorage.getItem(k)||'[]');h.push({t,s});localStorage.setItem(k,JSON.stringify(h));}
}
let uploadedFiles=[];
function handleFiles(e){Array.from(e.target.files).forEach(f=>{const r=new FileReader();r.onload=ev=>{uploadedFiles.push(ev.target.result);const img=document.createElement('img');img.src=ev.target.result;img.className='preview-img';document.getElementById('uploadPreview').appendChild(img);};r.readAsDataURL(f);});}
function submitVendor(){
  const n=document.getElementById('vBizName').value.trim(),ph=document.getElementById('vPhone').value.trim(),em=document.getElementById('vEmail').value.trim(),d=document.getElementById('vDesc').value.trim(),l=document.getElementById('vLocation').value,s=document.getElementById('vStyle').value;
  if(!n||!ph||!em||!d||!l||!s){alert('Please fill in all required fields.');return;}
  const vendors=JSON.parse(localStorage.getItem('eventique_vendors')||'[]');
  vendors.push({id:Date.now(),name:n,phone:ph,email:em,desc:d,location:l,style:s,photos:uploadedFiles.slice(0,6),eventTypes:['wedding','birthday','burial','corporate']});
  localStorage.setItem('eventique_vendors',JSON.stringify(vendors));
  ['vBizName','vPhone','vEmail','vDesc'].forEach(id=>document.getElementById(id).value='');document.getElementById('vLocation').value='';document.getElementById('vStyle').value='';document.getElementById('uploadPreview').innerHTML='';uploadedFiles=[];
  const t=document.getElementById('toast');t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000);
}
(function(){
  const s=localStorage.getItem('eventique_session');if(s){try{currentUser=JSON.parse(s);afterLogin();}catch(e){}}
  const z=document.getElementById('uploadZone');
  z.addEventListener('dragover',e=>{e.preventDefault();z.style.borderColor='var(--gold)';});
  z.addEventListener('dragleave',()=>z.style.borderColor='');
  z.addEventListener('drop',e=>{e.preventDefault();z.style.borderColor='';if(e.dataTransfer.files.length)handleFiles({target:{files:e.dataTransfer.files}});});
})();