
document.querySelectorAll('.nav').forEach(b=>{
 b.onclick=()=>{
  document.querySelectorAll('.nav').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  b.classList.add('active');
  document.getElementById(b.dataset.view).classList.add('active');
 }
});

function guardarGym(){
 const data={sq:document.getElementById('sq').value,rdl:document.getElementById('rdl').value};
 localStorage.setItem('cloe_gym_log',JSON.stringify(data));
 document.getElementById('gymout').innerText='Sesión guardada.';
}
function analizar(){
 let f=+document.getElementById('fatiga').value;
 let msg=f>7?'🔴 Descarga recomendada -15% volumen':'🟢 Semana sólida: +2km tirada.';
 document.getElementById('reviewout').innerText=msg;
}
function generarSemana(){
 document.getElementById('weekgen').innerText='Semana generada: +5% volumen, ritmo mejora 3 seg/km.';
}
function copiarIntervals(){alert('Bloque copiado (demo base).')}
function exportar(){
 let blob=new Blob([JSON.stringify(localStorage)],{type:'application/json'});
 let a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='cloe_backup.json';a.click();
}
