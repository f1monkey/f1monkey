<template>
  <div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import container from '@/container';
import SERVICES from '@/lib/Event/services';
import EventListenerRegistryInterface from '@/lib/Event/Service/EventListenerRegistryInterface';
import RequestErrorEvent from '@/lib/Api/Event/RequestErrorEvent';

const registry = container.get<EventListenerRegistryInterface>(SERVICES.EventListenerRegistryInterface);

@Component({})
export default class ErrorPopup extends Vue {
  protected listener = (event: RequestErrorEvent) => {
    this.$buefy.toast.open({
      duration: 2000,
      message: event.getResponse().getMessage(),
      position: 'is-bottom',
      type: 'is-danger',
    });
  };

  public mounted() {
    registry.addListener(RequestErrorEvent, this.listener);
  }

  public destroyed() {
    registry.removeListener(RequestErrorEvent, this.listener);
  }
}
</script>
