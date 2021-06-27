import { QueryExecute } from '../config/connection.js';

class DeleteAgendService {
  async execute(idAgend) {
    let agend;

    const queryCheckAgendExists = 'SELECT * FROM agends WHERE id = ? LIMIT 1';
    const valueCheckAgendExists = [idAgend];

    agend = await QueryExecute(queryCheckAgendExists,valueCheckAgendExists);

    if (!agend) {
      return 'agends not exists'
    }

    const queryDeleteAgend = 'DELETE FROM agends WHERE id = ?;';
    const valueDeleteAgend = [idAgend];

    await QueryExecute(queryDeleteAgend,valueDeleteAgend);
    
    return 'successfully deleted';
  }
}

export { DeleteAgendService };