import trashIcon from '../../assets/trash.svg';
import * as S from './styles';

export const TaskItem = () => {
	return (
		<S.Container>
			<S.TaskContent>
				<input type="checkbox" id="checkbox" />

				<label htmlFor="checkbox">
					Integer urna interdum massa libero auctor neque turpis turpis Integer
				</label>
			</S.TaskContent>
			<button type="button">
				<img src={trashIcon} alt="ícone de lixeira" />
			</button>
		</S.Container>
	);
};
