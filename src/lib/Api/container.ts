import { Container } from 'inversify';
import SERVICES from '@/lib/Api/services';
import ApiClientInterface from '@/lib/Api/Service/ApiClientInterface';
import ErrorResponseFactory from '@/lib/Api/Factory/ErrorResponseFactory';
import InternalApiClientErrorProxy from '@/lib/Api/Service/ApiClientErrorProxy';
import InternalApiClient from '@/lib/Api/Service/InternalApiClient';

export default function register(container: Container) {
  container.bind<InternalApiClient>(SERVICES.InternalApiClientImpl).to(InternalApiClient);
  container.bind<ApiClientInterface>(SERVICES.InternalApiClient).to(InternalApiClientErrorProxy);
  container.bind<ErrorResponseFactory>(SERVICES.ErrorResponseFactory).to(ErrorResponseFactory);
}
