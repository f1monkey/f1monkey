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
import CharacterFactoryInterface from '@/lib/InternalApi/Factory/CharacterFactoryInterface';
import CharacterFactory from '@/lib/InternalApi/Factory/CharacterFactory';
import CharacterService from '@/lib/InternalApi/Service/CharacterService';
import CharacterServiceInterface from '@/lib/InternalApi/Service/CharacterServiceInterface';

export default function register(container: Container) {
  container.bind<AuthServiceInterface>(SERVICES.AuthServiceInterface).to(AuthService);
  container.bind<UserStorageInterface>(SERVICES.UserStorageInterface).to(UserStorage).inSingletonScope();
  container.bind<SessionFactoryInterface>(SERVICES.SessionFactoryInterface).to(SessionFactory);
  container.bind<SessionServiceInterface>(SERVICES.SessionServiceInterface).to(SessionService);
  container.bind<CharacterFactoryInterface>(SERVICES.CharacterFactoryInterface).to(CharacterFactory);
  container.bind<CharacterServiceInterface>(SERVICES.CharacterServiceInterface).to(CharacterService);
}
