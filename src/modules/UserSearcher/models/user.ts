import { delay, map } from 'rxjs/operators';
import requestApi from 'utils/requestApi';
import createHook from 'utils/createHook';

export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  addres: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo?: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: { s; name: string; catchPhrase: string; bs: string };
};

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const useFetchUsers = createHook<User[]>(() => {
  return requestApi(API_URL).pipe(
    delay(500), // fake delay, only for the purpose of the task
    map((data: User[]) => data),
  );
});
