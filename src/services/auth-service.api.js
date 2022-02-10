export const authServiceApi = async (user, password) => {
    return await new Promise((success, fail) => {
        setTimeout(()=> {
            success(fetch('https://jsonplaceholder.typicode.com/photos'));
        },2000)
    }).then((response) => {
        return response.json();
    }).then((res)=> {
        return `${user}_${password}_fsdkjff34nkj34nTEST`
    })
    .catch((err) => {
        return err;
    });
};