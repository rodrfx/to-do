import plusIcon from '../../assets/plus.svg';
import * as S from './styles';

export const SearchBar = () => {
	return (
		<>
			<S.Container>
				<input type="text" placeholder="Adicione uma nova tarefa" />
				<button type="button">
					Criar
					<img src={plusIcon} alt="ícone adicionar" />
				</button>
			</S.Container>
		</>
	);
};
