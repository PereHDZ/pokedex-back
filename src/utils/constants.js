import { ValidationError } from 'apollo-server'

//Errors
export const WRONG_PARAMS = new ValidationError('Wrong params sent');