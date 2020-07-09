import AuthService from '@/lib/Auth/Service/AuthService';
import SERVICES from '@/lib/Auth/services';
import { Container } from 'inversify';
import AuthServiceInterface from '@/lib/Auth/Service/AuthServiceInterface';

export default function register(container: Container) {
  container.bind<AuthServiceInterface>(SERVICES.AuthServiceInterface).to(AuthService);
}
