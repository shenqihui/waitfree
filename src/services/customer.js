import request from '../utils/request';

export function list() {
  return request('/api/customer');
}

// 详情
export function detail({ id }) {
  return request(`/api/customer/${id}`, {
    method: 'GET',
  });
}

// 删除
export function remove(id) {
  return request(`/api/customer/${id}`, {
    method: 'DELETE',
  });
}

// 编辑
export function update(id, values) {
  return request(`/api/customer/${id}`, {
    method: 'PUT',
    body: values,
  });
}

// 新增
export function create(values) {
  return request('/api/customer/', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}
