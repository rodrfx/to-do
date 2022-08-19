import styled from 'styled-components';

export const Container = styled.header`
	background-color: ${({ theme }) => theme['gray-700']};
	height: 12.5rem;
`;

export const Content = styled.div`
	height: 100%;

	div {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.75rem;

		span {
			font-weight: 900;
			font-size: 2.5rem;
			line-height: 1.21;
		}

		span:first-child {
			color: ${({ theme }) => theme.blue};
		}

		span {
			color: ${({ theme }) => theme.purpleDark};
		}
	}
`;
