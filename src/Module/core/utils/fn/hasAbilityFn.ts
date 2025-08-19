import { ABILITIES_ENUM } from '@Module/core/enums/Abilities';
import { generatePermissions } from '@Module/core/utils/fn/generatePermissions';

///// User
export const userPermissions = generatePermissions(ABILITIES_ENUM.USER);
