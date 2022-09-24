<template>
  <div 
    class="dialog" 
    v-if="show"
    @click="hidePopup"
  >
    <div 
      class="dialog__content"
      @click.stop  
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import toggleMixin from '@/mixins/toggleMixin';
  export default {
    name: "Popup",
    mixins: [toggleMixin],
    props: {
      show: {
        type: Boolean,
        defalt: false
      }
    },
  }
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
}

.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 50px;
  padding: 15px 20px;
}
</style>