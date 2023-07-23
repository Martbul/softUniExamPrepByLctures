import { BaseApiService } from "./BaseApiSerice.js";

export class AuthService extends BaseApiService{
    constructor(baseUrl, sessionService){
        super(baseUrl)
        this.sessionService = sessionService
    }

    async login(user){
        let url =`${this.baseUrl}/users/login`
        let options={
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }

        let result = await this._internalFetchJson(url, options)
        this.sessionService.setAccessToken(result.accessToken)
        this.sessionService.setCurrentUserId(result._id)

        return result
    }




    async register(user){
        let url =`${this.baseUrl}/users/register`
        let options={
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }

        let result = await this._internalFetchJson(url, options)
        this.sessionService.setAccessToken(result.accessToken)
        this.sessionService.setCurrentUserId(result._id)
        return result
    }

    async logout(){
        let url =`${this.baseUrl}/users/logout`
        let options={
            method: 'Post',
            headers: {
                'X-Authorization': this.sessionService.getAccessToken()
            },
        
        }

        let result = await this._internalFetchJson(url, options)
        this.sessionService.removeAccessToken(result.accessToken)
        this.sessionService.removeCurrentUserId()

        return result
    }

  isUserLoggedIn(){
       return this.sessionService.getAccessToken() != undefined
  }

  getUserId(){
    return this.sessionService.getCurrentUserId()
  }
}