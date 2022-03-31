export class InvalidInputError extends Error {
  constructor(message: string) {
    super()
    this.message = message || 'Invalid Input'
  }
}

type Direction = 'north' | 'east' | 'south' | 'west';
type Coordinates = [number, number];
export class Robot {
  direction: Direction;
  coordenates: Coordinates;

  constructor() {
    this.direction = 'north';
    this.coordenates = [0,0];
  }

  get bearing(): Direction {
    return this.direction;
  }

  get coordinates(): Coordinates {
    return this.coordinates;
  }

  place(location: { x: number; y: number; direction: string }) {
    this.coordenates = [location.x, location.y];
    switch(location.direction) {
      case 'north':
      case 'east':
      case 'south':
      case 'west':
        this.direction = <Direction>location.direction;
        break;
      default:
        throw new InvalidInputError('Direction error');
    };
  }

  evaluate(instructions: string) {
    [...instructions].forEach(
      l =>
      {
        switch(l) {
          case 'A':
            this.advance();
            break;
          case 'R':
            this.turnRight()
            break;
          case 'L':
            this.turnLeft();
            break;
        }
      });
  }

  turnLeft() {
    if (this.direction === 'north') this.direction = <Direction>'west';
    if (this.direction === 'south') this.direction = <Direction>'east';
    if (this.direction === 'east') this.direction = <Direction>'north';
    if (this.direction === 'west') this.direction = <Direction>'south';
  }
  turnRight() {
    if (this.direction === 'north') this.direction = <Direction>'west';
    if (this.direction === 'south') this.direction = <Direction>'east';
    if (this.direction === 'east') this.direction = <Direction>'north';
    if (this.direction === 'west') this.direction = <Direction>'south';
  }
  advance() {
    if (this.direction === 'north') this.coordinates[1]++;
    if (this.direction === 'south') this.coordinates[1]--;
    if (this.direction === 'east') this.coordinates[0]++;
    if (this.direction === 'west') this.coordinates[0]--;
  }
}
