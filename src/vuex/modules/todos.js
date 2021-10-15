// import axios from 'axios';
const state = {
  solutionHeader: [
    {
      id: 1,
      title: "Our Products",
      name: "Products",
      description: "This is the description of our products",
    },
    {
      id: 2,
      title: "Our Service",
      name: "Service",
      description: "This is the description of our service",
    },
  ],
  dataDetails: [
    {
      id: 1,
      class: "sub-card-left",
      displyBox: [
        {
          id: 1,
          class: "background-gray",
          title: "",
          show: "",
        },
        {
          id: 2,
          class: "background-white",
          title: "Set Title Product One",
          show:
            "Description an article or substance that is manufactured or refined for sale. commercially manufactured articles, especially recordings, viewed collectively.",
        },
        {
          id: 3,
          class: "background-gray",
          title: "",
          show: "",
        },
      ],
    },
    {
      id: 2,
      class: "sub-card-right",
      displyBox: [
        {
          id: 1,
          class: "background-white",
          title: "Set Title For Service One",
          show: "Description the action of helping or doing work for someone.",
        },
        {
          id: 2,
          class: "background-gray",
          title: "",
          show: "",
        },
        {
          id: 3,
          class: "background-white",
          title: "Set Title For Service Two",
          show:
            "Description a system supplying a public need such as transport, communications, or utilities such as electricity and water.",
        },
      ],
    },
  ],
  ourCustomer: [
    {
      id: 1,
      title: "Customer one",
    },
    {
      id: 2,
      title: "Customer two",
    },
    {
      id: 3,
      title: "Customer three",
    },
    {
      id: 4,
      title: "Customer four",
    },
    {
      id: 5,
      title: "Customer five",
    },
    {
      id: 6,
      title: "Customer six",
    },
  ],
  ourPartner: [
    {
      id: 1,
      title: "Partner One",
    },
    {
      id: 2,
      title: "Partner two",
    },
    {
      id: 3,
      title: "Partner three",
    },
    {
      id: 4,
      title: "Partner four",
    },
    {
      id: 5,
      title: "Partner five",
    },
    {
      id: 6,
      title: "Partner six",
    },
  ],
};

const getters = {
  getHeaderAndDetail: (state) => state.solutionHeader,
  getDetail: (state) => state.dataDetails,
  allMockCustomer: (state) => state.ourCustomer,
  allMockPartner: (state) => state.ourPartner,
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
