import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	gap: 0.5rem;
	height: 3.375rem;
	margin-top: -1.6875rem;

	input {
		flex: 1;
		background-color: ${({ theme }) => theme['gray-500']};
		color: ${({ theme }) => theme['gray-100']};
		border: 1px solid ${({ theme }) => theme['gray-700']};
		border-radius: 8px;
		padding: 1rem;
		line-height: 1.4;

		&::placeholder {
			color: ${({ theme }) => theme['gray-300']};
		}
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;

		background-color: ${({ theme }) => theme.blueDark};
		color: ${({ theme }) => theme['gray-100']};
		width: 5.625rem;
		border: 0;
		border-radius: 8px;
		font-size: 0.875rem;
		font-weight: 700;
		transition: background-color 0.2s;

		img {
			width: 1rem;
			height: 1rem;
		}

		&:hover {
			background-color: ${({ theme }) => theme.blue};
		}
	}
`;
