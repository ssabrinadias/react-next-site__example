import axios from "axios";
import serverGeneral from "./action";

export default async ({ store }) => {
	let teste = await axios
		.get("https://next.json-generator.com/api/json/get/E1EZuWdLr")
		.then(function(response) {
			store.dispatch(serverGeneral(response.data));
			return response.data;
		})
		.catch(function(error) {
			return false;
		});
	return teste;
};
