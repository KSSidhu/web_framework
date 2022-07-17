import axios, { AxiosPromise } from "axios";

interface HasId {
	id?: number;
}

export class Sync<T extends HasId> {
	constructor(public rootUrl: string) {}

	fetch(id: number): AxiosPromise {
		return axios.get(`${this.rootUrl}/${id}`);
	}

	save(data: T): AxiosPromise {
		const { id } = data;

		// Enabling strict mode in tsconfig can help enforce this
		// id as a better type guard using 'number | undefined'
		if (id) {
			//put request
			return axios.put(`${this.rootUrl}/${id}`, data);
		} else {
			// post request
			return axios.post(this.rootUrl, data);
		}
	}
}
