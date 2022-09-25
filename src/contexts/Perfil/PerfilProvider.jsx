import PropTypes from "prop-types";
import { useState } from "react";
import { PerfilContext } from "./PerfilContext";

import { perfils } from "../../services";

export const PerfilProvider = ({ children }) => {
  const [profiles, setProfiles] = useState(perfils);

  const handleFollow = (id) => {
    const profilesUpdated = profiles.map((p) =>
      p.id === id ? { ...p, seguindo: !p.seguindo } : p,
    );
    setProfiles(profilesUpdated);
  };

  return (
    <PerfilContext.Provider value={{ profiles, handleFollow }}>
      {children}
    </PerfilContext.Provider>
  );
};

PerfilProvider.propTypes = {
  children: PropTypes.node,
};
