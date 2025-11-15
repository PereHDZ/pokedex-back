import { ValidationError } from 'apollo-server'

// Errors
export const WRONG_PARAMS = new ValidationError('Wrong params sent');
export const NOT_FOUND = new Error('Item not found in database');

// Evolution methods
export const EVOLUTION_METHODS = ['level', 'item']