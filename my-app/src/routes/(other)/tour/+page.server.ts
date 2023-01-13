export const load = async  () => {
    const fecthShows = async () => {
        const showsRes = await fetch('https://rest.bandsintown.com/artists/id_15515126/events?app_id=86d534f882f0fb55541f07f8c1829c87')
        const showsData = await showsRes.json()
        return showsData
    }

    return {
       shows: fecthShows()
    }
};