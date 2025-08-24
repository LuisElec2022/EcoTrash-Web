// acciones.js
// Inicializaciones no intrusivas
window.addEventListener('DOMContentLoaded',()=>{
  // Año dinámico
  const anioEl=document.getElementById('anio');
  if(anioEl){ anioEl.textContent = new Date().getFullYear(); }

  // Botón cambiar fondo
  const btnFondo=document.getElementById('btnFondo');
  if(btnFondo){ btnFondo.addEventListener('click', cambiarFondo); }

  // Abrir/Cerrar modal QR
  const dlg=document.getElementById('qrDialog');
  const openBtns=document.querySelectorAll('[data-open-qr]');
  const closeBtn=document.querySelector('[data-close-qr]');

  openBtns.forEach(btn=>btn.addEventListener('click',()=>openQR(dlg)));
  closeBtn?.addEventListener('click',()=>closeQR(dlg));

  // Cerrar con tecla Esc o clic fuera
  if(dlg){
    dlg.addEventListener('click', (e)=>{
      const rect = dlg.getBoundingClientRect();
      const clickedOutside = e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom;
      if(clickedOutside){ closeQR(dlg); }
    });
    dlg.addEventListener('cancel', (e)=>{ e.preventDefault(); closeQR(dlg); });
  }
});

function cambiarFondo(){
  const colores=['#f4f9f8','#e1f5fe','#fff3e0','#e8f5e9'];
  const aleatorio=colores[Math.floor(Math.random()*colores.length)];
  document.body.style.backgroundColor=aleatorio;
}

function openQR(dlg){ if(!dlg) return; if(typeof dlg.showModal==='function'){ dlg.showModal(); } else { dlg.setAttribute('open',''); } }
function closeQR(dlg){ if(!dlg) return; if(typeof dlg.close==='function'){ dlg.close(); } else { dlg.removeAttribute('open'); } }
