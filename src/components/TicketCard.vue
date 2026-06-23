<template>
  <!-- :class binding adds 'ticket-card--featured' or 'ticket-card--gold' conditionally -->
  <div
    class="ticket-card"
    :class="{
      'ticket-card--featured': ticket.featured,
      'ticket-card--gold': ticket.tier === 'GOLD'
    }"
  >
    <!-- "MOST POPULAR" badge — only shows on featured tier -->
    <div v-if="ticket.featured" class="ticket-card__badge">MOST POPULAR</div>

    <!-- Card header -->
    <div class="ticket-card__header">
      <span class="ticket-card__tier">{{ ticket.tier }}</span>

      <!-- Heart icon — toggles between filled and outlined -->
      <button
        class="ticket-card__fav"
        :class="{ 'ticket-card__fav--active': isFavourited }"
        @click="toggleFavourite"
        :aria-label="isFavourited ? 'Remove from favourites' : 'Add to favourites'"
      >
        <!-- Filled heart (active) -->
        <svg v-if="isFavourited" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                   2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                   C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
                   c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <!-- Outline heart (inactive) -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67
                   l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06
                   L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </button>
    </div>

    <!-- Ticket name -->
    <h3 class="ticket-card__name">{{ ticket.name }}</h3>

    <!-- Price -->
    <p class="ticket-card__price">R{{ ticket.price.toLocaleString() }}</p>

    <!-- Benefits list -->
    <ul class="ticket-card__benefits">
      <li v-for="(benefit, index) in ticket.benefits" :key="index">
        <!-- Checkmark icon -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
                   10-4.48 10-10S17.52 2 12 2zm-2 14.5l-4-4
                   1.41-1.41L10 13.67l6.59-6.59L18 8.5l-8 8z"/>
        </svg>
        {{ benefit }}
      </li>
    </ul>

    <!-- CTA button -->
    <button class="ticket-card__btn" :class="{ 'ticket-card__btn--featured': ticket.featured }">
      Buy Now
    </button>
  </div>
</template>

<script>
export default {
  name: 'TicketCard',

  // Props received from the parent (TicketSection)
  props: {
    ticket: {
      type: Object,
      required: true
    }
  },

  // Emits an event up to the parent when favourite is toggled
  emits: ['toggle-favourite'],

  data() {
    return {
      isFavourited: false
    }
  },

  methods: {
    toggleFavourite() {
      this.isFavourited = !this.isFavourited
      // Emit the event so the parent can react if needed
      this.$emit('toggle-favourite', {
        id: this.ticket.id,
        favourited: this.isFavourited
      })
    }
  }
}
</script>

<style scoped>
/* ── Base card ── */
.ticket-card {
  position: relative;
  background: var(--white);
  border: 1.5px solid var(--border);
  border-radius: 14px;
  padding: 1.75rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.ticket-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.1);
}

/* ── Featured (Silver) ── */
.ticket-card--featured {
  border-color: var(--orange);
  box-shadow: 0 8px 24px rgba(232, 96, 10, 0.15);
}

/* ── Gold tier ── */
.ticket-card--gold {
  background: var(--dark-card);
  border-color: var(--gold);
  color: var(--white);
}

/* ── "MOST POPULAR" badge ── */
.ticket-card__badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--orange);
  color: var(--white);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 0.25rem 0.9rem;
  border-radius: 20px;
  white-space: nowrap;
}

/* ── Header (tier label + heart) ── */
.ticket-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
}

.ticket-card__tier {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--grey-text);
}

.ticket-card--gold .ticket-card__tier {
  color: var(--gold);
}

/* ── Favourite button ── */
.ticket-card__fav {
  background: none;
  border: none;
  color: var(--grey-text);
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: color 0.2s, transform 0.15s;
}

.ticket-card__fav:hover {
  transform: scale(1.15);
}

.ticket-card__fav--active {
  color: #EF4444; /* red heart when active */
}

.ticket-card--gold .ticket-card__fav {
  color: rgba(255,255,255,0.5);
}

.ticket-card--gold .ticket-card__fav--active {
  color: #EF4444;
}

/* ── Name ── */
.ticket-card__name {
  font-family: var(--font-head);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 0.25rem;
}

.ticket-card--gold .ticket-card__name {
  color: var(--white);
}

/* ── Price ── */
.ticket-card__price {
  font-family: var(--font-head);
  font-size: 2rem;
  font-weight: 800;
  color: var(--dark);
  margin-bottom: 0.75rem;
}

.ticket-card--featured .ticket-card__price {
  color: var(--orange);
}

.ticket-card--gold .ticket-card__price {
  color: var(--white);
}

/* ── Benefits list ── */
.ticket-card__benefits {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  margin-bottom: 1.5rem;
  flex: 1;
}

.ticket-card__benefits li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.88rem;
  color: var(--dark);
}

.ticket-card--gold .ticket-card__benefits li {
  color: rgba(255,255,255,0.85);
}

.ticket-card__benefits li svg {
  flex-shrink: 0;
  color: var(--green);
}

/* ── Buy Now button ── */
.ticket-card__btn {
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 2px solid var(--orange);
  background: transparent;
  color: var(--orange);
  transition: all 0.2s;
  margin-top: auto;
}

.ticket-card__btn:hover {
  background: var(--orange);
  color: var(--white);
  transform: translateY(-1px);
}

/* Featured (Silver) — solid button */
.ticket-card__btn--featured {
  background: var(--orange);
  color: var(--white);
}

.ticket-card__btn--featured:hover {
  background: var(--orange-dark);
  border-color: var(--orange-dark);
}

/* Gold — white outline button */
.ticket-card--gold .ticket-card__btn {
  border-color: var(--white);
  color: var(--white);
}

.ticket-card--gold .ticket-card__btn:hover {
  background: var(--white);
  color: var(--dark);
}
</style>
