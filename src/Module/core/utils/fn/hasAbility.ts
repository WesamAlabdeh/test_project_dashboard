import {
  ABILITIES_ENUM,
  ABILITIES_VALUES_ENUM,
} from '@Module/core/enums/Abilities';
import { LocalStorageEnum } from '@Module/core/enums/LocalStorage';

class AbilityManager {
  private static instance: AbilityManager;
  private abilities: Set<string> | null = null;

  private constructor() {
    this.initializeAbilities();
  }

  public static getInstance(): AbilityManager {
    if (!AbilityManager.instance) {
      AbilityManager.instance = new AbilityManager();
    }
    return AbilityManager.instance;
  }
  private initializeAbilities(): void {
    this.abilities = this.loadAbilities();
  }

  private loadAbilities(): Set<string> {
    const abilitiesString = localStorage.getItem(
      LocalStorageEnum.ABILITIES_KEY,
    );
    if (!abilitiesString) {
      return new Set<string>();
    }
    return new Set(JSON.parse(abilitiesString));
  }
  public hasAbility(
    category: ABILITIES_ENUM,
    value: ABILITIES_VALUES_ENUM,
  ): boolean {
    // Allow all abilities if the category is PASS
    if (category === ABILITIES_ENUM.PASS) {
      return true;
    }

    // Load abilities from localStorage if the abilities set is null or empty
    if (this.abilities === null || this.abilities.size === 0) {
      this.abilities = this.loadAbilities();
    }

    // Construct the ability string
    const abilityString = `${category}::${value}`;

    // Check if the constructed ability string exists in the abilities set
    return this.abilities.has(abilityString);
  }

  public refreshAbilities(): void {
    this.abilities = this.loadAbilities();
  }
}

// Usage
export function hasAbility(
  category: ABILITIES_ENUM,
  value: ABILITIES_VALUES_ENUM,
): boolean {
  return AbilityManager.getInstance().hasAbility(category, value);
}

export function refreshAbilities(): void {
  AbilityManager.getInstance().refreshAbilities();
}
