import { Container } from 'inversify';

import registerAuth from '@/lib/InternalApi/container';
import registerCommon from '@/lib/Common/container';
import registerEveApi from '@/lib/EveApi/container';

const container = new Container();
registerAuth(container);
registerCommon(container);
registerEveApi(container);

export default container;
