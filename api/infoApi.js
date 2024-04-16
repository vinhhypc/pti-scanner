import useSWR from "swr";

const infoApi = {
  getInfoOrder: (id, token) =>
    useSWR(
      id
        ? `/ppr-assurance-api/v2/customer/insurance/${id}:previewUpload?token=${token}`
        : null
    ),
};

export default infoApi;
