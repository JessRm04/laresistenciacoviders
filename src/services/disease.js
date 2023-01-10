export async function disease(country) {

    const config = {
        headers: {
          Accept: 'application/json',
        },
      }
      const response = await fetch(`https://disease.sh/docs/#/COVID-19%3A%20Worldometers/get_v3_covid_19_countries__${country}_`, config)
      const responseJson = await response.json()
      return responseJson;
}
export default {
    disease
}