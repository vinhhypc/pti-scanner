import useSWR from "swr";
import axiosClient from "./axiosClient";

const uploadApi = {
  getListUpload: (id, token) =>
    useSWR(`/ppr-assurance-api/public/insurance/${id}/images?token=${token}`),

  uploadImg: (id, token, slot, type, data) =>
    axiosClient.post(
      `/ppr-assurance-api/public/insurance/${id}/image:upload?slot=${slot}&imageType=${type}&token=${token}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    ),
  confirmPass: (id, slot) =>
    axiosClient.patch(
      `/ppr-assurance-api/public/insurance/${id}/image:confirm?slotType=${slot}`
    ),
  submitInsurance: (id, token) =>
    axiosClient.patch(
      `/ppr-assurance-api/v2/customer/insurance/${id}:submit?token=${token}`
    ),
};
export default uploadApi;
