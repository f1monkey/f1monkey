interface EventListenerRegistryInterface
{
  addListener<T extends AppEvent>(event: T, listener: AppEventListener<T>): void;

  removeListener<T extends AppEvent>(event: T, listener: AppEventListener<T>): void;

  getListeners<T extends AppEvent>(event: T): Array<AppEventListener<T>> | undefined;
}

export default EventListenerRegistryInterface;
