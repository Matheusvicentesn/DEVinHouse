import PropTypes from "prop-types";
import { Container } from "./Profile.styles";
import { usePerfil } from "../../contexts";

export const Profile = ({ profile }) => {
  const { profiles, handleFollow } = usePerfil();

  return (
    <Container>
      {profiles.map((p) => (
        <div key={p.id}>
          <p>{p.nome}</p>
          <button onClick={() => handleFollow(p.id)}>
            {p.seguindo ? "Seguindo" : "Seguir"}
          </button>
        </div>
      ))}
    </Container>
  );
};

Profile.propTypes = {
  profile: PropTypes.object,
};
