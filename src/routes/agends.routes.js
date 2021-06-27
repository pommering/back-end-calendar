import { Router } from 'express';

import { CreateAgendService } from '../services/CreateAgendService.js';
import { SelectAllAgendService } from '../services/SelectAllAgendService.js';
import { DeleteAgendService } from '../services/DeleteAgendService.js';
import { SelectBetweenAgendsService } from '../services/SelectBetweenAgendsService.js';

const agendsRouter = Router();

agendsRouter.post('/', async(request, response) => {
  const { initial_time, final_time, description } = request.body;

  const createAgend = new CreateAgendService();

  const agend = await createAgend.execute(
    initial_time,
    final_time,
    description,
  );

  return response.json(agend);
});

agendsRouter.get('/', async(request, response) => {
  const selectAgends = new SelectAllAgendService();

  const agends = await selectAgends.execute();

  return response.json(agends)
});

agendsRouter.get('/:date', async(request, response) => {
  const { date } = request.params;
  const selectBetweenAgends = new SelectBetweenAgendsService();

  const agends = await selectBetweenAgends.execute(date, date);

  return response.json(agends)
});

agendsRouter.get('/:date_initial/to/:date_final', async(request, response) => {
  const { date_initial, date_final } = request.params;
  const selectBetweenAgends = new SelectBetweenAgendsService();

  const agends = await selectBetweenAgends.execute(date_initial, date_final);

  return response.json(agends)
});

agendsRouter.delete('/:id_agend', async(request, response) => {
  const { id_agend } = request.params;
  
  const deleteAgends = new DeleteAgendService();

  const agendDeleted = await deleteAgends.execute(id_agend);

  return response.json(agendDeleted)
});

export { agendsRouter };