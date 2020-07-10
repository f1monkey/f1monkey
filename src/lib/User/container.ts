import AuthService from '@/lib/User/Service/AuthService';
import SERVICES from '@/lib/User/services';
import { Container } from 'inversify';
import AuthServiceInterface from '@/lib/User/Service/AuthServiceInterface';
import UserStorageInterface from '@/lib/User/Service/UserStorageInterface';
import UserStorage from '@/lib/User/Service/UserStorage';

export default function register(container: Container) {
  container.bind<AuthServiceInterface>(SERVICES.AuthServiceInterface).to(AuthService);
  container.bind<UserStorageInterface>(SERVICES.UserStorageInterface).to(UserStorage).inSingletonScope();
}
