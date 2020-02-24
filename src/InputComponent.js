import React from 'react'

function InputComponent(props){
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
            <p>Amount : {props.data.amount}</p>
        </main>

    )
}

export default InputComponent;