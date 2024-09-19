import { StatusCodes } from "http-status-codes";

export class notFoundError extends Error{
    constructor(message){
        super(message)
        this.name="not found"
        this.statusCode = StatusCodes.NOT_FOUND
    }
}

export class badRequestError extends Error{
    constructor(message){
        super(message)
        this.name="bad request"
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

export class unauthenticatedError extends Error{
    constructor(message){
        super(message)
        this.name="unauthenticatedError"
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

export class unauthorizedError extends Error{
    constructor(message){
        super(message)
        this.name="unauthorizedError"
        this.statusCode = StatusCodes.FORBIDDEN
    }
}