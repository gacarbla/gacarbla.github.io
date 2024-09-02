// /scripts/main.js

// Verificar si las políticas han sido aceptadas
function checkPolicyAcceptance() {
    if (!localStorage.getItem('policiesAccepted')) {
      if (window.location.pathname !== '/index.html') {
        window.location.href = './index.html';
      }
    }
  }
  
  // Abrir pop-up de selección de idioma
  function openLanguagePopup() {
    document.getElementById('language-popup').style.display = 'block';
  }
  
  // Habilitar el botón de continuar cuando se selecciona un idioma
  function enableContinueButton() {
    document.getElementById('continue-button').disabled = false;
  }
  
  // Mostrar las políticas y habilitar botones cuando se leen
  function showPolicies() {
    document.getElementById('policies-text').style.display = 'block';
    document.getElementById('continue-button').style.display = 'none';
  }
  
  // Verificar si el usuario ha hecho scroll hasta el final del textarea
  function checkScroll() {
    var textarea = document.getElementById('policies-text');
    if (textarea.scrollTop + textarea.clientHeight >= textarea.scrollHeight) {
      document.getElementById('settings-button').style.display = 'inline';
      document.getElementById('finalize-button').style.display = 'inline';
    }
  }
  
  // Redirigir a la página de configuraciones
  function goToSettings() {
    window.location.href = './settings.html';
  }
  
  // Aceptar políticas y redirigir a la página principal
  function acceptPolicies() {
    localStorage.setItem('policiesAccepted', true);
    window.location.href = './home.html';
  }
  