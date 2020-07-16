import INTERNAL_API_SERVICES from '@/lib/InternalApi/services';
import COMMON_SERVICES from '@/lib/Common/services';
import ApiClientInterface from '@/lib/Common/Service/ApiClientInterface';
import CharacterResponse from '@/lib/InternalApi/Dto/Response/CharacterResponse';
import CharacterListResponse from '@/lib/InternalApi/Dto/Response/CharacterListResponse';
import Character from '@/lib/InternalApi/Dto/Character';
import CharacterServiceInterface from '@/lib/InternalApi/Service/CharacterServiceInterface';
import CharacterFactoryInterface from '@/lib/InternalApi/Factory/CharacterFactoryInterface';
import { inject, injectable } from 'inversify';

@injectable()
class CharacterService implements CharacterServiceInterface {
  constructor(
    @inject(INTERNAL_API_SERVICES.CharacterFactoryInterface) private factory: CharacterFactoryInterface,
    @inject(COMMON_SERVICES.InternalApiClient) private client: ApiClientInterface,
  ) {}

  public async getList(): Promise<Character[]> {
    const response = await this.client.get<CharacterListResponse>('/v1/characters');

    return this.factory.createList(response);
  }

  public async get(id: string): Promise<Character> {
    const response = await this.client.get<CharacterResponse>('/v1/characters/{id}'.replace('{id}', id));

    return this.factory.create(response);
  }

  public async delete(id: string): Promise<Character> {
    const response = await this.client.delete<CharacterResponse>('/v1/characters/{id}'.replace('{id}', id));

    return this.factory.create(response);
  }
}

export default CharacterService;
