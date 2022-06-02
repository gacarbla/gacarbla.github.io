<p style="font-weight:bold;font-size:3rem;text-align:center">GATITOS WORLD<br>ÍNDICE</p>

<style>
  .menu {
    font-size:1.25rem
  }
</style>

<script>
  var IS1 = false
  while(true){
    if (IS1){
      document.getElementById("IS1").hidden = "false";
    } else {
      document.getElementById("IS1").hidden = "true";
    }
  }
  function gotoMatheoPage() {
    window.location.replace("https://m.gatitos.world/intro/formato-de-sanciones");
  }
  function toggleIS1() {
    IS1?IS1=false:IS1=true
  }
</script>

<p class="menu"> Plantillas de texto </p>
<p class="menu" onclick=toggleIS1()> Procedimiento y actuación </p>
<div id="IS1" hidden="true" class="submenu">
<p id="IS1-1">ToS y Directrices de comunidad</p>
<p id="IS1-2">Canales de texto</p>
<p id="IS1-3">Canales de voz</p>
</div>
<p class="menu" onclick=gotoMatheoPage()> Formato de sanciones (Oficial) </p>