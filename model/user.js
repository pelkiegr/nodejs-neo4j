module.exports = {
  labels: ["Entity", "User"],
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
  age: {
    type: 'int'
  },
  creationDate: {
    type: 'string'
  },

  has_access: {
    type: 'relationship',
    target: 'Account',
    relationship: 'HAS_ACCESS',
    direction: 'out',
    eager: true,
    cascade: 'detach'
  }
};
