import SettingModel from './reducers/settingModel';
import CollectionModel from './reducers/collectionModel';
import PhotoModel from './reducers/photoModel';

class StoreModel {
  Setting: SettingModel;
  Photos: PhotoModel[] = [];
  Collections: CollectionModel[] = [];
}
export default StoreModel;
