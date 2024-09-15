export async function useFetch(url, token) {
    const data = await fetch(process.env.DOMAIN + url, {
        headers: {
            token: token || null,
        },
    })
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => {
            console.log(err);
            throw new Error("Error fetching data");
        });
    return data;
}
