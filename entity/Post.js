const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Post",
  tableName: "posts",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    title: {
      type: "varchar",
      length: 100,
    },
    content: {
      type: "text",
    },
    createdAt: {
      type: "timestamp",
      createDate: true,
    },
  }
});