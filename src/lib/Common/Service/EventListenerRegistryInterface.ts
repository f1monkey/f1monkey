interface EventListenerRegistryInterface
{
  addListener<T extends AppEvent>(event: T, listener: AppEventListener): void;

  removeListener<T extends AppEvent>(event: T, listener: AppEventListener): void;

  getListeners<T extends AppEvent>(event: T): Array<AppEventListener> | undefined;
}

export default EventListenerRegistryInterface;
