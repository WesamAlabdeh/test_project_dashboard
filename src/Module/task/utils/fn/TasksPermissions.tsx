
import { ABILITIES_ENUM } from '@Module/core/enums/Abilities';
import { generatePermissions } from '@Module/core/utils/fn/generatePermissions';

///// tasks
export const TasksPermissions = generatePermissions(ABILITIES_ENUM.PASS);

