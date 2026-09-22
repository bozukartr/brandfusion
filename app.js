
const BRANDS=[
B('apple','Apple',['minimal','precise','human-centered','seamless'],['soft rounded geometry','continuous surfaces','tight radii','clean edge breaks'],['warm white','silver','graphite','midnight'],[['anodized aluminum','rigid','satin'],['glass','transparent','gloss'],['soft-touch polymer','soft','matte'],['engineered knit','flexible','clean']],['hidden seams','flush interfaces','precision tolerance lines','micro-perforation fields'],['calm','premium','technological'],'extremely subtle',8,2,10,['Air','Studio','Core','Form','Loop']),
B('lego','LEGO',['modular','playful','constructive','hands-on'],['stacked block forms','stud-inspired circles','modular segmentation','friendly chunky proportions'],['primary red','primary yellow','blue','white','charcoal'],[['ABS plastic','rigid','smooth gloss'],['soft rubber','soft','matte'],['textile webbing','flexible','woven'],['clear polycarbonate','transparent','clear gloss']],['interlocking connections','visible modular joints','color blocking','tactile surfaces'],['joyful','creative','bold'],'visible but integrated',3,10,5,['Brick','Snap','Stud','Build','Click']),
B('ferrari','Ferrari',['performance-first','emotional','aerodynamic','race-derived'],['sweeping aero lines','tense muscular curves','low-slung stance','sculpted intakes'],['Rosso Corsa red','black','carbon','warm silver'],[['carbon fiber','rigid','satin weave'],['premium leather','soft','semi-matte'],['machined aluminum','rigid','brushed'],['technical mesh','flexible','performance']],['driver-focused controls','contrast stitching','vent-like cuts','performance detailing'],['dramatic','fast','luxury performance'],'restrained but proud',9,4,8,['Corsa','Strada','Veloce','Scuderia','Pilota']),
B('ikea','IKEA',['democratic design','modular','practical','approachable'],['clean orthogonal lines','simple friendly curves','flat-pack logic','efficient silhouettes'],['birch','soft white','light gray','muted blue','yellow accent'],[['powder-coated steel','rigid','matte'],['birch veneer','rigid','natural'],['woven textile','flexible','soft matte'],['recycled polypropylene','soft','matte']],['honest joinery','simple hardware','functional compartments','user-friendly construction'],['friendly','efficient','practical'],'subtle',4,5,4,['Forma','Norr','Latt','Modul','Prakt']),
B('nike','Nike',['athletic performance','speed','lightness','movement'],['dynamic flow lines','lean silhouettes','tensioned panels','performance curvature'],['black','white','volt','crimson','cool gray'],[['engineered mesh','flexible','matte'],['foam composite','soft','smooth'],['TPU support frame','rigid','matte'],['rubber grip compound','flexible','traction']],['vent channels','structural ribs','dynamic panel transitions','performance texturing'],['energetic','competitive','contemporary'],'confident but integrated',6,6,8,['Fly','Pulse','Zoom','Motion','Shift']),
B('dyson','Dyson',['engineering-led','functional innovation','airflow logic','visible technology'],['turbine-inspired cylinders','precise shells','radial openings','purposeful asymmetry'],['graphite','metallic silver','copper accent','clear'],[['polycarbonate','rigid','satin'],['clear polycarbonate','transparent','gloss'],['brushed aluminum','rigid','brushed'],['soft elastomer','soft','matte']],['visible airflow paths','micro-perforations','engineering reveals','precision vents'],['inventive','technical','premium'],'subtle',7,3,10,['Air','Cyclone','Vector','Sphere','Flux']),
B('nintendo','Nintendo',['friendly','accessible','fun','interactive'],['soft toy-like curves','compact forms','rounded edges','button-centric composition'],['white','red','cyan','pastel accent','charcoal'],[['matte polymer','rigid','soft matte'],['rubberized grip','soft','matte'],['textured plastic','rigid','micro-texture'],['fabric strap','flexible','woven']],['tactile controls','playful color splits','friendly iconography','easy interaction'],['playful','inviting','nostalgic'],'visible and cheerful',4,9,6,['Joy','Switch','Play','Pixel','Pop']),
B('tesla','Tesla',['future-focused','clean','performance-tech','integrated'],['clean wedge forms','monolithic surfaces','minimal seams','aero-efficient silhouettes'],['white','black','graphite','red accent'],[['cast aluminum','rigid','satin'],['vegan leather','soft','smooth matte'],['smoked glass','transparent','tinted gloss'],['technical polymer','flexible','matte']],['ultra-clean interfaces','integrated light lines','minimal hardware','futuristic restraint'],['confident','efficient','advanced'],'minimal',7,2,10,['Model','Flux','Cell','Plaid','Vector']),
B('rolex','Rolex',['timeless precision','status','craftsmanship','durability'],['classic symmetry','beveled edges','solid balanced proportions','luxury detailing'],['deep green','black','gold','steel','champagne'],[['stainless steel','rigid','polished'],['ceramic','rigid','gloss'],['sapphire crystal','transparent','clear gloss'],['fine leather','soft','smooth']],['micro-knurling','precise indices','luxury finishing','polished chamfers'],['prestigious','confident','timeless'],'proud but refined',10,1,7,['Oyster','Cellini','Perpetual','Crown','Date']),
B('muji','MUJI',['quiet simplicity','utility','restraint','no unnecessary decoration'],['understated volumes','soft utility lines','unfussy forms','honest proportions'],['off-white','sand','light gray','taupe','natural wood'],[['recycled polymer','rigid','matte'],['cotton canvas','flexible','natural'],['soft foam','soft','matte'],['clear acrylic','transparent','clear']],['integrated storage','label-free restraint','subtle seams','simple tactile utility'],['calm','honest','quiet'],'nearly invisible',5,2,4,['Plain','Field','Fold','Soft','Unit']),
B('porsche','Porsche',['timeless performance','precision','driver focus','iconic restraint'],['taut curves','tight surfacing','athletic stance','technical elegance'],['silver','black','guards red','chalk gray','tan'],[['brushed aluminum','rigid','brushed'],['leather','soft','premium matte'],['carbon composite','rigid','satin'],['technical textile','flexible','performance']],['chrono-inspired accents','precision vents','driver-centric controls','technical stitching'],['refined','performance-oriented','confident'],'subtle but unmistakable',9,3,8,['RS','Turbo','Carrera','Targa','GT']),
B('nasa','NASA',['mission-driven','technical','modular','aerospace utility'],['capsule volumes','panelized surfaces','instrument logic','structural clarity'],['white','signal orange','deep blue','gray','black'],[['aerospace aluminum','rigid','matte'],['composite shell','rigid','satin'],['technical nylon','flexible','durable'],['polycarbonate visor material','transparent','clear']],['mission labels','functional fasteners','modular interfaces','instrument-like details'],['capable','exploratory','serious'],'functional',6,3,10,['Orbital','Lunar','Vector','Atlas','Nova'])
];

