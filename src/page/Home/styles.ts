import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;
`;

export const Content = styled.div`
	max-width: 46rem;
	margin: 0 auto;
	width: 90%;
`;

export const TasksGrid = styled.main`
	margin-top: 4rem;
`;

export const TasksBarInfo = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1.5rem;

	span {
		font-size: 0.875rem;
		font-weight: 700;
		line-height: 1.21;
	}

	span:first-child {
		margin-right: 0.5rem;
		color: ${({ theme }) => theme.blue};

		&.colorPurple {
			color: ${({ theme }) => theme.purple};
		}
	}

	span:last-child {
		height: 1.1875rem;
		min-width: 1.5rem;
		background-color: ${({ theme }) => theme['gray-400']};
		border-radius: 999px;
		padding: 2px 8px;
		font-size: 0.75rem;
		line-height: 1.21;
	}
`;

export const NoTasks = styled.main`
	border-top: 1px solid ${({ theme }) => theme['gray-400']};
	text-align: center;

	img {
		margin: 4rem 0 1rem;
	}

	p {
		line-height: 1.4;
		color: ${({ theme }) => theme['gray-300']};
	}

	p:nth-of-type(1) {
		font-weight: 700;
	}
`;

export const WithTasks = styled.main`
	ul {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
`;
