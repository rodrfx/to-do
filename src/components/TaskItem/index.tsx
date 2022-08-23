import trashIcon from '../../assets/trash.svg';
import * as S from './styles';
interface TaskItemProps {
	id: string;
	title: string;
	isCompleted: boolean;
	onClickChangeIsCompleted: (taskId: string) => void;
	onClickDeleteTask: (taskId: string) => void;
}

export const TaskItem = ({
	id,
	title,
	isCompleted,
	onClickChangeIsCompleted,
	onClickDeleteTask,
}: TaskItemProps) => {
	return (
		<S.Container>
			<S.TaskContent>
				<input
					type="checkbox"
					id="checkbox"
					checked={isCompleted ? true : false}
					readOnly
				/>
				<label
					htmlFor="checkbox"
					onClick={() => {
						onClickChangeIsCompleted(id);
					}}
				>
					{title}
				</label>
			</S.TaskContent>
			<button type="button" onClick={() => onClickDeleteTask(id)}>
				<img src={trashIcon} alt="ícone de lixeira" />
			</button>
		</S.Container>
	);
};
