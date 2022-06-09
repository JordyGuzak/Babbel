export default async function fetchJson(input: RequestInfo, init: RequestInit) {
    const response = await fetch(input, init);
    const data = await response.json();
  
    if (response.ok) {
      return data;
    }
  
    throw new FetchError({
      message: response.statusText,
      response,
      data,
    });
  }

  type FetchErrorConstructor = {
      message: string,
      response: Response,
      data: any
  }
  
  export class FetchError extends Error {
    response: Response;
    data: any;

    constructor({ message, response, data }: FetchErrorConstructor) {
      super(message);
  
      // Maintains proper stack trace for where our error was thrown (only available on V8)
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, FetchError);
      }
  
      this.name = "FetchError";
      this.response = response;
      this.data = data ?? { message: message };
    }
  }