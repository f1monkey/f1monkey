class CharacterResponse {
  public id: string;

  public characterId: number;

  public characterName: string;

  constructor(id: string, characterId: number, characterName: string) {
    this.id = id;
    this.characterId = characterId;
    this.characterName = characterName;
  }
}

export default CharacterResponse;
