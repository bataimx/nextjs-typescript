import { SettingModel } from '..';
import PhotoModel from './reducers/PhotoModel';
import CollectionModel from './reducers/collectionModel';

class StoreModel {
  Setting: SettingModel;
  Photos: PhotoModel[] = [];
  Collections: CollectionModel[] = [];
}
export default StoreModel;
