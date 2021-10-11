import { mock } from 'mockjs';
import { createAccountInfo } from './auth';
import { createTable } from './table';

mock(/api\/tableList/, 'get', createTable);
mock(/api\/resource\/auth/, 'get', createAccountInfo);
