import EventListenerRegistry from '@/lib/Event/Service/EventListenerRegistry';
import EventListenerRegistryInterface from '@/lib/Event/Service/EventListenerRegistryInterface';
import { injectable, inject } from 'tsyringe';
import EventDispatcherInterface from '@/lib/Event/Service/EventDispatcherInterface';

@injectable()
class EventDispatcher implements EventDispatcherInterface {
  constructor(
    @inject(EventListenerRegistry) private registry: EventListenerRegistryInterface,
  ) {}

  public dispatch<T extends AppEvent>(event: T): void {
    const listeners = this.registry.getListeners(event.constructor);
    if (listeners) {
      listeners.forEach((callback) => {
        callback(event);
      });
    }
  }
}

export default EventDispatcher;