const PRODUCTS=[
P('sneaker','Sneaker','footwear',['functional toe box','supportive heel counter','stable lacing system','cushioned midsole','traction-ready outsole'],[['upper',['flexible','soft'],'engineered knit'],['heel counter',['rigid'],'TPU structure'],['lace hardware',['rigid','flexible'],'lightweight hardware'],['midsole',['soft','flexible'],'cushioned foam'],['outsole',['flexible','rigid'],'rubber traction'],['collar lining',['soft'],'padded textile']],['comfort','flexibility','breathability','grip','wearability'],['do not make the entire shoe rigid']),
P('backpack','Backpack','carry goods',['main storage volume','ergonomic straps','easy-access opening','load-bearing structure','practical compartments'],[['main shell',['flexible','rigid'],'durable textile shell'],['top handle',['soft','flexible'],'reinforced handle'],['straps',['flexible','soft'],'padded straps'],['back panel',['soft','rigid'],'ventilated support'],['closure',['rigid','flexible'],'zip or buckle closure']],['comfort','durability','organization','weight distribution','daily usability'],['do not sacrifice carry comfort for styling']),
P('car','Car','vehicle',['four-wheel automotive logic','functional cabin','entry points','lighting package','road-going proportions'],[['body shell',['rigid'],'painted metal body'],['windows',['transparent'],'automotive glass'],['seating',['soft'],'automotive upholstery'],['wheels',['rigid'],'alloy wheels'],['lighting',['transparent','rigid'],'LED housings']],['aerodynamics','ergonomics','visual balance','mobility credibility','manufacturability'],['avoid cartoon proportions unless brand logic supports them']),
P('bag','Travel Bag','carry goods',['main compartment','carry handles','opening system','portable proportions','durable structure'],[['body',['flexible','soft'],'woven shell'],['base',['rigid','flexible'],'reinforced base'],['strap',['flexible','soft'],'adjustable strap'],['closure',['rigid','flexible'],'zip closure'],['handles',['soft','flexible'],'padded handles']],['portability','durability','easy access','comfort','capacity'],['do not remove portability for style']),
P('espresso','Espresso Machine','appliance',['water delivery logic','brew interface','cup clearance','stable base','maintenance access'],[['housing',['rigid'],'metal appliance body'],['reservoir',['transparent','rigid'],'clear tank'],['interface',['rigid','transparent'],'control panel'],['brew zone',['rigid'],'brew hardware'],['grip',['soft'],'heat-safe grip']],['heat resistance','easy cleaning','stable operation','clear interaction'],['do not obstruct actual brewing functionality']),
P('headphones','Headphones','audio device',['ear cups','headband','acoustic chamber','wear comfort','intuitive controls'],[['ear cup',['rigid'],'acoustic shell'],['headband',['rigid','flexible'],'headband frame'],['cushions',['soft'],'memory foam'],['hinge',['rigid'],'precision hinge'],['controls',['rigid','transparent'],'control interface']],['comfort','acoustic isolation','adjustability','portability','premium feel'],['do not make cushions hard or non-ergonomic']),
P('watch','Watch','wearable accessory',['legible face','secure strap','wearable scale','timekeeping identity','comfortable wrist presence'],[['case',['rigid'],'watch case'],['crystal',['transparent'],'watch crystal'],['strap',['soft','flexible','rigid'],'strap system'],['controls',['rigid'],'side controls'],['dial',['rigid','transparent'],'display plane']],['wearability','precision','readability','material coherence','identity'],['avoid implausibly oversized wrist scale']),
P('lamp','Desk Lamp','lighting',['light source','stable base','adjustable orientation','power logic','usable proportions'],[['head',['rigid'],'lamp head'],['arm',['rigid','flexible'],'support arm'],['base',['rigid'],'weighted base'],['joint',['rigid'],'pivot'],['control',['rigid','transparent'],'switch']],['directional lighting','stability','ease of use','heat management'],['do not make it unusably fragile']),
P('chair','Gaming Chair','seating',['seat base','back support','arm support','stable frame','ergonomic usability'],[['frame',['rigid'],'seat frame'],['upholstery',['soft'],'foam upholstery'],['armrests',['rigid','soft'],'adjustable arms'],['backrest',['rigid','soft'],'supportive back'],['base',['rigid'],'rolling base']],['comfort','support','durability','adjustability'],['do not lose ergonomic credibility']),
P('ebike','E-Bike','mobility',['bike frame','wheels','handlebar control','seat','pedal drivetrain identity'],[['frame',['rigid'],'bike frame'],['battery',['rigid'],'integrated battery'],['grips',['soft','flexible'],'grips'],['saddle',['soft'],'saddle'],['display',['transparent','rigid'],'control display']],['structural integrity','ride comfort','mobility realism','weight management','balance'],['do not break bicycle ergonomics']),
P('camera','Camera','imaging device',['lens system','view or display logic','grip','controls','credible camera proportions'],[['body',['rigid'],'camera body'],['grip',['soft'],'textured grip'],['lens',['rigid'],'lens housing'],['display',['transparent','rigid'],'screen or viewfinder'],['controls',['rigid'],'control cluster']],['precision handling','clarity','portability','control access'],['do not make it toy-like unless brand logic supports it']),
P('suitcase','Suitcase','travel gear',['storage shell','telescopic handle','rolling logic','closure security','travel practicality'],[['shell',['rigid','flexible'],'durable shell'],['handle',['rigid'],'telescopic handle'],['wheels',['rigid','soft'],'spinner wheels'],['corners',['rigid'],'reinforced corners'],['lining',['soft','flexible'],'travel lining']],['durability','mobility','packing efficiency','travel comfort'],['do not compromise wheel practicality']),
P('drone','Drone','flying device',['propeller logic','lightweight body','sensor positioning','landing stability','transport logic'],[['body',['rigid'],'lightweight shell'],['arms',['rigid'],'structural arms'],['sensor',['rigid','transparent'],'sensor module'],['prop detail',['rigid','flexible'],'prop system'],['landing',['rigid','soft'],'landing supports']],['aerodynamics','weight control','technical clarity','portability'],['do not make it too heavy or aerodynamically absurd']),
P('perfume','Perfume Bottle','beauty object',['bottle vessel','cap or spray head','dispensing logic','grippable proportions','shelf presence'],[['bottle',['transparent','rigid'],'glass bottle'],['cap',['rigid'],'cap'],['sprayer',['rigid'],'atomizer'],['identity zone',['rigid','transparent'],'identity panel'],['base',['rigid'],'stable base']],['luxury perception','clarity','elegance','functional dispensing'],['do not make it impossible to hold or spray'])
];

