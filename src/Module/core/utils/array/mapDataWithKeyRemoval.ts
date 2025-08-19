import { AxiosEnum } from '@Module/core/enums/Axios';

export function newImageShape(
  data: any[],
  imagekey: string = 'image',
  subStringToRemoveIfExist: string = AxiosEnum.IMAGE_BASE_URL,
): any[] {
  return data.map((item) => {
    for (const key in item) {
      if (typeof item[key] === 'string' && key === imagekey) {
        return removeSubstring(item[key] as string, subStringToRemoveIfExist);
      }
    }
    return item;
  });
}

function removeSubstring(
  str: string,
  subStringToRemoveIfExist: string,
): string {
  return str.replace(subStringToRemoveIfExist, '');
}
