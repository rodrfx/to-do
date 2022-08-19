import { useState } from 'react';
import clipboardImage from '../../assets/Clipboard.png';
import { Header } from '../../components/Header';
import { SearchBar } from '../../components/SearchBar';
import { TaskItem } from '../../components/TaskItem';
import * as S from './styles';

export const Home = () => {
	const [tasks, setTasks] = useState([]);

	return (
		<S.Container>
			<Header />

			<S.Content>
				<SearchBar />
				<S.TasksGrid>
					<S.TasksBarInfo>
						<div>
							<span>Tarefas criadas</span>
							<span>{tasks.length}</span>
						</div>
						<div>
							<span className="colorPurple">Concluídas</span>
							<span>0</span>
						</div>
					</S.TasksBarInfo>
					{tasks.length === 0 ? (
						<S.NoTasks>
							<img src={clipboardImage} alt="imagem de uma prancheta" />
							<p>Você ainda não tem tarefas cadastradas</p>
							<p>Crie tarefas e organize seus itens a fazer</p>
						</S.NoTasks>
					) : (
						<S.WithTasks>
							<TaskItem />
						</S.WithTasks>
					)}
				</S.TasksGrid>
			</S.Content>
		</S.Container>
	);
};
