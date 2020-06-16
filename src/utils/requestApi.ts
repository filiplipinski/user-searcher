import { ajax, AjaxResponse } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

const buildResponse = (res: AjaxResponse) => {
  const { response } = res;

  let responseData;

  try {
    responseData = JSON.parse(response);
  } catch (e) {
    responseData = response;
  }

  return responseData;
};

export const requestApi = (url: string, method = 'GET') => {
  return ajax({
    url,
    method: method.toUpperCase(),
  }).pipe(map((res) => buildResponse(res)));
};

export default requestApi;
