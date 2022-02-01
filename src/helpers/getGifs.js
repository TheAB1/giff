const getGifs = async (category) => {
    const key = 'gs0PEhwHYJe0El9JSAgo2AztW4OfPNrH&q'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}=${encodeURI(category)}}&limit=20`
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium
        }
    })
    return gifs;
}

export default getGifs;