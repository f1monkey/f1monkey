import EventDispatcherInterface from '@/lib/Common/Service/EventDispatcherInterface';
import EventListenerRegistryInterface from '@/lib/Common/Service/EventListenerRegistryInterface';
import { injectable, inject } from 'inversify';
import SERVICES from '@/lib/Common/services';

@injectable()
class EventDispatcher implements EventDispatcherInterface {
  constructor(
    @inject(SERVICES.EventListenerRegistryInterface) private registry: EventListenerRegistryInterface,
  ) {}

  public dispatch<T extends AppEvent>(event: T): void {
    const listeners = this.registry.getListeners(event.constructor);
    if (listeners) {
      listeners.forEach((callback) => {
        callback(event); // @fixme TS compile error
      });
    }
  }
}

export default EventDispatcher;
