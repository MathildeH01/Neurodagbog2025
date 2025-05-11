<script>
  import { goto } from '$app/navigation';

  const btnclick = () => {
    goto('/symptomer');
  };
</script>

<h2 class="text-xl">Velkommen til din neurologiske dagbog </h2>
<p> Denne neurologiske dagbog er til dig med NF2. Her kan du registrere dine daglige symptomer og aktiviteter, som dig hos din læge/behandler kan følje med i. Du kan også bruge dagbogen til bedre at holde styr på dit sygdomsforløb mellem dine årlige syn.  På næste side finder du en liste af symptomer - vælg dem som passer til dig.</p>
<button class="btn btn-accent" on:click={btnclick}>Tryk her</button>



    
