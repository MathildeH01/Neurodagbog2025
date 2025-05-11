<script>
  import { goto } from '$app/navigation';

  const btnclick = () => {
    goto('/symptomer');
  };
</script>

<h2 class="text-xl">Velkommen til din neurologiske dagbog </h2>
<p>Her kan du registrere dine daglige symptomer og aktiviteter. På næste side finder du en liste af symptomer, vælg dem som passer til dig.</p>
<button class="btn btn-accent" on:click={btnclick}>Tryk her</button>



    
