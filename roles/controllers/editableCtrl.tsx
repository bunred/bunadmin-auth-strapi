import { EditableDataType } from "@bunred/bunadmin"
import addSer from "../services/addSer"
import updateSer from "../services/updateSer"
import deleteSer from "../services/deleteSer"

interface Props {
  coverId?: string
  userId?: string
}

function editableCtrl({}: Props): EditableDataType<any> {
  return {
    // isEditable: rowData => rowData.not_editable === true, // only name(a) rows would be editable
    isDeletable: rowData => rowData.id > 2, // only custom role rows would be deletable
    onRowAdd: async newData => await addSer(newData),
    onRowUpdate: async (newData, oldData) => await updateSer(newData, oldData),
    onRowDelete: oldData => deleteSer(oldData)
  }
}

export default editableCtrl
