import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from 'react';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
        // Test two-way binding
        // setTimeout(() => {
        //     setFilteredYear('2021')
        // }, 4000)
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter  // controlled custom component - two-way binding
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler} />
                {
                    props.items.map(item =>
                        <ExpenseItem
                            title={item.title}
                            amount={item.amount}
                            date={item.date} />
                    )
                }

            </Card>
        </div>
    );
}

export default Expenses;