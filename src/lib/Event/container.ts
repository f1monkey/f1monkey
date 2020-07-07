import EventDispatcher from '@/lib/Event/Service/EventDispatcher';
import { container } from 'tsyringe';

container.register('EventDispatcherInterface', {
  useClass: EventDispatcher,
});
