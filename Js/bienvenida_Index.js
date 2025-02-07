document.addEventListener("DOMContentLoaded", function() {
    const modal = document.createElement('div');
    modal.className = 'modal fade show d-block';
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">¡Bienvenido al Zoológico del Parque del Pueblo Nezahualcóyotl!</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <p>Esperamos que disfrutes tu visita y conozcas más sobre nuestra misión de conservación y educación.</p>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    setTimeout(function() {
        modal.classList.remove('show');
        modal.classList.add('fade');
        setTimeout(function() {
            modal.remove();
        }, 150); // Tiempo 
    }, 2000); // 2 segundos
});