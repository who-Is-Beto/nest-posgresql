import { Controller, Get, Param } from '@nestjs/common';

@Controller('api/tasks')
export class TasksController {
  constructor() {}

  @Get()
  public getTasks() {
    return [{ id: 1, title: 'Task 1' }];
  }

  @Get(':id')
  public getIndividualTask(@Param('id') id: string) {
    return { id: id, title: 'Task ' + id };
  }
}
