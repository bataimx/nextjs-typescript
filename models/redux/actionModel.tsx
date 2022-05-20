import {ActionTypes} from '../../redux/actions'

interface ActionModel<type> {
  type: ActionTypes | String;
  payload: type;
}

export default ActionModel;
