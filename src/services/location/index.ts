const API_KEY = 'AIzaSyDsIoDydpq9on2-pl_w0OBIiZX4ZjixjnA';

type Args = {
  lat: string | number;
  long: string | number;
};

export const getCurrentCityByLocation = async ({ lat, long }: Args) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${API_KEY}`,
  );

  return response.json();
};
