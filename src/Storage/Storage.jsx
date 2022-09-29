
export const setValues = (key, value) => {
return localStorage.setItem(key, JSON.stringify(value));
}

export const getEmployee = () => {
    return JSON.parse(localStorage.getItem("id"));
}

export const getTeam = () => {
    return JSON.parse(localStorage.getItem("select"))
}