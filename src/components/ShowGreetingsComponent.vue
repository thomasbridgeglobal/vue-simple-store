//ShowGreetingsComponent.vue
<template>
    <div>
        <h1>{{ msg }}</h1>
        <div>the message was changed {{ counter }} times</div>
    </div>
</template>

<style>
</style>
<script>
import { mapGetters } from 'vuex'

export default {
    // computed: {
    //     msg () {
    //         return this.$store.getters.getMessage
    //     }
    // }
    computed: {
        // ...mapGetters(['getMessage']),
        ...mapGetters({
            msg: 'getMessage',
            counter: 'getCounter'
        })
    }
}
</script>