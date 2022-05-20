import { CollectionModel } from '../../../models';
import {
  GetJsonCollections,
  updateJsonCollections,
} from '../../json_collections';
import { isEmpty, remove } from 'lodash';

export default function (
  collections: CollectionModel[]
): Promise<CollectionModel[]> {
  return new Promise((resolve, _reject) => {
    if (isEmpty(collections)) resolve([]);
    let CollectionJson = GetJsonCollections();

    const idList = collections.map((item) => item.id);
    remove(CollectionJson, (item) => idList.includes(item.id));
    updateJsonCollections();

    resolve(collections);
  });
}