function B(id,name,philosophy,geometry,palette,materials,details,mood,branding,luxury,play,tech,names){
  return {id:id,name:name,philosophy:philosophy,geometry:geometry,palette:palette,materials:materials.map(function(m){return{name:m[0],class:m[1],finish:m[2]}}),details:details,mood:mood,branding:branding,luxury:luxury,play:play,tech:tech,names:names};
}
function P(id,name,category,must,anatomy,requirements,negatives){
  return {id:id,name:name,category:category,must:must,anatomy:anatomy.map(function(a){return{name:a[0],accepts:a[1],fallback:a[2]}}),requirements:requirements,negatives:negatives};
}

const MODES={
  conservative:{label:'Conservative',rich:2,bold:.25,realism:.95,words:['believable','production-minded','restrained']},
  balanced:{label:'Balanced',rich:3,bold:.50,realism:.82,words:['credible','design-forward','premium']},
  experimental:{label:'Experimental',rich:4,bold:.72,realism:.68,words:['conceptual','distinctive','expressive']},
  visionary:{label:'Visionary',rich:4,bold:.90,realism:.54,words:['futuristic','high-concept','visually striking']}
};
const SCENES={
  studio:['High-end industrial design product photography.','Clean seamless neutral studio backdrop with subtle contact shadow.','Three-quarter hero angle with approximately 85mm product-photography perspective.','Large softbox key light, gentle fill and physically correct reflections.'],
  campaign:['Premium advertising campaign hero image.','Minimal environment derived from the selected brand palette.','Dynamic but readable composition with cinematic edge light and controlled contrast.','Keep the object dominant and fully legible.'],
  editorial:['Sophisticated editorial still-life setup.','Use a restrained architectural or material context that supports the product story.','Naturalistic controlled light with tasteful shadows and believable scale.','Avoid distracting props and decorative clutter.'],
  exploded:['Premium semi-exploded technical visualization.','Separate major assemblies just enough to explain construction and material logic.','Maintain accurate alignment, spacing, hierarchy and assembly plausibility.','Neutral design-review background and precise technical lighting.']
};

