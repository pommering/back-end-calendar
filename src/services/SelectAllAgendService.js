import { QueryExecute } from '../config/connection.js';

class SelectAllAgendService {
  async execute() {
    let agends;

    const queryGetAgends = 'SELECT * FROM agends';

    agends = await QueryExecute(queryGetAgends);
    
    return agends;
  }
}

export { SelectAllAgendService };