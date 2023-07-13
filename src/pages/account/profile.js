import React, { useEffect, useState } from "react";
import { supabaseClient } from "../../utility/supabaseClient";

const UserProfile= () => {
  const [user, setUser] = (useState < IUser) | (null > null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const user = supabaseClient.auth.user();

    if (user) {
      setIsLoading(false);
      setUser({
        id: user.id,
        name: user.user_metadata.full_name || "",
        email: user.email || "",
        bio: user.user_metadata.bio || "",
      });
    } else {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <p>{user.bio}</p>
      <button onClick={() => console.log("Redirect to Edit Page")}>
        Edit Profile
      </button>
    </div>
  );
};

export default UserProfile;
