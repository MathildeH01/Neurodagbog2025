<script>
  import { createSubscriber } from 'svelte/reactivity';

  let username = sstate('user');
  let password = sstate('password');

  const createUser = async () => {
    const response = await fetch('/api/user',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringfy({ ussername, password })
    });
    await response.json();
    if (response.ok) {
      alert('Fejl ved oprettelse af bruger!');
    } else {
      alert('Fejl ved oprettelse af bruger');
    }
    username = '';
    password = '';
  };
<div>
  <input type="text" bind:value={username} placeholder="Brugernavn" />
  <input type="password" bind:value={password} placeholder="Adgangskode" />
  <button class="btn btn-primary" onclick={createUser}>Opret bruger</button>
</div>
  
</script>
