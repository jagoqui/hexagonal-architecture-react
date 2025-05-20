import 'react-router';
import type { Pathnames } from '../../domain/schemas/pathnames.schema';

declare module 'react-router' {
	export interface Location {
		pathname: Pathnames;
	}
}
