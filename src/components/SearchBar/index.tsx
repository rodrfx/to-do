import { ChangeEvent, FormEvent, useState } from 'react';
import plusIcon from '../../assets/plus.svg';
import * as S from './styles';

interface SearchBarProps {
	handleNewTask: (taskMessage: string) => void;
}

export const SearchBar = ({ handleNewTask }: SearchBarProps) => {
	const [taskMessage, setTaskMessage] = useState('');

	const handleAddTask = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		handleNewTask(taskMessage);
		setTaskMessage('');
	};

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setTaskMessage(event.target.value);
	};

	return (
		<S.Container onSubmit={handleAddTask}>
			<input
				type="text"
				placeholder="Adicione uma nova tarefa"
				name="taskMessage"
				value={taskMessage}
				onChange={handleInputChange}
				required
			/>
			<button type="submit">
				Criar
				<img src={plusIcon} alt="ícone adicionar" />
			</button>
		</S.Container>
	);
};
