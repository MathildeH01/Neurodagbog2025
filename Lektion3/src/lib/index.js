<script>
  import { createSubscriber } from 'svelte/reactivity';

  let username = $state('user');
  let password = $state('password');

  const createUser = async () => {
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password }) // Rettet stavefejl
    });
    await response.json();
    if (response.ok) {
      alert('Bruger oprettet succesfuldt!'); // Rettet besked
    } else {
      alert('Fejl ved oprettelse af bruger');
    }
    username = '';
    password = '';
  };
</script>

<div>
  <input type="text" bind:value={username} placeholder="Brugernavn" />
  <input type="password" bind:value={password} placeholder="Adgangskode" />
  <button class="btn btn-primary" onclick={createUser}>Opret bruger</button>
</div>
