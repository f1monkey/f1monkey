import EventDispatcherInterface from '@/lib/Event/Service/EventDispatcherInterface';
import EventListenerRegistryInterface from '@/lib/Event/Service/EventListenerRegistryInterface';
import SERVICES from '@/lib/Event/services';
import { Container } from 'inversify';
import EventDispatcher from '@/lib/Event/Service/EventDispatcher';
import EventListenerRegistry from '@/lib/Event/Service/EventListenerRegistry';

export default function register(container: Container) {
  container.bind<EventDispatcherInterface>(SERVICES.EventDispatcherInterface).to(EventDispatcher);
  container.bind<EventListenerRegistryInterface>(SERVICES.EventListenerRegistryInterface).to(EventListenerRegistry);
}
