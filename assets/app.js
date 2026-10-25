document.addEventListener('DOMContentLoaded',()=>{
 const menu=document.querySelector('[data-menu]');
 const side=document.querySelector('.sidebar');
 const setMenu=open=>{if(!side)return;side.classList.toggle('open',open);document.body.classList.toggle('menu-open',open);if(menu)menu.setAttribute('aria-expanded',String(open));};
 if(menu&&side){menu.setAttribute('aria-expanded','false');menu.addEventListener('click',()=>setMenu(!side.classList.contains('open')));}
 document.querySelectorAll('.navitem').forEach(a=>{
  if(a.textContent.trim()==='⌂Overview'&&a.getAttribute('href')==='index.html'&&location.pathname!=='/index.html')a.setAttribute('href','../index.html');
  const linkPath=new URL(a.href,location.href).pathname.replace(/\\/g,'/');
  const pagePath=location.pathname.replace(/\\/g,'/');
  if(linkPath===pagePath)a.classList.add('active');
  a.addEventListener('click',()=>setMenu(false));
 });
 document.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
 const search=document.querySelector('[data-search]');
 if(search){const cards=[...document.querySelectorAll('[data-filter]')];search.addEventListener('input',()=>{const q=search.value.toLowerCase().trim();let n=0;cards.forEach(c=>{const show=(c.innerText+' '+(c.dataset.filter||'')).toLowerCase().includes(q);c.hidden=!show;if(show)n++});const empty=document.querySelector('[data-empty]');if(empty)empty.hidden=n>0});document.addEventListener('keydown',e=>{if(e.key==='/'&&document.activeElement!==search){e.preventDefault();search.focus()}if(e.key==='Escape'){search.value='';search.dispatchEvent(new Event('input'));search.blur()}});}
});


// Persistent user-controlled day/night theme. Default follows the OS until user chooses.
(()=>{
 const root=document.documentElement, key='riscv-atlas-theme';
 let saved=null; try{saved=localStorage.getItem(key)}catch(e){}
 const initial=saved || (matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
 root.setAttribute('data-theme',initial);
 const update=()=>{const dark=root.getAttribute('data-theme')==='dark';document.querySelectorAll('[data-theme-toggle]').forEach(b=>{b.setAttribute('aria-pressed',String(dark));b.setAttribute('aria-label',dark?'Switch to day theme':'Switch to night theme');const icon=b.querySelector('[data-theme-icon]');const label=b.querySelector('[data-theme-label]');if(icon)icon.textContent=dark?'☀':'☾';if(label)label.textContent=dark?'Day mode':'Night mode';});};
 document.addEventListener('DOMContentLoaded',()=>{update();document.querySelectorAll('[data-theme-toggle]').forEach(b=>b.addEventListener('click',()=>{const next=root.getAttribute('data-theme')==='dark'?'light':'dark';root.setAttribute('data-theme',next);try{localStorage.setItem(key,next)}catch(e){}update();}));});
})();
