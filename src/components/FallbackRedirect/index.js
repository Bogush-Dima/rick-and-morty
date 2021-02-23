import { Redirect } from "react-router-dom";
import { CharacterPath } from "store/paths";

export const FallbackRedirect = () => <Redirect to={CharacterPath} />;
