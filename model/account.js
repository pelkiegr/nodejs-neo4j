module.exports = {
  labels: ["Entity", "Account"],
  id: {
    primary: true,
    type: 'uuid',
    required: true,
    unique: true
  },
  name: {
    type: 'string',
    index: true,
    required: true
  },
  type: {
    type: 'string'
  }
};
