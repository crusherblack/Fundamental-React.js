import React from "react";
import List from "./List";

const Title = ({ title, alertTitle, profile, profiles }) => {
  alertTitle();
  console.log(profiles);
  return (
    <div>
      <h1>
        {JSON.stringify(profile)}
        title: {title} || {profile.name} || {profile.location}
      </h1>
      <h1>List nama orang:</h1>
      <ul>
        {profiles.map((profile) => (
          <List name={profile.name} />
        ))}
      </ul>
    </div>
  );
};

export default Title;
