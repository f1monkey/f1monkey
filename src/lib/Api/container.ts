import ApiClientErrorProxy from '@/lib/Api/Service/ApiClientErrorProxy';
import { container } from 'tsyringe';

container.register('ApiClientInterface', {
  useClass: ApiClientErrorProxy,
});
