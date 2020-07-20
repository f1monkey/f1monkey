import ImageServiceInterface from '@/lib/EveApi/Services/ImageServiceInterface';
import { injectable } from 'inversify';

const SERVER_URL = 'https://images.evetech.net/';

@injectable()
class ImageService implements ImageServiceInterface {
  public getCharacterPortrait(characterId: number, size: number): string {
    return `${SERVER_URL}characters/${characterId}/portrait?size=${size}`;
  }
}

export default ImageService;
