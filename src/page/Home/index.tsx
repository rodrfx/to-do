import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import clipboardImage from '../../assets/Clipboard.png';
import { Header } from '../../components/Header';
import { SearchBar } from '../../components/SearchBar';
import { TaskItem } from '../../components/TaskItem';
import * as S from './styles';
interface Task {
	id: string;
	title: string;
	isCompleted: boolean;
}

export const Home = () => {
	const [tasks, setTasks] = useState<Task[]>([]);

	const handleNewTask = (taskTitle: string) => {
		const newTasks = [
			{ id: uuidv4(), title: taskTitle, isCompleted: false },
			...tasks,
		];
		setTasks(newTasks);
	};

	const handleTaskCLick = (taskId: string) => {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId) {
				return { ...task, isCompleted: !task.isCompleted };
			}
			return task;
		});

		setTasks(newTasks);
	};

	const handleDeleteTaskClick = (taskId: string) => {
		const newTasks = tasks.filter((task) => {
			return task.id !== taskId;
		});
		setTasks(newTasks);
	};

	return (
		<S.Container>
			<Header />
			<S.Content>
				<SearchBar handleNewTask={handleNewTask} />
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
							<ul>
								{tasks.map((task) => (
									<TaskItem
										key={task.id}
										id={task.id}
										title={task.title}
										isCompleted={task.isCompleted}
										onClickChangeIsCompleted={handleTaskCLick}
										onClickDeleteTask={handleDeleteTaskClick}
									/>
								))}
							</ul>
						</S.WithTasks>
					)}
				</S.TasksGrid>
			</S.Content>
		</S.Container>
	);
};
