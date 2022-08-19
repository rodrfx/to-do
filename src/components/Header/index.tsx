import rocketIcon from '../../assets/rocket.svg';
import * as S from './styles';

export const Header = () => {
	return (
		<S.Container>
			<S.Content>
				<div>
					<img src={rocketIcon} alt="ícone de foguete" />
					<h1>
						<span>to</span>
						<span>do</span>
					</h1>
				</div>
			</S.Content>
		</S.Container>
	);
};
