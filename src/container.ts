import { Container } from 'inversify';

import registerApi from '@/lib/Api/container';
import registerAuth from '@/lib/User/container';
import registerEvent from '@/lib/Event/container';

const container = new Container();
registerApi(container);
registerAuth(container);
registerEvent(container);

export default container;
