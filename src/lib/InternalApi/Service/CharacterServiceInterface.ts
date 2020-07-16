import Character from '@/lib/InternalApi/Dto/Character';

interface CharacterServiceInterface
{
    getList(): Promise<Character[]>;

    get(id: string): Promise<Character>;

    delete(id: string): Promise<Character>;
}

export default CharacterServiceInterface;
