import { apiStubs } from "../constants/urlConstants";
import {cloneDeep} from "lodash";

class apiServiceUsingStub {
    stubStore;
    constructor() {
        this.stubStore = cloneDeep(apiStubs);
    }
    httpGet(url, params) {
        return this.getStubForApi(url);
    }

    getStubForApi(url) {
        const apiName = url.split('\\')[1];
        return this.stubStore[apiName];
    }
}

class apiServiceUsingHttp {

}

export class ApiSerivice {
    useStub = true;
    apiServiceBase;
    constructor() {
        if(this.useStub) {
            this.apiServiceBase = new apiServiceUsingStub();
        } else {
            this.apiServiceBase = new apiServiceUsingHttp();
        }
    }

    async httpGet(url,params) {
        return this.apiServiceBase.httpGet(url,params);
    }
}