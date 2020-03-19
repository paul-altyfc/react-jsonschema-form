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
      previous_names: 
    	{ type: "array", title: "Previous Names", items: 
    		{ type: "object", properties: 
        	{ company_name: { type: "string", title: "Company Name" }, start_date: { type: "string", title: "Start Date" }, end_date: { type: "string", title: "End Date" } },
        }
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
      {
        company_name: "BP AMOCO P.L.C.",
        start_date: "1998-12-31",
        end_date: "2001-05-01"
      },
      {
        company_name: "THE BRITISH PETROLEUM COMPANY P.L.C.",
        start_date: "1909-04-14",
        end_date: "1998-12-31"
      }
      ],    
  },
};
