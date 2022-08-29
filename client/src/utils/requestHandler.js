export async function handleRequest(fetchResponse, errorMessage) {
    let data = await fetchResponse.json();

    if (fetchResponse.ok) {
        return data;
    }

    console.log(errorMessage);
    throw new Error(data.error);
}