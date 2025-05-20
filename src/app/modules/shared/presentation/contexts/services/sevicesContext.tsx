import { createContext, type ReactNode, useContext, useMemo } from 'react';
import type { ExtendedServices } from '../../../domain/schemas/services.schema';

interface ServicesProviderProps<Services extends ExtendedServices> {
	children: ReactNode;
	services: Services;
}

const ServicesContext = createContext<ExtendedServices | null>(null);

export const useServicesContext = <Services extends ExtendedServices>() =>
	useContext(ServicesContext) as Services;

export const ServicesProvider = <Services extends ExtendedServices>({
	children,
	services,
}: ServicesProviderProps<Services>) => {
	const value = useMemo(() => ({ ...services }), [services]);

	return (
		<ServicesContext.Provider value={value}>
			{children}
		</ServicesContext.Provider>
	);
};
