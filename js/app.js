
document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{
document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
b.classList.add('active');document.getElementById(b.dataset.v).classList.add('active');
});
function guardarGym(){
let d={sq:document.getElementById('sq').value,rdl:document.getElementById('rdl').value};
localStorage.setItem('cloe_gym_log',JSON.stringify(d));
document.getElementById('gymout').innerText='Sesión guardada';
}
function analizar(){
let f=+document.getElementById('fatiga').value;
let txt='Semana sólida. ';
if(f>7) txt='Descarga recomendada -15% volumen.';
document.getElementById('analisis').innerText=txt;
}
function generarSemana(){
document.getElementById('salidaSemana').innerText='Semana nueva: +5% volumen, tirada +2km, cuestas mantienen carga.';
}
function exportar(){
let data={gym:localStorage.getItem('cloe_gym_log')};
let blob=new Blob([JSON.stringify(data)],{type:'application/json'});
let a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='backup_cloe.json';a.click();
}
