import { injectable } from 'tsyringe';
import EventListenerRegistryInterface from '@/lib/Event/Service/EventListenerRegistryInterface';

@injectable()
class EventListenerRegistry implements EventListenerRegistryInterface {
  private listeners: Map<AppEvent, Array<AppEventListener<AppEvent>>>

  constructor() {
    this.listeners = new Map();
  }

  public addListener<T extends AppEvent>(event: T, listener: AppEventListener<T>): void {
    let listeners = this.listeners.get(event);
    if (!listeners) {
      listeners = [listener];
      this.listeners.set(event, listeners);
    } else {
      listeners.push(listener);
    }
  }

  public removeListener<T extends AppEvent>(event: T, listener: AppEventListener<T>): void {
    const listeners = this.listeners.get(event);
    if (!listeners) {
      return;
    }
    const i = listeners.indexOf(listener);
    if (i === -1) {
      return;
    }

    listeners.splice(i, 1);
  }

  public getListeners<T extends AppEvent>(event: T): Array<AppEventListener<T>> | undefined {
    return this.listeners.get(event);
  }
}

export default EventListenerRegistry;
