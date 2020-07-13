import ApiClientInterface from '@/lib/Common/Service/ApiClientInterface';
import ErrorResponseFactory from '@/lib/Common/Factory/ErrorResponseFactory';
import InternalApiClientErrorProxy from '@/lib/Common/Service/ApiClientErrorProxy';
import InternalApiClient from '@/lib/Common/Service/InternalApiClient';
import EventDispatcherInterface from '@/lib/Common/Service/EventDispatcherInterface';
import EventListenerRegistryInterface from '@/lib/Common/Service/EventListenerRegistryInterface';
import SERVICES from '@/lib/Common/services';
import EventDispatcher from '@/lib/Common/Service/EventDispatcher';
import EventListenerRegistry from '@/lib/Common/Service/EventListenerRegistry';

import { Container } from 'inversify';

export default function register(container: Container) {
  container.bind<EventDispatcherInterface>(SERVICES.EventDispatcherInterface).to(EventDispatcher).inSingletonScope();
  container.bind<EventListenerRegistryInterface>(SERVICES.EventListenerRegistryInterface).to(EventListenerRegistry).inSingletonScope();
  container.bind<InternalApiClient>(SERVICES.InternalApiClientImpl).to(InternalApiClient);
  container.bind<ApiClientInterface>(SERVICES.InternalApiClient).to(InternalApiClientErrorProxy);
  container.bind<ErrorResponseFactory>(SERVICES.ErrorResponseFactory).to(ErrorResponseFactory);
}
