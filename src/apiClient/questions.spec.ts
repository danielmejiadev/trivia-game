import { getQuestions, BASE_URL } from './questions';

describe('questions apiClient', () => {
  it('should get questions', async () => {
    const question = { question: 'question' };
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: () => Promise.resolve({ results: [question] })
    } as any);
    const response = await getQuestions();

    expect(global.fetch).toHaveBeenCalledWith(BASE_URL);
    expect(response).toEqual([question]);
  });
});
