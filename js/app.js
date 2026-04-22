
document.querySelectorAll('.nav').forEach(btn=>{
 btn.onclick=()=>{
  document.querySelectorAll('.nav').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(btn.dataset.view).classList.add('active');
 }
});

document.getElementById('saveGym')?.addEventListener('click',()=>{
 localStorage.setItem('cloe_gym_backup',JSON.stringify({saved:new Date().toISOString()}));
 alert('Sesión guardada (demo base para ampliar)');
});

function runCoach(){
 const f=+document.getElementById('fatigue').value;
 const s=+document.getElementById('sleep').value;
 let msg='Mantener carga.';
 if(f>7) msg='Semana descarga: -15% volumen.';
 if(s<5) msg+=' Priorizar recuperación.';
 document.getElementById('coachOut').innerHTML=msg;
}
window.runCoach=runCoach;
