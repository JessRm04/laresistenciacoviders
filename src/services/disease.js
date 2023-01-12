const baseUrl = 'https://disease.sh/v3/covid-19/'

export async function disease(props) {

    const config = {
        headers: {
          Accept: 'application/json',
        },
      }
      const response = await fetch(`${baseUrl}countries/usa`, config)
      const responseJson = await response.json()
      return responseJson;
}
export default {
    disease
}