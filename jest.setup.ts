// jest.setup.ts
import { TextEncoder, TextDecoder as NodeTextDecoder } from "util";

global.TextEncoder = TextEncoder;

if (typeof global.TextDecoder === "undefined") {
  global.TextDecoder = NodeTextDecoder as unknown as typeof TextDecoder;
}
