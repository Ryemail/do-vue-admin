import ajax from '@/utils/ajax';

// 获取登录账户信息
export const getAccountInfo = (token) => ajax.get('/api/resource/auth', { params: { token } });
