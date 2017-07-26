import _ from 'lodash';
let idIncrease;
const baseLength = {
  id: '',
  phone: '',
  name: '',
};

const customerList = [];

for (idIncrease = 1; idIncrease < 6; idIncrease++) {
  const customer = Object.assign({}, baseLength, {
    id: idIncrease,
  });
  if (idIncrease % 2) {
    customer.phone = 13800138000 + idIncrease;
  }
  else {
    customer.name = `customer_${idIncrease}`;
  }
  customerList.push(customer);
}

export default {
  'GET /api': { ok: true },

  // 支持值为 Object 和 Array
  'GET /api/customer': {
    data: {
      data: customerList,
      total: customerList.length,
      page: 1,
      pageSize: customerList.length,
    },
  },

  // GET 可省略
  'GET /api/customer/:id': (req, res) => {
    if (req.params && req.params.id && 1 * req.params.id && _.find(customerList, {
      id: 1 * req.params.id,
    })) {
      res.send({
        data: _.find(customerList, {
          id: 1 * req.params.id,
        }),
      });
      res.end("OK");
    }
    else {
      res.status(404).end();
    }
  },

  // 新建
  'POST /api/customer': (req, res) => {
    console.log(req.body);
    const body = req.body || {};
    const name = _.get(body, 'name') || '';
    const phone = _.get(body, 'phone') || '';
    const customer = Object.assign({}, baseLength, {
      id: idIncrease,
      name,
      phone,
    });
    customerList.push(customer);
    idIncrease ++;
    res.send({
      ok: true,
      data: customer,
    });
    res.end('OK');
  },
};
