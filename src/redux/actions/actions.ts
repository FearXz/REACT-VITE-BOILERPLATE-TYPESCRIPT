import { setLoggedProfile } from "../reducers/profileReducer";
import { url } from "../../functions/config";
import { LoginObj } from "../../interfaces/interfaces";

export const fetchLogin = (path: string, loginObj: LoginObj) => async (dispatch: any) => {
  try {
    const response = await fetch(url + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginObj),
    });

    if (response.ok) {
      const dataProfile = await response.json();
      console.log(dataProfile);

      dispatch(setLoggedProfile(dataProfile));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    // Puoi gestire gli errori qui, se necessario
    if (error instanceof Error) {
      console.error("Errore nel fetch:", error.message);
    }
  }
};
