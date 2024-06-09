import { OfModel } from "@/types/OfModel";
import axios from "axios";

const BASE_URL
  = 'https://onlyreels-be-2ad7ba6db5a8.herokuapp.com/admin/ofmodels';

// export const getModels = () => {
//   return axios({
//     method: 'get',
//     url: BASE_URL + '/models',
//     responseType: 'json'
//   }).then((response: ) => {
//     if (!response.ok) {
//       throw new Error();
//     }

//     return response.json();
//   })
// }

// type GetModelsResponse = {
//   data: OtModel[];
// };

export const getAllModels = async () => {
  const headers = {
    // Define your headers here
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1M2IzODZiNC00MmI1LTRkN2QtYmQ4OS1mYzJjN2Y1ZmJkNGUiLCJzdWIiOiIxIiwic2NwIjoiYWRtaW4iLCJhdWQiOm51bGwsImlhdCI6MTcwNzI2Mjg0NiwiZXhwIjoxNzA3NTIyMDQ2fQ.uEAb5qJ9tuuTuTeOMlNDZX0WiN31kza4np2W7bteesg',
    // Other headers as needed
  };

  try {
    const { data, status } = await axios.get(
      BASE_URL,
      {headers}
    )
    return data;
  } catch (error) {
    throw new Error()
  }
}

export const deleteOneModel = async (id: number) => {
  try {
    // 👇️ const data: UpdateUserResponse
    const { data, status } = await axios.delete<OfModel>(
      BASE_URL + id,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    return data;
  } catch (error) {
    throw new Error()
  }
}

export const createModel = async (newModel: Omit<OfModel, 'id'>) => {
  try {
    // 👇️ const data: CreateUserResponse
    const { data, status } = await axios.post<OfModel>(
      BASE_URL,
      newModel,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );

    return data;
  } catch (error) {
    throw new Error()
  }
}

