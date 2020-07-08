import { Container } from 'inversify';
import SERVICES from '@/lib/Api/services';
import ApiClient from '@/lib/Api/Service/ApiClient';
import ApiClientInterface from '@/lib/Api/Service/ApiClientInterface';
import ErrorResponseFactory from '@/lib/Api/Factory/ErrorResponseFactory';
import ApiClientErrorProxy from '@/lib/Api/Service/ApiClientErrorProxy';

export default function register(container: Container) {
  container.bind<ApiClient>(SERVICES.ApiClient).to(ApiClient);
  container.bind<ApiClientInterface>(SERVICES.ApiClientInterface).to(ApiClientErrorProxy);
  container.bind<ErrorResponseFactory>(SERVICES.ErrorResponseFactory).to(ErrorResponseFactory);
}
