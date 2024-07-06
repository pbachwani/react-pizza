import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      {/* <img src="public\icons8-delete-16.png" /> */}
      <i className="ri-delete-bin-line"></i>
    </Button>
  );
}

export default DeleteItem;