const $=function(s){return document.querySelector(s)};
const els={
  brand:$('#brandSelect'),product:$('#productSelect'),mode:$('#modeSelect'),scene:$('#sceneSelect'),ratio:$('#ratioSelect'),
  stage:$('#fusionStage'),brandNode:$('#brandNodeText'),productNode:$('#productNodeText'),result:$('#fusionResultText'),
  seed:$('#seedLabel'),question:$('#questionText'),summary:$('#summaryText'),strategy:$('#strategyList'),
  dna:$('#dnaStat'),func:$('#functionStat'),material:$('#materialStat'),realism:$('#realismStat'),
  chips:$('#chips'),prompt:$('#promptOutput'),status:$('#statusText')
};
let variant=0,currentSeed=0;

function hash(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function seeded(seed){return function(){seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function pick(r,a){return a[Math.floor(r()*a.length)]}
function many(r,a,n){let x=a.slice(),o=[];while(o.length<Math.min(n,x.length)){o.push(x.splice(Math.floor(r()*x.length),1)[0])}return o}
function ox(a){if(a.length<2)return a[0]||'';if(a.length===2)return a.join(' and ');return a.slice(0,-1).join(', ')+', and '+a[a.length-1]}
function cap(s){return s.charAt(0).toUpperCase()+s.slice(1)}
function getBrand(){return BRANDS.find(function(x){return x.id===els.brand.value})}
function getProduct(){return PRODUCTS.find(function(x){return x.id===els.product.value})}
function profile(b){return{personality:b.play>7?'playful':b.luxury>8?'luxury':'balanced',tech:b.tech>8?'high-tech':b.tech>5?'tech-aware':'classic',surface:b.play>7?'expressive':b.luxury>8?'refined':'controlled'}}

function buildSeed(){
  const b=getBrand(),p=getProduct();
  currentSeed=hash([b.id,p.id,els.mode.value,els.scene.value,els.ratio.value,variant].join('|'));
  els.seed.textContent='SEED '+currentSeed;
  return currentSeed;
}
function mapMaterials(b,p,r){
  return p.anatomy.map(function(part){
    const options=b.materials.filter(function(m){return part.accepts.indexOf(m.class)>-1});
    const m=options.length?pick(r,options):{name:part.fallback,finish:'function-appropriate'};
    return{part:part.name,material:m.name,finish:m.finish};
  });
}
function conceptName(b,r){return b.name+' '+pick(r,b.names)+' '+pick(r,['01','One','S','Studio','Core','X','Edition'])}

function compile(){
  const b=getBrand(),p=getProduct(),m=MODES[els.mode.value],seed=buildSeed(),r=seeded(seed),prof=profile(b);
  const palette=many(r,b.palette,m.rich),maps=mapMaterials(b,p,r),geo=many(r,b.geometry,3),details=many(r,b.details,3);
  const must=many(r,p.must,Math.min(4,p.must.length)),req=many(r,p.requirements,Math.min(4,p.requirements.length));
  const name=conceptName(b,r);

  els.brandNode.textContent=b.name;els.productNode.textContent=p.name;els.result.textContent=b.name+' × '+p.name;
  els.question.textContent=b.name+' bir '+p.name.toLowerCase()+' üretseydi?';
  els.dna.textContent=b.philosophy.slice(0,2).map(cap).join(' / ');
  els.func.textContent=p.requirements.slice(0,2).map(cap).join(' / ');
  els.material.textContent=maps.slice(0,2).map(function(x){return cap(x.material)}).join(' / ');
  els.realism.textContent=Math.round(m.realism*100)+'%';
  els.summary.textContent=b.name+' tasarım DNA’sı, '+p.name.toLowerCase()+' anatomisine geometri, malzeme, işlev, ergonomi ve üretim mantığı üzerinden aktarılıyor.';

  const strategies=[
    b.name+' marka dili doğrudan ürün anatomisine çevriliyor; logo dekorasyonu ana çözüm olarak kullanılmıyor.',
    'Sert, yumuşak, esnek ve transparan malzemeler yalnızca uyumlu ürün bölgelerine atanıyor.',
    'Zorunlu işlevler korunuyor: '+req.join(', ')+'.',
    'Fusion yoğunluğu '+m.label+' modunda ve gerçekçilik hedefi %'+Math.round(m.realism*100)+'.'
  ];
  els.strategy.innerHTML=strategies.map(function(s,i){return'<div class="strategy"><i>0'+(i+1)+'</i><span>'+s+'</span></div>'}).join('');
  els.chips.innerHTML=[b.name,p.name,m.label,els.scene.value.toUpperCase(),els.ratio.value,name].map(function(c){return'<span class="chip">'+c+'</span>'}).join('');

  const materialLines=maps.map(function(x){return'- '+cap(x.part)+' → '+x.material+'; '+x.finish+' finish.'}).join('\n');
  const negative=[
    'Do not simply paste a large brand logo onto a generic object.',
    'Do not ignore the real-world anatomy and scale of the product.',
    'Do not assign rigid materials to zones that must flex, cushion, bend or contact the body unless structurally justified.',
    'Avoid random futuristic details unsupported by the brand DNA or product function.'
  ].concat(p.negatives).concat([m.realism>.8?'Keep the concept physically manufacturable and highly believable.':'Even in visionary areas, maintain structural, ergonomic and material plausibility.']).map(function(x){return'- '+x}).join('\n');

  const prompt=[
    'TITLE\nWhat if '+b.name+' made a '+p.name.toLowerCase()+'?',
    'CORE BRIEF\nDesign a '+p.name.toLowerCase()+' as if it were genuinely developed by '+b.name+' from the ground up. Translate the brand’s industrial-design DNA into the '+p.category+' category. The result must feel intentional, coherent and category-correct — not like an existing product with a logo pasted on it.',
    'CONCEPT POSITIONING\nWorking concept name: "'+name+'".\nCreate a '+m.words.join(', ')+' concept. The object should read as '+prof.personality+', '+prof.tech+' and unmistakably aligned with '+b.name+'.\nTarget aspect ratio: '+els.ratio.value+'.',
    'PRODUCT ANATOMY TO PRESERVE\n- Preserve authentic '+p.name.toLowerCase()+' architecture: '+ox(must)+'.\n- Maintain credible '+ox(req)+'.\n- Primary functional zones must remain ergonomically and mechanically believable.',
    'BRAND DNA TRANSLATION\n- Philosophy: '+ox(b.philosophy)+'.\n- Geometry: '+ox(geo)+'.\n- Mood: '+ox(b.mood)+'.\n- Surface personality: '+prof.surface+'.\n- Branding intensity: '+b.branding+'.\n- Palette: '+ox(palette)+'.',
    'FUSION GEOMETRY\n- Translate '+b.name+' geometry into the silhouette, joints, transitions and secondary volumes of the product.\n- Apply the strongest cues through '+ox(many(r,p.anatomy.map(function(x){return x.name}),3))+'.\n- '+(m.bold>.65?'Push the silhouette enough to be recognizable from a distance while preserving function.':'Keep silhouette changes restrained, believable and manufacturable.'),
    'MATERIAL MAPPING\n'+materialLines,
    'DETAIL SYSTEM\n- Emphasize '+ox(details)+'.\n- Treat seams, fasteners, controls, openings and transition lines as part of the brand language.\n- Branding must be '+b.branding+'; form, proportion and material choices should communicate the brand before any logo does.',
    'REALISM + MANUFACTURABILITY\n- Respect assembly logic, wall thickness, load paths, flexibility zones, heat zones, grip zones and contact surfaces where relevant.\n- Materials must behave physically correctly.\n- Hard-to-soft transitions should be purposeful.\n- Preserve credible scale, ergonomics and manufacturing logic.',
    'VISUAL PRESENTATION\n'+SCENES[els.scene.value].map(function(x){return'- '+x}).join('\n'),
    'QUALITY TARGET\n- Hyper-detailed industrial design visualization.\n- Physically plausible materials and reflections.\n- Clear form hierarchy and premium edge quality.\n- Strong product readability.\n- Serious concept-design presentation, not a meme or parody.',
    'NEGATIVE CONSTRAINTS\n'+negative,
    'FINAL REMINDER\nThe final object must look like a real '+p.name.toLowerCase()+' that '+b.name+' could plausibly have designed, engineered and manufactured — not a generic '+p.name.toLowerCase()+' wearing '+b.name+' graphics.'
  ].join('\n\n');

  els.prompt.value=prompt;
  els.status.textContent='COMPILED · '+prompt.length+' CHARS · SEED '+seed;
}

async function animateFusion(){
  els.stage.classList.remove('resolved');
  const finalB=getBrand().name,finalP=getProduct().name;
  for(let i=0;i<10;i++){
    els.brandNode.textContent=BRANDS[Math.floor(Math.random()*BRANDS.length)].name;
    els.productNode.textContent=PRODUCTS[Math.floor(Math.random()*PRODUCTS.length)].name;
    await new Promise(function(resolve){setTimeout(resolve,48+i*7)});
  }
  els.brandNode.textContent=finalB;els.productNode.textContent=finalP;
  els.stage.classList.add('mixing');
  await new Promise(function(resolve){setTimeout(resolve,850)});
  els.stage.classList.remove('mixing');els.stage.classList.add('resolved');
}
async function randomize(){
  els.brand.value=BRANDS[Math.floor(Math.random()*BRANDS.length)].id;
  els.product.value=PRODUCTS[Math.floor(Math.random()*PRODUCTS.length)].id;
  variant++;await animateFusion();compile();
}
async function copyPrompt(){
  try{await navigator.clipboard.writeText(els.prompt.value);els.status.textContent='COPIED TO CLIPBOARD'}
  catch(e){els.prompt.focus();els.prompt.select();els.status.textContent='SELECTED · COPY MANUALLY'}
}
function init(){
  els.brand.innerHTML=BRANDS.map(function(x){return'<option value="'+x.id+'">'+x.name+'</option>'}).join('');
  els.product.innerHTML=PRODUCTS.map(function(x){return'<option value="'+x.id+'">'+x.name+'</option>'}).join('');
  els.brand.value='apple';els.product.value='sneaker';
  [els.brand,els.product,els.mode,els.scene,els.ratio].forEach(function(e){e.addEventListener('change',compile)});
  $('#randomButton').onclick=randomize;
  $('#generateButton').onclick=async function(){await animateFusion();compile()};
  $('#variantButton').onclick=function(){variant++;compile()};
  $('#copyButton').onclick=copyPrompt;
  compile();
}
init();
