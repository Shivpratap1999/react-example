import { GetProfileInfo } from "../apis/profileDetails";
import { GetProfileIds } from "../apis/profiles";


export async function IdLoader() {
  const ids = await GetProfileIds();
  return { ids };
}

export async function ProfileInfoLoader() {
    const user = await GetProfileInfo(2);
    return { user };
  }