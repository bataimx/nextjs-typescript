import { GetJsonPhoto } from '../../json_photo';

export default function GetPhotos(): Promise<any[]> {
  return new Promise((resolve, _reject) => {
    const JsonPhoto = GetJsonPhoto();
    resolve(JsonPhoto);
  });
}
