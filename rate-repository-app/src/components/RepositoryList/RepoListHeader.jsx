import { View } from 'react-native';

import OrderPicker from './OrderPicker';
import RepoItemSearchBox from './RepoItemSearchBox';

const RepoListHeader = ({ updateVariables, updateFilter }) => {
	return (
		<View>
			<RepoItemSearchBox updateFilter={updateFilter} />
			<OrderPicker updateVariables={updateVariables} />
		</View>
	);
};

export default RepoListHeader;
