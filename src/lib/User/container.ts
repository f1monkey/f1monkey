import AuthService from '@/lib/User/Service/AuthService';
import SERVICES from '@/lib/User/services';
import { Container } from 'inversify';
import AuthServiceInterface from '@/lib/User/Service/AuthServiceInterface';
import UserStorageInterface from '@/lib/User/Service/UserStorageInterface';
import UserStorage from '@/lib/User/Service/UserStorage';
import SessionFactory from '@/lib/User/Factory/SessionFactory';
import SessionFactoryInterface from '@/lib/User/Factory/SessionFactoryInterface';
import SessionService from '@/lib/User/Service/SessionService';
import SessionServiceInterface from '@/lib/User/Service/SessionServiceInterface';

export default function register(container: Container) {
  container.bind<AuthServiceInterface>(SERVICES.AuthServiceInterface).to(AuthService);
  container.bind<UserStorageInterface>(SERVICES.UserStorageInterface).to(UserStorage).inSingletonScope();
  container.bind<SessionFactoryInterface>(SERVICES.SessionFactoryInterface).to(SessionFactory);
  container.bind<SessionServiceInterface>(SERVICES.SessionServiceInterface).to(SessionService);
}
