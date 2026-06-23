<template>
  <nav class="navbar">
    <div class="navbar__brand">Cape Town Food Fest</div>

    <!-- Hamburger for mobile -->
    <button class="navbar__toggle" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>

    <ul class="navbar__links" :class="{ 'navbar__links--open': menuOpen }">
      <li><a href="#hero" @click="menuOpen = true">Event Info</a></li>
      <li><a href="#tickets" class="active" @click="menuOpen = false">Tickets</a></li>
      <li><a href="#vendors" @click="menuOpen = false">Vendors</a></li>
    </ul>

    <button class="navbar__cta" @click="scrollToTickets">Buy Tickets</button>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',

  data() {
    return {
      menuOpen: false
    }
  },

  methods: {
    scrollToTickets() {
      document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' })
      this.menuOpen = false
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 2.5rem;
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 12px rgba(0,0,0,0.08);
}

.navbar__brand {
  font-family: var(--font-head);
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--orange);
  margin-right: auto;
}

.navbar__links {
  display: flex;
  gap: 2rem;
}

.navbar__links a {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--grey-text);
  transition: color 0.2s;
}

.navbar__links a:hover,
.navbar__links a.active {
  color: var(--orange);
}

.navbar__cta {
  background: var(--orange);
  color: var(--white);
  border: none;
  border-radius: 6px;
  padding: 0.55rem 1.2rem;
  font-size: 0.85rem;
  font-weight: 600;
  transition: background 0.2s, transform 0.15s;
}

.navbar__cta:hover {
  background: var(--orange-dark);
  transform: translateY(-1px);
}

/* Hamburger — hidden on desktop */
.navbar__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 4px;
}

.navbar__toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--dark);
  border-radius: 2px;
}

/* Mobile styles */
@media (max-width: 640px) {
  .navbar {
    flex-wrap: wrap;
    padding: 1rem 1.25rem;
  }

  .navbar__toggle {
    display: flex;
  }

  .navbar__cta {
    display: none;
  }

  .navbar__links {
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1rem 0 0.5rem;
  }

  .navbar__links--open {
    display: flex;
  }
}
</style>
