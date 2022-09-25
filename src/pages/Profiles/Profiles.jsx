import { Profile } from "../../components";
import { usePerfil } from "../../contexts";
import { Container } from "./Profiles.styles";

export const Profiles = () => {
  const { profiles } = usePerfil();
  return (
    <Container>
      {profiles.map((p) => (
        <Profile key={p.id} profile={p} />
      ))}
    </Container>
  );
};
