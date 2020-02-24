import React from 'react'

// this provide input section 

function ChangeAmount(props){
    return(
        <main>
            <form>
                <input 
                    type = "number"
                    placeholder = "Amount"
                    name = "amount"
                    value = {props.data.amount}
                    onChange = {props.handleChange}
                />
            </form>
        </main>
    )
}
    
export default ChangeAmount;