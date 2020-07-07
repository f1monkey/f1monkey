interface EventDispatcherInterface
{
  dispatch<T extends AppEvent>(event: T): void;
}

export default EventDispatcherInterface;
