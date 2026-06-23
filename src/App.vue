<template>
  <div>
    <!-- Fixed navigation bar -->
    <AppNav />

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
}
</style>
