import { StatusCodes } from "http-status-codes";

export class notFoundError extends Error{
    constructor(message){
        super(message)
        this.name="not found"
        this.statusCode = StatusCodes.NOT_FOUND
    }
}