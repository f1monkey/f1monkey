import { Container } from 'inversify';

import registerAuth from '@/lib/User/container';
import registerCommon from '@/lib/Common/container';

const container = new Container();
registerAuth(container);
registerCommon(container);

export default container;
