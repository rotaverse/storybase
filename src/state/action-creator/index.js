
export const saveLogin = (anything) => {
    return (dispatch) => {
        dispatch({
            type: "savelog",
            payload: anything
        });
    }
}


export const withdrawMoney = (amount) => {
    console.log(amount, "Lol")
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        });
    }
}