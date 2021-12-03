
const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HouseApi {
    get = async () => {
        try {
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch (e) {
            console.log('"fetchhouses is struggling bro!" - fetchouses encountered an issue.', e);
        }

    }

    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch (e) {
            console.log('"Haha, uhh guys? updatingHouses fell off the boat..." - updatingHouses encountered an issue.', e);
        }
    }

}

export const housesApi = new HouseApi();