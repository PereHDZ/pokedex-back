import { ValidationError } from 'apollo-server'

// Errors
export const WRONG_PARAMS = new ValidationError('Wrong params sent');
export const NOT_FOUND = new Error('Item not found in database');

// Evolution methods
export const EVOLUTION_METHODS = ['level', 'item', 'trade',];
export const EVOLUTION_METHODS_VALUES = {
  LEVEL: 'level',
  ITEM: 'item',
  TRADE: 'trade',
};

export const EVOLUTION_STONES_VALUES = {
  FIRE_STONE: 'Fire Stone',
  WATER_STONE: 'Water Stone',
  THUNDER_STONE: 'Thunder Stone',
  LEAF_STONE: 'Leaf Stone',
  MOON_STONE: 'Moon Stone',
}