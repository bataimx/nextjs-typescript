import { PhotoModel } from '../../../models';
import { updatePhoto } from '../../json_photo';
import { isEmpty } from 'lodash';

export default function (Photo: PhotoModel): Promise<PhotoModel | null> {
  return new Promise((resolve) => {
    if (isEmpty(Photo)) {
      resolve(null)
    }

    updatePhoto(Photo);

    resolve(Photo);
  });
}
