export const getFetchApis = async () => {
    return await new Promise((success, fail) => {
        setTimeout(()=> {
            success(fetch('https://jsonplaceholder.typicode.com/photos'));
        },2000)
    }).then((response) => {
        return response.json();
    }).then((res)=> {
        return res
    })
    .catch((err) => {
        return err;
    });
};