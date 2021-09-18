import { mock } from 'mockjs';
import { createAccountInfo } from './auth';
import { createTable } from './table';

mock(/api\/tablelist/, 'get', createTable);
mock(/api\/resource\/auth/, 'get', createAccountInfo);
