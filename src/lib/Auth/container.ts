import AuthService from '@/lib/Auth/Service/AuthService';
import SERVICES from '@/lib/Auth/services';
import { Container } from 'inversify';
import AuthServiceInterface from '@/lib/Auth/Service/AuthServiceInterface';
import RegisterServiceInterface from '@/lib/Auth/Service/RegisterServiceInterface';

export default function register(container: Container) {
  container.bind<AuthServiceInterface>(SERVICES.AuthServiceInterface).to(AuthService);
  container.bind<RegisterServiceInterface>(SERVICES.RegisterServiceInterface).to(AuthService);
}
