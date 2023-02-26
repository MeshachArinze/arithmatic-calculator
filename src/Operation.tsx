import { ACTIONS } from "./Actions";



const OperationButton = ({ dispatch, operation}:any) => {
  return (
    <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>
      {operation}
    </button>
  )
}

export default OperationButton