<template>
  <section class="hero" id="hero">
    <!-- Teal/orange overlay matching the design -->
    <div class="hero_overlay"></div>

    <div class="hero_content">
      <span class="hero_badge">SUMMER 2026</span>
      <h1 class="hero_title">
        Cape Town Food Fest 2026:<br />
        A Celebration of Flavor &amp; Sound.
      </h1>
      <p class="hero_desc">
        Join us for a weekend of world-class chefs, local street food gems, and live
        music under the sun. Experience the heart of the Mother City through its culinary tapestry.
      </p>
      <div class="hero_actions">
        <button class="btn btn--primary" @click="scrollToTickets">Explore Ticket Tiers</button>
        <button class="btn btn--outline">View Schedule</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',

  methods: {
    scrollToTickets() {
      document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;

  
  background-image: url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1400&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
}

.hero_overlay {
  position: absolute;
  inset: 0;
  
  background: linear-gradient(
    135deg,
    rgba(0, 180, 160, 0.72) 0%,
    rgba(232, 96, 10, 0.68) 100%
  );
}

.hero_content {
  position: relative;
  z-index: 1;
  max-width: 560px;
  padding: 0 2.5rem;
  padding-top: 6rem; /* offset for fixed nav */
}

.hero_badge {
  display: inline-block;
  background: var(--orange);
  color: var(--white);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  margin-bottom: 1rem;
}

.hero_title {
  font-family: var(--font-head);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  color: var(--white);
  line-height: 1.2;
  margin-bottom: 1rem;
}

.hero_desc {
  color: rgba(255,255,255,0.88);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.hero_actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Shared button base */
.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 2px solid transparent;
  transition: all 0.2s;
}

.btn--primary {
  background: var(--orange);
  color: var(--white);
  border-color: var(--orange);
}

.btn--primary:hover {
  background: var(--orange-dark);
  border-color: var(--orange-dark);
  transform: translateY(-2px);
}

.btn--outline {
  background: transparent;
  color: var(--white);
  border-color: var(--white);
}

.btn--outline:hover {
  background: rgba(255,255,255,0.15);
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .hero__content {
    padding: 0 1.25rem;
    padding-top: 5rem;
  }
}
</style>
