import axios from "axios";

export const getAllClaims = () => {
    return [
        { id: 1, First_name: "Gwendolin", surname: "Griss", emailAddress: "ggriss0@redcross.org",insuranceType:"fully covered", coverType: "boat", amount: "£4276.40", claimInfo: "colision event", claimStatus: "Open" },
        { id: 2, First_name: "Gerry", surname: "Griss", emailAddress: "ggriss0@redcross.org",insuranceType:"fully covered", coverType: "boat", amount: "£4276.40", claimInfo: "colision event",  claimStatus: "Open" },
        { id: 3, First_name: "tom", surname: "Griss", emailAddress: "ggriss0@redcross.org",insuranceType:"fully covered", coverType: "boat", amount: "£4276.40", claimInfo: "colision event",  claimStatus: "Open" },
        { id: 4, First_name: "tom", surname: "Griss", emailAddress: "ggriss0@redcross.org",insuranceType:"fully covered", coverType: "boat", amount: "£4276.40", claimInfo: "colision event",  claimStatus: "Pending" },
        { id: 3, First_name: "tony", surname: "Griss", emailAddress: "ggriss0@redcross.org",insuranceType:"fully covered", coverType: "boat", amount: "£4276.40", claimInfo: "colision event",  claimStatus: "Closed" }

    ]
}


const headers = new Headers({"Accept" : "application/json"})
const getAuthHeader = (username, password) => {
    return {"Authorization" : "Basic " + btoa(`${username}:${password}`)}
}

export const getAllClaimsAxiosVersion  = (username,password) => {
    return axios({url : "http://localhost:8080/api/claim",
            method: "GET", 
            headers: {...getAuthHeader(username,password),"Accept" : "application/json"}
            })
}

 export const getClaimById  = (username,password,id) => {
     return axios({url : "http://localhost:8080/api/claim/" + id ,
             method: "GET", 
             headers: {...getAuthHeader(username,password),"Accept" : "application/json"}
             })
 }


 export const searchClaimsAxiosVesrion  = (username,password,searchTerm) => {
    return axios({url : "http://localhost:8080/api/claim/search?searchTerm=" + searchTerm,
            method: "GET", 
            headers: {...getAuthHeader(username,password),"Accept" : "application/json"}
            })
}

export const updateClaim = (username,password,claim) => {
    return axios({
        url: "http://localhost:8080/api/claim/" + claim.id,
        method: "PUT",
        headers: {...getAuthHeader(username,password), "Accept": "application/json", "Content-type": "application/json" },
        data: claim
    })
}





export const addNewClaim = (username,password,claim) => {
    return axios({url : "http://localhost:8080/api/claim",
method: "POST",
headers: {...getAuthHeader(username,password),"Accept" : "application/json", "Content-Type": "application/json"},
data: claim})
}


export const login = (username, password) => {
    return axios({url : "http://localhost:8080/api/login",
                    method: "POST",
                    headers: {...getAuthHeader(username,password),
                         "Accept" : "application/json", "Content-Type": "application/json"},
                         data: {username: username}
                    });
                }
