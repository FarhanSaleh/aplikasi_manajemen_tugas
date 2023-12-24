const account = document.getElementById("account-modal")
const editAccount = document.getElementById("account-edit-modal")
const shadowPopup = document.getElementById("shadow-popup")

const openAccount = () => {
    account.classList.toggle("hidden")
}
const closeAccount = () =>{
    account.classList.add("hidden")
}

const openEditAccount = () =>{
    editAccount.classList.remove("hidden")
    shadowPopup.classList.remove("hidden")
}

const closeEditAccount = () =>{
    editAccount.classList.add("hidden")
    shadowPopup.classList.add("hidden")
}