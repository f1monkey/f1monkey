import CharacterResponse from '@/lib/InternalApi/Dto/Response/CharacterResponse';
import Character from '@/lib/InternalApi/Dto/Character';
import CharacterListResponse from '@/lib/InternalApi/Dto/Response/CharacterListResponse';

interface CharacterFactoryInterface {
   create(response: CharacterResponse): Character;

   createList(response: CharacterListResponse): Character[];
}

export default CharacterFactoryInterface;
