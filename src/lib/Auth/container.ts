import { container } from 'tsyringe';
import AuthService from '@/lib/Auth/Service/AuthService';

container.register('AuthServiceInterface', {
  useClass: AuthService,
});
container.register('RegisterServiceInterface', {
  useClass: AuthService,
});
