
import { ABILITIES_ENUM } from '@Module/core/enums/Abilities';
import { generatePermissions } from '@Module/core/utils/fn/generatePermissions';

///// user
export const UserPermissions = generatePermissions(ABILITIES_ENUM.PASS);

