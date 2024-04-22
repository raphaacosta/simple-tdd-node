class CheckLastEventStatus {
  async perform(groupId: string): Promise<void> {

  }
}

class LoadLastEventRepository {
  groupId?: string
}

describe('CheckLastEventStatus', () => {
  it('should get last event data', async () => {
    const loadLastEventRepository = new LoadLastEventRepository()
    const checkLastEventStatus = new CheckLastEventStatus();

    await checkLastEventStatus.perform('any_group_id')

    expect(loadLastEventRepository.groupId).toBe('any_group_id')
  });
});