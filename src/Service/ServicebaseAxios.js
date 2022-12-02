import axios from "axios";
import { ACCESS_TOKEN } from "../Redux/action/Type/TypeND";
import { URL_API, TOKEN, TOKEN_ND } from "../Util/setting";
import { GPOUP_ID } from "../Util/setting";

export default class ServicebaseAxios {
  GET = (url) => {
    return axios({
      method: "get",
      url: `${URL_API}/${url}`,
      headers: {
        TokenCybersoft: TOKEN,
      },
    });
  };
  POST = (url, thongtinND) => {
    return axios({
      method: "post",
      url: `${URL_API}/${url}`,
      data: thongtinND,
      headers: {
        TokenCybersoft: TOKEN,
        "Authorization": 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
      },
    });
  };

  DELETE = (url, id) => {
    return axios({
      method: "delete",
      url: `${URL_API}/${url}`,
      headers: {
        TokenCybersoft: TOKEN,
        "Authorization": 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
      },
    });
  };


}
