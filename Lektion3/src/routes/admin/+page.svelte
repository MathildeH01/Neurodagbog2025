<script>
  import { createSubscriber } from 'svelte/reactivity'; 

  let username = $state('user');
  let password = $state('password');
</script>

<h1 class="text-2xl font-bold">Administatorsiden</h1>
<div>
  <input type="text" bind:value={username} placeholder="Brugernavn" class="input" />
</div>
<div>
  <input type="password" bind:value={password} placeholder="Adgangskode" class="input" />
</div>
<div>
  <button class="btn btn-primary">Opret bruger</button>
</div>

