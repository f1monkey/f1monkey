class Character {
  constructor(
    private id: string,
    private characterId: number,
    private characterName: string,
  ) {}

  public getId(): string {
    return this.id;
  }

  public getCharacterId(): number {
    return this.characterId;
  }

  public getCharacterName(): string {
    return this.characterName;
  }
}

export default Character;
