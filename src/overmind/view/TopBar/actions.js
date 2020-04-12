import _ from 'lodash'
import uuid from 'uuid/v1'

export default {
  onAddField({actions}) {
    actions.view.Map.BoundaryDrawing.onStartDrawing();
  },
  onSaveField({actions}) {
    actions.view.Modals.SaveField.open();
  },
  onCancelField({state, actions}) {
    state.view.Map.editingField = null; //Stop editing if we were
    actions.view.Map.BoundaryDrawing.onStopDrawing();
  },
  onEditField({actions, state}) {
    const currentField = state.view.FieldDetails.field;
    //Hide the current boundary
    state.view.Map.editingField = state.view.FieldDetails.fieldId;
    //Convert to drawing boundary: {<rand-id>: [lat, lng], ...}
    let boundary = {};
    _.forEach(_.get(currentField, 'boundary.coordinates.0') || [], (coors) => { //TODO will not work with holes in fields etc
      boundary[uuid()] = [coors[1], coors[0]];
    });
    //Start drawing
    actions.view.Map.BoundaryDrawing.onStartDrawing({boundary});
    //Close the details drawer
    actions.view.Map.unselectField()
  },
  async onResetCache({actions}) {
    await actions.app.oada.resetCache();
    //Refresh the page
    //location.reload();
  },
  async onLogout({actions}) {
    await actions.view.Login.logout()
  }
}
