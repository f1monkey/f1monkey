import CharacterResponse from '@/lib/InternalApi/Dto/Response/CharacterResponse';

class CharacterListResponse {
  public items: CharacterResponse[];

  constructor(items: CharacterResponse[]) {
    this.items = items;
  }
}

export default CharacterListResponse;
