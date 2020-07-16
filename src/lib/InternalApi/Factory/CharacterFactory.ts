import CharacterResponse from '@/lib/InternalApi/Dto/Response/CharacterResponse';
import Character from '@/lib/InternalApi/Dto/Character';
import CharacterListResponse from '@/lib/InternalApi/Dto/Response/CharacterListResponse';
import CharacterFactoryInterface from '@/lib/InternalApi/Factory/CharacterFactoryInterface';
import { injectable } from 'inversify';

@injectable()
class CharacterFactory implements CharacterFactoryInterface {
  public create(response: CharacterResponse): Character {
    const result = new Character(response.id, response.characterId, response.characterName);

    return result;
  }

  public createList(response: CharacterListResponse): Character[] {
    return response.items.map(
      (characterResponse: CharacterResponse) => this.create(characterResponse),
    );
  }
}

export default CharacterFactory;
