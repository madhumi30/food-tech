
document.addEventListener('DOMContentLoaded',()=>{
 const root=document.documentElement;
 const saved=localStorage.getItem('notes-theme'); if(saved)root.dataset.theme=saved;
 document.querySelectorAll('[data-theme-toggle]').forEach(b=>b.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('notes-theme',root.dataset.theme)}));
 document.querySelectorAll('[data-search]').forEach(input=>input.addEventListener('input',()=>{
   const q=input.value.toLowerCase().trim(); const target=document.querySelector(input.dataset.search);
   if(!target)return; let shown=0;
   target.querySelectorAll('[data-searchable]').forEach(el=>{const ok=el.innerText.toLowerCase().includes(q);el.hidden=!ok;if(ok)shown++});
   const msg=document.querySelector('[data-empty]');if(msg)msg.hidden=shown>0;
 }));
 document.querySelectorAll('[data-toggle-answers]').forEach(b=>b.addEventListener('click',()=>{
   const cards=document.querySelectorAll('.qcard');const collapse=[...cards].some(c=>!c.classList.contains('collapsed'));
   cards.forEach(c=>c.classList.toggle('collapsed',collapse));b.textContent=collapse?'Show all answers':'Hide all answers';
 }));
 document.querySelectorAll('[data-complete]').forEach(b=>b.addEventListener('click',()=>{
   const card=b.closest('.qcard');card.classList.toggle('completed');b.textContent=card.classList.contains('completed')?'✓ Revised':'Mark revised';
   const done=document.querySelectorAll('.qcard.completed').length,total=document.querySelectorAll('.qcard').length;
   const bar=document.querySelector('.progress span');if(bar)bar.style.width=(total?done/total*100:0)+'%';
   const label=document.querySelector('[data-progress-label]');if(label)label.textContent=`${done} of ${total} questions revised`;
 }));
 const top=document.querySelector('.backtop');if(top){window.addEventListener('scroll',()=>top.classList.toggle('show',window.scrollY>450));top.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}))}
 document.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(b.dataset.copy);const old=b.textContent;b.textContent='Copied!';setTimeout(()=>b.textContent=old,1200)}catch(e){b.textContent='Select text to copy'}}));
});
