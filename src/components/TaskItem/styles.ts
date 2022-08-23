import styled from 'styled-components';

export const Container = styled.li`
	background-color: ${({ theme }) => theme['gray-500']};
	border: 1px solid ${({ theme }) => theme['gray-400']};
	border-radius: 8px;
	min-height: 4.5rem;
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;

	button {
		font-size: 0;
		border: 0;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 4px;
		background-color: transparent;
		transition: background-color 0.2s;

		&:hover {
			background-color: ${({ theme }) => theme['gray-400']};
		}
	}
`;

export const TaskContent = styled.div`
	width: 90%;
	margin-left: 25px;

	input {
		display: none;

		& + label:before {
			content: '';
			position: absolute;
			top: 50%;
			left: 1rem;
			transform: translate(0, -50%);
			display: inline-block;
			box-sizing: border-box;
			width: 1.090625rem;
			height: 1.090625rem;
			background-color: transparent;
			border: 2px solid ${({ theme }) => theme.blue};
			border-radius: 50%;
			transition: border-color 0.2s, background-color 0.2s;
		}

		&:hover + label:before {
			border-color: ${({ theme }) => theme.blueDark};
			background-color: ${({ theme }) => theme['gray-400']};
		}

		&:checked + label::before {
			content: '';
			box-sizing: border-box;
			background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.43059 0.342123L4.09865 4.67406L1.61618 2.19159L0.780273 3.0275L4.09865 6.34587L9.26649 1.17803L8.43059 0.342123Z' fill='%23F2F2F2'/%3E%3C/svg%3E%0A");
			background-position: center;
			background-repeat: no-repeat;
			background-color: ${({ theme }) => theme.purpleDark};
			border: 0;
			width: 1.090625rem;
			height: 1.090625rem;
			transition: background-color 0.2s;
		}

		&:checked:hover + label::before {
			background-color: ${({ theme }) => theme.purple};
		}

		&:checked + label {
			text-decoration: line-through;
			color: ${({ theme }) => theme['gray-300']};
		}
	}

	label {
		display: block;
		font-size: 0.875rem;
		line-height: 1.4;
		cursor: pointer;
	}
`;
