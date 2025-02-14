import type { ReactNode } from 'react';
import React from 'react';
import { ModalContext } from '@rocket.chat/ui-contexts';

export const MockedModalContext = ({ children }: { children: React.ReactNode }) => {
	const [currentModal, setCurrentModal] = React.useState<ReactNode>(null);

	return (
		<ModalContext.Provider
			value={{
				modal: {
					setModal: setCurrentModal,
				},
				currentModal,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};
