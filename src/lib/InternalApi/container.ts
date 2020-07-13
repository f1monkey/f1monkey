import AuthService from '@/lib/InternalApi/Service/AuthService';
import SERVICES from '@/lib/InternalApi/services';
import { Container } from 'inversify';
import AuthServiceInterface from '@/lib/InternalApi/Service/AuthServiceInterface';
import UserStorageInterface from '@/lib/InternalApi/Service/UserStorageInterface';
import UserStorage from '@/lib/InternalApi/Service/UserStorage';
import SessionFactory from '@/lib/InternalApi/Factory/SessionFactory';
import SessionFactoryInterface from '@/lib/InternalApi/Factory/SessionFactoryInterface';
import SessionService from '@/lib/InternalApi/Service/SessionService';
import SessionServiceInterface from '@/lib/InternalApi/Service/SessionServiceInterface';

export default function register(container: Container) {
  container.bind<AuthServiceInterface>(SERVICES.AuthServiceInterface).to(AuthService);
  container.bind<UserStorageInterface>(SERVICES.UserStorageInterface).to(UserStorage).inSingletonScope();
  container.bind<SessionFactoryInterface>(SERVICES.SessionFactoryInterface).to(SessionFactory);
  container.bind<SessionServiceInterface>(SERVICES.SessionServiceInterface).to(SessionService);
}
