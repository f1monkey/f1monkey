import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
class ErrorResponseError {
  @JsonProperty()
  public field = '';

  @JsonProperty()
  public message = '';
}

export default ErrorResponseError;
