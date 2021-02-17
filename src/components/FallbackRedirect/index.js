import { Redirect } from 'react-router-dom';
import { characterPath } from 'store/paths';

export const FallbackRedirect = () => <Redirect to={characterPath} />;
