import { useParams } from "react-router-dom";
import {
  UserInfoResponse,
  useFetchUserQuery,
} from "../features/users/user_api_slice";

export default function Profile() {
  const params = useParams<{ profileId: string }>();
  if (params.profileId === undefined)
    throw new Error("Profile ID is not defined");
  let numberId = +params.profileId;
  const { data, isLoading, isError } = useFetchUserQuery(20);
  let userDetails = data?.users.find((user) => user.id === numberId);
  return (
    <div>
      {isLoading ? (
        <div>
          <h3>Loading...</h3>
        </div>
      ) : isError ? (
        <div>
          <h3>Somthing went wrong</h3>
        </div>
      ) : (
        <div className="pannel profile-form">
          <img className="profile-photo" src={userDetails?.image} />
          <div className="profile-data">
            <p>Name</p>
            <input value={userDetails?.username || ""} readOnly />
          </div>
          <div className="profile-data">
            <p>Phone</p>
            <input value={userDetails?.phone || ""} readOnly />
          </div>
          <div className="profile-data">
            <p>Email</p>
            <input value={userDetails?.email || ""} readOnly />
          </div>
          <div className="profile-data">
            <p>Password</p>
            <input value={userDetails?.password || ""} readOnly />
          </div>
        </div>
      )}
    </div>
  );
}
