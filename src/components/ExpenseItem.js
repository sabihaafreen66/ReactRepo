
import './ExpenseItem.css';  
import ExpenseDate from './ExpenseDate'; 
function ExpenseItem(props){
      return <div classname="expense-item">
      <ExpenseDate calendarDate={props.date}></ExpenseDate>
       <div className='expense-item__description'><h2>{props.title}</h2>
        <div className='expense-item__price'>${props.price}</div>
       </div>
    </div>
}
export default ExpenseItem;