//ChangeGreetingsComponent.vue
<template>
    <!-- <input :value="msg" @keyup="changeMessage($event.target.value)" @keyup.enter="incrementCounter"> -->
    <input :value="msg" @keyup="handleMessageInputChanges($event)" />
</template>
<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
    // computed: {
    //     msg() {
    //         return this.$store.state.msg
    //     }
    // },
    // methods: {
    //     changeMsg(ev) {
    //         this.$store.commit('changeMessage', ev.target.value)
    //     }
    // }
    computed: mapGetters({
        msg: 'getMessage'
    }),
    methods: {
        //...mapActions(['changeMessage', 'incrementCounter']),
        ...mapActions([ 'handleMessageInputChanges']),        
        whatsUp(ev){
            this.$store.commit('changeMessage', ev.target.value)
        }
    }
}
</script>