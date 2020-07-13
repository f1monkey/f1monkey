import EventListenerRegistryInterface from '@/lib/Common/Service/EventListenerRegistryInterface';
import { injectable } from 'inversify';

@injectable()
class EventListenerRegistry implements EventListenerRegistryInterface {
  private listeners: AppEventListenerMap

  public rand: number;

  constructor() {
    this.listeners = new Map();
    this.rand = Math.random();
  }

  public addListener<T extends AppEvent>(event: T, listener: AppEventListener): void {
    let listeners = this.listeners.get(event);
    if (listeners === undefined) {
      listeners = [listener];
      this.listeners.set(event, listeners);
    } else {
      listeners.push(listener);
    }
  }

  public removeListener<T extends AppEvent>(event: T, listener: AppEventListener): void {
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

  public getListeners<T extends AppEvent>(event: T): Array<AppEventListener> | undefined {
    return this.listeners.get(event);
  }
}

export default EventListenerRegistry;
