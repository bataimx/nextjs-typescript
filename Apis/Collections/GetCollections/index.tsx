import { GetJsonCollections } from '../../json_collections';

export default function (): Promise<any[]> {
  return new Promise((resolve, _reject) => {
    const JsonCollections = GetJsonCollections();
    resolve(JsonCollections);
  });
}
