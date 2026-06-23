<template>
  <div>
    <!-- Fixed navigation bar -->
    <AppNav @toggle-dark-mode="toggleDarkMode" :isDarkMode="isDarkMode" />

    <!-- Hero / landing section -->
    <HeroSection />

    <!-- Ticket tiers section -->
    <TicketSection />

    <!-- Simple footer -->
    <footer class="footer">
      <p>©  Cape Town Food Fest · All proceeds support local food charities </p>
    </footer>
  </div>
</template>

<script>
import AppNav from './components/AppNav.vue'
import HeroSection from './components/HeroSection.vue'
import TicketSection from './components/TicketSection.vue'

export default {
  name: 'App',

  components: {
    AppNav,
    HeroSection,
    TicketSection
  },

  data() {
    return {
      isDarkMode: false
    }
  },

  mounted() {
    // Check localStorage and system preference
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) {
      this.isDarkMode = saved === 'true'
    } else {
      // Check system preference
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    this.applyDarkMode()
  },

  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      localStorage.setItem('darkMode', this.isDarkMode)
      this.applyDarkMode()
    },

    applyDarkMode() {
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark-mode')
      } else {
        document.documentElement.classList.remove('dark-mode')
      }
    }
  }
}
</script>

<style>
/* Footer styles (not scoped — fine for simple global elements) */
.footer {
  background: var(--dark);
  color: rgba(255,255,255,0.6);
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.85rem;
  transition: background-color 0.3s, color 0.3s;
}

html.dark-mode .footer {
  background: var(--bg-secondary);
  color: var(--text-secondary);
}
</style>
