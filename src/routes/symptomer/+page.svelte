<script>
  function btnclick() {
    console.log('Button clicked');
  }
</script>

<h2 class="text-xl">Neurologisk symptom -dagbog for NF2</h2>
<p> Nedenfor findes flere kategorier du kan have oplevet idag, klik på den du har oplevet. Har du oplevet mere, kan du kome tilbage efterfølgende og taste flere symptomer ind. </p>

<button class="btn btn-accent" on:click={btnclick}>Forstoppelse</button>
<button class="btn btn-accent" on:click={btnclick}>Smerter</button>
<button class="btn btn-accent" on:click={btnclick}>Epilepsi</button>
