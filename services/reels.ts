import { Reel } from "@/types/Reel";
import axios from "axios";

const BASE_URL
  = 'https://api.onlyreels.com/reels';

  // 34?direction=previous

export type Direction = 'next' | 'previous'

// export const getReels = async (nextId?: string, direction: Direction = 'next') => {
//   try {
//     const { data, status } = await axios.get(BASE_URL + (nextId ? `/${nextId}?direction=${direction}` : ''))
    
//     return data;
//   } catch (error) {
//     throw new Error()
//   }
// }

// export const deleteOneModel = async (id: number) => {
//   try {
//     // 👇️ const data: UpdateUserResponse
//     const { data, status } = await axios.delete<OfModel>(
//       BASE_URL + id,
//       {
//         headers: {
//           Accept: 'application/json',
//         },
//       },
//     );

//     return data;
//   } catch (error) {
//     throw new Error()
//   }
// }

// export const createModel = async (newModel: Omit<OfModel, 'id'>) => {
//   try {
//     // 👇️ const data: CreateUserResponse
//     const { data, status } = await axios.post<OfModel>(
//       BASE_URL,
//       newModel,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//       },
//     );

//     return data;
//   } catch (error) {
//     throw new Error()
//   }
// }

