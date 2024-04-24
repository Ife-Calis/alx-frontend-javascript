import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((response) => {
      const [uploadReponse, newUserReponse] = response;
      console.log(
        `${uploadReponse.body} ${newUserReponse.firstName} ${newUserReponse.lastName}`,
      );
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
