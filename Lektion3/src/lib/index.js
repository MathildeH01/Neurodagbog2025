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
</script>
