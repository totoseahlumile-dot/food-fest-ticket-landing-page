<template>
  <nav class="navbar">
    <div class="navbar__brand">
      <span class="navbar__brand-mark" aria-hidden="true">🍴</span>
      <span class="navbar__brand-copy">
        <span>Cape Town</span>
        <strong>Food Fest</strong>
      </span>
    </div>

    <!-- Hamburger for mobile -->
    <button class="navbar__toggle" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>

    <ul class="navbar__links" :class="{ 'navbar__links--open': menuOpen }">
      <li><a href="#hero" @click="menuOpen = true">Event Info</a></li>
      <li><a href="#tickets" class="active" @click="menuOpen = false">Tickets</a></li>
      <li><a href="#vendors" @click="menuOpen = false">Vendors</a></li>
    </ul>

    
    <button 
      class="navbar__dark-toggle" 
      @click="$emit('toggle-dark-mode')"
      :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
      :title="isDarkMode ? 'Light Mode' : 'Dark Mode'"
    >
      <!-- Sun icon (light mode) -->
      <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
      <!-- Moon icon (dark mode) -->
      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </button>

    <button class="navbar__cta" @click="scrollToTickets">Buy Tickets</button>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',

  props: {
    isDarkMode: {
      type: Boolean,
      default: false
    }
  },

  emits: ['toggle-dark-mode'],

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
  transition: background 0.3s, box-shadow 0.3s;
}

html.dark-mode .navbar {
  background: rgba(26, 26, 46, 0.97);
  box-shadow: 0 1px 12px rgba(0,0,0,0.3);
}

.navbar__brand {
  margin-right: auto;
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.navbar__brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 16px;
  background: linear-gradient(135deg, #E8600A 0%, #F5A623 100%);
  color: #ffffff;
  box-shadow: 0 12px 25px rgba(232, 96, 10, 0.25);
  font-size: 1rem;
}

.navbar__brand-copy {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
}

.navbar__brand-copy span {
  display: block;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--grey-text);
}

.navbar__brand-copy strong {
  font-family: var(--font-head);
  font-size: 1.1rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  background: linear-gradient(90deg, #E8600A 0%, #F5A623 50%, #22C55E 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

html.dark-mode .navbar__brand-mark {
  background: linear-gradient(135deg, #F5A623 0%, #E8600A 100%);
  box-shadow: 0 12px 25px rgba(255, 152, 0, 0.22);
}

html.dark-mode .navbar__brand-copy span {
  color: var(--text-secondary);
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

html.dark-mode .navbar__links a {
  color: var(--text-secondary);
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

.navbar__dark-toggle {
  background: none;
  border: none;
  color: var(--grey-text);
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
}

html.dark-mode .navbar__dark-toggle {
  color: var(--text-secondary);
}

.navbar__dark-toggle:hover {
  color: var(--orange);
}

.navbar__dark-toggle svg {
  display: block;
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
  background: var(--text-primary);
  border-radius: 2px;
  transition: background 0.3s;
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
