<template lang="pug">
.ui.container
  h1 Movie Discover
  .ui.link.cards.four.stackable
    .ui.inline.loader(:class="{ active: !discover.total_pages}")
    movie-card(v-for="(movie, index) in discover.results" :key="movie.id" :star="movie.vote_average" :title="movie.title" :poster="movie.poster_path" :overview="movie.overview" :release-date="movie.release_date" :genres="movie.genres" :movie-id="movie.id" :adult="movie.adult")
  div(v-if="discover.total_pages")
    hr.ui.divider
    paginator(:pages="discover.total_pages" :page="discover.page")
</template>

<script>
import { mapState, mapActions } from 'vuex';
import movieCard from './movieCard.vue';
import paginator from './paginator.vue';

export default {
  name: 'discover',
  data() {
    return {
      page: 1
    }
  },
  components: {
    movieCard,
    paginator
  },
  computed: mapState([
    'discover'
  ]),
  methods: {
    ...mapActions(['loadMovieDiscover', 'searchMovies']),
    update() {
      if (/search/.test(this.$route.name)) {
        this.searchMovies({ query: this.query });
      } else {
        this.loadMovieDiscover(this.page);
      }
    }
  },
  mounted() {
    this.update();
  }
}
</script>
