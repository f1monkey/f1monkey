class EventDispatcher {
  private listeners: Map<AppEvent, Array<AppEventListener>>

  constructor() {
    this.listeners = new Map();
  }

  public dispatch<T extends AppEvent>(event: T): void {
    const listeners = this.listeners.get(event.constructor);
    if (listeners) {
      listeners.forEach((callback) => {
        callback(event);
      });
    }
  }

  public addListener(event: AppEvent, listener: AppEventListener) {
    let listeners = this.listeners.get(event);
    if (!listeners) {
      listeners = [listener];
      this.listeners.set(event, listeners);
    } else {
      listeners.push(listener);
    }
  }

  public removeListener(event: AppEvent, listener: AppEventListener) {
    const listeners = this.listeners.get(event);
    if (!listeners) {
      return;
    }

    const i = listeners.indexOf(listener);
    if (i !== -1) {
      return;
    }

    listeners.splice(i, 1);
  }
}

export default EventDispatcher;
