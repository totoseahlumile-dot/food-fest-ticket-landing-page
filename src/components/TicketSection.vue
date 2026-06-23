<template>
  <section class="ticket-section" id="tickets">
    <div class="ticket-section__intro">
      <h2 class="ticket-section__heading">Choose Your Experience</h2>
      <p class="ticket-section__sub">
        Whether you're here for a quick bite or the full VIP experience, we have a tier
        for you. Every ticket helps support local food charities.
      </p>

      <!-- Favourite counter — shows how many tiers are favourited -->
      <p v-if="favouriteCount > 0" class="ticket-section__fav-count">
        ❤️ You've favourited {{ favouriteCount }} tier{{ favouriteCount > 1 ? 's' : '' }}
      </p>
    </div>

    <!-- v-for loops over the tickets array and renders one TicketCard per item -->
    <div class="ticket-section__grid">
      <TicketCard
        v-for="ticket in tickets"
        :key="ticket.id"
        :ticket="ticket"
        @toggle-favourite="handleFavourite"
      />
    </div>
  </section>
</template>

<script>
import TicketCard from './TicketCard.vue'
import { tickets } from '../data/tickets.js'

export default {
  name: 'TicketSection',

  components: { TicketCard },

  data() {
    return {
      tickets,                 // imported from data/tickets.js
      favouritedIds: new Set() // tracks which ticket IDs are favourited
    }
  },

  //  auto-updates whenever favouritedIds changes
  computed: {
    favouriteCount() {
      return this.favouritedIds.size
    }
  },

  methods: {
    // Called when a TicketCard emits 'toggle-favourite'
    handleFavourite({ id, favourited }) {
      if (favourited) {
        this.favouritedIds = new Set([...this.favouritedIds, id])
      } else {
        const updated = new Set(this.favouritedIds)
        updated.delete(id)
        this.favouritedIds = updated
      }
    }
  }
}
</script>

<style scoped>
.ticket-section {
  background: var(--off-white);
  padding: 5rem 2rem;
  transition: background 0.3s;
}

html.dark-mode .ticket-section {
  background: var(--bg-secondary);
}

.ticket-section__intro {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3.5rem;
}

.ticket-section__heading {
  font-family: var(--font-head);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  transition: color 0.3s;
}

.ticket-section__sub {
  font-size: 0.95rem;
  color: var(--orange);
  line-height: 1.7;
}

.ticket-section__fav-count {
  margin-top: 0.75rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
  animation: fadeIn 0.3s ease;
  transition: color 0.3s;
}

/* 3-column grid on desktop, 1 column on mobile */
.ticket-section__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (max-width: 900px) {
  .ticket-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .ticket-section {
    padding: 3.5rem 1.25rem;
  }

  .ticket-section__grid {
    grid-template-columns: 1fr;
    max-width: 380px;
  }
}
</style>
