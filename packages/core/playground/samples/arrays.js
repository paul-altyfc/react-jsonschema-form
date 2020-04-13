module.exports = {
  schema: {
    type: "object",
    properties: {
      dairy: {
        type: "array",
        title: "Dairy",
        items: {
          type: "string",
          default: "",
        },
      },
      grocery: {
        type: "array",
        title: "Grocery",
        items: {
          type: "string",
          default: "",
        },
      },
      butcher: {
        type: "array",
        title: "Butcher",
        items: {
          type: "string",
          default: "",
        },
      },
    },
  },
  uiSchema: {
    dairy: {
      items: { "ui:emptyValue": "" },
      "ui:options": {
        addable: false,
        orderable: false,
        removable: false,
      },
    },
    grocery: {
      items: { "ui:emptyValue": "" },
    },
    butcher: {
      items: { "ui:emptyValue": "" },
    },
  },
  formData: {
    dairy: ["Milk", "Cheese"],
  },
};
