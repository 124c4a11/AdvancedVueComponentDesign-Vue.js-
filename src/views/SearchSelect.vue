<template>
  <div
    class="font-sans text-black min-h-screen bg-grey-darker p-8" style="padding-top: 14rem; padding-bottom: 14rem"
  >
    <div class="max-w-sm mx-auto bg-white rounded shadow-lg p-8">
      <div class="mb-4">
        <label class="form-label mb-2">Favorite Thrash Band</label>
        <search-select
          v-model="selectedBand"
          :options="bands"
          :filter-function="applySearchFilter"
        />
      </div>

      <div class="text-right">
        <button type="button" class="btn btn-blue">Save Changes</button>
      </div>
    </div>
  </div>
</template>

<script>
import SearchSelect from '@/components/SearchSelect.vue'

export default {
  components: {
    SearchSelect
  },

  data () {
    return {
      selectedBand: null,
      search: '',

      bands: [
        'Anthrax',
        'Dark Angel',
        'Death Angel',
        'Destruction',
        'Exodus',
        'Flotsam and Jetsam',
        'Kreator',
        'Megadeth',
        'Metallica',
        'Overkill',
        'Sepultura',
        'Slayer',
        'Testament'
      ]
    }
  },

  methods: {
    applySearchFilter (search, bands) {
      return bands.filter((band) => {
        return band.toLowerCase().startsWith(search.toLowerCase())
      })
    }
  }
}
</script>
