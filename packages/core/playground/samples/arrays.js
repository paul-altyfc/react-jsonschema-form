module.exports = {
  schema: {
    type: "object",
    title: "Company Details",
    properties: {
      name: {
        type: "string",
        title: "Name",
        default: "",
      },
      company_number: {
        type: "string",
        title: "Company Number",
        default: "",
      },
      previous_names: {
        type: "array",
        title: "Previous Names",
        items: {
          type: "array",
          title: " ",
          items: [
            {
              title: "Company Name",
              type: "string",
            },
            {
              title: "Start Date",
              type: "string",
            },
            {
              title: "End Date",
              type: "string",
            },
          ],
        },
      },
    },
  },
  uiSchema: {
    previous_names: {
      "ui:options": {
        addable: false,
        orderable: false,
        removable: false,
      },
      items: {
        "ui:options": {
          addable: false,
          orderable: false,
          removable: false,
        },
        "ui:disabled": true,
      },
    },
  },
  formData: {
    name: "BP P.L.C.",
    company_number: "00102498",
    previous_names: [
      ["BP AMOCO P.L.C.", "1998-12-31", "2001-05-01"],
      ["THE BRITISH PETROLEUM COMPANY P.L.C.", "1909-04-14", "1998-12-31"],
    ],
  },
};
