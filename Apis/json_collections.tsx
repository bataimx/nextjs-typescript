import { CollectionModel } from '../models';

// const storageName = 'json_collections';
let JsonCollections: CollectionModel[] = [];

export function GetJsonCollections() {
  JsonCollections = dummyCollections;
  return JsonCollections;
}

export function updateJsonCollections() {
  // localStorage.setItem(storageName, JSON.stringify(JsonCollections));
}

const dummyCollections = [
  {
    id: '9',
    name: 'food',
  },
  {
    id: '8',
    name: 'landscape',
  },
  {
    id: '7',
    name: 'travel',
  },
];
