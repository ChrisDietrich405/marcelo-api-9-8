export const login = async (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(username === "marcelo" && password === "password") {
                resolve()
            } else {
                reject()
            }
        },2000)
    })
}