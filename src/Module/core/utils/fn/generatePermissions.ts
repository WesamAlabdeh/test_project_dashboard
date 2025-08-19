import {
  ABILITIES_ENUM,
  ABILITIES_VALUES_ENUM,
} from '@Module/core/enums/Abilities';
import { hasAbility } from './hasAbility';

export const generatePermissions = (ability: ABILITIES_ENUM) => {
  return {
    canIndex: hasAbility(ability, ABILITIES_VALUES_ENUM.INDEX),
    canShow: hasAbility(ability, ABILITIES_VALUES_ENUM.SHOW),
    canAdd: hasAbility(ability, ABILITIES_VALUES_ENUM.STORE),
    canEdit: hasAbility(ability, ABILITIES_VALUES_ENUM.UPDATE),
    canDelete: hasAbility(ability, ABILITIES_VALUES_ENUM.DELETE),
  };
};
