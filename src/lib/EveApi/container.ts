import SERVICES from '@/lib/EveApi/services';

import { Container } from 'inversify';
import ImageServiceInterface from '@/lib/EveApi/Services/ImageServiceInterface';
import ImageService from '@/lib/EveApi/Services/ImageService';

export default function register(container: Container) {
  container.bind<ImageServiceInterface>(SERVICES.ImageServiceInterface).to(ImageService).inSingletonScope();
}
